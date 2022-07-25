import React, {useEffect, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button } from './Button'


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
           setButton(false) 
        } else{
            setButton(true)
        }
           
    }
     /* eslint-disable */
    {/* used to control the sign up button from unusual rendering */}

    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize', showButton)
  return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo animate__animated animate__bounce" onClick={closeMobileMenu}>
                   KID <i className="fab fa-typo3 "></i>
                </Link>
                {/* the handleclick function which must be defined to allow the switch between the icon */}
                <div className="menu-icon " onClick={handleClick}>
                    {/* a ternary operator that allows u to switch font awesome  icon*/}
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active animate__animated animate__bounce' : 'nav-menu'} >
                    <li className='nav-item'>
                        <Link to='/' className='nav-links animate__animated animate__bounce' onClick={closeMobileMenu} >Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links animate__animated animate__bounce' onClick={closeMobileMenu} >About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/product' className='nav-links animate__animated animate__bounce' onClick={closeMobileMenu} >product</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links animate__animated animate__bounce' onClick={closeMobileMenu} >sign up</Link>
                    </li>
                    
                </ul>
                {button && <Button buttonStyle='btn-outline'>SIGNUP</Button>}
                </div> 
        </nav>
    
        </>
  )
}

export default Navbar