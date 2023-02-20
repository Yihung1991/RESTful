import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tmp1 from "./pages/Tmp1";
import Login from "./pages/Login";
import AbList from "./pages/AbList";
import Navbar from "./components/Navbar";
import {ThemeContextProvider} from "./contexts/ThemeContext";
function App() {
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Tmp1 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ab-list" element={<AbList />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
}

export default App;
