import React , {useContext, useState, useEffect} from 'react'
import axios from 'axios'
const SellerContext = React.createContext()
const SellerIdContext = React.createContext()
const SetSellerContext = React.createContext()


export function useSellerData() {
    return useContext(SellerContext)
}
export function useSellerId() {
    return useContext(SellerIdContext)
}
export function useSetSeller() {
    return useContext(SetSellerContext)
}


function SellerDataProvider({children}) {
    let subDomain  = window.location.host.split('.')[0]
    const [SellerData,setSellerData] = useState({})
    const [SellerId,setSellerId] = useState("")
    const [isLoading, setLoading] = useState(true);
    function getData() {
        axios.get('/api/findSellerbyDomain/'+subDomain)
          .then(response => {
            setSellerData(response.data.Website)
            setSellerId(response.data._id)
            setLoading(false)
          });
        }
        useEffect(() => {
            getData();       
             // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        useEffect(() => {
            const root = document.documentElement;
            root.style.setProperty('--theme', SellerData.Color);
        }, [SellerData]);
    
    if (isLoading) {
        return <div className="App">Loading...</div>;
     }
        
        
    return (
        <SellerIdContext.Provider value={SellerId}>
        <SellerContext.Provider value={SellerData}>
            <SetSellerContext.Provider value={setSellerData} >
                        {children}
                        </SetSellerContext.Provider >
        </SellerContext.Provider>
        </SellerIdContext.Provider>

    )
}

export default SellerDataProvider
