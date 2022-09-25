import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCustomer } from "../../Contexts/CustomerContext";
import { useSellerId } from "../../Contexts/SellerContext";
function OrderHistory() {
  const [AllOrders, setAllOrders] = useState([])
  let sid = useSellerId()
  let cid = useCustomer()._id
  useEffect(() => {
    axios.get('/api/GetOrderbyCustomer/'+sid+'/'+cid).then((data)=>{
      setAllOrders(data.data)
    })
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div>
        <p className="text-left text-2xl mb-5">Order History</p>
      <table class="table-auto shadow overflow-hidden sm:rounded-md p-2 text-black text-opacity-80 min-w-full">
        <thead>
     
          <tr>
            <Link to="#"><th>OrderId</th></Link>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
        {
            AllOrders.map(el=>
                {
                    return (
                        <tr key={el._id}>
                        <Link to={"/Order/"+el._id}><th className="underline text-theme">{el._id}</th></Link>
                        <th>{el.Date}</th>
                        <th>{el.Total}</th>
                        </tr>
                    )
                }
                )
        }
         
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;
