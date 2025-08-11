import React, { useEffect } from 'react'

type DetailsModalProps = {
  item: {
    name: string
    type: string
    overview: string
    licensedDate: string
    licenseStatus: string
    aims: string
    numbers?: Record<string, string | number>
  } | null
  onClose: () => void
}

export default function DetailsModal({ item, onClose }: DetailsModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!item) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">
      <div className="bg-[#23272f] rounded-3xl max-w-4xl w-full p-0 shadow-2xl border border-[#3ecf8e] relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-10 py-8 bg-[#3ecf8e] rounded-t-3xl">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-xl bg-[#23272f] flex items-center justify-center text-4xl font-bold text-[#3ecf8e] shadow border border-[#e6f9f2]">
              {item.name.split(' ')[0][0]}
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#23272f]">{item.name}</h2>
              <p className="text-lg text-[#23272f] font-semibold">{item.type}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-[#23272f] text-3xl font-bold hover:text-[#181a20] transition"
          >
            ✕
          </button>
        </div>
        {/* Body */}
        <div className="px-10 py-8">
          <p className="mb-6 text-base text-[#e6f9f2] leading-relaxed">{item.overview}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="bg-[#181a20] rounded-xl p-6 border border-[#3ecf8e]">
              <h4 className="font-semibold text-[#3ecf8e] mb-2">License Info</h4>
              <div className="text-sm text-[#e6f9f2] mb-1">
                <span className="font-medium">Date:</span> {item.licensedDate}
              </div>
              <div className="text-sm text-[#e6f9f2] mb-1">
                <span className="font-medium">Status:</span> {item.licenseStatus}
              </div>
            </div>
            <div className="bg-[#181a20] rounded-xl p-6 border border-[#3ecf8e]">
              <h4 className="font-semibold text-[#3ecf8e] mb-2">Aims</h4>
              <div className="text-sm text-[#e6f9f2]">{item.aims}</div>
            </div>
          </div>
          {item.numbers && (
            <div className="mt-4 text-sm text-[#e6f9f2] bg-[#181a20] rounded-xl p-6 border border-[#3ecf8e]">
              <h4 className="font-semibold mb-2 text-[#3ecf8e]">Numbers</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(item.numbers).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="font-medium text-[#3ecf8e]">{key}</span>
                    <span className="text-[#e6f9f2]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}