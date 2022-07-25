import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';


function MusicTab({ setList }) {

    const [btnactive, setbtnactive] = useState(1)


    const options = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        smartSpeed: 600,
        center: true,
        autoplayTimeout: 2500

    }

    return (
        <div>
            <div className="tab-box">
                <button onClick={() => setbtnactive(1)} className={btnactive === 1 ? "active " : ""} > Commercial </button>
                <button onClick={() => setbtnactive(2)} className={btnactive === 2 ? "active" : ""} > Free License </button>
            </div>

            <div className={`${btnactive === 1 ? 'list-one ' : "list-one  music-tab   "}    `}>





                <OwlCarousel className='owl-theme' loop {...options} margin={120} >
                    <div className='item' onClick={() => setList(true)}>
                        <div className="music-img">
                            <img src="https://pagalworld.com.se/siteuploads/thumb/sft7/3198_4.jpg" alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className='item' onClick={() => setList(true)}>
                        <div className="music-img">
                            <img src="https://i.pinimg.com/236x/9f/b1/19/9fb119998351265b47f8b33706430da9--romantic-movies-bollywood-stars.jpg" className='img-fluid' alt="" />
                        </div>
                    </div>

                    <div className='item' onClick={() => setList(true)}>
                        <div className="music-img">
                            <img src="https://i.pinimg.com/736x/b0/67/56/b067565825bce9cc94fe187320d5d16d.jpg" className='img-fluid' alt="" />
                        </div>
                    </div>

                </OwlCarousel>

            </div>




            <div className={`${btnactive === 2 ? 'list-one d-block ' : "list-one  music-tab   "}    `}>
                <div>
                    <div>
                        <div className="list">
                            <div className="music-img">
                                <img src="https://pagalworld.com.se/siteuploads/thumb/sft7/3198_4.jpg" className='img-fluid' alt="" />
                            </div>
                            <div className=" ms-3 music-content">
                                <p>Beyond the Line</p>
                                <p> Riwan khan </p>
                            </div>
                        </div>

                        <div className="list">
                            <div className="music-img">
                                <img src="https://cdn.pixabay.com/audio/2022/06/27/12-00-45-604_200x200.jpg" className='img-fluid' alt="" />
                            </div>
                            <div className=" ms-3 music-content">
                                <p>Beyond the Line</p>
                                <p> Riwan khan </p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default MusicTab