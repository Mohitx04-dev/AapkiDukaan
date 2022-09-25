import React from 'react'
import { useSellerData } from '../../Contexts/SellerContext'
import Row from '../HomePageRow'

function Home(props) {
   let {Categories} =  useSellerData()
    return (
        <div className="font-theme p-2 ">
            {
                Categories.map(element => {
                    return (
                        <Row Category={element} key={element}/>
                    )
                    
                })
            }
        </div>
    )
}

export default Home
