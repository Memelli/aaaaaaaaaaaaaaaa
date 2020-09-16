import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button } from './Button';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    MapleStory <i className="fas fa-cannabis"></i>
                </Link>
            <div className="menu-icon" onClick={handleClick}> 
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/download' className='nav-links' onClick={closeMobileMenu}>
                        Download
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Ranking
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Forum
                    </Link>
                </li>
                
            </ul>
            {button && <Button buttonStyle='btn--outline'>Cadastre-se</Button>} 
            </div>
        </nav>
        </>
    )
}

export default Navbar
