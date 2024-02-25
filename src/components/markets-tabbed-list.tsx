import { useMarkets } from "@/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui";

const MarketsTabbedList = () => {
  const { isLoading, markets } = useMarkets();

  const defaultTabValue = Object.keys(markets)[0];

  return (
    <Tabs defaultValue={defaultTabValue}>
      <TabsList>
        {Object.keys(markets).map((key) => (
          <TabsTrigger key={key} value={key}>
            <span className="capitalize">{key}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(markets).map(([key, markets]) => (
        <TabsContent key={key} value={key} className="flex flex-col space-y-2">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {markets.map((market) => (
                <div className="flex items-center gap-x-3 bg-neutral-100 px-4 py-3 rounded-sm">
                  <div className="flex gap-x-3 items-center">
                    <img
                      src={market.currency1.image}
                      alt={market.currency1.code}
                      className="w-5 h-5"
                    />
                    {market.currency1.title}
                  </div>
                  <div>{market.price_info.price}</div>
                </div>
              ))}
            </>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MarketsTabbedList;
