export type ResponseBody<T = undefined> = T extends undefined
  ? { message: string }
  : {
      data: T;
    };

export type PaginatedResponseBody<T = unknown> = {
  count: number;
  next: number;
  previous: number;
  results: Array<T>;
};

export type ListQueryParams = {
  page: number;
  pageSize: number;
};
