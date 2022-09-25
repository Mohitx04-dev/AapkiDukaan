import React from 'react'
import { Link } from 'react-router-dom'
function CatMenu(props) {
    return (
        <div className="flex flex-row justify-evenly mt-10 mb-10 bg-searchBarGrey">
            {props.Arr.map(el=>{
                return (
                    <Link className="text-themeColor  hover:bg-searchBarGrey rounded-md p-2" to="#" key={el}>{el}</Link>
                )
            })}
        </div>
    )
}

export default CatMenu
