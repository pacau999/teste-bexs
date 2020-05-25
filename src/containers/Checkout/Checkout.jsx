import React,{useState,useRef} from 'react'
import './Checkout.css'
import Stepper from '../../components/Stepper/Stepper'
import CheckoutForm from './CheckoutForm/CheckoutForm'



const Checkout = () => {
  
  const steps=['Carrinho','Pagamento','Confirmação']
  const currentStep = 1
  const cardPortal = useRef(null)
  const pagar = async (values, { setSubmitting })=>{
    console.log('POST request sent to endpoint /pagar',values)
    try{
      let nValues = {...values}
      nValues.number = nValues.number.replace(/ /g,'')
      let response = await fetch('http://fake.fake.fake/pagar',{
        method:'POST',
        body:JSON.stringify(nValues)
      })
    }catch(err){
      // handle errors
    }
  }
  return (
    <section className="Checkout">
      <div className="red">
        <div className="content">
          <nav className="desktopGoBack">
            <div className="icon-chevron-left"/>
            Alterar forma de pagamento
          </nav>
          <nav className="mobileGoBack">
            <div className="icon-chevron-left"/>
            <span><strong>Etapa {currentStep + 1} </strong> de {steps.length} </span>
            <span className="right-spacer"/>
          </nav>
          <div className="title">
            <div className="icon">
              <div className="icon-card"/>
            </div>
            <div>
              Adicione um novo cartão de crédito
            </div>
          </div>
          
          {/* The PaymentCardComponent is part of CheckoutForm component and will be rendered here through a React.Portal */}
          <div ref={cardPortal} className="cardPortal">
          </div>
        </div>
      </div>
      <div className="white">
        <div className="content">
          <Stepper steps={steps} current={currentStep} />
          <CheckoutForm cardPortalRef={cardPortal} onSubmit={pagar}/>
        </div>
      </div>
    </section>
  )
}
export default Checkout