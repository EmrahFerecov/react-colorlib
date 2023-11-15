import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar-content'>
        <h1 className='pulse'>Pulse<span className='noqte'>.</span></h1>
        <ul className='home-page'>
            <il className='home'>Home</il>
            <il>About us</il>
            <il>Restaurant</il>
            <il>News</il>
            <il>Contact</il>
        </ul>
        <span className='reserv'>Reservations <i class="fa-solid fa-phone">652-345 3222 11</i></span>
    </div>
  )
}


export default Navbar