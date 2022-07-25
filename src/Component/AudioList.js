import React, { useState } from 'react'
import { CgSearch } from 'react-icons/cg'
import { HiOutlineChevronLeft } from "react-icons/hi"
import { Music } from '../AllData'


function AudioList({ backbnt, setCurrentsong }) {


    const [search, setSearch] = useState("");
    const [serachactive, setSerachactive] = useState(false)

    return (

        <div className='audiolist'>

            <div className="header">
                <div className="pre-btn " onClick={backbnt}>
                    <HiOutlineChevronLeft />
                </div>

                {
                    <div className='seach-box mt-0 ms-4'>
                        <input type="text" className={`${serachactive ? " search-acticve" : ""} search-input`} placeholder='Search Music' onChange={(e) => {
                            setSearch(e.target.value.trim());
                        }} />
                    </div>
                }

                <div className="search" onClick={() => setSerachactive(!serachactive)} >
                    <CgSearch />
                </div>
            </div>

            <div>
                {
                    Music.filter((val) => {
                        if (!search) {
                            return val;

                        } else
                            if (
                                val.title.toLowerCase().includes(search.toLowerCase()) || val.subtitle.toLowerCase().includes(search.toLowerCase()) 
                            ) {
                                return val;
                            }
                    }).map((e, index) => {
                        return (
                            <div className="list" key={index} onClick={() => {
                                setCurrentsong(e)
                            }}>
                                <div className="music-img">
                                    <img src={e.Image} className='img-fluid' alt="" />
                                </div>
                                <div className=" ms-3 music-content">
                                    <p> {e.title} </p>
                                    <p> {e.subtitle} </p>
                                </div>
                            </div>
                        )
                    })
                }


                {/* <div className="list">
                    <div className="music-img">
                        <img src="https://cdn.pixabay.com/audio/2022/06/27/12-00-45-604_200x200.jpg" className='img-fluid' alt="" />
                    </div>
                    <div className=" ms-3 music-content">
                        <p>Beyond the Line</p>
                        <p> Riwan khan </p>
                    </div>
                </div>

                <div className="list">
                    <div className="music-img">
                        <img src="https://pagalworld.com.se/siteuploads/thumb/sft7/3198_4.jpg" className='img-fluid' alt="" />
                    </div>
                    <div className=" ms-3 music-content">
                        <p>Beyond the Line</p>
                        <p> Riwan khan </p>
                    </div>
                </div> */}

            </div>


        </div>
    )
}

export default AudioList