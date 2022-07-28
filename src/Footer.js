import React from 'react'
import './CSS/Footer.css'
import icon from './Images/IconWhite.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-content'>
        <div className='footer-content-main'>
          <div>
            <h3><img src={icon} alt="Drunken Bytes Icon" className='footer-image'/>Drunken Bytes</h3>
            <p>Drunken Bytes provides NFT-based warranty solutions to brands and retailers, that help them to make their 
                customer service digitalize, easy, and better than before.</p>
          </div>
        </div>
        <div className='footer-content-contact'>
            <h3>Contact</h3>
            <h6><MailOutlineIcon/> &nbsp;sadhnani.sushil@gmail.com</h6>
            <h6><MailOutlineIcon/> &nbsp;mananj02012gmail.com</h6>
            <h6><MailOutlineIcon/> &nbsp;akshatgadodia@gmail.com</h6>
        </div>
       </div>
      <div className='footer-copyright'>
        Copyright &#169; {(new Date().getFullYear())} | Drunken Bytes
      </div>
    </div>
  )
}

export default Footer