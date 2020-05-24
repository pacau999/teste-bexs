import React,{useState} from 'react'
import floatToBrl from '../../utils/floatToBrl'
import './Checkout.css'
import PaymentCard from '../../components/PaymentCard/PaymentCard'

const Checkout = () => {
  const [flipped,setFlipped]= useState(false)
  const [number,setNumber] = useState(null)
  const installments = Array(12).fill({}).map((option,index)=>({
    value:index+1,
    label:`${index+1}x ${floatToBrl(12000/(index+1))} sem juros`
  }))
  const steps=['Carrinho','Pagamento','Confirmação']
  const toggleFlipped = async ()=>{
    await setFlipped(!flipped)
  }
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
          <PaymentCard/>
        </div>
      </div>
      <div className="white">

      </div>
    </section>
  )
}
export default Checkout