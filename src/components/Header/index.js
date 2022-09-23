import React from "react"
import { Link } from "react-router-dom"
import '../../App.css'
const Header = () => {
    return (
        <header id='header'>
            <img src="https://i.ibb.co/cXy4NX1/GBNOLA.png" alt='logo' id="logo"></img>
            <div>
                <span id='geaux'>Geaux</span>
                <span id='blue'>Blue</span>
                <span id='nola'>NOLA</span>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='whoweare'>Who We Are</Link></li>
                <li><Link to='howtogeauxblue'>How You Can Go Blue</Link></li>
            </ul>
            <img src="https://i.ibb.co/cXy4NX1/GBNOLA.png" alt='logo' id="logo"></img>
        </header>
    )
}
export default Header
