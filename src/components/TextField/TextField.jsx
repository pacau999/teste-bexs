import React from 'react'
import MaterialTextField from '@material-ui/core/TextField';
import './TextField.css'
const TextField = (props) => {
  const {select,fullWidth,SelectProps,error,label,onChange,inputRef,value,defaultValue,onBlur,name,type,helperText,onFocus} = props
  const wantedProps = {select,fullWidth,SelectProps,error,label,onChange,inputRef,value,defaultValue,onBlur,name,type,helperText,onFocus}
  
  return (
    <MaterialTextField {...wantedProps} className={props.className + " TextField"}>
      {props.children}
    </MaterialTextField>
  )
}
export default TextField
