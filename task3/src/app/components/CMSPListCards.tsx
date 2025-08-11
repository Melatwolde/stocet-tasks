import React from "react";

const cmspData = [
  {
    id: "cbe-capital",
    name: "CBE Capital Investment Bank S.C.",
    type: "Investment Bank",
    licensedDate: "2025-03-21",
    short: "Investment banking arm of Commercial Bank of Ethiopia focused on capital markets.",
    licenseStatus: "Active",
  },
  {
    id: "ethio-fidelity",
    name: "Ethio Fidelity Securities S.C.",
    type: "Securities Dealer",
    licensedDate: "2025-03-21",
    short: "Securities dealer preparing for trading membership with ESX.",
    licenseStatus: "Active",
  },
  {
    id: "hst-advisors",
    name: "HST Investment Advisors P.L.C.",
    type: "Investment Adviser",
    licensedDate: "2025-03-21",
    short: "Corporate investment advisory and asset management services.",
    licenseStatus: "Active",
  },
  {
    id: "wegagen-capital",
    name: "Wegagen Capital Investment Bank S.C.",
    type: "Investment Bank",
    licensedDate: "2025-03-21",
    short: "Investment bank focusing on corporate finance and capital markets.",
    licenseStatus: "Active",
  },
];

export default function CMSPListCards() {
  return (
    <div className="w-full bg-[#1c1f26] p-4 rounded-lg shadow-lg">
      {cmspData.map((cmsp, index) => (
        <div
          key={cmsp.id}
          className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-gray-700 hover:bg-[#23272f] transition ${
            index === cmspData.length - 1 ? "border-b-0" : ""
          }`}
        >
          {/* Left Side */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">{cmsp.name}</h3>
            <p className="text-sm text-[#3ecf8e] font-semibold">{cmsp.type}</p>
            <p className="text-sm text-gray-300 mt-1">{cmsp.short}</p>
          </div>

          {/* Right Side */}
          <div className="mt-2 sm:mt-0 text-sm text-right">
            <p className="text-gray-400">Licensed: {cmsp.licensedDate}</p>
            <span
              className={`font-semibold ${
                cmsp.licenseStatus === "Active"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {cmsp.licenseStatus}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
