import Image from "next/image";
import React from "react";

interface CreditCardProps {}
const CreditCardSection = ({
  title = "Credit Card",
  imageSrc,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="rounded-2xl border border-gray-700 bg-gray-900 p-6 mb-4">
      {/* Title */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-400">{title}</p>
        </div>

        {/* Image */}
        <div className="w-full mb-6">
          <Image
            src={imageSrc}
            alt="credit card"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Button */}
        <button
          onClick={onButtonClick}
          className="transition-all duration-300 border-4 border-transparent bg-indigo-500 hover:bg-indigo-500 hover:border-indigo-300 text-white font-medium px-6 py-3 rounded-lg text-sm"
        >
          {buttonText || "+ Add New Card"}
        </button>
      </div>
    </div>
  );
};
