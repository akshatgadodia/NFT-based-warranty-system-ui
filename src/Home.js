import React from 'react'
import './CSS/HomePage.css'
import Accordion from 'react-bootstrap/Accordion';
import AccordionComponent from './Components/AccordionComponent';
import faq from './Data/faq';
import MarketingIcon from './Images/MarketingIcon.png'
import OwnershipIcon from './Images/OwnershipIcon.png'
import TransferIcon from './Images/TransferIcon.png'
import ConnectIcon from './Images/ConnectIcon.png'
import ViewIcon from './Images/ViewIcon.png'
import CreateIcon from './Images/CreateIcon.png'

const Home = () => {
  return (
    <>
      <div className="landing-page">
        <div className="landing-page-title">
          <p><em> Welcome to Drunken Bytes </em></p> 
          <h1>NFT based warranty system</h1>
          <p>
          Our aim is to help brands and retailers to make their customer service digitalize. 
          We provide solution to make NFT-based warranty cards that are transferable and will be decayed when the warranty gets expired.
          </p>
        </div>
      </div>

      <div className="information-page">
        <h1>Mint your warranty card NFT today</h1>
        <div className="information-page-div">
          <div className="information-page-image">
            
          </div>
          <div className="information-page-data">
            <div className="information-page-data-div">
              <span>
                <img src={MarketingIcon} alt="MarketingIcon" />
              </span>
              <span>
                <h4>Drive attention to your brand</h4>
                <p>NFT is a trending technology nowadays. Using Drunken Bytes to provide your customers NFT based Warranty will 
                  drive huge customer attention to your brand.</p>
              </span>
            </div>
            <div className="information-page-data-div">
              <span>
                <img src={OwnershipIcon} alt="OwnershipIcon" />
              </span>
              <span>
                <h4>Prove product ownership</h4>
                <p>As NFT is an absolute way to prove ownership. The holder of the NFT warranty can prove his/her ownership of the product.</p>
              </span>
            </div>
            <div className="information-page-data-div">
              <span>
                <img src={TransferIcon} alt="TransferIcon" />
              </span>
              <span>
                <h4>Transfer your product warranty</h4>
                <p>When customer wants to transfer their product they can also transfer warranty card NFT along with it.</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-page">
        <h1>Frequently Asked Questions</h1>
      <Accordion className='faq-page-accordion'>  
        {faq.map((data)=>{
          return (<AccordionComponent key={data.id} id={data.id} title={data.title} data={data.data}/>)
        })}
      </Accordion>
      </div>

      <div className="get-started">
        <h1>Get started in few minutes</h1>
        <div className="get-started-div">
          <div className="get-started-div-div">
            <div>
              <img src={ConnectIcon} alt="ConnectIcon"/>
              <h5>Connect your metamask account</h5>
            </div>
            <div>
              <img src={CreateIcon} alt="CreateIcon" />
              <h5>Create NFT warranty card</h5>
            </div>
            <div>
              <img src={ViewIcon} alt="ViewIcon" />
              <h5>View it on OpenSea</h5>
            </div>  
          </div>
        </div>
      </div>
    </>
  )
}

export default Home