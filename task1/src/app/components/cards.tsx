'use client'
import React, { useState } from "react";
import { mockStocks } from "@/app/data/mockStocks";
import StockCard from "@/app/components/stcokcard";

type Filter = "ALL" | "GAINERS" | "LOSERS";

const supabaseTheme = {
  primary: "#3ecf8e",
  secondary: "#26272b",
  accent: "#f3f4f6",
};

export default function StockList() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const [stocks, setStocks] = useState(mockStocks);

  const filteredStocks = stocks.filter((stock) => {
    if (filter === "GAINERS") return stock.change > 0;
    if (filter === "LOSERS") return stock.change < 0;
    return true;
  });

  const handleRefresh = () => {
    setStocks((prev) =>
      prev.map((stock) => ({
        ...stock,
        change: Number((Math.random() * 6 - 3).toFixed(2)),
        price: Number((stock.price + Math.random() * 10 - 5).toFixed(2)),
      }))
    );
  };

  return (
    <div
      className="w-full min-h-screen bg-gray-100"
      style={{ background: supabaseTheme.accent }}
    >
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <h1
            className="text-4xl font-extrabold tracking-tight"
            style={{ color: supabaseTheme.primary }}
          >
            Ethiopian Stock Market
          </h1>
          <button
            onClick={handleRefresh}
            className="px-4 py-2 rounded-lg font-semibold bg-white border border-gray-300 shadow hover:bg-gray-100 transition"
          >
            Refresh
          </button>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {["ALL", "GAINERS", "LOSERS"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as Filter)}
              className={`px-5 py-2 rounded-full text-base font-bold border-2 transition-all duration-150 ${
                filter === f
                  ? "bg-[#3ecf8e] text-white border-[#3ecf8e] shadow"
                  : "bg-white text-[#26272b] border-gray-300 hover:bg-[#e6f9f2]"
              }`}
            >
              {f === "ALL" ? "All" : f === "GAINERS" ? "Top Gainers" : "Top Losers"}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredStocks.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  );
}
