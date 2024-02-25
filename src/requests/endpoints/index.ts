const ENDPOINTS = {
  market: {
    list: `/mkt/markets/`,
    market: (id: string) => `/mth/matches/${id}`,
    marketActivities: (id: string, type: "sell" | "buy") =>
      `/mth/actives/${id}/?type=${type}`,
  },
};

export default ENDPOINTS;
