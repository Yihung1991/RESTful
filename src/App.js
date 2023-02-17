import { BrowserRouter,Routes,Route } from "react-router-dom";
import Tmp1 from "./pages/Tmp1";
import Tmp2 from "./pages/Tmp2";
import AbList from "./pages/AbList";
import Navbar from "./components/Navbar";
function App() {
  return <>
    <BrowserRouter>
    <Navbar/>
          <Routes>
            <Route path="/" element={<Tmp1 />}/>
            <Route path="/tmp2" element={<Tmp2 />}/>
            <Route path="/ablist" element={<AbList />}/>
          </Routes>
       
    </BrowserRouter>
  </>;
}

export default App;
