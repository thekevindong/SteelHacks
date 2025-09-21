import './Header.css'

function Header({ searchTerm, setSearchTerm }) {
  const handleSubmit = (e) => {
    e.preventDefault() // prevent page reload
  }

  return (
    <header className="header">
      {/* Logo / Brand */}
      <div className="logo-container">
        <div className="logo-circle"><img src="OpenDeskLogo.png"></img></div>
        <span className="logo-text">Open Desk </span>

        <nav className="nav-links">
          <a href="#page-footer">About</a>
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
      </form>
      
    <p><b>Note</b>: All rooms not explicilty mentioned are not scheduled for the foreseeable future at the current time.</p>
    </header>
  )
}

export default Header
