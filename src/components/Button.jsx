import React from 'react'

const Button = (props) => {
  return (
    <button className='menim-custom-stilim'>
      {props.buttonunIcindekiShekil&&<img src={props.buttonunIcindekiShekil}className='play-iconu' alt="" />}{props.buttonunIcindekiYazi}
    </button>
  )
}

export default Button
