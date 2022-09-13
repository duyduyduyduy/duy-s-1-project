import { REQUEST_CALL_API,SUCCESS_CALL_API,FAIL_CALL_API,
REQUEST_CALL_SELECTED_API,SUCCESS_CALL_SELECTED_API,FAIL_CALL_SELECTED_API,
COUNT_PRODUCT,TOGGLE_FLAG,TOGGLE_FLAG_AGAIN,TOGGLE_FLAG_1,TOGGLE_FLAG_AGAIN_1,GET_DETAIL_DATA,
GET_PROCDUCT_DUPPED_CLICK,COUNT_PRODUCT_DECREMENT,CLEAR_PRODUCT,COUNT_CLEAR_PRODUCT
} from "./types"
import axios from 'axios';


//--------------- Fetch all data -------------------
export const requestCallApi=()=>{
  return{
    type:REQUEST_CALL_API
  }
}
export const successCallApi=(data)=>{
  return{
    type:SUCCESS_CALL_API,
    payload:data
  }
}
export const errorCallApi=()=>{
  return{
    type:FAIL_CALL_API
  }
}

export const fetchAllproducts=()=>{
  return async (dispatch,getState)=>{
       dispatch(requestCallApi());
       try{
       const res=await axios.get("https://mocki.io/v1/8a64e97f-bfaf-4c82-8d41-fc3e61463aca");
       dispatch(successCallApi(res.data))
       }
       catch(error){
       }
  }; 
 }

//-------- Fetch specific data --------
export const requestCallSpecificApi=()=>{
  return{
    type:REQUEST_CALL_SELECTED_API
  }
}
export const successCallSpecificApi=(data)=>{
  return{
    type:SUCCESS_CALL_SELECTED_API,
    payload_1:data
  }
}
export const errorCallSpecificApi=()=>{
  return{
    type:FAIL_CALL_SELECTED_API
  }
}

export const fetchSpecificApi=(id)=>{
  return async (dispatch,getState)=>{
       dispatch(requestCallSpecificApi());
       try{
       const res=await axios.get(`https://fakestoreapi.com/products/${id}`);
       dispatch(successCallSpecificApi(res.data))
       }
       catch(error){
       }
  }; 
 }
//------- Count Product -------
export const countProduct=(id)=>{
  return{
    type:COUNT_PRODUCT,
    payload:id
  }
}
export const countProductMinus=(id)=>{
  return{
    type:COUNT_PRODUCT_DECREMENT,
    payload:id
  }
}
//------- Toggle flag popup Login -----
export const toggleFlag=()=>{
  return {
    type:TOGGLE_FLAG
  }
}
export const toggleFlagAgian=()=>{
  return {
    type:TOGGLE_FLAG_AGAIN
  }
}
//------- Toggle flag popup Sign up -----
export const toggleFlag_1=()=>{
  return {
    type:TOGGLE_FLAG_1
  }
}
export const toggleFlagAgian_1=()=>{
  return {
    type:TOGGLE_FLAG_AGAIN_1
  }
}
//-------- Dispatch detail data to redux --------
export const getDetailData=(data)=>{
  return {
    type:GET_DETAIL_DATA,
    payload:
    {
      data,
      count:1
    }
  }
}

export const fireProductwithDuppedClick=(id)=>{
  return{
    type:GET_PROCDUCT_DUPPED_CLICK,
    payload:id
  }
}

export const clearProduct=(id)=>{
  return{
   type:CLEAR_PRODUCT,
   payload:id
  }
}
export const countClearProduct=(id)=>{
  return{
    type:COUNT_CLEAR_PRODUCT,
    payload:id
  }
}