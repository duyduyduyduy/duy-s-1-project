import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector,useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import  Button  from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';
import { fetchAllproducts } from "../action/actions";
import {Link} from 'react-router-dom';
import './Style.css'
function Pagination() {
  const dispatch=useDispatch();
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(()=>{
    dispatch(fetchAllproducts());
 },[])
   const items=useSelector(
    (state)=>state.user.data    
  )
  const handlePagination=()=>{
    const endOffset = itemOffset + 4;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / 4));
    setCount(count+1)
  }
  useEffect(() => {
    // Fetch items from another resources.
    if(count<20)
    {
      handlePagination()
    }
  }, [itemOffset, currentItems]);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 4) % items.length;
    setItemOffset(newOffset);
    setCount(0)
  };
  const isLoading=useSelector(
    (state)=>state.user.isLoading    
  )

  return (
    <Card style={{width:"1520px",height:"1200px"}}>
    <Row xs={1} md={2} className="g-4" style={{marginTop:"25px"}}>
    {isLoading===true?
      (currentItems.map((item,index)=>(
        <Col>
        <Card>
          <Card.Img variant="top" src={item.image} style={{height:"400px",width:"400px",alignSelf: 'center'}}/>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Title>${item.price}</Card.Title>
            <Link to={`product/${item.id}`}>
                <Button>See Detail</Button>
              </Link>
          </Card.Body>
        </Card>
      </Col>
      )))
      :
     <Spinner animation="grow" variant="warning" style={{marginTop:"400px",width: "100px", height: "100px",alignSelf:"center"}}/>
    }
    </Row>
    <br/>
    <div className="d-flex justify-content-center mb-3">
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
    </Card>
  );
}
export default Pagination;