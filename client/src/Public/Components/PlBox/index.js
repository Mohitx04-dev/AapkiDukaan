import React from 'react'

function PlanBox() {
    return (
        <div className="bg-lightblack text-white w-96 rounded-2xl flex flex-col  font-reemKufi">

        <h1 className=" ml-5 text-2xl mt-3 text-left">Aapki Dukaan Premium</h1>
    
          <div className="ml-5 mt-1 text-left">
         <h1>Our Premium plan includes every feature  </h1>
         <h1>from our essential plus plan including Ad-free </h1>
         <h1>Website & Custom Domain at a nominal monthly </h1>
         <h1>Charge.</h1>
         </div>

         <div className="text-2xl mt-8">
             Monthly Comission + 1000/mo
         </div>

         <div className="m-6">
             <h1> 1000Rs / Mo  Fixed Charges</h1>
             <span className="opacity-40">-------------------------------------------------------------</span>
             <h1> Monthly Bill will include all charges</h1>
             <span className="opacity-40">-------------------------------------------------------------</span>
             <h1> Complete Ad-free Website with Custom Domain</h1>
           
         </div>
     </div>
    )
}

export default PlanBox
