import React from 'react'
import { Link } from 'react-router-dom'
import { useSellerData } from '../../Contexts/SellerContext'

function Logo() {
    const SellerName = useSellerData().Title
    return (
            <Link to="/">
            <h2 className=" pt-1 font-bold text-xl ">
                <span className="text-theme">{SellerName} </span>| Aapki Dukaan </h2>
            </Link>
    )
}

export default Logo
