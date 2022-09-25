import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ navItem }) => {
  return (
    <li className="px-4  py-2.5 whitespace-nowrap  flex items-centre cursor-pointer  ">
      <Link className="nav-link text-navBartext font-Roboto text-xl " to={`${navItem.link}`}>
        {navItem.text} <span className="sr-only">(current)</span>
      </Link>
    </li>
  );
};

export default function Sidebar(props) {
  return (
    <div className=" bg-NavbarBg ">
      <div className=" h-screen flex flex-col mx-5  justify-between     ">
        <div className="sticky p-5  text-lg  list-none">
          <div>
            <p className="text-3xl m-2 pd-2 font-heading flex flex-row ">
              <h1 className="text-white mr-1">Aapki </h1>
              <h1 className="text-LogoText">Dukaan </h1>{" "}
            </p>
          </div>
         
          <div className="mt-10">
                      {props.Menu.map((navItem, index) => {
            return <NavItem key={index} navItem={navItem} />;
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
