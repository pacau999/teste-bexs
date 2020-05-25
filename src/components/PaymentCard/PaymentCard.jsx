import React from 'react'
import StringMask from 'string-mask'
import cardValidator from 'card-validator'
import './PaymentCard.css'
import visa from './assets/visa.png'
import mastercard from './assets/mastercard.png'
import elo from './assets/elo.png'
import hipercard from './assets/hipercard.png'

const PaymentCard = (props) => {
  const cardNumberFormatter = new StringMask('0000 0000 0000 0000')
  var {number} = props
  const {name, exp, cvv,flipped} = props
  number=number? number.replace(/ /g,'') : undefined
  const validator= cardValidator.number(number,{maxLength: 16})
  const brands ={
    visa,
    mastercard,
    elo,
    hipercard
  }
  //will only change the card to blue(valid status) if the number provided already is potentially valid and the card brand is identified
  const valid = validator.isPotentiallyValid && validator.card && validator.card.type
  
  return (
    <div className={`PaymentCard${flipped?' flipped':''}${valid?' identified':''}`}>
      <div className="inner">
        <div className="front">
          <img className={`brand ${valid &&  brands[validator.card.type] ?'':'hidden'}`} src={valid &&  brands[validator.card.type] ? brands[validator.card.type] : ''}/>
          <div className={`number ${number && number.length>0 ? '' :'untouched'}`}>
            {number ? 
              cardNumberFormatter.apply(number) :  
              '**** **** **** ****'
            }
          </div>
          <div className="name">
            {name ||
              'NOME DO TITULAR'}
          </div>
          <div className="exp">
            {exp ||
              '00/00'}
          </div>
        </div>
        <div className="back">
          <div className={`cvv ${cvv? '':'untouched'}`}>
            {cvv ||
              '***'}
          </div>
        </div>
      </div>
      {/* garantee that all images(in this case the background vectors) are downloaded on component render  */}
      <div className="imgsPreLoad"/>
    </div>
  )
}
export default React.memo(PaymentCard)