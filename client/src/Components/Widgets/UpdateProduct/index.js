import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSellerData, useSellerId } from '../../../Theme1/Contexts/SellerContext';

function WupdateProduct(props) {
    let { Categories } = useSellerData();
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
   return (
    <div className={" bg-WbgGrey rounded-xl m-5 "}>
    <div className="flex flex-row  justify-between  ">
        <div className="flex m-2 ">
            <div className="flex flex-row">
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
        <div className="flex m-2  w-100">
        <div className="flex flex-row justify-between "> 
      <div className="flex flex-col m-3 text-justify">
         <p className="text-GrayText text-sm">Category</p>
         <select defaultValue={props.Product.Category} className="p-2 rounded-xl">
            {Categories.map((el)=>{
                return <option value={el}>{el}</option>
            })}
         </select>
     </div>
     <div className="flex">
         <div className=" flex flex-col m-3 text-justify" >
           <p className="text-GrayText text-sm"> Price</p>
           <input className="p-2 rounded-xl" defaultValue={Product.Price}/>
         </div>
           
     </div>
     <div className="flex flex-col m-3 text-justify">
         <p className="text-GrayText text-sm">In Stock?</p>
         <select defaultValue={props.Product.InStock } className="p-2 rounded-xl">
             <option value="true">Yes</option>
             <option value="false">No</option>
         </select>
     </div>
     </div>
    </div>
    </div>
    </div>
  )
}

export default WupdateProduct