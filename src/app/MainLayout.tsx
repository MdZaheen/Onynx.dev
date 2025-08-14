'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  // Paths where Navbar should be hidden
  const hideNavbarRoutes = ['@/app/routes/AboutDetailZaheen/page'] // Add any other paths here

  const showNavbar = !hideNavbarRoutes.includes(pathname)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white w-full">
      <Header />
      {showNavbar && <Navbar />}
      {children}
    </div>
  )
}

export default MainLayout
