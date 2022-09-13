import { countProduct } from "../action/actions";
import { COUNT_PRODUCT,REQUEST_CALL_API,SUCCESS_CALL_API,FAIL_CALL_API,
  REQUEST_CALL_SELECTED_API,SUCCESS_CALL_SELECTED_API,FAIL_CALL_SELECTED_API,
  TOGGLE_FLAG,TOGGLE_FLAG_AGAIN,TOGGLE_FLAG_1,TOGGLE_FLAG_AGAIN_1,GET_DETAIL_DATA,
  GET_PROCDUCT_DUPPED_CLICK,COUNT_PRODUCT_DECREMENT,CLEAR_PRODUCT,COUNT_CLEAR_PRODUCT } from "../action/types"

    //---------------------- State ----------------------
    const INITIAL_STATE = {
    data:[],
    countProduct:0,
    dataProduct:{},
    isLoading:false,
    isError:false,
    isLoadingSelected:false,
    isErrorSelected:false,
    flag:false,
    flagClose:false,
    flag_1:false,
    flagClose_1:false,
    summaryPrice:[]
    };
    //----------------------------------------------------
    
    //---------------------- Reducer ----------------------
    const userReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case REQUEST_CALL_API:
              return {
                ...state,isLoading:false
              };
            case SUCCESS_CALL_API:
              return{
                 ...state,data:action.payload,
                 isLoading:true
              };
            case FAIL_CALL_API:
              return{
                ...state,
                 isLoading:false,
                 isError:true
              };
            
            case REQUEST_CALL_SELECTED_API:
              return {
                ...state,isLoadingSelected:false,
                isErrorSelected:false
              };
            case SUCCESS_CALL_SELECTED_API:
              return{
                 ...state,dataProduct:action.payload_1,
                 isLoadingSelected:true,
                 isErrorSelected:false
              };
            case FAIL_CALL_SELECTED_API:
              return{
                ...state,
                isLoadingSelected:false,
                isErrorSelected:true
            };
            case COUNT_PRODUCT:
              const duy=state.summaryPrice.map(obj=>{
                 if(obj.data.id===action.payload)
                 {
                  return {...obj,count:obj.count+1}
                 }
                 return obj;
              })
              return{
                ...state,countProduct:state.countProduct+1,
                summaryPrice:duy
              }
            case COUNT_PRODUCT_DECREMENT:
              const duy_1=state.summaryPrice.map(obj=>{
                if(obj.data.id===action.payload)
                {
                 return {...obj,count:obj.count-1}
                }
                return obj;
             })
              return{
                ...state,countProduct:state.countProduct-1,
                summaryPrice:duy_1
              }
            case TOGGLE_FLAG:
              return{
                ...state,flag:true,
                flagClose:false
              }
            case TOGGLE_FLAG_AGAIN:
              return{
                ...state,flagClose:true,
                flag:false
              }
            case TOGGLE_FLAG_1:
              return{
                ...state,flag_1:true,
                flagClose_1:false
              }
            case TOGGLE_FLAG_AGAIN_1:
              return{
                ...state,flagClose_1:true,
                flag_1:false
              }
            case GET_DETAIL_DATA:
              return{
                ...state,
                summaryPrice:[...state.summaryPrice,action.payload]
              }
            case GET_PROCDUCT_DUPPED_CLICK:
              const tmp=state.summaryPrice.map(obj=>{
                if(obj.data.id===action.payload)
                {
                  return {...obj,count:obj.count+1}
                }
                return obj;
              })
              return {
                ...state,
                summaryPrice:tmp
              }
            case CLEAR_PRODUCT:
              const tmpArray=state.summaryPrice.filter(item=>item.data.id!==action.payload)
              return{
                ...state,
                summaryPrice:tmpArray
              }
            case COUNT_CLEAR_PRODUCT:
              let tmpNumber=state.summaryPrice.map(item=>{
                if(item.data.id===action.payload)
                {
                  return item.count;
                }
              })
              let tmpnumber=0;
              {tmpNumber.map(item=>{
                if(item)
                {
                  tmpnumber=item
                }
              })}
              return{
                ...state,countProduct:parseInt(state.countProduct)-parseInt(tmpnumber)
              }
            default:
              return state;
        }

    };
    //-------------------------------------------------------

    export default userReducer;