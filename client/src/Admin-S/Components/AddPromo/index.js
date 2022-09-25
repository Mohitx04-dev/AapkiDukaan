import axios from "axios";
import React from "react";
import { useSellerId } from "../../../Theme1/Contexts/SellerContext";
import { useToken } from "../../Contexts/token";

function Textfield(props) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="Code"
        className="block text-sm font-medium text-gray-700 m-2 flex flex-row text-GrayText"
      >
        {props.Label}
      </label>
      <input
        type={props.Type}
        name={props.Name}
        id={props.id}
        className="mt-1 p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}
  
function AddPromoCode(props){ 
  

    let Sid=useSellerId()
    let headers = useToken()
const submit = (e) => {
    e.preventDefault();
    let data = {
      Code: e.target[0].value,
      Discount: e.target[1].value,
      MaxDiscount: e.target[2].value,
    };
   
    axios.put("/api/CreatePromoCode/"+Sid, data,{headers:headers}).then((data) => {
      alert("Success");
      window.location.href = ('/admin/PromoCode')
    });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="shadow overflow-hidden ">
          <h1 className=" mx-6 mt-4 text-2xl font-Roboto text-left">Add Promo Codes</h1>

          <div className=" bg-white ">
            <div className="  m-10 p-5 bg-WbgGrey rounded-xl">
              <div className="flex m-10 justify-between ">
                <Textfield 
                
                  Label="Code Name"
                  Type="text"
                  Name="Code"
                  id="Code"
                />
                <Textfield
                  Label="Discount"
                  Type="Number"
                  Name="Discount"
                  id="Discount"
                />
               <Textfield
                  Label="Maximum Discount"
                  Type="Number"
                  Name="MaxDiscount"
                  id="MaxDiscount"
                />
              </div>

            
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-NavbarBg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )

  }
export default AddPromoCode;
