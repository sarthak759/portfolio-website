import React from 'react'
import Card from '../Card/Card.jsx'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './resume.pdf'
import {motion} from 'framer-motion'

const Services = () => {
    const transition = {duration: 1, type: 'spring'}
  return (
    <div className="services" id='Services'>
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis tenetur amet dicta veritatis minus 
                <br /> 
                animi, alias dolor fugiat in!
            </span>
            <a href={Resume} target="_blank">
                <button className="button s-button">Check my CV</button>
            </a>
            <div className="blur s-blur" style={{ background: "#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            <motion.div 
            whileInView={{left: '25rem'}}
            initial={{left:'25%'}}
            transition={transition}
            style={{left: '14rem'}}>
                <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, sketch, Photshop, Adobe, Adobe xd"}
                />
            </motion.div>
            <motion.div 
            whileInView={{left: '5rem'}}
            initial={{left:'25%'}}
            transition={transition}
            style={{ top: "12rem", left: "-4rem"}}>
                <Card
                    emoji={Glasses}
                    heading={"Developer"}
                    detail={"Html, Css, JavaScript, React"}
                />
            </motion.div>
            <motion.div 
            whileInView={{left: '20rem'}}
            initial={{left:'25%'}}
            transition={transition}
            style={{top: "19rem", left: "12rem"}}>
                <Card
                    emoji={Humble}
                    heading={"UI/UX"}
                    detail={"some more dummy text too much of it"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: "va(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services