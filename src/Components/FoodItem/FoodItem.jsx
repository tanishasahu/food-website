import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { motion } from "framer-motion";
const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <motion.div
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.05 }}>


    <div className='food-item'>

      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />

        {!cartItems[id]
          ? <div className='add' onClick={() => addToCart(id)}>+</div>
          : <div className="food-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>

      <div className="food-item-info">

        <div className="food-item-name-rating">
          <p>{name}</p>

          {/* ⭐ FIXED STARS */}
          <div className="food-item-rating">★★★★☆</div>

        </div>

        <p className='food-item-desc'>{description}</p>
        <p className="food-item-price">${price}</p>

      </div>

    </div>
      {/* card content */}
</motion.div>
  )
}

export default FoodItem