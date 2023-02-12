import type { RequestParams } from "./request.interfaces";

export function paramsToString(params: RequestParams = {}): string {
  if (!params.query) {
    return "";
  }

  return "?" + Object.entries(params.query)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => `${key}=${v}`).join("&");
      }

      return `${key}=${value}`;
    })
    .join("&");
}