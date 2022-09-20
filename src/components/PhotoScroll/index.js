import React, {useState, useEffect, createRef} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid'
import './PhotoScroll.css'

export const PhotoScroll = ({picArray}) => {
    const [firstPic, setFirstPic] = useState(picArray[0])
    const [secondPic, setSecondPic] = useState(picArray[1])
    const [thirdPic, setThirdpic] = useState(picArray[2])

    const pics = [{
        id: uuid(),
        imgSrc: firstPic.imgSrc,
        imgAlt: firstPic.imgAlt,
        nodeRef: createRef(null)
    }, {
        id: uuid(),
        imgSrc: secondPic.imgSrc,
        imgAlt: secondPic.imgAlt,
        nodeRef: createRef(null)
    }, {
        id: uuid(),
        imgSrc: thirdPic.imgSrc,
        imgAlt: thirdPic.imgAlt,
        nodeRef: createRef(null)
    }]
    const changePic = (pic, setPic) => {
        let i = picArray.indexOf(pic);
        setTimeout(() => {
            i += 3;
            i >= picArray.length
                ? i -= picArray.length
                : i += 0
            setPic(picArray[i])
        }, 5000, i)
    }
    return (
        <div>
            <TransitionGroup className='imageScroll'>
                {pics.map(({id, imgSrc, imgAlt, nodeRef}) => {
                    return (
                        <CSSTransition
                            key={id}
                            nodeRef={nodeRef}
                            timeout={7000}
                            classNames="current"
            ></CSSTransition>
                    )
                })}
            </TransitionGroup>
        </div>
    )

}
