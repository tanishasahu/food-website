import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import { motion } from "framer-motion";
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {

    const {food_list}= useContext(StoreContext)

  return (
    <motion.div
  className="food-display-list"
  initial="hidden"
  whileInView="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  {food_list.map((item, index) => {
    if (category === "All" || category === item.category)
      return (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <FoodItem
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        </motion.div>
      );
  })}
</motion.div>
  )
}

export default FoodDisplay