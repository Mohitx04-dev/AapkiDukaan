import axios from "axios";
import React, { useState } from "react";
import FormData from "form-data";
import {
  useSellerData,
  useSellerId,
} from "../../Theme1/Contexts/SellerContext";
import { useToken } from "../../Admin-S/Contexts/token";
function Textfield(props) {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="first-name"
        className="text-left block text-sm font-medium text-gray-700"
      >
        {props.Label}
      </label>
      <input
        type={props.Type}
        name={props.Name}
        id={props.id}
        className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}
const SelectField = (props)=>{
  return (
    <div>
    <label
      htmlFor={props.Title}
      className="block text-left text-sm font-medium text-gray-700"
    >
      {props.Title}
    </label>
    <select
      id={props.Title}
      name={props.Title}
      className="mt-1 block w-full py-1 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      {props.Array.map((el) => {
        return <option value={el} key={el}>{el===true ? "true" : el===false ? "false" : el}</option>;
      })}
    </select>
  </div>
  )
}
 function AddProduct() {
  let sid = useSellerId();
  let headers = useToken();
  let { Categories } = useSellerData();
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  function validateFile(file) {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/x-icon",
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  }
  function Upload() {
    let formData = new FormData();
    formData.append("file", picture);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios.post("/upload", formData, config).then((data) => {
      setImgUrl(data.data.url);
      alert('Uploaded, now Submit')
    })
  }
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      if (validateFile(e.target.files[0])) {
        setPicture(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  };
  const submit = (e) => {
    e.preventDefault();
    let data = {
      Name: e.target[0].value,
      Price: e.target[1].value,
      id: sid,
      Category: e.target[2].value,
      Photo: imgUrl,
      InStock : e.target[3].value
    };
    axios.put("/api/createProduct", data,{headers : headers}).then((data) => {
      alert("Success");
      window.location.href = "/admin/inventory"
    });
  };

  return (
    <div>
      <form onSubmit={submit}>
          

          <div className="">
            <div className="flex flex-col ">
              <div className="flex flex-row m-4 p-4 bg-WbgGrey justify-between rounded-xl">
                <Textfield 
                
                  Label="Product Name"
                  Type="text"
                  Name="ProductName"
                  id="ProductName"
                />
                <Textfield
                  Label="Price"
                  Type="Number"
                  Name="Price"
                  id="Price"
                />
               <SelectField 
                Title="Category"
                Array={Categories}
               />
              <SelectField 
                Title="InStock"
                Array={[true,false]}
               />
              </div>

              <div className="m-auto bg-WbgGrey p-4 rounded-xl" >
                <div>
                  {/* <input
                    type="file"
                    onChange={onChangePicture}
                    accept="image/x-png,image/gif,image/jpeg" 
                  /> */}
                  <div class="m-4">
            <label class="inline-block mb-2 text-gray-500">Upload Product 
                Image</label>
            <div class="flex items-center justify-center w-full">
                <label class="flex flex-col w-full h-32 bg-white rounded-lg  hover:bg-gray-100 ">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            {imgData ? "Select Another Photo" :  "Select a photo"}</p>
                    </div>
                    <input type="file" onChange={onChangePicture} accept="image/x-png,image/gif,image/jpeg"  class="opacity-0" />
                </label>
            </div>
        </div>
                  {imgData === null ? (
                    <>
                     
                    </>
                  ) : (
                    <div className="text-center">
                      <img
                        className=" text-center max-w-sm m-2  border border-darkGrey border-opacity-40"
                        src={imgData}
                        type="image"
                        alt="Productimage"
                        required
                      />
                      <button
                      className="p-2 rounded-md bg-lightgreen text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          Upload();
                        }}
                      >
                        Upload Image
                      </button>
                    </div>
                  )}
                </div>
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
      
      </form>
    </div>
  );
}

export default AddProduct;
