import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminS from "./Admin-S";
import Theme1 from "./Theme1";
import PublicMain from './Public'
import axios from 'axios'
import AdminAD from "./Admin-AD";
import AdminE from "./Admin-E";
import { useEffect, useState } from "react";
function App() {
const [width, setWidth] = useState(window.innerWidth);
function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);
const isMobile = width <= 768;
  axios.defaults.baseURL = 'https://aapkidukaan.live/'
  let subDomain  = window.location.host.split('.')[0]
  let domainArr = (window.location.host.split('.'))
  return (
    <div className="App overflow-x-hidden">
      {!isMobile ? 
      <Router>
        {
          domainArr.length===2 ? 
          <Routes>
          <Route path={"/executive/*"} element={<AdminE/>} ></Route> 
          <Route exact path="/*" element={<PublicMain/>} >   </Route>
          <Route path={"/admin/*"} element={<AdminAD/>} ></Route>  
          </Routes>
         :  
         <Routes>
         <Route exact path="/*" element={<Theme1 domain={subDomain}/>} ></Route>
         <Route exact path={"/admin/*"} element={<AdminS />} ></Route>  
         </Routes>
        }
      </Router>    
      :
      <div className="App text-xl mb-10 mt-10">Mobile view not yet supported.</div>
       }
    </div>
  ); 
}

export default App;
