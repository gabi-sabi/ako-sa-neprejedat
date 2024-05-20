import React from 'react'
import ReactDOM from 'react-dom/client'

import { CircleUser } from "lucide-react"



export const Header = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <h1>Ako sa neprejedať</h1>
          <CircleUser />
        </nav>
      </header>
    </div>
  )
}
