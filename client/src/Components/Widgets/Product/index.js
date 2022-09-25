import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSellerId } from '../../../Theme1/Contexts/SellerContext'

function Wproduct(props) {
  const [Product, setProduct] = useState({})
  const [Loading, setLoading] = useState(true)
  let sId = useSellerId()
  useEffect(() => {
    axios.get('/api/getFullProduct/'+sId+'/'+props.Product._id).then ((data)=>{
      setProduct(data.data)
      setLoading(false)
    })
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if(Loading) {
    return (
      <div className="App">Loading...</div>
    )
  }
  const Box1 = ()=>{
    return (
      <div className="flex flex-row"> 
      <div className="flex flex-col m-3 text-justify">
         <p className="text-GrayText text-sm">Category</p>
         <p>{props.Product.Category}</p>
     </div>
     <div className="flex">
         <div className=" flex flex-col m-3 text-justify" >
           <p className="text-GrayText text-sm"> Price</p>
           <p >{Product.Price} </p>
         </div>
           
     </div>
     <div className="flex flex-col m-3 text-justify">
         <p className="text-GrayText text-sm">In Stock?</p>
         <p>{props.Product.InStock ? "Yes" : "No"}</p>
     </div>
     <div className="flex">
     <Link to={"/admin/modifyProduct/"+props.Product._id} className="p-3 m-3 max-h-12 bg-NavbarBg text-white rounded-xl" >Modify </Link> 
     </div>
     </div>
    )
  }
  const Box2 = ()=>{
    return (
        <div className="flex flex-row"> 
        <div className="flex">
            <div className=" flex flex-col m-3 text-justify" >
              <p className="text-GrayText text-sm"> Price</p>
              <p >{props.Product.Price} </p>
            </div>
        </div>
        <div className="flex flex-col m-3 text-justify">
            <p className="text-GrayText text-sm">Quantity</p>
            <p>{props.Product.quantity }</p>
        </div>
        <div className="flex flex-col m-3 text-justify">
            <p className="text-GrayText text-sm">Subtotal</p>
            <p>{props.Product.Price * props.Product.quantity}</p>
        </div>
        </div>
    )
  }
  return (
    <div className={" bg-WbgGrey rounded-xl " + (props.Type===1 ? " m-5 " : " mx-5 ")}>
        <div className="flex flex-row  justify-between  ">
            <div className="flex m-2 ">
                <div className="flex flex row">
                    <div className="mx-10 flex">
                    <img
                    src={'http://localhost:5000/image/'+Product.Photo}
                    className="h-20 w-20 rounded-xl object-center object-cover"
                    alt={Product.Name}
                    />
                    </div>
                    <div className="mt-2 flex flex-col text-justify">
                        <p >{Product.Name}</p> 
                        <p className="text-GrayText">{(Product._id).substring(-1,7)}</p>
                    </div>
                </div>
                
            </div>
            <div className="flex m-2">
              {props.Type===1 ? <Box1 /> : <Box2 />}
            </div>
        </div>
    </div>
  )
}

export default Wproduct