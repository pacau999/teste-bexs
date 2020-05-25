import React from 'react'
import './CartAside.css'
export const CartAside = () => {
  return (
    <aside className="CartAside">
      <div className="inner">
        <div className="title">
          <div className="skeleton"/>
        </div>
        <div className="divider top"/>
        <div className="details">
          {Array(3).fill('').map((row,i)=>(
            <div className="tr" key={i}>
              <div className="tc">
                <div className="skeleton left"/>
              </div>
              <div className="tc">
                <div className="skeleton right"/>
              </div>
            </div>
          ))}
          
        </div>
        <div className="divider bottom"/>
        <div className="total">
          <div className="tr">
            <div className="tc">
              <div className="skeleton left"/>
            </div>
            <div className="tc">
              <div className="skeleton right"/>
            </div>
          </div>
        </div>
      </div>
      
    </aside>
  )
}
