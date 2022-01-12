import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #49426c;
`;

export const Navbarwrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-family: "Oswarld";
  font-size: 1.2rem;
  color: #ebc88b;
  padding-left: 1rem;
`;

export const Menu = styled.ul` 
height: 100%;
display: flex;
justify-content: center;
align-items: center;

    @media screen and (max-width: 968px){
        width: 100%;
        height: 98vh;
        position: absolute;
        top: 80px:
        left: ${({ click }) => (click ? 0 : "-100%")};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: #49426c;
    }

`;

export const MenuItem = styled.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Oswald";
  font-weight: 400;

  &:hover {
    background-color: #343257;
    border-bottom: 0.3rem solid #ebc08b;
    transition: 0.4s ease-in;
  }

  @media screen and (max-width: 968px) {
    width: 100%;
    height: 70px;
  }
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  color: #ebc08b;
`;

export const IconLogoMobile = styled.div`
  display: none;

  @media screen and (max-width: 968px) {
    display: flex;
    color: #ebc08b;
    font-size: 2rem;
    padding-right: 1rem;
  }
`;
