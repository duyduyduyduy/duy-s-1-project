import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchAllproducts } from "../action/actions";
import PaginatedItems from "./Pagination";
const ProductComponent = ()=>{
  const dispatch=useDispatch()
    const data=useSelector(
        (state)=>state.user.data    
    )
    const isLoading=useSelector(
      (state)=>state.user.isLoading    
    )
    useEffect(()=>{
      dispatch(fetchAllproducts());
   },[])
   return (
      <PaginatedItems itemsPerPage={4} />
   )
}
export default ProductComponent;