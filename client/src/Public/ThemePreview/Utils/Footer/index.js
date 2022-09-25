import React from 'react'
import { Link } from 'react-router-dom'
function Column(props) {
    return (
        <div className="flex flex-col mb-10 m-auto text-left max-w-xs mt-10">
        <span className="text-2xl mb-5">{props.title}</span>
        {props.Arr.map(el=>{
            return (
                <Link key={el} className="hover:bg-searchBarGrey text-themeColor   text-left rounded-md p-1 underline" to={"#"}>{el}</Link>
            )
        })}
         </div>
    )   
}
function Footer(props) {
    let FooterArr = [
        [
            "About Us", "Careers"
        ],
        [
            "Facebook", "Instagram", "Youtube", "LinkedIn"
        ],
        [
            "Become an Affiliate",
            "Sell your Products"
        ],
        [
            "Sign Up",
            "Sign In",
            "Help"
        ]
    ]
    return (
        <div className="p-2 mx-8 bg-w">
        <div className="grid grid-cols-1 md:grid-cols-4 text-center ">
            <Column Arr={FooterArr[0]} title={"Get in Touch"}/>
            <Column  Arr={FooterArr[1]}  title={"Connections"} />
            <Column  Arr={FooterArr[2]}  title={"Earnings"} />
            <Column  Arr={FooterArr[3]}  title={"Account"} />
        </div>
        <p className="text-sm">Copyright © 2021 aapkidukaan.app | powered by Aapki Dukaan</p>
        </div>
    )
}

export default Footer
