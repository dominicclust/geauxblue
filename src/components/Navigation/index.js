import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../App.css'

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true)
    };
    useEffect(() => {
        const closeMenu = () => {
            if (showMenu===false) return;
            setShowMenu(false)
        }
        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu])

    return (
        <nav className='nav' id='nav' style={{'width': showMenu ? '15px' : '10px'}}>
            <i style={{'display': showMenu ? 'none' : 'flex'}} className="fa-solid fa-bars fa-2xl" onClick={openMenu}></i>
                <ul id='menu' style={{'display': showMenu ? 'flex' : 'none'}}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='whoweare'>Who We Are</Link>
                    </li>
                    <li>
                        <Link to='howtogeauxblue'>How You Can Go Blue</Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}
export default Navigation
