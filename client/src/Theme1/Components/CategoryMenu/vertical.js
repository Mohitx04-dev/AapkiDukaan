import React from 'react'
import { Link } from 'react-router-dom'
import { useSellerData } from '../../Contexts/SellerContext'
function CatMenuV(props) {
    let {Categories} = useSellerData()
    return (
        <div className="flex flex-col text-left   max-w-xs mt-10">
        <span className="text-2xl">{props.title}</span>
            {Categories.map(el=>{
                return (
                    <Link className="hover:bg-searchBarGrey text-theme rounded-md p-1 underline" to={'/Category/'+el} key={el}>{el}</Link>
                )
            })}
        </div>
    
    )
}

export default CatMenuV
