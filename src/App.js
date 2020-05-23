import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentCard from './components/PaymentCard/PaymentCard';
import TextField  from './components/TextField/TextField';
import Select from './components/Select/Select';
import Stepper from './components/Stepper/Stepper';

const floatToBrl = (x)  => {
  var brlS =x.toFixed(2)
  brlS =  brlS.replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if(brlS.length - brlS.indexOf(',') !== 3) brlS = brlS + '0'
  return "R$" +brlS
}

function App() {
  const [flipped,setFlipped]= useState(false)
  const [number,setNumber] = useState(null)
  const installments = new Array(12).fill({}).map((option,index)=>({
    value:index+1,
    label:`${index+1}x ${floatToBrl(12000/(index+1))} sem juros`
  }))
  const steps=['Carrinho','Pagamento','Confirmação']
  const toggleFlipped = async ()=>{
    await setFlipped(!flipped)
  }
  return (
    <div className="App">
      {/* <PaymentCard 
        flipped={flipped} 
        number={number}
        cvv='123'
      /> */}
      {/* <button onClick={toggleFlipped}>Toggle flipped</button>  */}
      {/* <TextField label="Número do cartão" error helperText="Número do cartão" onChange={e =>{setNumber(e.target.value)}} /> */}
      <Stepper steps={steps} current={1} />
      <Select options={installments} defaultValue="" fullWidth error label="Número de parcelas"/>
    </div>
  );
}

export default App;
