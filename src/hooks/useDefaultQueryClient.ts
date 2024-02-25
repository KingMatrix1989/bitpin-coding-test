import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const DEFAULT_CACHE_TIME = 30 * 60 * 1000;
const DEFAULT_STALE_TIME = 25 * 60 * 1000;

export const useDefaultQueryClient = () => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          gcTime: DEFAULT_CACHE_TIME,
          staleTime: DEFAULT_STALE_TIME,
          refetchOnWindowFocus: false,
          refetchOnReconnect: true,
          retry: false,
        },
      },
    })
  );

  return queryClient;
};
