import React , {useContext, useState} from 'react'
import { useCustomer } from './CustomerContext'

const CartContext = React.createContext()
const CartUpdateContext = React.createContext()
const CartOpenContext = React.createContext()

export function useCart() {
    return useContext(CartContext)
}

export function useCartUpdate() {
    return useContext(CartUpdateContext)
}

export function useCartOpen() {
    return useContext(CartOpenContext)
}

function CartProvider({children}) {
    const User = useCustomer()
    const [Cart,setCart] = useState([])
    const [open, setOpen] = useState(false)
    function AddProduct(item) {
        if(User){
            const Product = Cart.find(el=> {
                return (el._id===item._id) ;
            })
            if(Product){
                Product["quantity"]+=item["quantity"];
            }
            else{
                setCart(old => [...old,item]);
            }
            setOpen(true)
        }
        else{
            window.alert('Login First')
        }
    }
    const closeCart = ()=>{
        setOpen(false)
    }
    const RemoveProduct = (o) => {
        setCart(Cart.filter(item => item._id !== o));
       };
     
    return (
        <CartContext.Provider value={Cart}>
                    <CartUpdateContext.Provider value={{AddProduct,RemoveProduct}}>
                    <CartOpenContext.Provider value={{open,setOpen,closeCart}}>
                        {children}
                        </CartOpenContext.Provider>
                    </CartUpdateContext.Provider>
        </CartContext.Provider>
    )
}

export default CartProvider
