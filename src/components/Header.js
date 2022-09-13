import React, { useEffect} from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector,useDispatch} from "react-redux";
import { toggleFlag,toggleFlag_1 } from "../action/actions";
import {Link} from 'react-router-dom';
import { fetchAllproducts } from "../action/actions";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchAllproducts());
     },[])
    const handleonClickCart=()=>{
    }
    const countProduct=useSelector(
        (state)=>state.user.countProduct
    )
    const toggleModal=()=>{
        dispatch(toggleFlag());
    }
    const toggleModal_1=()=>{
        dispatch(toggleFlag_1());
    }
    return(
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
       <Container>
        <Link style={{textDecoration: 'none'}} to={"/"}>
          <Navbar.Brand href="#home" style={{fontSize:"30px"}}><b>MAXHON.</b></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Link style={{textDecoration: 'none'}} to={"/"}>
            <Nav.Link href="#home">Home</Nav.Link>
           </Link>
           <Link style={{textDecoration: 'none'}} to={"/product"}>
            <Nav.Link href="#men">Men's Clothing</Nav.Link>
            </Link>
            <Link style={{textDecoration: 'none'}} to={"/product"}>
            <Nav.Link href="#women">Women's Clothing</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              width="100px"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link onClick={toggleModal}>Log in</Nav.Link>
            <Nav.Link onClick={toggleModal_1}>
              Sign up
            </Nav.Link>
          </Nav>
            <Badge color="primary" badgeContent={countProduct}>
                <Link to={'/summary'} style={{textDecoration: 'none'}}>
                <ShoppingCartOutlinedIcon onClick={()=>handleonClickCart()}></ShoppingCartOutlinedIcon>
                </Link>
            </Badge>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
export default Header;