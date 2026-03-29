import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/island">Island</NavLink></li>
        <li><NavLink to="/architecture">Architecture</NavLink></li>
        <li><NavLink to="/coding">Coding</NavLink></li>
        <li><NavLink to="/coffee">Coffee</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
