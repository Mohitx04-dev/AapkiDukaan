import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { useToken } from '../../Admin-AD/Contexts';
import WAProduct from '../Widgets/AdminProduct';
function ProductPool() {
    const [ProdPool, setProdPool] = useState([])
    const [isLoading, setLoading] = useState(true)
    let headers = useToken()
    useEffect(() => {
       axios.get("/api/showProduct",{headers: headers}).then(data=>{
        setProdPool(data.data)
        setLoading(false);
       })
                // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if(isLoading) return <div>Loading...</div>
    else
    return (
        <div className="m-10">
        <h1 className="text-3xl m-4 text-left">Products</h1>
        {
            ProdPool.map((Product)=>{
                return <WAProduct Product={Product} />
            })
        }
    </div>
    )
}

export default ProductPool
