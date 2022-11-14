import { useState } from "react";
import '../App.css'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
<header>
    <a href="#" className='logo'></a>
        <ul className={`nav-items ${isOpen && "open"}`}>
          <li>  <a href='#about'> About</a></li>
          <li> <a href='#skils'> Skills & Tools</a></li>
          <li>  <a href='#portfolio'> Portfolio</a></li>
          <li>  <a href='#contact'> Contact</a></li>
        </ul>
        <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
        </header>
  )
}

export default Header