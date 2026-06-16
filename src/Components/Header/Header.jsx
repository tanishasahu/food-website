import React from 'react'
import './Header.css' 
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
         
<motion.div
 initial={{ opacity: 0, x: -50 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
>
 <h2>Order your favourite food here</h2>
      </motion.div>
      <p>
        Choose from a diverse menu featuring delicious dishes made with finest ingredients with culinary experirece.
         Our mission to satisfy your craving and elevate your dining experience, one delicious meal at a time.
      </p>
      <button>View Menu</button>
    </div>
    </div>
  )
}

export default Header