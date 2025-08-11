'use client'
import React, { useState } from 'react'
import Header from './components/Header'
import FilterBar from './components/filter'
import CMSPCard from './components/cmspcards'
import DetailsModal from './components/cmspdetailModal'
import cmsps from './data/cmsp.json'
import CMSPListCards from './components/CMSPListCards'

type Category = 'All' | 'Investment Bank' | 'Securities Dealer' | 'Investment Adviser'

export default function Page() {
  const [category, setCategory] = useState<Category>('All')
  const [selected, setSelected] = useState<any>(null)

  const filtered = category === 'All' ? cmsps : cmsps.filter((c: any) => c.type === category)

  return (
    <main className="min-h-screen bg-[#181a20] text-[#f3f4f6]">
      <Header />
      <div className="container mx-auto p-4">
        <FilterBar value={category} onChange={setCategory} />
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((c: any) => (
            <CMSPCard key={c.id} cmsp={c} onClick={() => setSelected(c)} />
          ))}
        </div>
      </div>
      <DetailsModal item={selected} onClose={() => setSelected(null)} />
      <div className ="px-19">
            <CMSPListCards/>
      </div>
      
    </main>
  )
}