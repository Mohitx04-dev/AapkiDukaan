import axios from 'axios'
import React from 'react'
import LoginForm from '../../Public/Components/LoginForm'

function Login(props) {
    return (
        <div className="">
            <form className="mt-8 space-y-6" onSubmit={
                e=>{
                    e.preventDefault()
                    let creds;
                    if(props.domain) {
                         creds = {
                            Username : e.target[1].value,
                            Password : e.target[2].value,
                            Domain : props.domain
                        }
                    }else {
                         creds = {
                            Username : e.target[1].value,
                            Password : e.target[2].value,
                        }
                    }
            
                    axios.post("/api/loginUser/"+props.role,creds).then((data)=>{
                        const obj =  { 
                            token : data.data.token,
                            Email : data.data.Email,
                            Username : data.data.Username,
                        }
                        localStorage.setItem(props.role,JSON.stringify(obj))
                    }).then(()=>{
                        alert('Logged In')
                        window.location.reload()
                    }).catch((e)=>{
                        alert('Invalid Credentials')
                    })
                }
            }>
            <LoginForm />
            </form>
        </div>
    )
}

export default Login
