import { Link } from "react-router-dom";
import Basket from "../SVGs/basket";
import UserIcon from "../SVGs/userIcon";
import Dropdown from "../Dropdown";
function SearchBox(props) {
  return (
    <div class="flex mt-1 text-w border border-searchBarGrey text-2xl rounded-lg ">
      <Dropdown Arr={props.Arr} />
      |
      <input
        class=" mx-5 text-sm focus:outline-none "
        type="search"
        name="Search "
        placeholder="Search Products, Categories"
      />
      <button type="submit" className="mr-2">
        <svg
          class="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          xmlSpace="preserve"
          width="512px"
          height="512px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
  );
}
function Topbar(props) {
  return (
    <div className="flex flex-row mx-2 justify justify-between">
      {[
        {
          text: props.phone,
        },
        {
          text: props.email,
        },
      ].map((el) => {
        return (
          <div className="mx-2 " key={el.text}>
            <Link to={""}>{el.text}</Link>
          </div>
        );
      })}
    </div>
  );
}
function Navbar(props) {
  return (
    <>
      <div className="flex flex-col justify-between m-2 mx-8 md:flex-row ">
        <Topbar email={props.Form.Semail} phone={props.Form.Sphone} />
        <div className="mx-2">
          <Link to={""}>admin@aapkidukaan.app</Link>
        </div>
      </div>
      <div className="flex flex-row m-5 mx-10 justify-between">
        <div className="flex flex-row justify-between">
          <div className="mx-5 p-1 whitespace-nowrap">
            <Link to="/">
              <h2 className="pt-1 font-bold text-xl  ">
                {" "}
                <span className="text-themeColor"> {props.Form.Title} </span>|
                <span> Aapki </span>
                <span> Dukaan</span>{" "}
              </h2>
            </Link>
          </div>
          <div className="mx-5">
            <SearchBox Arr={props.Arr} />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="mx-5 pt-3">
            <Link to="#">
              {" "}
              <UserIcon />{" "}
            </Link>
          </div>
          <div className="mx-5 pt-3">
            <button
              class="px-1 relative border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Cart"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Basket />
              <span class="absolute inset-0 object-right-top -mr-8 mt-3 ml-5 w-5 h-5 rounded-full bg-themeColor flex items-center justify-center">
                <div class="inline-flex items-center px-1.5 py-0.5 text-w border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                  2
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
