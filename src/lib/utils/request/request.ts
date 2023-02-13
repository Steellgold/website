import type { Method, RequestParams } from "./request.types";
import type { Response } from "./request.types";
import { paramsToString } from "./request.utils";

export const restRequest = async<T>(method: Method, endpoint: string, config: RequestParams = {}): Promise<Response<T>> => {
  if (config.query) {
    endpoint += paramsToString(config.query);
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