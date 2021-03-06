import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="inner">
        <div className="logo">
          <div className="icon-sale-green">
            <span className="path1"/>
            <span className="path2"/>
            <span className="path3"/>
            <span className="path4"/>
          </div>
          <div className="icon-demo-shop"/>
        </div>
        <nav className="items">
          {Array(5).fill('').map((_,i)=>(
            <div key={i} className="item"/>
          ))}
        </nav>
      </div>
    </div>
  )
}
