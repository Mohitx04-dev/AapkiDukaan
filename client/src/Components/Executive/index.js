import React, { useEffect,useState } from 'react'
import {UnivTable} from '../Table';
import axios from 'axios';
import { useToken } from '../../Admin-AD/Contexts';
function Executive() {
    const [isLoading, setisLoading] = useState(true)
    const [Executive, setExecutive] = useState({
    })
    let headers = useToken()
    useEffect(() => {
       axios.get("/api/GetExecutive/",{headers: headers}).then(data=>{
           let executive = data.data.map((el)=>{
               return (
                   {
                       ...el,
                       personalDetails:JSON.stringify(el.personalDetails)
                   }
               )
           })
           setExecutive(executive)
           setisLoading(false)
       })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const Delete = (row) =>{
        axios.delete("/api/DeleteExecutive/"+row._id,{headers: headers}).then(()=>{
            alert('Delete Successly')
            window.location.reload()
        })
     }
    if(isLoading) {
        return (
            <div>Loading</div>
        )
    }
    else {
    return (

        <div className="w-full  m-10">
        <h1 className="text-3xl m-4 text-left">Executive</h1>
            <div className=" overflow-x-scroll max-w-screen-lg">
            <UnivTable Responses={Executive} Delete={Delete}/>  
            </div>
        
    </div>
    )
}
}

export default Executive
