import axios from "axios";
import React from "react";

function ExecutiveForm() {
    const fields = [
        {
            label  : "Name", 
            name : "Name" ,
            type : "text"
        },
        {
            label  : "Phone Number", 
            name : "PhoneNo" ,
            type : "number"
        },
        {
            label  : "Address", 
            name : "Address" ,
            type : "text"
        },
        {
            label  : "Email", 
            name : "Email" ,
            type : "text"
        },
        {
            label  : "Username", 
            name : "Username",
            type : "text"
        },
        {
            label  : "Password", 
            name : "Password",
            type : "password"
        },
        {
            label  : "Occupation", 
            name : "Occupation",
            type : "text"
        },
        {
            label  : "Aadhar Number", 
            name : "AadharNo" ,
            type : "number"
        }
    ]
  return (
    <div className="bg-white rounded-md">
      <form className="p-10" onSubmit = {e=>{
          e.preventDefault()
          const Article = {
              Name : e.target[0].value,
              PhoneNo : e.target[1].value,
              Address : e.target[2].value,
              Email : e.target[3].value,
              Username : e.target[4].value,
              Password : e.target[5].value,
              Occupation : e.target[6].value,
              AadharNo : e.target[7].value
          }
          axios.post("/api/create/Executive",Article).then((data)=>{
              if(data) {
                  alert('Submitted')
              }
              else {
                  alert('Failed')
              }
          }).catch(e=>{
              console.log(e)
          })
      }}>
      {
          fields.map(el=>{
              return(
                  <div className="flex flex-row text-right m-5" key={el.name}>
                  <div className="flex-1 m-2 p-2">
                <label >
                {el.label}
                </label> 
                </div>
                <div className="m-2">
                <input className="bg-lightgray p-2" type={el.type} name={el.name} />
                </div>
              </div>
              )
          })
      }
         <button
                type="submit"
                className=" bg-skinbg group relative w-full flex justify-center py-2 px-4 
                border border-transparent text-sm font-medium rounded-md text-black bg-indigo-600 
                hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className=" absolute left-0 inset-y-0 flex items-center pl-3">
                   </span>
                Submit
              </button>
      </form>
    </div>
  );
}

export default ExecutiveForm;
