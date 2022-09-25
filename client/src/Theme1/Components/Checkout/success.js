
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSellerId } from '../../Contexts/SellerContext'
import CartBox from '../CartBox'
import ProgressDiv from '../FormComponents/progress'
function Success(props) {
    const { id } = useParams();
    const [Order, setOrder] = useState()
    let sid = useSellerId()
    const [Products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/api/GetOrderDetail/'+sid+'/'+id).then((data)=>{
            setOrder(data.data)
            data.data.Products.forEach(element => {
                axios.get('/api/getFullProduct/'+sid+'/'+element.Product).then ((d)=>{
                    const P = Object.create(d.data)
                    P["quantity"] = element.Quantity
                    setProducts(Products => [...Products,P])
                  })
            });
        })
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <p className="text-left text-2xl font-bold mb-2">{"Order # "+id}</p>
            {/* 20 , 60, 100 */}
            <ProgressDiv perc={Order ? Order.Status * 33.3 : 20} />  
            <div className="flex justify-between mt-5">
                <p>Order Placed</p>
                <p>Processing</p>
                <p>Delivered</p>
            </div>
            <div className="flex justify-between">
            <CartBox products={Products} total={34}/>
            </div>
        </div>
    )
}

export default Success
