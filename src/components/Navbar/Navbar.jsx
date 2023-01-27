import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Sarthak</div>
            <Toggle/>
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
            <button className="button n-button">Contact</button>
        </div>
    </div>
  )
}

export default Navbar