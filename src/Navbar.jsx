import { NavLink } from "react-router-dom";
import "./App.css";

export default function Navbar(){

return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <NavLink className="nav-link" to="/" end>
        Home
      </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/contact">
        Contact
      </NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link" to="/pricing">
        Pricing
       </NavLink>
      </li>
    </ul>
  </div>
</nav>
);
}
