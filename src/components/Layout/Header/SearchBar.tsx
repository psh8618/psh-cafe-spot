import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useLocation, useNavigate, useSearchParams } from "react-router";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState(searchParams.get("query") ?? "");
  const feature = searchParams.get("feature") ?? "";

  const handleSearch = () => {
    navigate(`/?query=${query}&feature=${feature}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get("query") ?? "");
  }, [location.search]);

  return (
    <div className="relative flex items-center w-full max-w-md">
      <input
        type="text"
        placeholder="카페 이름 또는 주소를 입력하세요"
        className="w-full px-4 py-2 text-gray-500 border-b-2 border-primary focus:outline-none focus:border-b-3 focus:border-yellow-500 placeholder-gray-400"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSearchParams((prev) => ({
            ...prev,
            query: e.target.value,
          }));
        }}
        onKeyDown={handleKeyDown}
      />
      <button
        className="absolute right-3 text-gray-500 hover:text-primary"
        onClick={handleSearch}
      >
        <IoSearch className="w-5 h-5" />
      </button>
    </div>
  );
}
