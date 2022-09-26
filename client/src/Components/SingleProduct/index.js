import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useToken } from '../../Admin-S/Contexts/token';
import { useSellerId } from '../../Theme1/Contexts/SellerContext';
import Worder from '../Widgets/Order'
import Wproduct from '../Widgets/Product';

function SingleOrder() {
    const Arr = [
        {
            Label : 'Order Placed',
            Value : 1
        },
        {
            Label : 'Processed',
            Value : 2
        },
        {
            Label : 'Delivered',
            Value : 3
        }
    ]
    const { id } = useParams();
    const [Order, setOrder] = useState()
    let sid = useSellerId()
    const [Products, setProducts] = useState([])
    const [Loading, setLoading] = useState(true)
    const headers = useToken()
    useEffect(() => {
        axios.get('/api/GetOrderDetail/'+sid+'/'+id, { headers: headers }).then((data)=>{
            setOrder(data.data)
            data.data.Products.forEach(element => {
                axios.get('/api/getFullProduct/'+sid+'/'+element.Product).then ((d)=>{
                    const P = Object.create(d.data)
                    P["quantity"] = element.Quantity
                    setProducts(Products => [...Products,P])
                    setLoading(false)
                  })
            });
        }) 
    },[])
  
  return (
    <>
    {
     
        Loading ?<p>Loading....</p>:
        <div>
            <form onSubmit={e=>{
                e.preventDefault()
                axios.put('/api/updateOrderStatus/'+Order._id,{
                    Status : e.target[0].value
                },{headers : headers}).then(()=>{
                    alert('Updated Succesfully')
                    window.location.reload()
                }).catch((e)=>{
                    alert('Error Occured')
                    console.log(e)
                })
            }}>
            <Worder Order={Order}/>
            {Products.map((el=>{
                return <Wproduct Product={el} Type={2}/>
            }))}
            <div className="bg-WbgGrey rounded-xl  p-2 mx-5 my-5 ">
            <div className="flex flex-row justify-between">
                    <div className="flex-col mx-4">
                        <p className="text-sm text-GrayText">Payment Method</p>
                        <p>{Order.Type}</p>
                    </div>
                    <div className="flex-col mx-4">
                        <p className='text-GrayText text-sm'>Date</p>
                        <p>{Order.Date}</p>
                    </div>
                    <div className="flex-col mx-4">
                        <p className="text-sm text-GrayText">Order Total</p>
                        <p>{Order.Total}</p>
                    </div>
                    <div className="flex-col mx-4">
                        <p className="text-sm text-GrayText">Status</p>
                        <select defaultValue={Order.Status} className="rounded-xl p-1.5 text-sm focus:bg-WbgGrey" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                           {Arr.map(el=>{
                               return <option value={el.Value} className="text-sm rounded-md">{el.Label}</option>
                           })}
                        </select>
                    </div>
            </div>
            </div>
            <button type="submit" className='p-3 m-5 max-h-12 bg-NavbarBg text-white rounded-xl float-right' >Save</button>
            </form>
        </div>
      
      
    }
    </>
  )
}

export default SingleOrder