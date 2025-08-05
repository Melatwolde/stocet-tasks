'use client'
import React, { useState } from "react";

const supabaseTheme = {
  primary: "#3ecf8e",
  secondary: "#23272f",
  accent: "#181a20",
  tableHeader: "#23272f",
  tableRow: "#23272f",
  tableRowHover: "#26272b",
  text: "#f3f4f6",
};

type Bond = {
  id: string;
  issuer: string;
  coupon: number;
  maturity: string; // ISO date
  faceValue: number;
  marketPrice: number;
};

const mockBonds: Bond[] = [
  {
    id: "1",
    issuer: "Ethiopian Treasury Bond 2028",
    coupon: 7.5,
    maturity: "2028-06-30",
    faceValue: 1000,
    marketPrice: 1025,
  },
  {
    id: "2",
    issuer: "Addis Ababa City Bond 2030",
    coupon: 8.2,
    maturity: "2030-12-31",
    faceValue: 1000,
    marketPrice: 980,
  },
  {
    id: "3",
    issuer: "Development Bank Bond 2027",
    coupon: 6.9,
    maturity: "2027-03-15",
    faceValue: 1000,
    marketPrice: 995,
  },
  {
    id: "4",
    issuer: "Ethiopian Railways Bond 2032",
    coupon: 9.1,
    maturity: "2032-09-01",
    faceValue: 1000,
    marketPrice: 1010,
  },
  {
    id: "5",
    issuer: "Oromia Regional Bond 2026",
    coupon: 5.8,
    maturity: "2026-01-20",
    faceValue: 1000,
    marketPrice: 970,
  },
  {
    id: "6",
    issuer: "Ethiopian Power Bond 2029",
    coupon: 7.8,
    maturity: "2029-11-10",
    faceValue: 1000,
    marketPrice: 1005,
  },
];

export default function BondSearch() {
  const [minCoupon, setMinCoupon] = useState("");
  const [maxCoupon, setMaxCoupon] = useState("");
  const [maturityBefore, setMaturityBefore] = useState("");
  const [maturityAfter, setMaturityAfter] = useState("");
  const [error, setError] = useState("");

  const filtered = mockBonds.filter((bond) => {
    // Coupon filter
    if (minCoupon && bond.coupon < Number(minCoupon)) return false;
    if (maxCoupon && bond.coupon > Number(maxCoupon)) return false;
    // Maturity filter
    if (maturityBefore && bond.maturity > maturityBefore) return false;
    if (maturityAfter && bond.maturity < maturityAfter) return false;
    return true;
  });

  const handleNumberInput = (val: string, setter: (v: string) => void) => {
    if (val === "" || /^[0-9]*\.?[0-9]*$/.test(val)) {
      setter(val);
      setError("");
    } else {
      setError("Coupon must be a number");
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-start py-10"
      style={{ background: supabaseTheme.accent }}
    >
      <div
        className="w-full max-w-4xl rounded-xl shadow p-8 mb-8 border"
        style={{
          background: supabaseTheme.secondary,
          borderColor: "#30363d",
        }}
      >
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: supabaseTheme.primary }}
        >
          Bond Search
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block font-semibold mb-1" style={{ color: supabaseTheme.text }}>
              Min Coupon (%)
            </label>
            <input
              type="text"
              inputMode="decimal"
              className="w-full border rounded-lg px-3 py-2 bg-[#181a20] text-white focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]"
              value={minCoupon}
              onChange={(e) => handleNumberInput(e.target.value, setMinCoupon)}
              placeholder="e.g. 6.5"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" style={{ color: supabaseTheme.text }}>
              Max Coupon (%)
            </label>
            <input
              type="text"
              inputMode="decimal"
              className="w-full border rounded-lg px-3 py-2 bg-[#181a20] text-white focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]"
              value={maxCoupon}
              onChange={(e) => handleNumberInput(e.target.value, setMaxCoupon)}
              placeholder="e.g. 9.0"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" style={{ color: supabaseTheme.text }}>
              Maturity After
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 bg-[#181a20] text-white focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]"
              value={maturityAfter}
              onChange={(e) => setMaturityAfter(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" style={{ color: supabaseTheme.text }}>
              Maturity Before
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 bg-[#181a20] text-white focus:outline-none focus:ring-2 focus:ring-[#3ecf8e]"
              value={maturityBefore}
              onChange={(e) => setMaturityBefore(e.target.value)}
            />
          </div>
        </form>
        {error && (
          <div className="text-red-400 mt-2 font-semibold">{error}</div>
        )}
      </div>

      <div
        className="w-full max-w-4xl rounded-xl shadow border overflow-x-auto"
        style={{
          background: supabaseTheme.secondary,
          borderColor: "#30363d",
        }}
      >
        <table className="w-full text-left">
          <thead>
            <tr style={{ background: supabaseTheme.tableHeader }}>
              <th className="py-3 px-4 font-bold" style={{ color: supabaseTheme.primary }}>Bond Name / Issuer</th>
              <th className="py-3 px-4 font-bold" style={{ color: supabaseTheme.primary }}>Coupon (%)</th>
              <th className="py-3 px-4 font-bold" style={{ color: supabaseTheme.primary }}>Maturity Date</th>
              <th className="py-3 px-4 font-bold" style={{ color: supabaseTheme.primary }}>Face Value</th>
              <th className="py-3 px-4 font-bold" style={{ color: supabaseTheme.primary }}>Market Price</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-8" style={{ color: "#b0b0b0" }}>
                  No results found.
                </td>
              </tr>
            ) : (
              filtered.map((bond) => (
                <tr
                  key={bond.id}
                  className="border-t transition"
                  style={{
                    background: supabaseTheme.tableRow,
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = supabaseTheme.tableRowHover)}
                  onMouseOut={e => (e.currentTarget.style.background = supabaseTheme.tableRow)}
                >
                  <td className="py-3 px-4" style={{ color: supabaseTheme.text }}>{bond.issuer}</td>
                  <td className="py-3 px-4" style={{ color: supabaseTheme.text }}>{bond.coupon.toFixed(2)}</td>
                  <td className="py-3 px-4" style={{ color: supabaseTheme.text }}>{bond.maturity}</td>
                  <td className="py-3 px-4" style={{ color: supabaseTheme.text }}>{bond.faceValue.toLocaleString()}</td>
                  <td className="py-3 px-4" style={{ color: supabaseTheme.text }}>{bond.marketPrice.toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}