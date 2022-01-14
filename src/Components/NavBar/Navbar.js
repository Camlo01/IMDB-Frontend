import { useState } from "react";
import {
  Container,
  Wrapper,
  IconLogo,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileMenuIcon,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiFillVideoCamera } from "react-icons/ai";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ color: "#ebc88b", size: "1.8em" }}>
          <IconLogo>
            <AiFillVideoCamera size={"2em"} />
               IMDB
          </IconLogo>

            <MobileMenuIcon onClick={() => handleShowMobileMenu()}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileMenuIcon>

            <Menu showMobileMenu={showMobileMenu}>
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>HOME</MenuItemLink>
                <hr />
              </MenuItem>
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>ABOUT US</MenuItemLink>
                <hr />
              </MenuItem>
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>PORTFOLIO</MenuItemLink>
                <hr />
              </MenuItem>
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>CONTACT US</MenuItemLink>
                <hr />
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar