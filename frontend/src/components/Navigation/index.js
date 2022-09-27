import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../../App.css'

const Navigation = ({showMenu, openMenu}) => {
    const [width, setWidth] = useState('15vw')
    useEffect(() => {
        const handleMenuVisibility = (w) => {
            if ((showMenu && width === '25vw')
            || (showMenu===false && width === '15vw')) return;
            setWidth(w)
        }
        handleMenuVisibility('25vw')
        return () => handleMenuVisibility('15vw')    

    }, [width, showMenu])
    return (
        <nav className='nav' id='nav' style={{'width': {width}}}>
            <div onClick={openMenu}>
                <i className="fa-solid fa-bars fa-2xl" ></i>
            </div>
            {!!showMenu && (<ul 
                id='menu'
            >
                <li><Link to='/'>Home</Link></li>
                <li><Link to='whoweare'>Who We Are</Link></li>
                <li><Link to='howtogeauxblue'>How You Can Go Blue</Link></li>
            </ul>)}
        </nav>
    )
}
export default Navigation
