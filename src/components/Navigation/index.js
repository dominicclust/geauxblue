import React from "react";
import { Link } from "react-router-dom";
import '../../App.css'

const Navigation = ({handleClick}) => {
    
    return (
        <nav className='nav' id='nav'>
            <ul id='menu'>
                <li onClick={() => handleClick}><Link to='/'>Home</Link></li>
                <li onClick={() => handleClick}><Link to='whoweare'>Who We Are</Link></li>
                <li><Link to='howtogeauxblue'>How You Can Go Blue</Link></li>
                <li><Link to='press'>Press Release</Link></li>
            </ul>
        </nav>
    )
}
export default Navigation
