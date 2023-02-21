import {Link} from "react-router-dom";
import { useContext } from "react";
import ThemeContext, { themes } from "../contexts/ThemeContext";
import AuthContext from "../contexts/AuthContext";

function Navbar() {
  const { name: themeName, color, backgroundColor, setTheme} = useContext(ThemeContext)
  const {myAuth,logout} =useContext(AuthContext)

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ab-list">
                  ab-list
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my-canvas">
                  my-canvas
                </Link>
              </li>
              
            </ul>

            <button type="button" className="btn btn-primary" 
              style={{color, backgroundColor}}
              onClick={()=>{
                if(themeName==='dark'){
                  setTheme(themes.light)
                } else {
                  setTheme(themes.dark)
                }
              }}
              >{themeName}</button>
              <ul className="navbar-nav mb-2 mb-lg-0">
              {myAuth.authorized ? (<><li className="nav-item"> 
              <a className="nav-link" href="#/" onClick={(e)=>e.preventDefault()}>
                  { myAuth.account }
                </a>
              </li><li className="nav-item">
                <a className="nav-link" href="#/" onClick={(e)=>{
                  e.preventDefault();
                  logout();
                }}>
                  登出
                </a>
              </li></>):(<>
                <li className="nav-item">
                <Link className="nav-link" to="/login">
                  登入
                </Link>
              </li>
              </>)}
              {/* <li className="nav-item"> 
              <a className="nav-link" href="#/" onClick={(e)=>e.preventDefault()}>
                  { myAuth.account }
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  登入
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/" onClick={(e)=>{
                  e.preventDefault();
                  logout();
                }}>
                  登出
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
