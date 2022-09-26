import React from 'react'

function WAProduct(props) {
  const Product = props.Product;
  return (
    <div className={" bg-WbgGrey rounded-xl  m-5 "}>
                <div className=" ">
                    <div className="">
                        <div className="flex flex row">
                            <div className="mx-10 flex">
                            <img
                            src={'http://aapkidukaan.live/image/'+Product.Photo}
                            className="h-20 w-20 rounded-xl object-center object-cover"
                            alt={Product.Name}
                            />
                            </div>
                            <div className="mt-2 flex flex-col text-justify">
                                <p >{Product.Name}</p> 
                                <p className="text-GrayText">{(Product._id).substring(-1,7)}</p>
                            </div>
                        </div>
                        
                    </div>
                    {/* <div className="flex m-2">
                      {props.Type===1 ? <Box1 /> : <Box2 />}
                    </div> */}
                </div>
            </div>
  )
}

export default WAProduct