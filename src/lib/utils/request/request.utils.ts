import type { QueryParams } from "./request.types";

export function paramsToString(query: QueryParams, asPrefix = false): string {
  const params = Object.keys(query).map((key) => `${key}=${query[key]}`);
  return asPrefix ? `?${params.join("&")}` : params.join("&");
}