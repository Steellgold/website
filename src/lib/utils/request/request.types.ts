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

export interface RequestParams extends Omit<RequestInit, "method"> {
  query?: Record<string, string | string[]>
}

export type Response<T> = ResponseSuccess<T> | ResponseError;