import Nabar from "./Component/Nabar/Nabar";
import ApiData from "./Pages/ApiData/ApiData";
import CrossFilterId from "./Pages/CrossFilter/CrossFilterId";
import ImageUploder from "./Pages/ImageUploder/ImageUploder";
import Tabs from "./Pages/Tabs/Tabs";
import Charts from "./Pages/Charts/PieChart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApexChart from "./Pages/ApexChart/ApexChart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nabar/>
      < Routes>
      < Route path="/" element={<CrossFilterId/>}/>
      < Route path="/imgUpoder" element={<ImageUploder/>}/>
      < Route path="/tabs" element={<Tabs/>}/>
      < Route path="/charts" element={<Charts/>}/>
      < Route path="/apex" element={<ApexChart/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
