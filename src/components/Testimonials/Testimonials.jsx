import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
    const clients = [
        {
            img: "https://pbs.twimg.com/profile_images/1441140440791617537/JICPNdbf_400x400.png",
            review: "Upcoming summer analyst at Goldman Sachs for the summer of 2023 in the global compliance division.",
        },
        {
            img: "https://media.licdn.com/dms/image/C4D0BAQEMLkuM98XOkQ/company-logo_200_200/0/1663963957565?e=2147483647&v=beta&t=R3-fChYCQDdKLJO9X1LO_irpdW7Yc5x3V9cXgi17ER0",
            review: "Developed complete frontend of an e-commerce based startup, Redopact, from scratch using the design they provided in a team of 4 memebers. Mainly used Html, Css and bootstrap",
        },
        {
            img: "https://photos.angel.co/startups/i/8127993-4878151ae5cdfea5fe64a2a8076d4c3a-medium_jpg.jpg?buster=1648728704",
            review: "Worked in a health based startup as a backend developer to finish their website. Also used webflow to make certain components of their website. Mainly used NodeJs, Jquery, React and webflow throghout the internship.",
        },
       
    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>My work </span>
            <span>Experience</span>
            {/* <span>from me...</span> */}
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
        <Swiper
            className='t-swiper'
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index} className="swiper-slide">
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials