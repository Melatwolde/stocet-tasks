import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export type Stock = {
  symbol: string;
  name: string;
  price: number;
  change: number;
};

interface StockCardProps {
  stock: Stock;
}

const StockCard: React.FC<StockCardProps> = ({ stock }) => {
  const isUp = stock.change >= 0;
  return (
    <div className="bg-white shadow rounded-xl p-4 border hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold">{stock.symbol}</span>
        <span
          className={`flex items-center text-sm ${
            isUp ? "text-green-600" : "text-red-600"
          }`}
        >
          {isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {stock.change.toFixed(2)}%
        </span>
      </div>
      <p className="text-gray-600 text-sm">{stock.name}</p>
      <p className="text-xl font-bold mt-2">${stock.price.toFixed(2)}</p>
    </div>
  );
};

export default StockCard;
