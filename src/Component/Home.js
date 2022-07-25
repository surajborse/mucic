import React from 'react'
import { CgSearch } from 'react-icons/cg'

function Home() {
    return (
        <div className='home-content'>
            <h1>Find the best music for Your favorite </h1>

            <div className="seach-box">
                <CgSearch />
                <input type="text" className='input' placeholder='Find Your Music' />
            </div>
        </div>
    )
}

export default Home