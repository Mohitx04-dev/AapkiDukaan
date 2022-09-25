import React from 'react'

function Sbox(props) {

    return (

       
        <div className="flex flex-col bg-SkinBg max-w-2xl m-auto rounded-2xl mt-16 ">
        <div className="grid grid-cols-2   ">
            <div className="mx-1 mt-4 text-center" >
               <h2 className="font-bold text-center text-black">{props.t1}</h2>
            </div>
              <div className="mx-1 mt-4 text-center"> <h2 className="font-bold text-center  text-black "> {props.t2}</h2>
              </div>
        </div>



        <div className="mt-3">
        {
            props.Array.map(el=>{
                return (
                    <div className="grid grid-cols-2 mt-4  " key={el.col1}>
                    <div className="mx-1 mt-2 text-center " >
                       <h2 className="font-reemKufi text-center text-black">{el.col1}</h2>
                    </div>
                      <div className="mx-1 mt-2 text-center"> <h2 className="font-reemKufi text-center  text-black "> {el.col2}</h2>
                      </div>
                      <span className="opacity-40">---------------------------------------------</span>
                      <span className="opacity-40">---------------------------------------------</span>
                </div>
                )
            })
        }
        </div>
        </div>


        
    )
}

export default Sbox
