import React from 'react'

function Wcoupon(props) {
  return (
    <div className=" bg-WbgGrey m-5 rounded-xl w-100">
    <div className="flex flex-row justify-between p-2 mx-10">
        
            <div className="flex-col">
               <p className="text-sm text-GrayText">Coupon Code</p>
               <p>{props.Coupon.Code}</p>
            </div>

    <div className="flex flex-row">
        <div className="flex flex-col mx-4">
        <p className="text-GrayText text-sm">% Discount</p>
        <p >{props.Coupon.Discount + "%"}</p>
    </div>

        <div className="flex flex-col mx-4">
        <p className="text-GrayText text-sm">Max Discount </p>
        <p > {props.Coupon.MaxDiscount}  </p>
        </div>
        <div className="flex flex-col mx-4">
        <button className="bg-Removebg text-white p-2 m-2 rounded-xl text-sm" onClick={(e)=>{
            e.preventDefault()
            props.Delete(props.Coupon._id)
        }}>Remove</button>
        </div>
        </div>
    </div>
   </div>
  )
}

export default Wcoupon