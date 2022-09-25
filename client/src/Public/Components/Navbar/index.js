import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    [
      {
        text: "Why Aapki Dukaan",
        url: "about",
      },
      {
        text: "Pricing",
        url: "pricing",
      },
      {
        text: "Become an Executive",
        url: "BecomeExecutive",
      }
    ].map((el) => {
      return (
        <Link className=" p-4" to={"/" + el.url} key={el.text}>
          {el.text}
        </Link>
      );
    })
  )
  
  }

function Navbar() {
  return (
    <div className="flex flex-row bg-NavbarBg text-white font-reemKufi">
      <Link to="/">
      <div className="text-3xl m-3 pd-2 ml-10 mr-10  font-heading flex flex-row ">
        <h1 className="text-white mr-1">Aapki </h1>
        <h1 className="text-LogoText">Dukaan </h1>{" "}
      </div>
      </Link>
      <div className="m-3 p-2 ">
      <Menu />
</div>
      <div className="m-3 p-2 ml-auto">
        {[
          {
            text: "Create your own website",
            url: "signup",
            bg: 1
          },
        ].map((el) => {
          return (
            <Link className={"p-2 " + (el.bg ?" bg-lightgreen rounded-full" : null) } to={"/" + el.url} key={el.text}>
              {el.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
