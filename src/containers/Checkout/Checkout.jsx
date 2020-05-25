import React,{useState,useRef} from 'react'
import floatToBrl from '../../utils/floatToBrl'
import './Checkout.css'
import PaymentCard from '../../components/PaymentCard/PaymentCard'
import Stepper from '../../components/Stepper/Stepper'
import CheckoutForm from './CheckoutForm/CheckoutForm'



const Checkout = () => {
  
  const [number,setNumber] = useState(null)
  
  const steps=['Carrinho','Pagamento','Confirmação']
  const cardPortal = useRef(null)
  
  
  
  return (
    <section className="Checkout">
      <div className="red">
        <div className="content">
          <nav className="desktopGoBack">
            <div className="icon-chevron-left"/>
            Alterar forma de pagamento
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
          <div ref={cardPortal}>
          </div>
        </div>
      </div>
      <div className="white">
        <div className="content">
          <Stepper steps={steps} current={1} />
          <CheckoutForm cardPortalRef={cardPortal}/>
        </div>
      </div>
    </section>
  )
}
export default Checkout