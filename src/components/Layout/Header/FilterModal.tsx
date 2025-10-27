import { featureTranslations } from "@/constants/feature";
import { useSearchParams } from "react-router";

interface FilterModalProps {
  onClose: () => void;
}

export default function FilterModal({ onClose }: FilterModalProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const feature = searchParams.get("feature");

  return (
    <>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {Object.entries(featureTranslations).map(([value, display]) => (
            <button
              key={value}
              onClick={() =>
                setSearchParams((prev) => ({
                  ...prev,
                  feature: feature === value ? "" : value,
                }))
              }
              className={`px-4 py-2 rounded-full border cursor-pointer ${
                feature === value
                  ? "bg-primary text-white border-primary-400"
                  : "text-beigeBrown border-beigeBrown"
              }`}
            >
              {display}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          닫기
        </button>
      </div>
    </>
  );
}
