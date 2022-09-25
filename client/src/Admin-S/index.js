import {Route, Routes } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import Sales from "./Components/Sales";
import Customers from "../Components/Customers";
import Bills from '../Components/Bills'
import Inventory from "../Components/Inventory";
import Login from '../Components/Login';
import TabsTable from '../Components/TabsTable';
import WebsiteSettings from './Components/Website';
import AddProduct from '../Components/AddProduct';
import TokenProvider from './Contexts/token'
import SellerDataProvider, { useSellerId } from '../Theme1/Contexts/SellerContext';
import PromoCode from './Components/PromoCode';
import AddPromoCode from './Components/AddPromo';
import Logout from '../Components/Logout';
import SingleOrder from '../Components/SingleProduct';
import ModifyProduct from '../Components/ModifyProduct';
import SearchProduct from '../Components/SearchProduct';
import Greeting from '../Components/Greeting';
function AdminS() {
  const Menu = [
   
    {
      link: "inventory",
      text: "Inventory",
    },
    {
      link: "sales",
      text: "Sales",
    },
    // {
    //   link: "bills",
    //   text: "Bills",
    // },
    {
      link: "PromoCode",
      text: "PromoCode",
    },
    {
      link: "settings",
      text: "Settings",
    },
   
    {
      link: "Logout",
      text: "Logout",
    },
  ]
  let User = localStorage.getItem('Seller')
  let Sid = useSellerId()
  var full = window.location.host
  var parts = full.split('.')
  var sub = parts[0]
  return (
 
    <div className="App bg-NavbarBg font-Roboto text-xl">
         <SellerDataProvider>
       
          <TokenProvider>
          {
              User ? 
          <div className="p-0 m-0 flex">
          <Sidebar Menu={Menu}/>
          <div className="m-20 bg-white w-full rounded-xl ">
              <Routes>
              <Route exact path="sales" element={<Sales />}  ></Route>
              <Route exact path="customers" element={<Customers />}  ></Route>
              <Route exact path="bills" element={<Bills />}  ></Route>
              <Route exact path="inventory" element={<Inventory />}  ></Route>
              <Route exact path="inventory/add" element={<AddProduct />}  ></Route>
              <Route exact path="inventory/searchGlobal" element={<SearchProduct />}  ></Route>
              <Route exact path="test" element={<TabsTable />}  ></Route>
              <Route exact path="PromoCode/add" element={<AddPromoCode/>}  ></Route>
              <Route exact path="promocode" element={<PromoCode />}  ></Route>
              <Route exact path="logout" element={<Logout Role={"Seller"}/>}  ></Route>
              <Route exact path="settings" element={<WebsiteSettings id={Sid}/>}  ></Route>
              <Route exact path="sales/:id" element={<SingleOrder />}  ></Route>
              <Route exact path="modifyProduct/:id" element={<ModifyProduct />}  ></Route>
              <Route exact path="*" element={<Greeting Role={"Seller"} />}  ></Route>
              </Routes> 
              </div>
              </div>: <Routes>
              <Route path="/*" element={<Login role="Seller" domain={sub}/>}  ></Route>  
                </Routes>
          }
        </TokenProvider>
        </SellerDataProvider>
    </div>


  );
}

export default AdminS;
