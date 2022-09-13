import Header from "./Header";
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Example from "./SliderImage";
import LoginFrom from "./LoginForm";
import SignUp from "./SignUp";
import { useSelector} from "react-redux";
import Pagination from "./Pagination";
import SummaryPrice from "./SummaryPrice";
import Subheader from "./Subheader";
const Home =(props)=>{
  const flag =useSelector(
    (state)=>state.user.flag    
  )
  const summaryPrice=useSelector(
    (state)=>state.user.summaryPrice
  )
  const flagClose =useSelector(
    (state)=>state.user.flagClose  
  )
  const flag_1 =useSelector(
    (state)=>state.user.flag_1    
  )
  const flagClose_1 =useSelector(
    (state)=>state.user.flagClose_1  
  )
      return (
        <>
        <Router>
          <Subheader/>
          <Header/>
          {flag&&!flagClose&&<LoginFrom/>}
          {flag_1&&!flagClose_1&&<SignUp/>}
          <Switch>
            <Route path="/"exact component={Example}/>
            <Route path="/product" exact component={Pagination}/>
            <Route path="/summary" exact component={SummaryPrice}/>
            <Route path="/product/:productId" exact component={ProductDetail}/>
          </Switch>
        </Router>
        </>
    )
}
export default Home;