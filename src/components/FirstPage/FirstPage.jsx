import React from 'react'
import './FirstPage.css'
import { motion } from 'framer-motion'


const FirstPage = () => {
  return (
    <div className="fp-wrapper">
      <div className="paddings innerWidth flexCenter fp-container ">

       
        <div className="flexColStart fp-left">
          <div className="fp-title">
                <br/>My Kitchen <br/>
          </div>
          <div className="flexColStart fp-desc">
            <h2>Az Ön álom konyhája</h2>
          </div>
        <span>  
          <h3>Ergonómikus és személyre szabott konyhák tervezése és kialakítása </h3>
        </span>
        </div>

        <div className="flexCenter fp-right">
          <motion.div 
            initial={{x:"7rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring"
            }} 
            className="image-container">
            <img src="./images/img04.jpg " alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FirstPage