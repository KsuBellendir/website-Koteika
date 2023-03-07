import './Navbar.css'
import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {MdFingerprint} from 'react-icons/md'; 
import { IconContext } from 'react-icons/lib';
import Button from '../Button/Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handakClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        setButton(window.innerWidth > 960);
    }

    useEffect(() => {showButton()}, [])

    window.addEventListener('resize', showButton)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <div className='navbar'>
        <div className='navbar-container container'>
            <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <MdFingerprint className='navbar-icon'/>
                КОТЕЙКА
            </NavLink>
            <div className="menu-icon" onClick={handakClick}>
            {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu activ' : 'nav-menu'}>
                <li className="nav-item">
                    <NavLink to='/' className="nav-links" onClick={handakClick} >Домой</NavLink>
                 </li>
                 <li className="nav-item">
                    <NavLink to='/services' className="nav-links" onClick={handakClick}>Услуги</NavLink>
                 </li>
                 <li className="nav-item">
                    <NavLink to='/products' className="nav-links" onClick={handakClick}>Товары</NavLink>
                 </li>
                 <li className="nav-btn">
                    {button ? (
                    <NavLink to='/sign-up' className='btn-link'>
                        <Button buttonStyle='btn--outline'>Регистрация</Button>
                        </NavLink>
                        ) :(
                            <NavLink to='/sign-up' className='btn-link' onClick={handakClick}>
                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
                            </NavLink> 
                        )}
                 </li>
            </ul>
        </div>
    </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;