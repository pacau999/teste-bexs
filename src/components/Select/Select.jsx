import React from 'react'
import { MenuItem } from '@material-ui/core'
import TextField from '../TextField/TextField'
//import Chevron from '../../assets/Chevron'
import './Select.css'
const Chevron = ()=>(
  <span className="icon-chevron-down"></span>
)
const Select = (props) => {
   
  const {options}= props
  return (
    <TextField 
      select 
      className="Select"
      SelectProps={{IconComponent:Chevron}}
      {...props}
    >
      {options && options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default Select