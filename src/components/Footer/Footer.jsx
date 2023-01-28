import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}} />
        <div className="f-content">
            {/* <span>sarthakgoyal12914@gmail.com</span> */}
            <div className="f-icons">
              <a href="https://www.instagram.com/_sg_12914/" target="_blank">
                <Insta color="white" size='3rem' />
              </a>
              <a href="https://www.linkedin.com/in/sarthak-goyal-5536ba202/" target="_blank">
                <Linkedin color="white" size="3rem"/>
              </a>
              <a href="https://github.com/sarthak759" target="_blank">
                <Github color="white" size="3rem"/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Footer