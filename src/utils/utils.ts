import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { endpoints } from "./axios";

export const STORAGE_KEY = "accessToken";
export const STORAGE_REFRESH = "refreshToken";

export const refreshToken = async () => {
  try {
    const refreshTokenData = sessionStorage.getItem(STORAGE_REFRESH);
    if (!refreshTokenData) return null;
    const response = await axios.post(
      endpoints.auth.refreshToken,
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshTokenData}`, // Gửi refresh token lên header
        },
      }
    );
    const { token: accessToken, refreshToken } = response.data;
    setSession(accessToken, refreshToken);
    return accessToken;
  } catch (error) {
    console.error(error);
  }
};

export const tokenExpired = (exp: number) => {
  let expiredTimer; // Declare timer variable at the top

  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;
  const fiveMinutesInMs = 5 * 60 * 1000;

  clearTimeout(expiredTimer); // Clear any previous timers

  if (timeLeft > fiveMinutesInMs) {
    expiredTimer = setTimeout(() => {
      console.log("Token is about to expire in 5 minutes, refreshing token...");
      refreshToken()
        .then((newAccessToken) => {
          if (newAccessToken) {
            const { exp: newExp } = jwtDecode(newAccessToken);
            tokenExpired(Number(newExp));
          }
        })
        .catch((error) => {
          console.error("Error refreshing token:", error);
        });
    }, timeLeft - fiveMinutesInMs);
  } else {
    console.log(
      "Token is less than 5 minutes from expiring, refreshing now..."
    );
    refreshToken()
      .then((newAccessToken) => {
        if (newAccessToken) {
          const { exp: newExp } = jwtDecode(newAccessToken);
          tokenExpired(Number(newExp)); // Set a new expiration timer with the refreshed token's exp
        }
      })
      .catch((error) => {
        console.error("Error refreshing token:", error);
      });
  }
};

export const setSession = (
  accessToken: string | null,
  refreshToken: string | null
) => {
  if (accessToken && refreshToken) {
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    tokenExpired(Number(exp));
  } else {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");

    delete axios.defaults.headers.common.Authorization;
  }
};
