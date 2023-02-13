export type Method = "get" | "delete" | "post"| "put";

export type RequestParams = Omit<RequestInit, "method"> & {
  query?: QueryParams;
}

export type QueryParams = Record<string, string | string[]>

export type ResponseSuccess<T> = {
  success: true;
  data: T;
}

export type ResponseError = {
  success: false;
  data: {
    code: number;
    message: string;
  }
}

export type Response<T> = ResponseSuccess<T> | ResponseError;