import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useCart, useCartUpdate, useCartOpen} from '../../Contexts/CartContext'
import { Link } from 'react-router-dom'

function CartBox (props) {
    const products = useCart()
    const CartUpdate = useCartUpdate()
    // const CartOpen = useCartOpen()
    let total=0;
    products.forEach(element => {
        total+=parseInt(element.Price * element.quantity)
    });
    const RemoveProduct = CartUpdate.RemoveProduct
    // const setOpen = CartOpen.setOpen
    // const close = useCartOpen().closeCart
    return (
        <div className="absolute inset-0 overflow-hidden">
        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex bg-w">
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                {/* {props.Static==false ? 
                        ()=> {return( */}
                            <div className="flex items-start justify-between">
                            <div className="ml-3 h-7 flex items-center">
                              {/* <button
                                type="button"
                                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                onClick={e=>{
                                  e.preventDefault()
                                  close()
                              }}
                              > */}
                                <p className=" text-black">Press ESC to close</p>
                                {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                              {/* </button> */}
                            </div>
                          </div>
                        {/* )}
                        :null
                    } */}
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        { 
                        products.map((product) =>
                        (
                          <li key={product.id} className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                              <img
                              src={'http://aapkidukaan.live/image/'+product.Photo}
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
                                  <p className="ml-4">{product.Price} ₹</p>
                                  <p className="ml-4">Quantity = 1 * {product.quantity}</p>
                                </div>
                              </div>
                              <div className="flex-1 flex items-end justify-between text-sm">

                                <div className="flex">
                                  <button type="button" 
                                  onClick={e=>{
                                      e.preventDefault()
                                      RemoveProduct(product._id)
                                  }}
                                  className="font-medium text-indigo-600 hover:text-indigo-500">
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
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <Link to="/checkout"
                      className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium  bg-indigo-600 hover:bg-indigo-700"
                    >
                      Checkout
                    </Link>
                  </div>
                  {/* <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        className="text-indigo-600 font-medium hover:text-indigo-500"
                        onClick={() => setOpen(false)}
                      >
                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}

export default function Cart() {
    const CartOpen = useCartOpen()
    const open = CartOpen.open
    const setOpen = CartOpen.setOpen
  return (
    <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
       <CartBox onClose={setOpen} />
    </Dialog>
    </Transition.Root>
  )
}