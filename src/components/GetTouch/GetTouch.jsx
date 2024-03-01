import React from 'react'
import './GetTouch.css'

export const GetTouch = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Kérdése van:</span>
          <span className='secondaryText'>
            Írjon üzenetet!
          </span>
          <button className="button">
            <a href="mykitchen@gmail.com">Küldés</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default GetTouch

