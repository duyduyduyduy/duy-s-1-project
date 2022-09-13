import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import styled from 'styled-components';
import "./Style.css"
import {Link} from 'react-router-dom';
import  Button  from "react-bootstrap/Button";
import { countProduct,countProductMinus } from "../action/actions";
import CloseButton from 'react-bootstrap/CloseButton';
import { clearProduct,countClearProduct } from "../action/actions";
import { Card } from "react-bootstrap";
const Left=styled.div`
flex:1;
align-items:center;
`
const Right=styled.div`
flex:1;
display:flex;
justify-content:flex-end;
`
const Center=styled.div`
flex:1;
`
const Wrapper=styled.div`
 padding:10px 20px;
 display:flex;
 justify-content:space-between;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:500px;
`
const MenuItem_1 = styled.div`
font-size:14px;
cursor:pointer;
margin-left:15px;
`
const MenuItem_2 = styled.div`
font-size:14px;
cursor:pointer;
margin-left:15px;
margin-right:15px;
margin-top:15px;
`
const MenuItem_3 = styled.div`
font-size:14px;
cursor:pointer;
margin-left:15px;
margin-right:15px;
margin-top:25px;
`
const SummaryPrice=()=>{
    const dispatch=useDispatch();
    const [numbers, setNumber] = useState([]);
    const [count, setCount] = useState(0);
    const summaryPrice=useSelector(
        (state)=>state.user.summaryPrice
    )
    useEffect(() => {
      if(count<4)
      {
      setNumber(summaryPrice)
      }
      setCount(count+1)
    },[]);
    const increment=(id)=>{
      const newState=numbers.map(obj=>{
        if(obj.data.id===id)
        {
          return {...obj,count:obj.count+1}
        }
        return obj;
      })
      setNumber(newState);
      dispatch(countProduct(id))
    }
    const decrement=(id)=>{
      const newState=numbers.map(obj=>{
        if(obj.data.id===id)
        {
          return {...obj,count:obj.count-1}
        }
        return obj;
      })
      setNumber(newState);
      dispatch(countProductMinus(id))
    }
    const handleOnclickClosebutton=(id)=>{
      dispatch(countClearProduct(id));
      dispatch(clearProduct(id));
      const tmpArray=numbers.filter(item=>item.data.id!==id);
      setNumber(tmpArray)
    }
    return(
         <Card style={{width:"1520px",height:`${750+summaryPrice.length*350+50}px`}}>
         <Wrapper>
          <Left><h1 style={{fontWeight: "bold"}} className="font-link">Your shopping cart</h1></Left>
          <Link to={"/product"}>
          <Right style={{fontWeight: "bold",fontSize:"15px"}} className="font-link text">continue shopping</Right>
          </Link>
         </Wrapper>
         <Wrapper>
         <Left className="font-link-1">PRODUCT</Left>
         <Right>
              <MenuItem className="font-link-1">QUANTITY</MenuItem>
              <MenuItem className="font-link-1">TOTAL</MenuItem>
         </Right>
         </Wrapper>
         <hr
        style={{
          background: 'gray',
          color: 'black',
          borderColor: 'black',
          height: '1px',
        }}/>
        {numbers.map((item,index)=>(
        <Wrapper>
        <Left>
        <CloseButton onClick={()=>handleOnclickClosebutton(item.data.id)}></CloseButton>
         <div class="card border-light mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src={item.data.image} class="card-img" alt="..."/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <Link to={`product/${item.data.id}`}>
                    <h5 class="card-title" style={{color:"black"}} className="text-1"><b>{item.data.title}</b></h5>
                </Link>
                <h5><b>${item.data.price}</b></h5>
                <p class="card-text">{item.data.description}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
         </Left>
         <Right>
              <MenuItem_1>
                <Button onClick={()=>decrement(item.data.id)} disabled={item.count>1?false:true}>-</Button>
              </MenuItem_1>
              <MenuItem_1>
                <p style={{fontSize:"20px"}}><b>{item.count}</b></p>
              </MenuItem_1>
              <MenuItem_1>
                <Button onClick={()=>increment(item.data.id)}>+</Button>
              </MenuItem_1>
              <MenuItem>$ {(item.data.price*item.count).toFixed(2)}</MenuItem>
         </Right>
         </Wrapper>
        ))}
        <hr
        style={{
          background: 'gray',
          color: 'black',
          borderColor: 'black',
          height: '1px',
        }}/>
        <Right>
            <MenuItem_2 style={{fontSize:"19px"}}><b><i>Subtotal</i></b></MenuItem_2>
            <MenuItem_2 style={{fontSize:"19px"}}>$ {(numbers.reduce((a,v) =>  a = a + v.count*v.data.price , 0 )).toFixed(2)}</MenuItem_2>
        </Right>
        <br/>
        <Right style={{fontSize:"23px"}}><b><i>We accept the below methods of payment</i></b></Right>
        <Right>
            <MenuItem_3>
              <img style={{width:"500px",height:"120px"}} src="https://content.asos-media.com/-/media/customer-care/images/imported/us/uspaymentmethodsklarna.ash?la=en-us&h=418&w=1385&hash=A8DC189DE960960509E521CB0405352C"></img>
            </MenuItem_3>
        </Right>
        <p className="font-link Text" style={{fontSize:"19px",textAlign: "center"}} >
        <h1 style={{fontWeight: "bold",textAlign: "center"}}>ABOUT ORDERS</h1>
        Warm reminder: The price of placing an order directly into the shopping cart is the product price excluding tax and does not include the international shipping fee. Therefore, please contact us for the logistics shipping fee. Thank you for your support and understanding.
        <br/>
        <br/>
        Suggestions: If you need our samples or custom logo, We support you to place an product order, but there is no need to pay for the time being, just send us the order details.
        </p> 
         </Card>
    )
}
export default SummaryPrice;