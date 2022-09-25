import React , {useContext, useState, useEffect} from 'react'
import axios from 'axios'
const CustomerContext = React.createContext()



export function useCustomer() {
    return useContext(CustomerContext)
}
function CustomerProvider({children}) {
    const [Customer, setCustomer] = useState()
    const [isLoading, setLoading] = useState(true);
    var Usr = localStorage.getItem('Customer')
    let headers;
    if(Usr) {
        Usr = JSON.parse(Usr)
         headers = {
            'Authorization': Usr.token
          }
    }
    useEffect(() => {
        axios.get('/api/GetCustomerbyToken/',{headers:headers}).then((data)=>{
            setCustomer(data.data)
            setLoading(false)
        }).catch(e=>{
            // console.log(e)
        })
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if(Usr) {   
        if (isLoading) {
            return <div className="App">Loading...</div>;
         }
    }
    return (
        <CustomerContext.Provider value={Customer}>
                        {children}
        </CustomerContext.Provider>
    )
}

export default CustomerProvider
