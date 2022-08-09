import React from "react";
import { NavLink } from "react-router-dom";

function Navbar()
{
    return(
        <>
           <nav className="navbar navbar-expand-sm justify-content-center">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item pl-3 pr-3">
          <img src="https://static.wixstatic.com/media/05e3dc_861f907ca17745d7879196436cec056f.png/v1/fill/w_157,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/05e3dc_861f907ca17745d7879196436cec056f.png"></img>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link" style={{paddingLeft: "40px", paddingRight:"40px"}}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" style={{paddingLeft: "40px", paddingRight:"40px"}}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/rate" className="nav-link" style={{paddingLeft: "40px", paddingRight:"40px"}}>Rooms and Rates</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/activities" className="nav-link" style={{paddingLeft: "40px", paddingRight:"40px"}}>Acitivites</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/book" className="nav-link"  style={{paddingLeft: "40px", paddingRight:"40px"}}>Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav>

        </>
    );
}
export default Navbar;