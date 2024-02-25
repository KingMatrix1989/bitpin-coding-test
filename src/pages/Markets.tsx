import { MarketsTabbedList } from "@/components";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";

export default function Markets() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Markets</PageHeaderHeading>
      </PageHeader>

      <MarketsTabbedList />
    </>
  );
}
