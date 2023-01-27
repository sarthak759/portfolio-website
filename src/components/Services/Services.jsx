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
            <span>My Main</span>
            <span>Hobbies</span>
            <span>
                I used to be a professional chess player and I represented IIT Kanpur in inter 
                <br /> 
                IIT sports meet 2022. Made many projects on Web development and I am <br /> regular at competitive programming
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
                    heading = {'Chess'}
                    detail = {"FIDE rated, U-13 state champion, won medals in many inter college/school tournaments"}
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
                    detail={"Html, Css, JavaScript, React, Nodejs, Express, Jquery, Mongodb"}
                />
            </motion.div>
            <motion.div 
            whileInView={{left: '20rem'}}
            initial={{left:'25%'}}
            transition={transition}
            style={{top: "19rem", left: "12rem"}}>
                <Card
                    emoji={Humble}
                    heading={"Programming"}
                    detail={"Regularly give competetive programming contest on codeforces. Have good knowledge of Data structures and Algorithms"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: "va(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services