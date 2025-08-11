import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-supabase-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center gap-2">
          <Image src="/logos/esx-logo.png" alt="Ethiopian Securities Exchange Logo" width={32} height={32} />
          <h1 className="text-lg font-bold tracking-wide">Ethiopia CMSP Dashboard</h1>
        </div>
        {/* <nav className="flex gap-4 text-sm">
          <a href="#" className="hover:text-supabase-200">Home</a>
          <a href="#" className="hover:text-supabase-200">About</a>
          <a href="#" className="hover:text-supabase-200">Contact</a>
        </nav> */}
      </div>
    </header>
  )
}