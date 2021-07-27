import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <div className="home-header">
                <div className="home-header-left"></div>
                    <Link to="about">About</Link>
                    <Link to="store">Store</Link>
                <div className="home-header-right"></div>
                    <Link to="gmail">Gmail</Link>
                    <Link to="images">Images</Link>
            </div>
            <div className="home-body">

            </div>
        </div>
    )
}

export default Home
