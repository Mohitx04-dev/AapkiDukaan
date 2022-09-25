import React from 'react'
import LoginForm from '../LoginForm'

function Login() {
    return (
        
        <div className="bg-NavbarBg h-screen flex md:flex-row flex-col font-reemKufi">
           <div className="m-auto">
           <form className="mt-8 space-y-6" onSubmit={e=>{
               console.log(e.target[2].value)
           }}>
           <LoginForm />
           </form>
            </div>
      
      
        </div>
    )
}

export default Login
