// 'use client'

// import { usePathname } from 'next/navigation'
// import Header from './Header'
// import Navbar from './Navbar'

// export default function MainLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname()

//   const hideNavbarRoutes = ['/Home', '/About',] // Replace with actual routes
//   const showNavbar = !hideNavbarRoutes.includes(pathname)

//   return (
//     <div className="flex flex-col min-h-screen bg-black text-white w-full relative overflow-hidden">
//       <div className="relative">
//         <Header />
//         {showNavbar && <Navbar />}
//       </div>
//       {children}
//     </div>
//   )
// }
