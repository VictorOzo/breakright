import logo from "../../assets/images/logo.png";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="navlogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navlinks">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Company</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Catelogue</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbtn">
        <a href="/">Join Us</a>
      </div>
    </nav>
  );
};
