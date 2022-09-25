import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Worder(props) {
    const [Customer, setCustomer] = useState()
    useEffect(() => {
    //   axios.get('')
    }, [])
    
  return (
    <div className=" bg-WbgGrey m-5 rounded-xl">
    <div className="flex flex-row justify-between p-2">
        
            <div className="flex-col">
               <p className="text-sm text-GrayText">Order Id</p>
               <p>{props.Order._id.substring(-1,6)}</p>
            </div>
            <div className="flex-col">
                <p className="text-GrayText text-sm">{props.Order.CustName}</p>
                 { props.Order.Shipping ? <p className="text-sm">{props.Order.Shipping.Street+" "+props.Order.Shipping.City}</p> : null} 
            </div>



<div className="flex flex-row">
<div className="flex flex-col mx-4">
<p className="text-GrayText text-sm"> Order Total </p>
<p > {props.Order.Total}</p>
</div>

<div className="flex flex-col mx-4">
<p className="text-GrayText text-sm">Status </p>
<p > 
    
        {props.Order.Status===1 ? 
            "Order Placed"
        :  props.Order.Status===2 ?
                 "Processed"
        :  props.Order.Status===3 ?
                 "Delivered"
        : null}
    
     </p>
</div>
{props.Type===1 ? 
<Link to={"/admin/sales/"+props.Order._id} className="p-3 m-3 mx-4 max-h-12 bg-NavbarBg text-white rounded-xl text-sm" >Update </Link> 
:null} 
             </div>

    </div>

   </div>
  )
}

export default Worder