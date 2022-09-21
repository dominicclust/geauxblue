import React, {useState, useEffect} from 'react';
import '../../App.css'

const PhotoScroll = ({picArray}) => {
    const [pics, setPics] = useState([picArray[0], picArray[1], picArray[2]])
    const [onDecks, setOnDecks] = useState([picArray[3], picArray[4], picArray[5]])
    const [firstPic, secondPic, thirdPic] = pics
    const [onDeck1, onDeck2, onDeck3] = onDecks
    const [outgoing, setOutgoing] = useState(false)
    const [incoming, setIncoming] = useState(false)
    useEffect(() => {
        let imgSrcs = picArray.map(img => img.imgSrc)
        const update = () => {
            setOutgoing(true)
            setIncoming(true)
        }
        const changePics = (pics) => {
            return pics.map(pic => {
                let idx = imgSrcs.indexOf(pic.imgSrc);
                idx += 3;
                if (idx >= picArray.length) idx -= picArray.length
                return picArray[idx]
            })
        }
        if (incoming === false) {
            setPics(changePics(pics))
            setOnDecks(changePics(onDecks))
            update()
        }
    }, [pics, onDecks, incoming, outgoing, picArray])
    return (
            <div id='photoScroll'>
                <div id='first'>
                    {outgoing && (<img
                        onAnimationStart={() => setOutgoing(true)}
                        onAnimationEnd={() => setOutgoing(false)}
                        className='active'
                        src={firstPic.imgSrc}
                        alt={firstPic.imgAlt}
                    ></img>
                    )}
                    {incoming && (<img
                        onAnimationStart={() => setIncoming(true)}
                        onAnimationEnd={() => setIncoming(false)}
                        className='onDeck'
                        src={onDeck1.imgSrc}
                        alt={onDeck1.imgAlt}
                    ></img>
                    )}
                </div>
                <div id='second'>
                    {outgoing && (<img
                        onAnimationStart={() => setOutgoing(true)}
                        onAnimationEnd={() => setOutgoing(false)}
                        className='active'
                        src={secondPic.imgSrc}
                        alt={secondPic.imgAlt}
                    ></img>
                     )}
                    {incoming && (<img
                        onAnimationStart={() => setIncoming(true)}
                        onAnimationEnd={() => setIncoming(false)}
                        className='onDeck'
                        src={onDeck2.imgSrc}
                        alt={onDeck2.imgAlt}
                    ></img>
                    )}
                </div>

                <div id='third'>
                    {outgoing && (<img
                        onAnimationStart={() => setOutgoing(true)}
                        onAnimationEnd={() => setOutgoing(false)}
                        className='active'
                        src={thirdPic.imgSrc}
                        alt={thirdPic.imgAlt}
                    ></img>
                    )}
                    {incoming && (<img
                        onAnimationStart={() => setIncoming(true)}
                        onAnimationEnd={() => setIncoming(false)}
                        className='onDeck'
                        src={onDeck3.imgSrc}
                        alt={onDeck3.imgAlt}
                    ></img>
                    )}
                </div>
            </div>
    )
}

export default PhotoScroll
