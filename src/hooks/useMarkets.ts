import { useGetAllMarketsQuery } from "@/requests/queries";
import { Market } from "@/types";
import { useMemo } from "react";

const useMarkets = () => {
  const { data, isLoading } = useGetAllMarketsQuery({ page: 1, pageSize: 10 });

  console.log("data", data);

  const markets = useMemo(() => {
    if (!data?.results || data.results.length === 0) {
      return { IRT: [], USDT: [], all: [] };
    }

    let irtBaseMarkets: Market[] = [];
    let usdBaseMarkets: Market[] = [];
    data.results.filter((market: Market) => {
      if (market.currency2.code === "IRT") {
        irtBaseMarkets.push(market);
      } else if (market.currency2.code === "USDT") {
        usdBaseMarkets.push(market);
      }
    });

    return {
      IRT: irtBaseMarkets,
      USDT: usdBaseMarkets,
      all: data.results,
    };
  }, [data?.results]);

  return { markets, isLoading };
};

export default useMarkets;
