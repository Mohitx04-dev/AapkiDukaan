import React , {useContext} from 'react'
const TokenContext = React.createContext()



export function useToken() {
    return useContext(TokenContext)
}
function TokenProvider({children}) {
    var Usr = localStorage.getItem('Seller')
    let headers;
    if(Usr) {
        Usr = JSON.parse(Usr)
         headers = {
            'Authorization': Usr.token
          }
    }
    else {
        headers = {}
    }
    return (
        <TokenContext.Provider value={headers}>
        
                        {children}
                      
        </TokenContext.Provider>

    )
}

export default TokenProvider
