import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/buy', label: 'Buy' },
  { to: '/sell', label: 'Sell' },
  { to: '/developments', label: 'Developments & Land' },
  { to: '/team', label: 'Meet the Team' },
  { to: '/communities', label: 'Communities' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/wesco-logo-orange.svg" alt="WesCo Property Group" className="h-8 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${isActive ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden sm:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#FB9B1C] text-white font-semibold px-4 py-2 shadow hover:opacity-95 transition"
            >
              Book a Call with Our Team
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      <div className="lg:hidden border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex gap-4 overflow-x-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap text-sm font-medium px-2 py-1 rounded ${isActive ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
