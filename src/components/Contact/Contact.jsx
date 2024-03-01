import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'


const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">

       
        <div className="flexColStart c-left">
          <span className='goldText'>Elérhetőségeink:</span>
         
          <div className="flexColStart contactModes">
          
            <div className="flexStart row">
            
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                  <span className='primaryText'>Deák István</span>
                    <span className='secondaryText'>+36305588774</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+36305588774">Hívjon most!</a>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                  <span className='primaryText'>Deák Gergely</span>
                    <span className='secondaryText'>+36305588775</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+36305588774">Hívjon most!</a>
                </div>
              </div>
              
            </div>
            <div className="openTimeTable">
              <h3 className='primaryText'>Nyitvatartás</h3>
              <table>
                <tbody>
                  <tr><th>Hétfő</th><td>9:00 - 18:00</td></tr>
                  <tr><th>Kedd</th><td>9:00 - 18:00</td></tr>
                  <tr><th>Szerda</th><td>9:00 - 18:00</td></tr>
                  <tr><th>Csütörtök</th><td>9:00 - 18:00</td></tr>
                  <tr><th>Péntek</th><td>9:00 - 18:00</td></tr>
                  <tr><th>Szombat</th><td>9:00 - 18:00</td></tr>
                  <tr><th>Vasárnap</th><td>Zárva</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="c-right">
          <div className="image-container">
            <img src="./images/img07.jpg" alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact