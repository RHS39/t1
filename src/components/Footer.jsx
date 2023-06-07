import React from 'react'
import "../styles/Footer.scss"
import {AiFillGoogleCircle ,AiFillAmazonCircle, AiOutlineTwitter ,AiFillApple, AiFillLinkedin, AiFillGooglePlusCircle, AiFillGooglePlusSquare, AiFillTwitterCircle, AiFillReconciliation} from "react-icons/ai";
import {FaHome,CiLocationOn} from "react-icons";


const Footer = () => {
  return (
    <footer>
    <div>
        <h1> Kriss Web</h1>
        <p>All rights reserved.</p>
    </div>
    <div>
        <h5>Find Us</h5>
        <div>
        <div className='div' style={{animationDelay: "1.9s"} }>
                    <AiFillGooglePlusSquare/>
                    <a href="#" target='blank'>Google Bussiness</a>
                </div>         
                <div style={
                    {animationDelay: "1.9s"} }>
                    <AiFillLinkedin/>
                    <a href="#" target='blank'>LinkedIn</a>
                </div>
                <div style={
                    {animationDelay: "1.9s"} }>
                    <AiOutlineTwitter/>
                    <a href="#" target='blank'>Twitter</a>
                </div> 
                <div style={
                    {animationDelay: "1.9s"} }>
                        
                    <a href="#" target='blank'>Koo</a>
                    
                 </div>

        </div>
    </div>
  </footer>)
}

export default Footer