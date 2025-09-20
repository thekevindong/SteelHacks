
import './Header.css'
function Header(){

  return(
    <>
    <header className="header">
      {/* Logo / Brand */}
      <div className="logo-container">
        <div className="logo-circle">P</div>
        <span className="logo-text">OpenDesk</span>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <a href="#dashboard">Dashboard</a>
        <a href="#buildings">Buildings</a>
        <a href="#accessibility">Accessibility</a>
        <a href="#about">About</a>
      </nav>

      {/* Search / User Actions */}
      <div className="search-container">
        <input type="text" placeholder="Search buildings..." />
        <button>Go</button>
      </div>
    </header>
    </>
  )

}

export default Header;