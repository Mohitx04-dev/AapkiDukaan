import { Link } from "react-router-dom";
import Basket from "../../Utils/SVGs/basket";
import UserIcon from "../../Utils/SVGs/userIcon";
import Cart from "../Cart";
import Logo from "../Logo";
import SearchBox from "../SearchBox";
import { useCart, useCartOpen } from "../../Contexts/CartContext";
import { useSellerData } from "../../Contexts/SellerContext";
import { useCustomer } from "../../Contexts/CustomerContext";
import Dropdown from "../Dropdown";
function Topbar() {
    let {Sphone, Semail} =  useSellerData()
    return (
        <div className="flex flex-row mx-2 justify justify-between">
        {[
          {
            text : Sphone,
            link : "tel:"+Sphone
          },
          {
            text: Semail,
            link: "mailto:"+Semail
          },
        ].map((el)=>{
            return (
                <div className="mx-2" key={el.text}>
                    <a href={el.link} >{el.text}</a>
                </div>
            )
        })}
      </div>
    )
}
function Navbar(props) {
  const setOpen = useCartOpen().setOpen
  let Customer = useCustomer()
  const Arr = [
    'Account',
    'Logout'
  ]
  return (
      <>
    <div className="flex flex-col justify-between m-2 mx-8 md:flex-row">
        <Topbar />
        <div className="mx-2">
          <Link to={""}>admin@aapkidukaan.app</Link>
        </div>
    </div>
    <div className="flex flex-row m-5 mx-10 justify-between">
      <div className="flex flex-row justify-between">
      <div className="mx-5 p-1 whitespace-nowrap">
        <Logo Seller={"Seller"}/>
        </div>
        <div className="mx-5">
        {/* <SearchBox Arr={props.Arr}/> */}
        </div>
      </div>
        <div className="flex flex-row">
         
          {!Customer ? <div className="mx-5 pt-2"> <Link to="/account"> <UserIcon />  </Link> </div> : <div className="mx-5 pt-0"> <Dropdown  Arr={Arr} Title={<UserIcon /> } Link=""/> </div>}
          <div className="mx-5 pt-2">
          <button class="px-1 relative border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Cart" onClick={
            (e) => {
              e.preventDefault()
              setOpen(true)
            }
          }>
          <Basket />
          <Cart />
          <span class="absolute inset-0 object-right-top -mr-8 mt-3 ml-5 w-5 h-5 rounded-full bg-red flex items-center justify-center">
            <div class="inline-flex items-center px-1.5 py-0.5 text-w border-white rounded-full text-xs font-semibold leading-4 bg-theme text-white">
              {useCart().length}
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
