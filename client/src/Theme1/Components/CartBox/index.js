import React from 'react'
import { Link } from 'react-router-dom'

function CartBox(props) {
  let products = props.products
    return (
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        { 
                        products.map((product) =>
                        (
                          <li key={product.id} className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                              <img
                              src={'http://localhost:5000/image/'+product.Photo}
                              alt={product.Name}
                               className="w-full h-full object-center object-cover"
                              />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <Link to={product._id}>{product.Name}</Link>
                                  </h3>
                                  <p className="ml-4">{product.Price } * {product.quantity} =  {product.Price * product.quantity}</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              
    )
}

export default CartBox
