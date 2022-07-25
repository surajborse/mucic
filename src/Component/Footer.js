import React, { useEffect, useRef, useState } from 'react'
import { BsChevronDoubleUp } from "react-icons/bs"
import { AiOutlineHome, AiOutlinePause } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { MdPlayArrow } from "react-icons/md"
import { IoMdClose, } from "react-icons/io"
import { TbPlayerSkipBack, TbPlayerSkipForward } from "react-icons/tb"
import { Music } from '../AllData'
function Footer({ setCurrentsong, currentsong }) {


    const [slideup, setSlideup] = useState(false)

    // const [data, setData] = useState(Music)

    const [play, setPlay] = useState(false)

    const audioElem = useRef();
    const clicref = useRef();

    useEffect(() => {
        if (play) {
            audioElem.current.play();
        }
        else {
            audioElem.current.pause();
        }

    }, [play, currentsong])

   



    const playPuase = () => {
        setPlay(!play)
    }

    const onplaying = () => {
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;

        setCurrentsong({ ...currentsong, "progress": ct / duration * 100, "length": duration })


    }

    const checkWidth = (e) => {

        let width = clicref.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioElem.current.currentTime = divprogress / 100 * currentsong.length
    }

    const Back = () => {
        const index = Music.findIndex(x => x.title === currentsong.title && currentsong.subtitle)
        if (index === 0) {
            setCurrentsong(Music[Music.length - 1])
        }
        else {
            setCurrentsong(Music[index - 1])
        }
        audioElem.current.currentTime = 0
    }

    const next = () => {

        const index = Music.findIndex(x => x.title === currentsong.title && currentsong.subtitle)

        if (index === Music.length - 1) {
            setCurrentsong(Music[0])
        }
        else {
            setCurrentsong(Music[index + 1])
        }
        audioElem.current.currentTime = 0

    }




    return (
        <div className={slideup ? "active fix-footer" : " fix-footer "}>

            <audio src={currentsong.audio} ref={audioElem} onTimeUpdate={onplaying} />

            <div className="top text-center" onClick={() => setSlideup(!slideup)}   >
                <BsChevronDoubleUp />
            </div>


            {
                !slideup &&
                <>
                    <div className=''>
                        <div className="list justify-content-between">
                            <div className='d-flex'>
                                <div className="music-img">
                                    <img src={currentsong.Image} className='img-fluid' alt="" />
                                </div>
                                <div className=" ms-3 music-content">
                                    <p>{currentsong.title} </p>
                                    <p> {currentsong.subtitle} </p>
                                </div>
                            </div>
                            <div className='d-flex me-2'>
                                <div className='play-btn me-2' >
                                    {
                                        play ? <AiOutlinePause onClick={playPuase} /> : <MdPlayArrow onClick={playPuase} />
                                    }
                                </div>
                                {/* <AiOutlinePause /> */}

                                <div className='play-btn'>
                                    <IoMdClose />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="menu">
                        <div className="home">
                            <AiOutlineHome /><br />
                            <p>Home</p>
                        </div>
                        <div className="home">
                            <CgProfile /> <br />
                            <p>Pofile</p>
                        </div>
                    </div>
                </>
            }





            {
                slideup &&


                <div className='main-play'>

                    <div className="play-box">
                        <img src={currentsong.Image} className='img-fluid' alt="" />
                    </div>

                    {/* <h3>Beyond the Line</h3>
                    <h5>Riwan khan </h5> */}

                    <h3> {currentsong.title} </h3>
                    <h5> {currentsong.subtitle} </h5>

                    <div className="range" onClick={checkWidth} ref={clicref}>
                        {/* <input type="range" style={{width :`${currentsong.progress+"%"}`}} /> */}

                        <div className="range-time " style={{ width: `${currentsong.progress + "%"}` }}></div>
                    </div>

                    <div className="navigate-music">
                        <TbPlayerSkipBack onClick={Back} />
                        <div className='audio-play'  >
                            {/* <AiOutlinePause /> :  */}
                            {
                                play ? <AiOutlinePause onClick={playPuase} /> : <MdPlayArrow onClick={playPuase} />
                            }

                        </div>
                        <TbPlayerSkipForward onClick={next} />
                    </div>

                </div>
            }




        </div >
    )
}

export default Footer