import React from 'react';

export default function CMSPCard({ cmsp, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="bg-[#23272f] rounded-2xl p-3 sm:p-2 shadow-xl hover:shadow-2xl text-left border border-[#3ecf8e] transition flex-1 min-w-[240px] sm:min-w-[280px] max-w-[600px] m-2 break-words"
      style={{ minHeight: 160 }}
    >
      <div className="flex items-start gap-4 sm:gap-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#3ecf8e] flex items-center justify-center text-2xl sm:text-3xl font-extrabold text-white shadow">
          {cmsp.name.split(' ')[0][0]}
        </div>
        <div className="flex-1">
          <h3 className="font-extrabold text-lg sm:text-xl text-[#f3f4f6] break-words">{cmsp.name}</h3>
          <p className="text-sm sm:text-base text-[#3ecf8e] font-semibold">{cmsp.type}</p>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#e6f9f2] break-words">{cmsp.short}</p>
          <p className="text-xs text-[#b0b0b0] mt-1 sm:mt-2">Licensed: {cmsp.licensedDate}</p>
        </div>
      </div>
    </button>
  );
}
