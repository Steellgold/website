import type { Method, RequestParams } from "./request.types";
import type { Response } from "./request.types";
import { paramsToString } from "./request.utils";

export const restRequest = async<T>(
  method: Method,
  endpoint: string,
  config: RequestParams = {},
  contentTypesNeeded: string[] = [],
  asPrefix = false): Promise<Response<T>> => {
  if (config.query) {
    endpoint += paramsToString(config.query, asPrefix);
  }

  const response = await fetch(endpoint, { ...config, method: method });

  if (!response.ok) {
    return {
      success: false,
      data: { code: response.status, message: response.statusText }
    };
  }

  if (contentTypesNeeded.length > 0) {
    const contentType = response.headers.get("content-type");
    if (!contentType) {
      return {
        success: false,
        data: { code: 500, message: "No content type" }
      };
    }

    const isContentTypeValid = contentTypesNeeded.some(contentTypeNeeded => contentType.includes(contentTypeNeeded));
    if (!isContentTypeValid) {
      return {
        success: false,
        data: { code: 500, message: "Invalid content type" }
      };
    }
  }

  return {
    success: true,
    data: await response.json()
  };
};