import { Link, NavLink } from 'react-router-dom'
import { ContractBadge } from '@/modules/common/ContractBadge'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-black tracking-wider text-neon-blue glow-text">
          WEN BRRR
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <ContractBadge address="zFXihzaXTjqRr7WVnY82GJz7XZyPkKJxVXoi5F5pump" />
          <NavLink to="/features" className={({ isActive }) => isActive ? 'text-neon-purple' : 'text-gray-300 hover:text-white'}>
            Features
          </NavLink>
          <NavLink to="/whitepaper" className={({ isActive }) => isActive ? 'text-neon-purple' : 'text-gray-300 hover:text-white'}>
            Whitepaper
          </NavLink>
          <NavLink to="/register" className={({ isActive }) => isActive ? 'text-neon-purple' : 'text-gray-300 hover:text-white'}>
            Register for Card
          </NavLink>
          <button className="ml-4 px-4 py-2 rounded-md border border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition-colors">
            Connect Phantom
          </button>
        </nav>
      </div>
    </header>
  )
}


