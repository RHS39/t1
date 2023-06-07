import React from 'react'
import "../styles/Home.scss";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillApple} from "react-icons/ai"

import vg from "../assets/images/2.webp"

const Home = () => {
  return (
<>
    <div className="home" id="home">
        <main>
            <h1>Kriss</h1>
            <p> Expert services for all kind of industrial project </p>
        </main>
    </div>

    <div className="home2" id= "services">
        <img src={vg} alt="Graphics" />
        <div>
            <p> We are one of the great recuiters among the Pune.
                We had best industrial skilled employees to meet your project requirements.
            </p>
        </div>

    </div>

    <div className="home3" id= "about">
        <div>
            <h1>Who we are?</h1>
            <p>Our organisation provides manpower for foundry work. With expertise of 20 years consistent service. Our employees has the exxperience of working at different roles in foundry from casting to dispatching and delivery.
            </p>
        </div>


    </div>
    <div className='home4' id="brand">
        <div>
            <h1>Brands</h1>
            <article>
            <div style={
                    {animationDelay: "1s"}
                }>
                    <AiFillGoogleCircle/>
                    <p> Google </p>
                </div>                <div style={
                    {animationDelay: ".51s"}
                }>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                              
                </div>
                <div style={
                    {animationDelay: "1.9s"} }>
                    <AiFillApple/>
                    <p>Apple</p>
                </div>
            </article>
        </div>
    </div>
</>
    );
}

export default Home