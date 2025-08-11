import React from 'react'

const options = ['All', 'Investment Bank', 'Securities Dealer', 'Investment Adviser']

export default function FilterBar({ value, onChange }: any) {
  return (
    <div className="flex gap-3 items-center flex-wrap mb-4">
      {options.map(opt => (
        <button
          key={opt}
          className={`px-4 py-2 rounded-full font-bold shadow transition ${
            value === opt
              ? 'bg-[#3ecf8e] text-white'
              : 'bg-white text-[#23272f] hover:bg-[#e6f9f2]'
          }`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}