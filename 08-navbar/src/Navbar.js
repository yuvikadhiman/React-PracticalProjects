/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showLink, setShowLink] = useState(false);
  const linksContainerRef = useRef(null);
  const linksref = useRef(null);
  // console.log(links)
  //   const Navlink = () => {
  //     return (
  //       <div className="links-container">
  //         <ul className="links" ref={linksref}>
  //           {links.map((link) => {
  //             const { url, id, text } = link;
  //             return (
  //               <li key={id}>
  //                 <a href={url}>{text}</a>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     );
  //   };

  const toggleLinks = () => {
    setShowLink(!showLink);
  };

  const linkStyles = {
    height: showLink
      ? `${linksref.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className='links' ref={linksref}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
