import React, { useState } from 'react';
import {links,socials} from './data';
import {FaBars} from 'react-icons/fa';
import logo from './logo.svg';

const navbar = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showLink,setShowLink]=useState(false)
    // console.log(links)

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">3
            <img src={logo}  classNamealt="logo" alt='logo'/>
            <button className='nav-toggle'><FaBars/></button>
        </div>

      </div>
    </nav>
  )
}

export default navbar
