import React ,{useEffect}from "react";
import { useSelector,useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchAllproducts } from "../action/actions";
const ProductListing = ()=>{
   const dispatch = useDispatch()
    (()=>{
      dispatch(fetchAllproducts());
   },[])
   return (
    <div className="ui grid container">
       <ProductComponent/>
    </div>
   )
}
export default ProductListing;