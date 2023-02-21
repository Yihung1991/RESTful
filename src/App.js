import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tmp1 from "./pages/Tmp1";
import Login from "./pages/Login";
import AbList from "./pages/AbList";
import Navbar from "./components/Navbar";
import MyCanvas from "./pages/MyCanvas";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AuthContextProvider } from "./contexts/AuthContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Tmp1 />} />
              <Route path="/my-canvas" element={<MyCanvas />} />
              <Route path="/login" element={<Login />} />
              <Route path="/ab-list" element={<AbList />} />
            </Routes>
          </AuthContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
