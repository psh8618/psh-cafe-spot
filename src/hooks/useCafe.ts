import { cafeApi } from '@/api/cafeApi';
import {
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';

const CAFE_QUERY_KEY = {
  list: (query?: string, feature?: string) =>
    ['cafeList', query, feature] as const,
  detail: (id: number) => ['cafeDetail', id] as const,
};

export const useCafeList = (
  pageSize: number = 10,
  query?: string,
  feature?: string
) => {
  return useSuspenseInfiniteQuery({
    queryKey: CAFE_QUERY_KEY.list(query, feature),
    queryFn: ({ pageParam = 0 }) =>
      cafeApi.fetchCafeList({ page: pageParam, pageSize, query, feature }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0,
  });
};

export const useCafeDetail = (id: number) => {
  return useSuspenseQuery({
    queryKey: CAFE_QUERY_KEY.detail(id),
    queryFn: () => cafeApi.fetchCafeById(id),
  });
};
