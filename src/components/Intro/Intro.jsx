import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import boy2 from '../../img/boy2.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {motion} from 'framer-motion'
import 'animate.css'


const Intro = () => {

    const transition = {duration: 2, type: 'spring'}

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span className='animate__animated animate__backInLeft'>Hi! I Am</span>
                <span className='animate__animated animate__backInLeft'>Sarthak Goyal</span>
                <span className='animate__animated animate__fadeIn animate__delay-2s animate__slow'>A third year UG at IITK. I am sports enthusiast mostly looking to find someone challenging in any individual sport. Sometimes I draw, sometime I cook too, I could be doing programming or I could be developing some webpage. I used to be a professional chess player currently a member of my college's chess team and represented it in the inter IIT sports meet 2022.</span>
            </div>
            {/* <button className="button i-button">hire me</button> */}
            <div className="i-icons">
                <a href="https://github.com/sarthak759" target="_blank">
                    <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/sarthak-goyal-5536ba202/" target="_blank">
                    <img src={LinkedIn} alt="" />
                </a>
                <a href="https://www.instagram.com/_sg_12914/" target="_blank">
                    <img src={Instagram} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy2} alt="" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassesimoji} alt="" />
            <motion.div 
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left:'68%'}}
            transition={transition}
            className='floating-div'
            style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Devloper' />
            </motion.div>
            <motion.div 
            initial={{left:'9rem', top: '18rem'}}
            whileInView={{left:'0rem'}}
            transition={transition}
            className='floating-div'
            style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1='Chess' txt2='Player'/>
            </motion.div>
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{
                background: '#C1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
            }}></div>
        </div>
    </div>
  )
}

export default Intro