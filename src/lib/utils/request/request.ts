import type { RequestParams } from "./request.interfaces";
import type { Response } from "./request.types";
import { paramsToString } from "./request.util";

type Method = "get" | "delete" | "post"| "put";

export const restRequest = async<T>(method: Method, endpoint: string, config: RequestParams = {}): Promise<Response<T>> => {
  if (config.query) {
    endpoint += paramsToString(config);
  }

  const response = await fetch(endpoint, { ...config, method: method });

  if (!response.ok) {
    return {
      success: false,
      data: {
        code: response.status,
        message: response.statusText
      }
    };
  }

  return {
    success: true,
    data: await response.json()
  };
};