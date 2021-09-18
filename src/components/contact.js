import React from 'react'
import twitter from '../images/twitter.png'
import telegram from '../images/telegram.png'

function contact() {
  return (
    <div className='contact'>
      <div className='contact-flex'>
        <h1>CONTACT</h1>
        <a href='https://twitter.com/ADA1502' target='_blank'>
          <span>
            <img src={twitter} />
          </span>{' '}
          ADA $150
        </a>
        <a href='https://t.me/ada150dollars' target='_blank'>
          <span>
            <img src={telegram} />
          </span>{' '}
          ADA $150
        </a>
      </div>
    </div>
  )
}

export default contact
