import React from "react";

export const StarRating = ({
  rating,
  max = 5,
}: {
  rating: number;
  max?: number;
}) => {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: max }, (_, i) => {
        const full = i + 1 <= Math.floor(rating);
        const half = !full && i + 0.5 <= rating;

        return (
          <div key={i} className="relative w-5 h-5">
            {/* Empty Star */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#E5E7EB" // gray-200
              className="absolute top-0 left-0 w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 17.27l5.18 3.05-1.64-5.81L20 9.24l-6-.52L12 3.5 10 8.72l-6 .52 4.46 5.27L6.82 20.3 12 17.27z"
                clipRule="evenodd"
              />
            </svg>

            {/* Filled or Half Star */}
            <div
              className={`absolute top-0 left-0 overflow-hidden ${
                half ? "w-1/2" : "w-full"
              } h-full`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FACC15" // yellow-400
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 17.27l5.18 3.05-1.64-5.81L20 9.24l-6-.52L12 3.5 10 8.72l-6 .52 4.46 5.27L6.82 20.3 12 17.27z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};
