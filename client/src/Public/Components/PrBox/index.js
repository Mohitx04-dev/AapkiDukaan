import React from 'react'

function PriceBox() {
    return (
        <div className="bg-SkinBg w-96 rounded-2xl flex flex-col font-reemKufi ">

           <h1 className=" ml-5 text-2xl mt-3 text-left">Essential Plus</h1>
       
             <div className="ml-5 mt-1 text-left">
            <h1>Our Essential Plus plan includes every feature </h1>
            <h1>with which you can easily run your business </h1>
            <h1>online from scratch without spending a single </h1>
            <h1>penny to get started.</h1>
            </div>

            <div className="text-2xl mt-8">
                Monthly Comission/mo
            </div>

            <div className="m-6">
                <h1> No Fixed Maintainance</h1>
                <span className="opacity-40">-------------------------------------------------------------</span>
                <h1> Only pay as you sell</h1>
                <span className="opacity-40">-------------------------------------------------------------</span>
                <h1> Ads may get served on your website</h1>
              
            </div>
        </div>
    )
}

export default PriceBox
