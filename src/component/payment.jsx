

import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import PaymentForm from './PaymentForm'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import image from '../assets/images/drill.webp'
import Back from '../assets/icons/back'
function PaymentPage() {
    const { productId } = useParams();
    const [data, setData] = useState({
        forSale: false,
        discription: 'this is ',
        price: 1200,
        name: 'new',
        discount: 12,
        batchNumber: 123,
    })
     console.log(productId,"id")
 
    console.log(data)
    return (
        <div className=" ">
            <ToastContainer/>
            <Back/>
            <div  className='m-5  p-2 rounded' style={{background:"#E15C0B", color:'white'}}>
                {/* <img src={image} width={100} height={100}/> */}
               
                {[{jobID:1, title:'Job 1', batchNo:"653qdx62",quantity:1,price:1000}].map((obj,index)=>
                <div style={{border:'1px solid white', margin:'4px', padding:"5px", borderRadius:'6px'}}>
                    <h5>{obj?.jobID} </h5> 
                   <h5>{obj?.title}</h5>
                   <h5> batchNo# {obj.batchNo}</h5>
                   <h5> Price : <strong style={{color:"blue"}}>{obj.price}$</strong></h5>
                </div>)}
                <PaymentForm productId={productId} />
                   
            </div>
        </div>
    );
}

export default PaymentPage;
