import React from "react";
import './Style.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Header from "./Header";
import Example from "./SliderImage";
const Subheader=()=>{
    return(
        <>
            <container className="sub-header">
            <p className="text-header" style={{fontSize:"12px"}}>
            <LocalShippingIcon></LocalShippingIcon> 
            <> </>
            <b>Freeship to US & CA    --------    FINAL HOURS! 50% Off Everything With Code: BUITHANHDUY</b>
            </p>   
            </container>
        </>
    )
}
export default Subheader;