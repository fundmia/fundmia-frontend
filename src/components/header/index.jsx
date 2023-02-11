import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import logo from '../../assets/logo.png';
import navLinkItems, { isActive } from "../../utils/navLinkItems";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

const Header = ({ isPublic }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const location = useLocation()

  return <header className="header">

    <div className="header__logo">
      <img src={logo} />
    </div>

    <div className="header__nav--desktop">
      <nav className="nav">
        {
          navLinkItems.map((link) => (
            <NavLink title={link} active={isActive(location.pathname, link)} key={link} />
          ))
        }
      </nav>

      {
        isPublic ?
          <div className="auth">
            <button className="auth__signup">
              Sign Up
            </button>
            <button className="auth__signin active">
              Sign In
            </button>
          </div>
          :
          <div>
            searchh
          </div>
      }

    </div>

    <nav className="header__nav--mobile">
      <MobileNav />
      <button className="hamburger">
        <AiOutlineMenu />
      </button>
    </nav>

  </header>;
};

export default Header;
