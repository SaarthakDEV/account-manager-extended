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
  payload: BodyInit,
  headers: HeadersInit,
) =>
  await fetch(`${process.env.BASE_URL}${endpoint}`, {
    method: METHOD,
    headers,
    body: JSON.stringify(payload),
  });

export default api;
