import {Route, Routes } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import Customers from "../Components/Customers";
import Bills from '../Components/Bills'
import Inventory from "../Components/Inventory";
import Login from '../Components/Login';
import TabsTable from '../Components/TabsTable';
import AddProduct from '../Components/AddProduct';
import Client from '../Components/Clients';
import ProductPool from '../Components/AdminProductPool/indexcopy';
import TokenProvider from './Contexts/';
import Logout from '../Components/Logout';
import Executive from '../Components/Executive';import Greeting from '../Components/Greeting';
;
function AdminAD() {
  const Menu = [
    {
      link: "productpool",
      text: "Inventory",
    },
    {
        link: "Client",
        text: "Client",
     },
    // {
    //   link: "Customers",
    //   text: "Customers",
    // },
    // {
    //   link: "bills",
    //   text: "Bills",
    // },    
    // {
    //   link: "executive",
    //   text: "Executive",
    // },
    {
      link: "Logout",
      text: "Logout",
    },
  
  ]
  let User = localStorage.getItem('Admin')
  return (
 
    <div className="App bg-NavbarBg font-Roboto text-xl">
          <TokenProvider>
            {
              User ? 
              <div className="p-0 m-0 flex">
              {/* <div className="m-10 p-2"> */}
              <Sidebar Menu={Menu}/>
              <div className="m-20 bg-white w-full rounded-xl ">
              <Routes>
              <Route exact path="Customers" element={<Customers />}  ></Route>
              <Route exact path="Client" element={<Client />}  ></Route>
              <Route exact path="bills" element={<Bills />}  ></Route>
              <Route exact path="inventory" element={<Inventory />}  ></Route>
              <Route exact path="inventory/add" element={<AddProduct />}  ></Route>
              <Route exact path="test" element={<TabsTable />}  ></Route>
              <Route exact path="logout" element={<Logout Role="Admin"/>}  ></Route>
              <Route exact path="executive" element={<Executive />}  ></Route>
              <Route exact path="productpool" element={<ProductPool />}  ></Route>
              <Route exact path="*" element={<Greeting Role="Admin" />}  ></Route>

              {/* <Route exact path="Login" element={<Login />}  ></Route> */}
              </Routes>
              </div>
              {/* </div> */}
        </div>
              :
              <div className='m-auto'>
                 <Routes>
              <Route path="/*" element={<Login role="Admin"/>}  ></Route>  
                </Routes>
                </div>
            }
       
        </TokenProvider>
    </div>


  );
}

export default AdminAD;
