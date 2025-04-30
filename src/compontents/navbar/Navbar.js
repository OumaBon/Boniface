import './navbar.css'
const Navbar = () => {
  return (
    <header>
        <nav>
            <div className="nav-logo">
                <p className="logo">BO</p>
                <p className="logo-name">Boniface Ouma</p>
            </div>

            <ul className="nav-list">
                <li><a href="">About</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact Me</a></li>
            </ul>
        
        </nav>
      
    </header>
  )
}

export default Navbar
