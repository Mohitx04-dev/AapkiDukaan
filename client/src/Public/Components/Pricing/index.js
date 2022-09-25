import React from 'react'
import PlanBox from '../PlBox'
import PriceBox from '../PrBox'
import Sbox from '../SBox'

function Pricing() {
    let Array = [
        {
          col1 : "Electronics & Electrical ",
          col2 : "4% "
         },
         {
            col1 : "Fruits & Vegetables ",
            col2 : "8% "
           },
           {
            col1 : "Cosmetics ",
            col2 : "10% "
           },
           {
            col1 : "Dairy Items ",
            col2 : "3% "
           },
           {
            col1 : "Toys, Books & Baby Products",
            col2 : "12% "
           },
           {
            col1 : "Daily Essentials ",
            col2 : "3% "
           },
           {
            col1 : "Sports & Fitness ",
            col2 : "8% "
           },
           {
            col1 : "Car, MotorBike, Industrial Tools ",
            col2 : "5% "
           },
           {
            col1 : "Hardware & Paint ",
            col2 : "6% "
           },
           {
            col1 : "Digital Items",
            col2 : "10% "
           },
           {
            col1 : "Handmade / Art ",
            col2 : "14% "
           },
           {
            col1 : "Fashion & Clothing",
            col2 : "9% "
           }
    ]
    return (
        <div>

            <div className=" font-reemKufi text-3xl mt-8">
                Pricing & Plans
            </div>

            <div className="mt-2 font-reemKufi">
                <h1>Choose from our pricing and plans </h1>
                <h1>which suits your business needs.</h1>
            </div>

            <div className="mt-10  flex justify-evenly">
                <div>
<PriceBox/>
                </div>

                <div>
<PlanBox/>
                </div>
           </div>

           {/* <div className="mt-48 font-reemKufi text-3xl">
               <h1>
               Commission per Category
               </h1>
           </div>
           <div className="mt-2">
               <h1>Our Smart Pricing Scheme in which sales are</h1>
               <h1>sales are comissioned based on the category</h1>
               <h1>in which the product lies in.</h1>
           </div>
           <div className="mb-12">
           <Sbox t1="Category" t2="Commission Charged / Sale" Array={Array}/>
           </div> */}
        </div>
    )
}

export default Pricing
