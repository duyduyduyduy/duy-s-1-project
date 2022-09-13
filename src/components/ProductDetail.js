import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import {fetchSpecificApi} from "../action/actions";
import { useSelector,useDispatch } from "react-redux";
import { Button } from 'reactstrap';
import Spinner from 'react-bootstrap/Spinner';
import { countProduct,getDetailData } from "../action/actions";
import { fireProductwithDuppedClick } from "../action/actions";
import Card from 'react-bootstrap/Card';
const ProductDetail = ()=>{
    const dataProduct=useSelector(
        (state)=>state.user.dataProduct  
    )
    const[flag,setFlag]=useState(0)
    const isLoadingSelected=useSelector(
        (state)=>state.user.isLoadingSelected    
    )
    const dispatch=useDispatch();
    const {productId}=useParams()
    useEffect(()=>{
        dispatch(fetchSpecificApi(productId));
     },[])
    const handleOnclickAdd=(dataProduct)=>{
      if(dataProduct.id!==flag)
      {
        dispatch(countProduct())
        dispatch(getDetailData(dataProduct))
        setFlag(dataProduct.id)
      }
      else if(dataProduct.id===flag)
      {
        dispatch(fireProductwithDuppedClick(dataProduct.id))
        dispatch(countProduct())
      }
    }
   return (
  <Card style={{width:"1520px",height:"900px"}}>
    <div className="ui grid container" style={{marginTop:"20px",alignSelf: 'center'}}>
       {isLoadingSelected===true?
        <div className="ui segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">+</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui image" src={dataProduct.image} style={{width:"500px",height:"700px"}}/>
              </div>
              <div className="column rp" style={{alignItems: "center"}}>
                <h1>{dataProduct.title}</h1>
                <h2>
                  <a className="ui teal  tag label" style={{width:"200px",height:"40px"}}>
                  <h3 style={{alignSelf: 'center'}}>${dataProduct.price}</h3>
                  </a>
                </h2>
                <Button color="secondary" size="lg" disabled='true' block >{dataProduct.category}</Button>
                <p>{dataProduct.description}</p>
                <div class="ui blue vertical animated button" style={{width:"90px",height:"38px",alignSelf: 'center'}} tabindex="0">
                <div class="hidden content" onClick={()=>handleOnclickAdd(dataProduct)}>Add to cart</div>
                    <div class="visible content">
                    <i class="shop icon"></i>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       :
       <Spinner animation="grow" variant="warning"
      style={{marginTop:"400px",width: "100px", height: "100px",alignSelf:"center"}}
      />
       }
        
    </div>
    </Card>
   )
}
export default ProductDetail;