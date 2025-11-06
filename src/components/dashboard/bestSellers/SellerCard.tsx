import Image from "next/image";

interface SellerProps {
  image: string;
  name: string;
  company: string;
  sales: number;
  amount: number;
}
interface SellerCardProps {
  seller: SellerProps;
}

export default function SellerCard({ seller }: SellerCardProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 overflow-hidden rounded-lg">
          <Image
            src={seller.image}
            alt={seller.name}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="text-normal text-gray-1100 dark:text-gray-dark-1100 mb-1">
            {seller.name}
          </p>
          <p className="text-desc text-gray-400 dark:text-gray-dark-400">
            {seller.company}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-normal font-semibold text-gray-1100 dark:text-gray-dark-1100 mb-1">
          ${seller.amount.toFixed(2)}
        </p>
        <p className="text-desc text-gray-400 dark:text-gray-dark-400">
          {seller.sales} sales
        </p>
      </div>
    </div>
  );
}
