import React,{useState} from 'react'
import './CSS/NavigationBar.css'
import { useSelector, useDispatch } from 'react-redux'
import {actions} from './Redux/store.js'
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button  } from 'react-bootstrap';
import brandIcon from './Images/BrandIcon.png'
const NavigationBar = () => {
  const dispatch = useDispatch();
  const isWalletConnected = useSelector((state)=>state.slice.isWalletConnected);
  const [selected, setSelected] = useState('home');

  const connectWallet = () => {
    let message;
    if(typeof window!=="undefined" && typeof window.ethereum!=="undefined"){
      window.ethereum.request({method : "eth_requestAccounts"})
          .then((data)=>{
              dispatch(actions.setIsWalletConnected(true));
              dispatch(actions.setAccount(data[0]));
          })
          .catch((err)=>{
              message = err.message;
              alert(message)
          })
    }
    else{
      alert('Please Install Metamask');
    }
  }

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand className='navbar-brand'>
          <Link to="/" onClick={()=>setSelected('home')} className='navbar-brand-link'><h2><b>
          <img className='brand-icon' src={brandIcon} alt="brand icon" />
          Drunken Bytes</b></h2></Link></Navbar.Brand>
        <Button className={isWalletConnected ? 'navbar-button-hidden' : 'navbar-button navbar-button-middle' }
        variant="light" onClick={connectWallet}>Connect</Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navigation-bar-toggle'/>
        <Navbar.Collapse id="responsive-navbar-nav" className='navbar-collapse'>
          <Nav>
            <Link to="/" onClick={()=>setSelected('home')} className={selected==='home' ? 'navbar-link link-selected' : 'navbar-link' }>
              Home</Link>
            <Link to="/create" onClick={()=>setSelected('create')} className={selected==='create' ? 'navbar-link link-selected' : 'navbar-link' }>
              Create</Link>
            <Link to="/transfer" onClick={()=>setSelected('transfer')} className={selected==='transfer' ? 'navbar-link link-selected' : 'navbar-link' }>
              Transfer</Link>
          </Nav>
        <Button className={isWalletConnected ? 'navbar-button-hidden' : 'navbar-button navbar-button-last' }
        variant="light" onClick={connectWallet}>Connect</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar