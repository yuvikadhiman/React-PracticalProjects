import React, { useState } from 'react';
import {links,socials} from './data';
import {FaBars} from 'react-icons/fa';
import logo from './logo.svg';

const navbar = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showLink,setShowLink]=useState(false)
    // console.log(links)
   const Navlink=()=>{
    return(
        <div className="links-container">
            <ul className="links">
                {links.map((link)=>{
                    const {url,id,text}=link;
                    return(
                        <li key={id}><a href={url}>{text}</a></li>
                    )
                    
                })}
            </ul>
        </div>
    )
   }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
            <img src={logo}  classNamealt="logo" alt='logo'/>
            <button className='nav-toggle' onClick={()=>setShowLink(!showLink)}><FaBars/></button>
        </div>
        {showLink && <Navlink/>}
        

      </div>
    </nav>
  )
}

export default navbar
