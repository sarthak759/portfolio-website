import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'
import 'animate.css'

function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name animate__animated animate__flip animate__slow'>Sarthak</div>
            {/* <Toggle/> */}
        </div>
        <div className='n-right'>
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to="Navbar" smooth={true} activeClass='activeClass' >
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li>Hobbies</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                    <li>Skills</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true}>
                    <li>Experience</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
            <button className="button n-button">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar