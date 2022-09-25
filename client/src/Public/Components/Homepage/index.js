import React from "react";
import { Link } from "react-router-dom";
import HomeSVG from "../Assets/SVGs/Home";

function Home() {
  return (
    <div className=" bg-NavbarBg h-screen flex md:flex-row flex-col font-reemKufi">
       <div>
        <div className="text-white ml-40 mt-40  ">
          <h1 className="text-left  text-4xl">Boost your Sales</h1>
          <h1 className="text-left  text-4xl">with Aapki Apni Dukaan</h1>

          <h4 className=" mt-4 text-left  ">
            {" "}
            Create your own website with us in a few clicks and{" "}
          </h4>
          <h4 className="text-left  ">
            {" "}
            start selling to to your own audience for free.
          </h4>
        </div>
        <div className=" mt-4 ml-80 w-28 bg-lightgreen rounded-full ">
          <Link to="#" className="text-white  text-center  ">
            {" "}
            Create Now
          </Link>
        </div>
      </div> 

       <div className=" ml-48 mt-20 ">
        {" "}
        <HomeSVG />
      </div> 
    </div>
  );
}

export default Home;
