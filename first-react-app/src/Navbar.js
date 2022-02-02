import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as Logo } from "./icons/crpo-logo.svg";
import onClickOutside from "react-onclickoutside";
import NavPriceSlide from "./NavPriceSlide";

const Navbar = () => {
  return (
    <Nav>
      <Logo className="nav__logo" />
      <NavPriceSlide />
      <NavButton icons="😇">
        <DropdownMenu title="Profile">
          <ProfileForm />
        </DropdownMenu>
      </NavButton>
      <NavButton icons="🤑">
        <DropdownMenu title="Buy Me Chipotle">
          <DonateForm />
        </DropdownMenu>
      </NavButton>
      <NavButton icons="🤬">
        <DropdownMenu title="feedback">
          <FeedbackForm />
        </DropdownMenu>
      </NavButton>
    </Nav>
  );
};

const Nav = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar__buttons">{props.children}</ul>
    </nav>
  );
};

const NavButton = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="navButton">
      <a href="#" className="icon" onClick={() => setOpen(!open)}>
        {props.icons}
      </a>
      {open && props.children}
    </li>
  );
};

const DropdownMenu = (props) => {
  return (
    <div className="dropdown">
      <h3 className="dropdown__title">{props.title}</h3>
      <DropdownItem>{props.children}</DropdownItem>
    </div>
  );
};

const DropdownItem = (props) => {
  return <div>{props.children}</div>;
};

const ProfileForm = () => {
  return (
    <div>
      <form>
        <label>Email</label>
        <input placeholder="Email" />
        <label>Password</label>
        <input placeholder="Shh .. " />
        <div className="profile__btns">
          <input type="submit" className="submit__input" value="Login" />
          <input type="submit" className="submit__input" value="Sign Up" />
        </div>
      </form>
    </div>
  );
};

const FeedbackForm = () => {
  return (
    <div>
      <form>
        <label>Subject</label>
        <input placeholder="Whats Up" />
        <label>Message</label>
        <input className="feedback__input" placeholder="Dive Deep" />
        <input type="submit" className="submit__input" />
      </form>
    </div>
  );
};

const DonateForm = () => {
  return (
    <div>
      <form>
        <label>Leave A Note</label>
        <input placeholder="Chipotle or Starbys?" />
        <p>Send some</p>
        <div className="donate__btns">
          <input className="submit__input" type="submit" value="BTC" />
          <input className="submit__input" type="submit" value="ETH" />
          <input className="submit__input" type="submit" value="Cashapp" />
          <input className="submit__input" type="submit" value="Paypal" />
        </div>
      </form>
    </div>
  );
};

export default Navbar;
