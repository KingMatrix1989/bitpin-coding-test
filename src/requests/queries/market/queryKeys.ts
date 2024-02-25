import { ListQueryParams } from "@/types";

export const marketKeys = Object.freeze({
  all: ["markets"],
  list_all: () => [...marketKeys.all, "list"],
  list: (params: ListQueryParams) => [...marketKeys.list_all(), { ...params }],
  detail_all: () => [...marketKeys.all, "detail"],
  detail: (id: number) => [...marketKeys.detail_all(), id],
});
