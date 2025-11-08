import Image from "next/image";
import React from "react";

const CreditCardSection = ({
  title = "Credit Card",
  imageSrc,
  buttonText = "Add new card",
  onButtonClick,
}) => {
  return (
    <div className="rounded-2xl border border-gray-700 bg-gray-900 p-3 mb-4">
      {/* Title */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-400">{title}</p>
        </div>

        {/* Image */}
        <div className="w-full mb-2">
          <Image
            src={imageSrc}
            alt="credit card"
            width={150}
            height={70}
            className="w-[100%] h-[18rem] object-cover rounded-lg"
          />
        </div>

        {/* Button */}
        <button
          onClick={onButtonClick}
          className="transition-all duration-300 border-4 border-transparent bg-indigo-500 hover:bg-indigo-500 hover:border-indigo-300 text-white font-medium px-6 py-3 rounded-lg text-sm"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CreditCardSection;
