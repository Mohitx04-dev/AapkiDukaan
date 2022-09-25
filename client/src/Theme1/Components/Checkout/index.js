import React, { useState } from "react";
import Account from "../Account";
import {
  useCart,
  useCartUpdate,
} from "../../Contexts/CartContext";
import { Link } from "react-router-dom";
import Textfield from "../FormComponents/textfield";
import axios from "axios";
import { useSellerId } from "../../Contexts/SellerContext";
import { useCustomer } from "../../Contexts/CustomerContext";

function Checkout() {
  const products = useCart();
  const CartUpdate = useCartUpdate();
  let total = 0;
  products.forEach((element) => {
    total += parseInt(element.Price * element.quantity);
    // setTotal(total)
  });
  const [Total, setTotal] = useState(total)
  const RemoveProduct = CartUpdate.RemoveProduct;
  const [Promo, setPromo] = useState("");
  const [Applied, setApplied] = useState(false)
  let id = useSellerId();
  let Customer = useCustomer()
  
  return (
    <div>
      <p className="text-left text-2xl m-2">Checkout </p>

      <div className="flex flex-row justify-between">
        <Account/>
        {/* <AccountBox save={true} 
        Customer={Customer}/> */}
        <div as="div" className=" ">
          <div className="overflow-hidden ">
            <div className="max-w-full flex bg-w">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl ">
                  <div className="flex-1 py-6  px-4 sm:px-6">
                    <div className=" overflow-hidden">
                      <div className="flow-root">
                        <ul
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {products.map((product) => (
                            <li key={product.Name} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  src={
                                    "http://localhost:5000/image/" +
                                    product.Photo
                                  }
                                  alt={product.Name}
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <Link to={'product/'+product._id}>
                                        {product.Name}
                                      </Link>
                                    </h3>
                                    <p className="ml-4">{product.Price * product.quantity} </p>
                                  </div>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <div className="flex">
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        RemoveProduct(product.id);
                                      }}
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{total}</p>
                    </div>
                    {Applied ?
                    
                    <div>
                      <p>{Promo} has been Applied</p>
                      <button onClick={e=>{
                        e.preventDefault()
                        setPromo("")
                        setTotal(total)
                        setApplied(false)
                      }}>Remove</button>
                     </div> 
                        : 
                    <div className="mt-6  justify-center text-sm text-center text-gray-500">
                      <p className="text-left mx-2">Apply Promo Code</p>
                      <div className="flex m-2 ">
                        <Textfield
                          Style="p-2 border"
                          value={Promo}
                          setValue={setPromo}
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            axios.put("/api/checkpromo/"+id,{
                              Code : Promo,
                              Total : total
                            }).then((data)=>{
                                setTotal(data.data.NewTotal)
                                setApplied(true)
                            }).catch(e=>{
                              alert('Invalid Promo Code')
                            })
                          }}
                          className=" bg-theme mx-2  border rounded-lg text-white p-2 ">
                          Apply
                        </button>
                      </div>
                    </div> }
                    <div className="border-t border-gray-200 mt-5 ">
                      {/* <div className="flex mt-5 justify-between text-base font-medium text-gray-900">
                        <p>Promo Code Appplied : {}</p>
                        <p>-{total}</p>
                      </div> */}
                      <div className="flex mt-5 justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>{Total}</p>
                      </div>
                    </div>

                    <div className="mt-6  justify-center text-sm text-center text-gray-500">
                      <p>Proceed to Pay</p>
                      <button onClick={(e)=>{
                        e.preventDefault()
                         
                        let productIds = [];
                        products.map(el=>{
                          if(el.InStock){
                          let x = {
                            "Product" : el._id,
                            "Quantity" : el.quantity,
                            "Price" : el.Price
                          }
                          return productIds.push(x)
                         }
                        })
                        let Article = {
                          Sid : id,
                          Total : Total,
                          Products : productIds,
                          CustId : Customer._id,
                          Type : 'COD',
                          
                        }
                        axios.put('api/PlaceOrder',Article).then((data)=>{
                          alert('Order Placed')
                          window.location.pathname = '/order/'+data.data._id
                        }).catch(e=>{
                          console.log(e)
                        })
                      }} className="p-2 bg-lightgreen text-white rounded-md">
                        Checkout With Cash On Delivery
                        </button>
                        {/* <img
                          className="w-1/2 m-auto"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png"
                        /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
