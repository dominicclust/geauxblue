import React from "react"
import '../../App.css'
const Header = () => {
    return (
        <header id='header'>
            <img src="https://i.ibb.co/cXy4NX1/GBNOLA.png" alt='logo' id="logo"></img>
            <h1 style={{'color': 'black', 'paddingLeft': '3vw'}}>Geaux</h1>
            <h1 style={{'color': 'blue', 'paddingLeft': '1vw'}}>Blue</h1>
            <h1 style={{'color': 'black', 'paddingLeft': '1vw'}}>NOLA</h1>
        </header>
    )
}
export default Header
