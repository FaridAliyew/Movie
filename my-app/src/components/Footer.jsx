import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="footer-contact">
            <img src="https://themes.thememasters.club/sequex-light/wp-content/uploads/sites/12/2017/11/logo-mini.png" alt="logo" />
            <p className='footer-contact-text'>
            Cupidatat in velit o possumus summis est eiusmod familiaritatem, a id fugiat iudicem, sed aliquip tractavissent, tamen philosophari singulis esse officia ex occaecat adipisicing ab admodum.
            </p>
            <button className='footer-contact-btn'>Contact Us</button>
        </div>
        <div className="footer-news">
            <div className="footer-top-header">
                <h4>Latest News</h4>
            </div>  
            <div className="footer-news-items">
                <div className="footer-news-item">
                    <h5>A New Apocalypse Movie</h5>
                    <p><CiClock2 /> October 6, 2017</p>
                </div>
                <div className="footer-news-item">
                    <h5>The Best Vampire Movies</h5>
                    <p><CiClock2 /> October 3, 2017</p>
                </div>
                <div className="footer-news-item">
                    <h5>The biography of the rock star</h5>
                    <p><CiClock2 /> October 1, 2017</p>
                </div>
            </div>
        </div>
        <div className="footer-genres">
            <h4>Genres</h4>

            <div className="footer-genres-films">
                <ul>
                    <li><span>Drama</span><span>13</span></li>
                    <li><span>Action</span><span>13</span></li>
                    <li><span>Adventure</span><span>10</span></li>
                    <li><span>Science Fiction</span><span>7</span></li>
                    <li><span>Comedy</span><span>6</span></li>
                    <li><span>Fantasy</span><span>5</span></li>
                    <li><span>War</span><span>4</span></li>
                    <li><span>Crime</span><span>3</span></li>
                    <li><span>Family</span><span>4</span></li>
                    <li><span>Thriller</span><span>2</span></li>
                    <li><span>Animation</span><span>2</span></li>
                    <li><span>Horror</span><span>2</span></li>
                    <li><span>History</span><span>2</span></li>
                    <li><span>Romance</span><span>1</span></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="last-footer">
        <p>© 2022 Sequex. All rights reserved.</p>
        <div className="social-media">
            <CiFacebook />
            <FaInstagram />
            <FaTwitter />
        </div>
      </div>
    </>
  )
}

export default Footer
