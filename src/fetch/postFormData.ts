export type RequestPostGuest = {
  api: string;
  body: any;
  headers?: any;
};

export default async function postFormData(request: RequestPostGuest) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}${request.api}`, {
      method: "POST",
      body: request.body,
      redirect: "follow",
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      // throw new Error('Failed to fetch data')
      return res.json();
    }

    return res.json();
  } catch (error: unknown) {
    console.log("🚀 ~ postFormData ~ error:", error);
    // Convert the error to a string or handle based on its type
    // const errorMessage = error instanceof Error ? error.message : String(error);
    // throw new Error(`${process.env.NEXT_PUBLIC_API}${request.api}: ${errorMessage}`);
  }
}
