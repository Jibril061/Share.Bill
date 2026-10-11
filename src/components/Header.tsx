import { Link, NavLink } from 'react-router'

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="brand">
          Share.Bill
        </Link>

        <nav aria-label="Navigasi utama">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/create-bill"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Buat Tagihan
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
