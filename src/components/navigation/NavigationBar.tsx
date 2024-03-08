import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="p-4">
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </nav>
    </div>
  );
}

export default NavigationBar;
