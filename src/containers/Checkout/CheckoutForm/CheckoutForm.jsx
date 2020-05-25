import React,{useState} from 'react'
import ReactDOM from 'react-dom';
import {Formik} from 'formik'
import * as Yup from 'yup'
import TextField from '../../../components/TextField/TextField'
import {IMaskMixin} from 'react-imask';
import cardValidator from 'card-validator'
import {parse as dateParse,isValid as dateIsValid} from 'date-fns'
import PaymentCard from '../../../components/PaymentCard/PaymentCard';
import Select from '../../../components/Select/Select';
import floatToBrl from '../../../utils/floatToBrl'

const MaskedTextField = IMaskMixin(({inputRef, ...props})=>(
  <TextField
    inputRef={inputRef}
    {...props}
  />
))
// const validator= cardValidator.number(number,{maxLength: 16})
const installments = Array(12).fill({}).map((option,index)=>({
  value:index+1,
  label:`${index+1}x ${floatToBrl(12000/(index+1))} sem juros`
}))
const errorMessages={
  number:{
    invalid:'Número de cartão inválido',
    empity:'Insíra o número do cartão'
  },
  name:{
    invalid:'Insira o nome completo',
    empity:'Insíra o nome(como no cartão)'
  },
  cvv:{
    invalid:'Código inválido',
    empity:'Insira o código de segurança'
  },
  exp:{
    invalid:'Data inválida',
    empity:'Insira a data de validade'
  },
  installments:{
    empity:'Selecione o número de parcelas'
  }
}
const validationSchema = Yup.object().shape({
  number: Yup
    .number(errorMessages.number.invalid)
    .required(errorMessages.number.empity)
    .test('card-validator',errorMessages.number.invalid,async function(value){
      return value && await (await (cardValidator.number(value,{maxLength: 16}))).isValid
    }),
  name:Yup
    .string(errorMessages.name.invalid)
    .required(errorMessages.name.empity)
    .test('name-validator',errorMessages.name.invalid, function(value){
      return value &&  (value.trim().split(' ')).length>1
    }),
  exp:Yup
    .string(errorMessages.exp.invalid)
    .required(errorMessages.exp.empity)
    .test('date-validator',errorMessages.exp.invalid, function(value){
      return value &&  dateIsValid(dateParse(value,'MM/yy',new Date()))
    }),
  cvv:Yup
    .number(errorMessages.cvv.invalid)
    .required(errorMessages.cvv.empity)
    .test('cvv-validator',errorMessages.cvv.invalid,function(value){
      console.log(value)
      return value && String(value).length>2
    }),
  installments: Yup
    .number()
    .required(errorMessages.installments.empity)
    
})
const CheckoutForm = (props) => {
  const [cardFlipped,setCardFlipped] = useState(false)
  console.log(dateParse)
  return (
    <Formik
      enableReinitialize 
      initialValues={{number:'',name:'',exp:'',cvv:'',installments:''}}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isSubmitting,
        /* and other goodies */
      }) =>{
        console.log(values)
        return(
          <form onSubmit={handleSubmit}>
            {props.cardPortalRef && props.cardPortalRef.current && ReactDOM.createPortal(
              <PaymentCard 
                {...values}
                flipped={cardFlipped}
              />
            ,props.cardPortalRef.current)}
            
            <MaskedTextField
              mask="0000 0000 0000 0000"
              name="number"
              label="Número do cartão"
              value={values.number}
              unmask={false}
              onAccept={(value)=>{setFieldValue('number',value,true)}}
              onBlur={handleBlur}
              fullWidth
              error={touched.number && errors.number && true}
              helperText={touched.number && errors.number}
            />
            <TextField
              fullWidth
              label="Nome (igual ao cartão)"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name && true}
              helperText={touched.name && errors.name}
            />
            <MaskedTextField
              label="Validade"
              mask="00/00"
              name="exp"
              value={values.exp}
              onAccept={(value)=>{setFieldValue('exp',value,true)}}
              onBlur={handleBlur}
              fullWidth
              error={touched.exp && errors.exp && true}
              helperText={touched.exp && errors.exp}
            />
             <MaskedTextField
              label="CVV"
              mask="0000"
              name="cvv"
              value={values.cvv}
              onAccept={(value)=>{setFieldValue('cvv',value,true)}}
              onFocus={()=>{setCardFlipped(true)}}
              onBlur={(event)=>{handleBlur(event); setCardFlipped(false)}}
              fullWidth
              error={touched.cvv && errors.cvv && true}
              helperText={touched.cvv && errors.cvv}
            />
            <Select
               fullWidth
               name="installments"
               options={installments}
               value={values.installments}
               onChange={handleChange}
               onBlur={handleBlur}
               error={touched.installments && errors.installments && true}
               helperText={touched.installments && errors.installments}
               label="Número de parcelas"
            />
          </form>
        )
      }}
      
    </Formik>
  )
}

export default CheckoutForm