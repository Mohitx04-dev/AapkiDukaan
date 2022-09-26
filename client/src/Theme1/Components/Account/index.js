import axios from "axios";
import React from "react";
import Login from "../../../Components/Login";
import OrderHistory from "../OrderHistory";
import {useCustomer, useToken} from '../../Contexts/CustomerContext'
function TextFieldForm(props) {
  return (
    <div className="col-span-6 sm:col-span-1">
      <label
        htmlFor="email-address"
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        autoComplete={props.oc}
        defaultValue={props.value}
        
        className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}
export function AccountBox (props) {
  return (
    <div className="shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-3 gap-6">
          <TextFieldForm
            type="text"
            label="First Name"
            name="FirstName"
            id="first-name"
            oc="given-name"
            value = {props.Customer ? props.Customer.FirstName : null}
          />

          <TextFieldForm
            type="text"
            label="Last Name"
            name="LastName"
            id="last-name"
            oc="family-name"
            value = {props.Customer ? props.Customer.LastName : null}
          />

          <TextFieldForm
            type="text"
            label="UserName"
            name="Username"
            value = {props.Customer ? props.Customer.Username : null}

          />
          <TextFieldForm
            type="number"
            label="Phone Number"
            name="PhoneNo"
            id="phone-number"
            oc="phone"
            value = {props.Customer ? props.Customer.PhoneNo : null}
          />
          <TextFieldForm
            type="text"
            label="Street Address"
            name="Street"
            id="Address"
            value = {props.Customer ? props.Customer.Address.Street : null}
          />

          <TextFieldForm
            type="text"
            label="State"
            name="State"
            id="Address"
            value = {props.Customer ? props.Customer.Address.State : null}
          />
          <TextFieldForm
            type="number"
            label="PinCode"
            name="Address"
            id="Address"
            value = {props.Customer ? props.Customer.Address.Pincode : null}
          />
          <TextFieldForm
            type="text"
            label="City"
            name="City"
            id="Address"
            value = {props.Customer ? props.Customer.Address.City : null}
          />
          {
            !props.Customer ?  <TextFieldForm
            type="Password"
            label="Password"
            name="Password"
            id="Password"
          /> : null
          }
           

        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        {
          props.save ?    <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-theme hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button> : null
        }
     
      </div>
    </div>
  )
}
function Account() {
  let Customer = useCustomer()
  let headers = useToken()
  let page = window.location.pathname.split('/')[1]

  return (
    <div className>
      <div className="">
      <div className="mt-10 sm:mt-0 text-left">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          {
            !localStorage.getItem('Customer') ? <div className=" -mt-24">
            <Login role="Customer"/>
            </div> : null
          }
            <div className="mt-5 md:mt-0 md:col-span-2">
              <p className=" text-2xl m-2">{Customer ? "Hello, "+ Customer.FirstName : "Register"}</p>
              {
                Customer ? 
                <>
                <form onSubmit={
                  e=> {
                   e.preventDefault()
                   const Article = {
                       FirstName : e.target[0].value,
                       LastName : e.target[1].value,
                       Username : e.target[2].value,
                       PhoneNo : e.target[3].value,
                       Street : e.target[4].value,
                       State : e.target[5].value,
                       Pincode : e.target[6].value,
                       City : e.target[7].value ,
                   }
                   axios.put('/api/updateCustomer/'+Customer._id,Article,{headers : headers}).then(()=>{
                     alert('Succesful')
                   })
                  }
             }>
                <AccountBox Customer ={Customer} save={true}/>
                </form>
               
                {  page==='Account' ? <OrderHistory /> : null}
               
                </>
                :  <form onSubmit={
                  e=> {
                   e.preventDefault()
                   const Article = {
                       FirstName : e.target[0].value,
                       LastName : e.target[1].value,
                       Username : e.target[2].value,
                       PhoneNo : e.target[3].value,
                       Street : e.target[4].value,
                       State : e.target[5].value,
                       Pincode : e.target[6].value,
                       City : e.target[7].value ,
                       Password : e.target[8].value,
                   }
                   axios.post('/api/create/Customer',Article).then(()=>{
                     alert('Succesful')
                     window.location.reload()
                   })
                  }
             }>
              <AccountBox save={true} />
              </form >
              }
         
          </div>
        </div>
      </div>
              
      </div>
     {/* { Customer ?  <div className="mt-10">
       
       <OrderHistory />
       </div> : null } */}
    </div>
  );
}

export default Account;
