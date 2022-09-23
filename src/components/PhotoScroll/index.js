import React, {useState, useEffect} from 'react';
import '../../App.css'

const PhotoScroll = ({picArray}) => {
    const [pics, setPics] = useState([picArray[0], picArray[1], picArray[2]])
    const [onDecks, setOnDecks] = useState([picArray[3], picArray[4], picArray[5]])
    const [firstPic, secondPic, thirdPic] = pics
    const [onDeck1, onDeck2, onDeck3] = onDecks
    const [outgoing1, setOutgoing1] = useState(false)
    const [incoming1, setIncoming1] = useState(false)
    const [outgoing2, setOutgoing2] = useState(false)
    const [incoming2, setIncoming2] = useState(false)
    const [outgoing3, setOutgoing3] = useState(false)
    const [incoming3, setIncoming3] = useState(false)

    const update = (setOuts, setIns) => {
        setOuts.forEach(setOut => setOut(true))
        setIns.forEach(setIn => setIn(true))
    }

    useEffect(() => {
        let imgSrcs = picArray.map(img => img.imgSrc)
        const changePics = (pics) => {
            return pics.map(pic => {
                let idx = imgSrcs.indexOf(pic.imgSrc);
                idx += 3;
                if (idx >= picArray.length) idx -= picArray.length
                return picArray[idx]
            })
        }
        if (incoming3 === false) {
                setPics(changePics(pics))
                setOnDecks(changePics(onDecks))
                update([setOutgoing1, setOutgoing2, setOutgoing3], [setIncoming1, setIncoming2, setIncoming3])
        }
    }, [pics, onDecks, incoming3, picArray])
    return (
            <div id='photoScroll'>
                <div id='first'>
                    {outgoing1 && (<img
                        onAnimationStart={() => {
                            setOutgoing1(true)
                            setOutgoing2(true)
                            setOutgoing3(true)
                        }}
                        onAnimationEnd={() => setOutgoing1(false)}
                        className='active'
                        src={firstPic.imgSrc}
                        alt={firstPic.imgAlt}
                    ></img>
                    )}
                    {incoming1 && (<img
                        onAnimationStart={() => {
                            setIncoming1(true)
                            setIncoming2(true)
                            setIncoming3(true)
                        }}

                        className='onDeck'
                        src={onDeck1.imgSrc}
                        alt={onDeck1.imgAlt}
                    ></img>
                    )}
                </div>
                <div id='second'>
                    {outgoing2 && (<img
                        onAnimationEnd={() => setOutgoing2(false)}
                        className='active'
                        src={secondPic.imgSrc}
                        alt={secondPic.imgAlt}
                    ></img>
                     )}
                    {incoming2 && (<img
                        className='onDeck'
                        src={onDeck2.imgSrc}
                        alt={onDeck2.imgAlt}
                    ></img>
                    )}
                </div>

                <div id='third'>
                    {outgoing3 && (<img
                        onAnimationEnd={() => setOutgoing3(false)}
                        className='active'
                        src={thirdPic.imgSrc}
                        alt={thirdPic.imgAlt}
                    ></img>
                    )}
                    {incoming3 && (<img
                        onAnimationEnd={() => {
                            setIncoming1(false)
                            setIncoming2(false)
                            setIncoming3(false)
                        }}
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
