import React from 'react'
import { Link } from 'react-router-dom'
import { useSellerData } from '../../Contexts/SellerContext'
function CatMenu(props) {
    let {Categories} = useSellerData()
    return (
        <div className="flex flex-row justify-evenly mt-10 mb-10 bg-searchBarGrey">
            {Categories.map(el=>{
                return (
                    <Link className="hover:bg-searchBarGrey rounded-md p-2 text-theme" to={"Category/"+el} key={el}>{el}</Link>
                )
            })}
        </div>
    )
}

export default CatMenu
