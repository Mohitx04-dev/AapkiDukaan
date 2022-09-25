import React from 'react'
import { Link } from 'react-router-dom'
import { useCart, useCartUpdate} from '../../Contexts/CartContext'
import axios from "axios";
import { useEffect, useState } from "react";
import { useSellerId } from "../../Contexts/SellerContext";
function ProductCard(props) {
    const products = useCart()
    const sId = useSellerId();
    const [product, setproduct] = useState(0)
    const AddProduct = useCartUpdate().AddProduct
    useEffect(() => {
      axios.get('/api/getFullProduct/'+sId+'/'+props.pid).then ((data)=>{
        setproduct(data.data)
      })
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
      product ?
        <div key={products.id} className="group relative mx-2 border-2 p-2 border-searchBarGrey rounded-lg">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
        <Link to="#">
          <img
              src={'http://localhost:5000/image/'+product.Photo}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              alt={product.Name}
          />
          </Link>
        </div>
        <div className="mt-2 mx-3 flex flex-col text-left justify-between">
          
            <h3 className="text-sm text-gray-700 opacity-70">
              <Link to={'product/'+product._id}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.Name}
              </Link>
            </h3>
            
            <div className="flex flex-row justify-between">
            <p className="text-sm font-medium text-gray-900 py-2 px-4 ">{product.Price} ₹</p>
            <button
                type="submit"
                className="group relative justify-center bg-theme text-w py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={e=>{
                    e.preventDefault()
                    const p = Object.create(product);
                    p["quantity"] = 1;
                    AddProduct(p)
                }}
              > Add to Cart
              </button>
            </div>
            
        </div>
      </div>
      : null
    )
}

export default ProductCard
