import {useState,useEffect} from 'react'
import { useSellerId } from '../../../Theme1/Contexts/SellerContext'
import axios from 'axios'
import Worder from '../../../Components/Widgets/Order'
import { useToken } from '../../Contexts/token'
function Sales() {
    let Sid=useSellerId()
    let headers = useToken()
    const [Order , setOrder] = useState()
    useEffect(() => {
        axios.get("/api/GetSales/"+Sid,{headers: headers}).then((data)=>{
          setOrder(data.data)
        }).catch((e)=>{
        })
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="m-10">
            <h1 className="text-3xl m-4 text-left ">Sales</h1>
             {Order ? Order.map(element => {
               return <Worder Order={element} Type={1} />
              }) : null}
            {/* {Sales.map((el)=>{return <Worder Order={el}/>})} */}
            {/* <UnivTable Responses={Sales} /> */}
        </div>
    )
}

export default Sales