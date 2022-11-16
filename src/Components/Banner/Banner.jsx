import React from 'react'
import './Banner.css'


function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..</h1>
        </div>
    </div>
  )
}

export default Banner