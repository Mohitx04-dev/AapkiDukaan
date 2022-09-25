import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSellerId } from '../../Theme1/Contexts/SellerContext'
import Wproduct from '../Widgets/Product'
import WupdateProduct from '../Widgets/UpdateProduct'



function ModifyProduct() {
    const [Loading, setLoading] = useState(true)

    let sid=useSellerId()
    const {id} = useParams()
    const [Product, setProduct] = useState()
    useEffect(() => {
      axios.get("/api/getFullProduct/"+sid+"/"+id).then((data)=>{
         setProduct(data.data)
         setLoading(false)
      })
    }, [])
    return(
        <> 
        {Loading ? <div> Loading</div> : 
        <>
        <div className="bg-WbgGrey m-4 p-6 text-left rounded-xl">
            <p className="text-sm text-GrayText">Product Name</p>
            <p className="font-Roboto "> {Product.Name} </p>
        </div>
        <form onSubmit={e=>{
            e.preventDefault()
            const data = {
                Category : e.target[0].value,
                Price : e.target[1].value,
                InStock : e.target[2].value
            }
            axios.put('/api/updateProductDetails/'+Product._id,data).then((d)=>{
                if(d) { alert('Updated Successfully')
                window.location.reload() }
            }).catch((e)=>{
                alert('Error Occured')
                console.log(e)
            })
        }}>
        <div className="bg-WbgGrey m-4 p-6 text-left rounded-xl">
            {/* <Wproduct Product={Product} Type={1} Disabled={true}/> */}
            <WupdateProduct Product={Product}  />
        </div>
        <button type="submit" className="p-3 m-5 max-h-12 bg-NavbarBg text-white rounded-xl float-right">Submit</button>
        </form>
        </>
        }
        </>
    )
 
}

export default ModifyProduct