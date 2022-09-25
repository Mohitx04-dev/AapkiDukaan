import React from 'react'
import SignUpForm from '../SignUpForm'

function SignUp() {
    return (
        <div className="bg-NavbarBg  min-h-screen p-5 flex md:flex-row flex-col"> 
        <div className="m-auto">
           <SignUpForm/>
        </div>
        </div>
    )
}

export default SignUp
