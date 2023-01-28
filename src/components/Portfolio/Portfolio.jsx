import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>
        <span>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
        >
            <SwiperSlide>
                <a href="https://github.com/sarthak759/react-practice-website" target="_blank">
                    <img src={Sidebar} alt="Monster Rolodex"/>
                </a>
                <span className='s-text'><br />A place to hire monsters, you can even search your prefered monsters
                    <br/>
                    <strong>Skills :</strong> React Js, Sass
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://github.com/sarthak759/full-stack-website" target="_blank">
                <img src={Ecommerce} alt="Full-stack user platform" />
                </a>
                <span className='s-text'><br />A platform to post different places you visited or you want to visit
                    <br />
                    on your profile. You can login in your own profile or check others profile too.
                    <br/>
                    <strong>Skills :</strong> React Js, Firebase, NodeJs, Express, Redux
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://github.com/sarthak759/e-commerce-website" target="_blank">
                <img src={MusicApp} alt="e-commerce website" />
                </a>
                <span className='s-text'><br />E-commerce website where you can purchase anything of your need
                    <br />
                    You can login in your account and purchase them.
                    <br/>
                    <strong>Skills :</strong> React Js, Sass, firebase
                </span>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://github.com/sarthak759/mern-shop" target="_blank">
                <img src={HOC} alt="mern shop" />
                </a>
                <span className='s-text'><br />A basic platform for sellers to add there product 
                    <br />
                    for customers to see and buy
                    <br/>
                    <strong>Skills :</strong> React Js, Node Js, Express
                </span>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio