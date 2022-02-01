import React, { useState } from "react";
import { ReactComponent as Logo } from "./icons/crpo-logo.svg";

function Navbar() {
  return (
    <Nav>
      <Logo className="nav__logo" />
      <NavPriceSlide />
      <NavButton icons="😇" />
      <NavButton icons="🤑" />
      <NavButton icons="🤬">
        <DropdownMenu />
      </NavButton>
    </Nav>
  );
}

function Nav(props) {
  return (
    <nav className="navbar">
      <ul className="navbar__buttons">{props.children}</ul>
    </nav>
  );
}

function NavPriceSlide() {
  return (
    <div className="navPriceSlide">
      <ul className="navPriceSlide__items">
        <li className="NavPriceSlide__asset">Eth 2700</li>
        <li>Sand 4.00</li>
      </ul>
    </div>
  );
}

function NavButton(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="navButton">
      <a href="#" className="icon" onClick={() => setOpen(!open)}>
        {props.icons}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  return (
    <div className="dropdown">
      <h3 className="dropdown__title">Feedback / Support</h3>
      <form>
        <label>Subject</label>
        <input placeholder="Whats Up" />
        <label>Message</label>
        <input placeholder="Dive Deep" />
      </form>
    </div>
  );
}

export default Navbar;
