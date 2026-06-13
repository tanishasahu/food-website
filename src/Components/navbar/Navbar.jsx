import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setshowLogin}) => {
  const [menu, setMenu] = useState("");
  const{getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className='navbar'>

      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")}className={menu === "home" ? "active" : ""}>  Home</Link>
         <a href='#explore-menu' onClick={() => setMenu("menu")}className={menu === "menu" ? "active" : ""}>  About us</a>
      <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""} >Mobile-app</a>
      <a href='#footer' onClick={() => setMenu("contact-us")}className={menu === "contact-us" ? "active" : ""}> Contact us</a>
         
        
      </ul>

      <div className="navbar-rights">

        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets?.basket_icon} alt="basket" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>

        <button onClick={()=>setshowLogin(true)}>Sign in</button>

      </div>

    </div>
  )
}

export default Navbar