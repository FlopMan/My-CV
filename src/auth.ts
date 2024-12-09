import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";
import postFormData from "./fetch/postFormData";

declare module "next-auth" {
  interface User {
    accessToken?: string;
    refreshToken?: string;
    refreshPayload?: any;
    bearerPayload?: any;
  }
}

function isValidCredentials(credentials: any): boolean {
  // Add your logic to validate the credentials here
  // For example:
  return credentials.email && credentials.password;
}
async function refreshAccessToken(token: any) {
  try {
    const res = await postFormData({
      api: "/user/refresh-token",
      body: JSON.stringify({
        refreshToken: token?.refreshToken,
      }),
    });
    return {
      ...token,
      accessToken: res.bearerToken,
      refreshToken: res.refreshToken ?? token.refreshToken,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ user }) {
      if (!user?.accessToken) return false;
      return true;
    },
    async jwt({ token, user, account }) {
      if (token?.accessToken) {
        const decodedToken = jwtDecode(token.accessToken as string);
        token.exp = Number(decodedToken?.exp) * 1000;
      }
      if (account && user) {
        return {
          ...token,
          ...user,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        };
      }
      if (token?.exp && Date.now() < token.exp - 5000) {
        return token;
      }
      return refreshAccessToken(token);
    },
    async session({ session, token }: { token: any; session: any }) {
      if (token) {
        const decodedToken = jwtDecode(token.accessToken as string);

        const timestamp = decodedToken?.exp; // Input timestamp in seconds
        const date = new Date(timestamp! * 1000); // Convert to milliseconds
        const isoString = date.toISOString(); // Convert to ISO 8601 format
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.expires = isoString;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          if (!isValidCredentials(credentials)) {
            throw new Error("Invalid credentials");
          }
          // INIT FORM DATA
          const formData = new FormData();
          formData.append("email", credentials?.email as string);
          formData.append("password", credentials?.password as string);

          // CREATE REQUEST
          const request = {
            api: "/user/login",
            body: formData,
          };

          const res = await postFormData(request);

          if (res?.ACCESS_TOKEN) {
            const dataLatest = {
              ...res,
              accessToken: res?.ACCESS_TOKEN,
              refreshToken: res?.REFRESH_TOKEN,
              refreshPayload: res?.REFRESH_PAYLOAD,
              bearerPayload: res?.BEARER_PAYLOAD,
            };

            return dataLatest;
          }
          throw new Error(res?.message);
        } catch (error) {
          throw new Error("test");
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
