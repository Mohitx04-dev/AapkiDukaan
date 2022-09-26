import {React} from 'react'
import { Link } from 'react-router-dom'
import { useCartUpdate } from '../../Contexts/CartContext'

function ProductCardH(props) {
  const AddProduct = useCartUpdate().AddProduct
    return (
        <div className="border-2 border-searchBarGrey rounded-lg m-2 p-2 w-full">
        <div className="h-50">
        <div className="grid grid-cols-3 border-searchBarGrey rounded-lg">
        <Link to={'/product/'+props.product._id} className="h-56 m-auto">
        <img
            src={'http://aapkidukaan.live/image/'+props.product.Photo}
            className="w-100 max-h-full object-contain"
            alt={props.product.Name}
          />
          </Link>
        <div className="mt-2 mx-3 text-left justify-between">
          
            <h3 className="text-sm text-gray-700 font-bold">
              <Link to={'products/'+props.product._id}>
                <span aria-hidden="true"  />
                {props.product.Name}
              </Link>
            </h3>
        </div>
        <div className="">
            <p className=" text-left text-3xl font-bold  text-gray-900 py-2 px-4 ">{props.product.Price + " ₹"}</p>
            <button
                type="submit"
                onClick={e=>{
                  e.preventDefault()
                  props.product["quantity"] = 1;
                  AddProduct(props.product)
              }}
                className="justify-center bg-theme text-w py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              > Add to Cart
              </button>
            </div>

      </div>
      </div>
      </div>


    
    )
}

export default ProductCardH
