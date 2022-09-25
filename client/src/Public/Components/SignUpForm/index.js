import React, { useState, useEffect } from "react";
import ThemePrev from "../../ThemePreview";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { HexColorPicker } from "react-colorful";
import axios from "axios";
function StepIcon(props) {
  let classes =
    " rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600";
  return (
    <div className="flex items-center text-teal-600 relative">
      <div
        className={
          props.Step === props.step
            ? " bg-lightgreen text-white " + classes
            : null + classes
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-bookmark "
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
        {props.Title}
      </div>
    </div>
  );
}
function TextFieldForm(props) {
    let name = props.name;
    return (
      <div className="w-full flex-1 mx-2 svelte-1l8159u">
        <div className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">
          {props.label}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
          <input
            placeholder={props.label}
            name={props.name}
            defaultValue={props.Form[name]}
            onChange={props.handleChange}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />{" "}
        </div>
      </div>
    );
  }
  
function PersonalDetials(props) {
    return (
        <div>
        <div className="flex flex-col md:flex-row">
          <TextFieldForm
            label="Full Name"
            name="Name"
            Form={props.Form}
            handleChange={props.handleChange}
          />
          <TextFieldForm
            label="Email Address"
            name="Email"
            Form={props.Form}
            handleChange={props.handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <TextFieldForm
            label="Phone No"
            name="Phone"
            Form={props.Form}
            handleChange={props.handleChange}
          />
          <TextFieldForm
            label="Shop Name"
            name="ShopName"
            Form={props.Form}
            handleChange={props.handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <TextFieldForm
            label="Address"
            name="Address"
            Form={props.Form}
            handleChange={props.handleChange}
          />
          <TextFieldForm
            label="Aadhar Number"
            name="AadharNo"
            Form={props.Form}
            handleChange={props.handleChange}
          />
        </div>
      </div>
    )
}

function WebsiteDetails(props) {
    return (
        <div>
              <div className="flex flex-col md:flex-row">
                <TextFieldForm
                  label="Domain Name"
                  name="Domain"
                  id="Domain"
                  Form={props.Form}
                  handleChange={props.handleChange}
                />
                <TextFieldForm
                  label="Admin User Name"
                  name="Username"
                  Form={props.Form}
                  handleChange={props.handleChange}
                />
              </div>
              <div className="flex flex-col md:flex-row">
                <TextFieldForm
                  label="Password"
                  name="Password"
                  Form={props.Form}
                  handleChange={props.handleChange}
                />
                <TextFieldForm
                  label="Confirm Password"
                  name="ConfirmPassword"
                  Form={props.Form}
                  handleChange={props.handleChange}
                />
              </div>
              <div className="flex flex-col md:flex-row">
                <TextFieldForm
                  label="PayTM Mobile Number"
                  name="PayTM"
                  Form={props.Form}
                  handleChange={props.handleChange}
                />
                <TextFieldForm
                  label="GSTin Number"
                  name="GST"
                  Form={props.Form}
                  handleChange={props.handleChange}
                />
              </div>
            </div>
    )
}

export function Settings(props) {

  const setColor = (e)=>{
    props.setForm({
      ...props.Form,
       // eslint-disable-next-line no-useless-computed-key
      ["Color"]: e,
    });
  }
    return (
        <div className="flex lg:flex-row flex-col justify-evenly">
       <div className="flex-col p-2 m-2">
        <div className="flex flex-col md:flex-row ">
          <TextFieldForm
            label="Name of Website"
            name="Title"
            id="Title"
            Form={props.Form}
            handleChange={props.handleChange}
          />
          <TextFieldForm
            label="Support Contact No"
            name="Sphone"
            Form={props.Form}
            handleChange={props.handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-col">
          <TextFieldForm
            label="Support Email"
            name="Semail"
            Form={props.Form}
            handleChange={props.handleChange}
          />
          <div className="w-full flex-1 mx-2 svelte-1l8159u">
              <div className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">
              Categories
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <ReactTagInput 
                  tags={props.Form.Categories} 
                  onChange={(newTags) => {
                    props.setForm({
                      ...props.Form,
                       // eslint-disable-next-line no-useless-computed-key
                      ["Categories"]:newTags,
                    });
                  }
                  }
               />
            </div>
            </div>
            <div className="w-full flex-1 mx-2 svelte-1l8159u">
              <div className="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">
              Primary Color
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <div>
                 
              <HexColorPicker color={props.Form.Color} onChange={setColor} />

                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="mt-6">
        <p className=" text-2xl">Preview</p>
        <div className="border-2 text-sm">
         <ThemePrev Form={props.Form}/>
         </div>
        </div>
      </div>
    )
}

function Page(props) {
   
    const handleChange = (e) => {
      e.preventDefault();
      if(e.target.name==='ConfirmPassword' || e.target.name==='Password') {
         if( e.target.value===props.Form.Password){
             props.setMatch(1)
         }
         else {
             props.setMatch(0)
         }
         }
        
      props.setForm({
        ...props.Form,
        [e.target.name]: e.target.value,
      });
    };
  
    switch(props.Step) {
        case 1: 
        return (
          <PersonalDetials Form ={props.Form} handleChange={handleChange}/>
        )
      case 2: 
        return (
          <WebsiteDetails  Form ={props.Form} handleChange={handleChange} />
        )
      case 3: 
        return (
          <Settings  Form ={props.Form} handleChange={handleChange} setForm={props.setForm} />
        )
      default: 
         // do nothing
    }
  }

function SignUpForm() {
    const [Form, setForm] = useState({
        Name: "",
        Email: "",
        Phone: null,
        ShopName: "",
        Address: "",
        AadharNo: null,
        Domain: "",
        Username: "",
        Password: "",
        ConfirmPassword: "",
        PayTM: null,
        GST: null,
        Color: '#003171',
        Title: '',
        Sphone: null,
        Semail: '',
        Categories : ["Example"]
    });
    useEffect(() => {
      const root = document.documentElement;
      root.style.setProperty('--themeColor', Form.Color);
    }, [Form])
    const [Match, setMatch] = useState(0) 


  const [Step, setStep] = useState(1);
  function addStep() {
    Step < 4 ? setStep((Step) => Step + 1) : setStep(Step);
  }
  function decStep() {
    Step > 1 ? setStep((Step) => Step - 1) : setStep(Step);
  }
  function submit() {
      axios.post('/api/create/Seller',Form).then((data)=>{
        alert('You are being redirected to your website')
        // window.location.href = Form.title+'localhost:3000'

      }
      ).catch(e=>{
if(e.response){
       alert('Domain name already taken, please try something else.')
        }      })
  }
  let ButtonClasses =
    " text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition";
  return (
    <div className=" bg-white max-w-full m-10 font-reemKufi">
      <div className="p-5">
        <div className="mx-4 p-4 ">
          <div className="flex items-center justify-evenly mx-3">
            <StepIcon Step={Step} step={1} Title="Personal" />
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600 mx-3"></div>
            <StepIcon Step={Step} step={2} Title="Website" />
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300 mx-3"></div>
            <StepIcon Step={Step} step={3} Title="Settings & Preview" />
          </div>
        </div>
        <div className="mt-8 p-4">
          <Page Step={Step} Form={Form} setForm={setForm} Match={Match} setMatch={setMatch} />
          <div className="flex p-2 mt-4">
            <button
              className={Step < 2 ? " hidden " : ButtonClasses}
              onClick={(e) => {
                e.preventDefault();
                decStep();
              }}
            >
              Previous
            </button>
            <div className="flex-auto flex flex-row-reverse">
              <button
                disabled={(Step===2 && Match===0) ?  true : false}
                className={Step > 2 ? " hidden " : 
                (Step===2 && Match===0) ?  " opacity-25 " + ButtonClasses  : ButtonClasses }
                onClick={(e) => {
                  e.preventDefault();
                  addStep();
                }}>
                Next
              </button>
              <button
                className={Step < 3 ? " hidden " : ButtonClasses}
                onClick={(e) => {
                  e.preventDefault();
                  submit();
                }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
