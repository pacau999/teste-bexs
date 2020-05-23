import React from 'react'
import './Stepper.css'

const Stepper = (props) => {
  const {steps,current} = props
  return (
    <div className="Stepper">
      {steps && steps.map((step,i)=>(
        <div className="step" key={i}>
          <div className={"icon "+ (i<current ? 'done' :'')}>
            {i<current ? <span className="icon-check" /> : <span className="number">{i+1}</span>}
          </div>
          {step}
          {i<(steps.length-1) && <span className="icon-chevron-right"/>}
        </div>
      ))}
    </div>
  )
}
export default Stepper
