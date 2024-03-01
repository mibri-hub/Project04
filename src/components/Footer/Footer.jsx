import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        
          <div className="flexColStart f-left"> 
            <img src="./images/logo.png" alt="" width={120} />
            <span className='secondaryText'>
              My Kitchen <br/>
              Álom konyhák
            </span>
          </div>

      <div className="flexColStart f-right">
        <span className='primaryText'>Információ</span>
        <span className='secondaryText'>6000 Kecskemét Cserebogár utca 62</span>
      </div>

      </div>
    </section>
  )
}

export default Footer