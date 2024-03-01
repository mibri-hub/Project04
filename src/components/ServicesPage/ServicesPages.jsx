import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import './ServicesPages.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const ServicesPages = () => {
  return (
    <div className="r-wrapper">
      <div className="paddings innerWidth r-container">

        <div className='r-head flexColStart'>
          <span className='goldText'>Szolgáltatásaink</span>
         
        </div>

        <Swiper {...sliderSettings}>

          <SliderButtons />

          {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} 
                  alt="miss" 
                  height={200}
                  />
                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        
      </div>
    </div>
  )
}

export default ServicesPages

const SliderButtons = () => {

  const swiper = useSwiper();

  return (
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}> &lt; </button>
      <button onClick={()=> swiper.slideNext()}> &gt; </button>
    </div>
  )
}