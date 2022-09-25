import React from 'react'
import CartProvider from './Contexts/CartContext'
import Main from './main'
import SellerDataProvider from './Contexts/SellerContext'
import CustomerProvider from './Contexts/CustomerContext'

function Theme1() {
    let Categories = [
        {
            text : "Fashion ",
            link : "#"
        },
        {
            text : "Mobiles and Tablets",
            link : "#"
        },
        {
            text : "Consumer Electronics",
            link : "#"
        },
        {
            text : "Books ",
            link : "#"
        },
        {
            text : "Movie Tickets",
            link : "#"
        },
        {
            text : "Baby Products",
            link : "#"
        },
        {
            text : "Groceries ",
            link : "#"
        },
        {
            text : "Food Takeaway/Delivery",
            link : "#"
        }
    ]
    return (
        
        <SellerDataProvider>
        <CartProvider>
        <CustomerProvider >
        <div className="overflow-hidden"> 
            <Main Arr={Categories}/>
        </div>
        </CustomerProvider >
        </CartProvider>
        </SellerDataProvider>
    )
}

export default Theme1
