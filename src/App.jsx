import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentCard from './components/PaymentCard/PaymentCard';
import TextField  from './components/TextField/TextField';
import Select from './components/Select/Select';
import Stepper from './components/Stepper/Stepper';
import Navbar from './components/Navbar/Navbar';
import { CartAside } from './components/CartAside/CartAside';
import Checkout from './containers/Checkout/Checkout';



function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <section className="contentContainer">
        <div className="content">
          <Checkout/>
          <CartAside/>
        </div>
        
       
      </section>
      
    </div>
  );
}

export default App;
