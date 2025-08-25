import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 md:px-8 max-w-7xl w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


