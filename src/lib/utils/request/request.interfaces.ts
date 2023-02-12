export interface RequestParams extends Omit<RequestInit, "method"> {
  query?: Record<string, string | string[]>
}