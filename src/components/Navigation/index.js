import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
        <>
            <i className="fa-duotone fa-bars" onClick={()=> openMenu()}></i>
            {showMenu && (
                <ul>
                    <li>
                        <NavLink to='/whoweare'>
                            Who We Are
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/howtogeauxblue'>
                            How You Can Go Blue
                        </NavLink>
                    </li>
                </ul>
            )}
        </>
    )
}
