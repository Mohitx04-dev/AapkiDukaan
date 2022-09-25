import React from 'react'
import { Settings } from '../../../Public/Components/SignUpForm'
import { useState, useEffect } from 'react';
import { useSellerData, useSellerId } from '../../../Theme1/Contexts/SellerContext';
import axios from 'axios';
import { useToken } from '../../Contexts/token';
function WebsiteSettings(props) {
    let Data = useSellerData()
    let id = useSellerId()
    const [Form, setForm] = useState(Data)
    let headers = useToken()
    const handleChange = (e) => {
        e.preventDefault();   
        setForm({
          ...Form,
          [e.target.name]: e.target.value,
        });
      };
      useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--themeColor', Form.Color);
      }, [Form])
      let ButtonClasses =     " text-base hover:scale-110 focus:outline-none  px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition";
      function submit() {
        axios.put("/api/updateWebsite/"+id,{WebsiteData : Form},{headers: headers}).then((data)=>{
          alert('Successfully Updated')
        }).catch(e=>{
          alert('Error')
        })
      }
    return (
        <div className="font-reemKufi">
            <Settings Form ={Form} handleChange={handleChange} setForm={setForm}/>
            <button
                className={ButtonClasses}
                onClick={(e) => {
                  e.preventDefault();
                  submit();
                }}>
                Submit
              </button>
        </div>
    )
}

export default WebsiteSettings
