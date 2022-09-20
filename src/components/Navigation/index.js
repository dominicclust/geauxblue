import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

export const Navigation = () => {
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
        <div id="container" onClick={()=>openMenu()}>
            <i className="fa-solid fa-bars" />
            {showMenu && (
                <div id='menu' style={{'display': showMenu === true ? 'flex' : 'none'}}>
                    <ul>
                        <li>
                            <NavLink to='/' end>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/whoweare' >
                                Who We Are
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/howtogeauxblue' replace>
                                How You Can Go Blue
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
