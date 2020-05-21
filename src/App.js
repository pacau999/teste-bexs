import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentCard from './components/PaymentCard/PaymentCard';

function App() {
  const [flipped,setFlipped]= useState(false)
  const [number,setNumber] = useState(null)
  const toggleFlipped = async ()=>{
    await setFlipped(!flipped)
  }
  return (
    <div className="App">
      <PaymentCard 
        flipped={flipped} 
        number={number}
        cvv='123'
      />
      <button onClick={toggleFlipped}>Toggle flipped</button>
      <input type="text" onChange={e =>{setNumber(e.target.value)}} />
    </div>
  );
}

export default App;
