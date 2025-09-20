import './Header.css'

function Header({ searchTerm, setSearchTerm }) {
  const handleSubmit = (e) => {
    e.preventDefault() // prevent page reload
  }

  return (
    <header className="header">
      {/* Logo / Brand */}
      <div className="logo-container">
        <div className="logo-circle">P</div>
        <span className="logo-text">Open Desk </span>

        <nav className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#buildings">Buildings</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#about">About</a>
        </nav>
      </div>

      {/* Search */}
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search buildings, rooms, or events..."
        />
        <button type="submit">Go</button>
      </form>
    </header>
  )
}

export default Header
