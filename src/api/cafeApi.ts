import supabase from '@/lib/supabase';
import type { Cafe, CafeResponse } from '@/types/cafe';

const fetchCafeList = async ({
  page,
  pageSize,
  query,
  feature,
}: {
  page: number;
  pageSize: number;
  query?: string;
  feature?: string;
}): Promise<CafeResponse> => {
  const from = page * pageSize;
  const to = from + pageSize - 1;

  let supabaseQuery = supabase.from('cafes').select(
    `
      *,
      photos (
        url
      ),
      features!inner (
        feature_type,
        is_available
      ),
      facilities (
        facility_type,
        is_available
      )
    `,
    { count: 'exact' }
  );

  if (query) {
    supabaseQuery = supabaseQuery.or(
      `name.ilike.%${query}%,address.ilike.%${query}%`
    );
  }

  if (feature) {
    supabaseQuery = supabaseQuery
      .eq('features.feature_type', feature)
      .eq('features.is_available', true);
  }

  const { data, error, count } = await supabaseQuery
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) throw error;

  const nextPage = count && from + pageSize < count ? page + 1 : null;

  return {
    data,
    nextPage,
  };
};

const fetchCafeById = async (id: number): Promise<Cafe> => {
  const { data, error } = await supabase
    .from('cafes')
    .select(
      `
      *,
      photos (
        url
      ),
      features!inner (
        feature_type,
        is_available
      ),
      facilities (
        facility_type,
        is_available
      )
    `
    )
    .eq('id', id)
    .single();

  if (error) throw error;

  return data;
};

export const cafeApi = {
  fetchCafeList,
  fetchCafeById,
};
