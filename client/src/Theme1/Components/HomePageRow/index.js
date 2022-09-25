import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard'
import CatMenuV from '../CategoryMenu/vertical'
import axios from 'axios'
import { useSellerId } from '../../Contexts/SellerContext'
function Row(props) {
    const [Products, setProducts] = useState([])
    let id  = useSellerId()
    useEffect(() => {
        axios.put('/api/findProductsbyCategory/'+id,{"Category":props.Category}).then((data)=>{
            setProducts(data.data)
        })
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        Products.length>0 ? 
        <div className="grid grid-cols-4  max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div>
        <CatMenuV Arr={props.Arr} title={props.Category} />
        {/* <Link to="#"><p className="text-left m-3 mx-9 font-bold">More Products {'>'} </p> </Link> */}
        </div>
        {Products.map(el=>{
            if(el.InStock) return <ProductCard pid={el._id} key={el._id}/>  
        })
        
        }
    
         
        </div>
        :<></>
    )
}

export default Row
