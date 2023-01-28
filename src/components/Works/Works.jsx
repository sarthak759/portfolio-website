import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {motion} from 'framer-motion'

const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span>Uses these programming</span>
            <span>Languages & Libraries</span>
            <span>
                C++ for programming
                <br />
                Mostly React js for frontend development
                <br /> 
                Node js for backend development
                <br />
                Firebase, SQL or Mongodb for database
            </span>
                <button className="button s-button">Hire me</button>
            <div className="blur s-blur" style={{ background: "#ABF1FF94"}}></div>
        </div>
        <div className="w-right">
            <motion.div 
            initial={{rotate: 45}}
            whileInView={{rotate: 0}}
            viewport={{margin:'-40px'}}
            transition={{duration: 3.5, type: 'spring'}}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" alt="C++" 
                    style={{transform: "scale(0.1)"}}
                    />
                </div>
                <div className="w-secCircle">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="ReactJs" 
                    style={{transform: "scale(0.1)"}}
                    />
                </div>
                <div className="w-secCircle">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="NodeJs" 
                    style={{transform: "scale(0.1)"}}
                    />
                </div>
                <div className="w-secCircle">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png" alt="Firebase" 
                    style={{transform: 'scale(0.1)'}}
                    />
                </div>
                <div className="w-secCircle">
                    <img src="https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="MongoDB" 
                    style={{transform: "scale(0.2)"}}
                    />
                </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>

        </div>
    </div>
  )
}

export default Works