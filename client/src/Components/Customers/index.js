import React, { useEffect,useState } from 'react'
import {UnivTable} from '../Table';
import axios from 'axios';
import { useToken } from '../../Admin-AD/Contexts';
function Customer() {
    const [isLoading, setisLoading] = useState(true)
    const [Customer, setCustomer] = useState({
    })
    let headers = useToken()
    useEffect(() => {
       axios.get("/api/showCustomer/",
       {headers: headers}).then(data=>{
           let customers = data.data.map((el)=>{
               return (
                   {
                       ...el,
                       Address : JSON.stringify(el.Address)
                   }
               )
           })
           setCustomer(customers)
           setisLoading(false)
       })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    if(isLoading) {
        return (
            <div>Loading</div>
        )
    }
    else {
    return (

        <div className="w-full  m-10">
        <h1 className="text-3xl m-4 text-left">Customers</h1>
            <div className=" overflow-x-scroll max-w-screen-lg">
            <UnivTable Responses={Customer} />  
            </div>
        
    </div>
    )
}
}

export default Customer
