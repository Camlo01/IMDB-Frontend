import React, { useState } from "react";
import {
  IconLogo,
  IconLogoMobile,
  Menu,
  MenuItem,
  MenuItemLink,
  NavbarContainer,
  Navbarwrapper,
} from "./Navbar.elements";
import { AiFillVideoCamera } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <>
      <NavbarContainer>
        <Navbarwrapper>
          <IconLogo>
            <AiFillVideoCamera size={"2em"} />
            IMDB
          </IconLogo>

          <IconLogoMobile onClick={() => ChangeClick()}>
            {click ? <FaTimes /> : <FaBars />}
          </IconLogoMobile>

          <Menu click={click}>
            <MenuItem onClick={() => ChangeClick()}>
              <MenuItemLink>HOME</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeClick()}>
              <MenuItemLink>MOVIES</MenuItemLink>
            </MenuItem> 
            <MenuItem onClick={() => ChangeClick()}>
              <MenuItemLink>ABOUT US</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeClick()}>
              <MenuItemLink>PROFILE</MenuItemLink>
            </MenuItem>
          </Menu>
        </Navbarwrapper>
      </NavbarContainer>
    </>
  );
};
export default Navbar;
