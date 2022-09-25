import React from 'react'
import Sbox from '../SBox'

function About() {
    let Array = [
      {
        col1 : "Sellers not having an online catelogue ",
        col2 : "With Aapki Dukaan, you can not just create your online catelogue but create a complete website for your business and manage your inventory and much more. "
       }
    //   {
    //     col1 : "Problem 2",
    //     col2 : "Solution 2"
    //   },
    //   {
    //     col1 : "Problem 1",
    //     col2 : "Solution 1"
    //   },
    //   {
    //     col1 : "Problem 1",
    //     col2 : "Solution 1"
    //   }
    ]
    return (
      <>
        <div>
            <div className="text-5xl mt-16 font-reemKufi">
                Why Aapki Dukaan?
            </div>
            <div className="mt-2 font-Arial ">
                
          <h3>  Aapki dukaan is an online e-commerce website-making </h3>
          <h3>  tool that offers all the features of a modern CMS </h3> 
          <h3>  dedicated to e-commerce but there is a twist. It is </h3> 
          <h3>  designed to be user-friendly to small shop owners. They can create </h3> 
            <h3>   a website for free and pay monthly bills as per the sales recorder per </h3> 
          <h3>  month on a commission basis.</h3> 
            </div>
        </div>
         <Sbox t1="Problems" t2="Solutions" Array={Array}/>
         </>
    )
}

export default About
