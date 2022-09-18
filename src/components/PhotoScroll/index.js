import React, {useState, useEffect} from 'react'
import './PhotoScroll.css'

export const PhotoScroll = ({pics}) => {
    const [oldPic, setOldPic] = useState(pics[0])
    const [newPic, setNewPic] = useState(pics[1])
    const [count, setCount] = useState(0)
    useEffect(()=> {
        const updatePic = () => {
            setNewPic(pics[count+1])
            setOldPic(pics[count])
        }
        setCount(count + 1)
        if (count === pics.length) setCount(0);
        document.addEventListener('transitionend', updatePic)
        return () => document.removeEventListener('transitionend', updatePic)
    }, [oldPic, newPic, count])

    return (
        <div>
            <img className='oldPic' src={oldPic.imgSrc} alt={oldPic.imgAlt} ></img>
            <img className='newPic' src={newPic.imgSrc} alt={newPic.imgAlt} ></img>
        </div>
    )

}
