import React, { useState, useEffect, useTransition, startTransition } from "react";
import { Link } from "react-router-dom";
import '../../App.css'

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [width, setWidth] = useState('10vw')

    const change = () => {
        width === '10vw'
            ? setWidth('15vw')
            : setWidth('10vw')
    }
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
    }, [width, showMenu])

    return (
        <div
            className='nav'
            style={{'width': width}}
            onChange={change}
        >
            <i className="fa-solid fa-bars fa-2xl" onClick={openMenu}></i>
            {showMenu && (
                <div id='menu'>
                    <div>
                        <Link to='/'>
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link to='whoweare'>
                            Who We Are
                        </Link>
                    </div>
                    <div>
                        <Link to='howtogeauxblue'>
                            How You Can Go Blue
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navigation
