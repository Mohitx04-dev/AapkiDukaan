import React, { useEffect, useState } from "react";
import  { UnivTable } from "../Table";
import { Link } from "react-router-dom";
import { useSellerId } from "../../Theme1/Contexts/SellerContext";
import axios from "axios";
import { useToken } from "../../Admin-S/Contexts/token";
import Wproduct from "../Widgets/Product";
function Inventory() {
  let Sid = useSellerId();
  const [isLoading, setisLoading] = useState(true);
  const [Products, setProducts] = useState({});
  let headers = useToken();
  useEffect(() => {
    axios
      .get("/api/findSellerProducts/" + Sid, { headers: headers })
      .then((data) => {
        setProducts(data.data);
        setisLoading(false);
      });
                 // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Delete = (row) => {
    axios.put("/api/DeleteProducts/" + Sid, { id: row._id },{headers : headers}).then(() => {
      alert("Delete Successly");
      window.location.reload();
    });
  };
  if (isLoading) {
    return <div>Loading</div>;
  } else {
    return (
        <div className="m-10">
        <div className="flex flex-row mt-10">
        <h1 className="text-3xl text-left flex-auto">Products</h1>
        <div>
        {/* <Link to="searchGlobal" className="p-1 mx-2 rounded-lg bg-lightgreen text-white" >+ Add from Global Inventory</Link>  */}
        <Link to="add" className="p-1 rounded-lg bg-lightgreen text-white" > + Add</Link> 
        </div>
          </div>
            {/* <UnivTable Responses={Products} Delete={Delete} /> */}
            {
              Products.map(element => {
               return <Wproduct Product={element} Type={1}/>
              })
              // Products.foreach(el=>{
              //   <Wcustomer Product={el}/>
              // })
            }
    </div>
    );
  }
}

export default Inventory;
