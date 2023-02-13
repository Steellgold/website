import type { QueryParams } from "./request.types";

export function paramsToString(query: QueryParams) {
  return "?" + Object.entries(query).map(([key, value]) => {
    if (Array.isArray(value)) {
      return value.map(val => `${key}=${val}`).join("&");
    } else {
      return `${key}=${value}`;
    }
  }
  ).join("&");
}