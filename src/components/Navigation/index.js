import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../App.css'

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
        }, [showMenu]);


    return (
        <div className='nav'>
            {showMenu===false && (
                <i className="fa-solid fa-bars" onClick={()=>openMenu()}></i>
            )}
            {showMenu && (
                <div id='menu'>
                    <ul>
                        <li>
                            <Link to='/' end>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='whoweare'>
                                Who We Are
                            </Link>
                        </li>
                        <li>
                            <Link to='howtogeauxblue'>
                                How You Can Go Blue
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Navigation
