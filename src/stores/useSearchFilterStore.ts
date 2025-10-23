import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SearchFilterState {
  searchQuery?: string;
  selectedFeature?: string;
  setSearchQuery: (query: string) => void;
  setSelectedFeature: (feature: string) => void;
  resetFilters: () => void;
}

export const useSearchFilterStore = create<SearchFilterState>()(
  persist(
    (set) => ({
      searchQuery: '',
      selectedFeature: '',
      setSearchQuery: (query) => {
        set({ searchQuery: query });
        // Update URL with query parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (query) {
          urlParams.set('query', query);
        } else {
          urlParams.delete('query');
        }
        window.history.replaceState(null, '', `/?${urlParams.toString()}`);
      },
      setSelectedFeature: (feature) => {
        set({ selectedFeature: feature });
        // Update URL with feature parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (feature) {
          urlParams.set('feature', feature);
        } else {
          urlParams.delete('feature');
        }
        window.history.replaceState(null, '', `/?${urlParams.toString()}`);
      },
      resetFilters: () => {
        set({ searchQuery: '', selectedFeature: '' });
        // Clear URL parameters
        window.history.replaceState(null, '', '/');
      },
    }),
    {
      name: 'search-filter-storage',
    }
  )
);
