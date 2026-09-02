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
  payload?: BodyInit,
  headers: HeadersInit | undefined = undefined,
) =>
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`, {
    method: METHOD,
    headers,
    body: JSON.stringify(payload),
  });

export default api;
