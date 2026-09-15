export const METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
} as const;

export type RequestType = (typeof METHODS)[keyof typeof METHODS];

const api = async (
  METHOD: RequestType = METHODS.GET,
  endpoint: string,
  payload?: object,
  headers?: HeadersInit,
) =>
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`, {
    method: METHOD,
    headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    body: payload ? JSON.stringify(payload) : undefined,
  });

export default api;
