export interface Currency {
  id: number;
  title: string;
  title_fa: string;
  code: CurrencyCode;
  tradable: boolean;
  for_test: boolean;
  image: string;
  decimal: number;
  decimal_amount: number;
  decimal_irt: number;
  color: string;
  high_risk: boolean;
  show_high_risk: boolean;
  withdraw_commission: string;
  tags: Tag[];
  etf: boolean;
  for_binvest: boolean;
  for_loan: boolean;
  for_stake: boolean;
  recommend_for_deposit_weight: number;
}

interface Tag {
  id: number;
  name: string;
  name_en: string;
  has_chart: boolean;
}

interface OrderBookInfo {
  created_at: any;
  price: string;
  change: number;
  min: string;
  max: string;
  time: string;
  mean: string;
  value: string;
  amount: string;
}

interface InternalPriceInfo {
  created_at: number;
  price: string;
  change: number;
  min: string;
  max: string;
  time: any;
  mean: any;
  value: any;
  amount: any;
}

interface PriceInfo {
  created_at: number;
  price: string;
  change: number;
  min: string;
  max: string;
  time: any;
  mean: any;
  value: any;
  amount: any;
}

type CurrencyCode =
  | "IRT"
  | "USDT"
  | "BTC"
  | "ETH"
  | "XRP"
  | "LTC"
  | "BCH"
  | "TRX"
  | "USDC"
  | "DOGE"
  | "BNB"
  | "XMR"
  | "DASH"
  | "ZEC"
  | "XLM"
  | "ADA";

export interface Market {
  id: number;
  currency1: Currency;
  currency2: Currency;
  tradable: boolean;
  for_test: boolean;
  otc_sell_percent: string;
  otc_buy_percent: string;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  order_book_info: OrderBookInfo;
  internal_price_info: InternalPriceInfo;
  price_info: PriceInfo;
  price: string;
  title: string;
  code: CurrencyCode;
  title_fa: string;
  trading_view_source: string;
  trading_view_symbol: string;
  otc_market: boolean;
  text: string;
  volume_24h: string;
  market_cap: string;
  circulating_supply: string;
  all_time_high: string;
  popularity_weight: number;
  freshness_weight: number;
}
