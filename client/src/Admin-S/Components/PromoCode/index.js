import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {
    useSellerId,
  } from "../../../Theme1/Contexts/SellerContext"
import { Link } from 'react-router-dom';
import { useToken } from '../../Contexts/token';
import Wcoupon from '../../../Components/Widgets/Coupons';
function PromoCode() {
    let Sid=useSellerId()
    const [isLoading, setisLoading] = useState(true)
    const [PromoCode, setPromoCode] = useState({
    })
    let headers = useToken()

    useEffect(() => {
       axios.get("/api/GetPromoCode/"+Sid,{headers: headers}).then(data=>{
           setPromoCode(data.data)
           setisLoading(false)
       })
                  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const Delete = (row) =>{
        axios.put("/api/DeletePromo/"+Sid,{id : row},{headers: headers}).then((data)=>{
            alert('Delete Successly')
            window.location.reload()
        })
     }
    if(isLoading) {
        return (
            <div>Loading</div>
        )
    }
    return (

        <div className="m-10 ">
            <div className='flex flex-row'>
        <h1 className="text-3xl m-4 text-left flex-auto">PromoCode</h1>
        <div className='flex-auto m-4 '>
        <Link to="add" className=" max-h-10 text-white p-2 rounded-lg bg-NavbarBg " >Add +</Link>
        </div>
        </div>
        <div>
     {PromoCode.map((el)=>{
         return <Wcoupon Coupon={el} Delete={Delete}/>
     })}
     </div> 
           
    </div>
     
    )
}


export default PromoCode
