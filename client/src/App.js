import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminS from "./Admin-S";
import Theme1 from "./Theme1";
import PublicMain from './Public'
import axios from 'axios'
import AdminAD from "./Admin-AD";
import AdminE from "./Admin-E";
function App() {
  axios.defaults.baseURL = 'http://localhost:5000'
  let subDomain  = window.location.host.split('.')[0]
  let domainArr = (window.location.host.split('.'))
  return (
    <div className="App overflow-x-hidden">
      <Router>
        
        {
          domainArr.length===1 ? 
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
      {/* <Router>
        <Routes>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
