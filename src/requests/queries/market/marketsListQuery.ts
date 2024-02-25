import { ApiRequest } from "@/lib";
import ENDPOINTS from "@/requests/endpoints";
import { ListQueryParams, Market, PaginatedResponseBody } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { marketKeys } from "./queryKeys";

const getAllMarkets = async (params: ListQueryParams) => {
  return ApiRequest.get<PaginatedResponseBody<Market>>(ENDPOINTS.market.list, {
    params: {
      page: params.page,
      page_size: params.pageSize,
    },
  }).then((response) => response);
};

export const useGetAllMarketsQuery = (params: ListQueryParams) => {
  return useQuery({
    queryKey: marketKeys.list(params),
    queryFn: () => getAllMarkets(params),
  });
};
