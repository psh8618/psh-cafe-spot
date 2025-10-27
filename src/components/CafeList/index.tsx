import { useCafeList } from "@/hooks/useCafe";
import CafeCard from "@/components/CafeList/CafeCard";
import CafeGrid from "@/components/CafeList/CafeGrid";
import EmptyState from "@/components/CafeList/EmptyState";
import LoadingMore from "@/components/CafeList/LoadingMore";
import useDebounce from "@/hooks/useDebounce";
import { useSearchParams } from "react-router";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

export default function CafeList() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const feature = searchParams.get("feature") ?? "";

  const debouncedQuery = useDebounce(query, 500);
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useCafeList(
    10,
    debouncedQuery,
    feature
  );

  const { loadMoreRef } = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  const cafeList = data.pages.flatMap((page) => page.data);
  const isEmpty = cafeList.length === 0;

  return (
    <CafeGrid>
      {isEmpty ? (
        <EmptyState />
      ) : (
        cafeList.map((cafe) => <CafeCard key={cafe.id} cafe={cafe} />)
      )}
      <LoadingMore
        loadMoreRef={loadMoreRef}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </CafeGrid>
  );
}
