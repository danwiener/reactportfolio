import React, { useState, useEffect } from 'react'
import {RiMenu5Fill} from 'react-icons/ri'
import {IoCloseCircleOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function Header() {
    const[showHeader, setShowHeader] = useState(false)
    const path = window.location.pathname


  return (
    <div className='header'>
        {showHeader ? (
        <IoCloseCircleOutline onClick={() =>{setShowHeader(!showHeader)}} className='menu-icon position-fixed top-0 end-0' />
        ) : (
        <RiMenu5Fill className='menu-icon position-fixed top-0 end-0' onClick={() =>{setShowHeader(!showHeader)}}/>
        )}

        <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box1`} id='headerbg' style={{opacity: 0.98, zIndex:1, backgroundImage:`url(./headerbg4.svg)`}}>
          <li className={`${path=='/' && 'active'}`}><Link to='/'>Home</Link></li>
          <li className={`${path=='/projects' && 'active'}`}><Link to='/projects'>Projects</Link></li>
          <li className={`${path=='/about' && 'active'}`}><Link to='/about'>About</Link></li>
          <li className={`${path=='/contact' && 'active'}`}><Link to='/contact'>Contact</Link></li>
        </ul>


    </div>
  )
}
