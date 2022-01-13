import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #49426c;
  position: "relative";
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
export const IconLogo = styled.div`
color: #ebc88b;
margin-left: 0.5rem;
font-family: "Oswald", sans-serif;
font-size: 1.5rem;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
font-weight: 300;
`;


export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    position: absolute;
    top: 70px;
    left: ${({ showMobileMenu }) => (showMobileMenu ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #49426c;
    transition: 0.8s all ease;
  }
`;

export const MenuItem = styled.li`
  z-index: 999;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  background-color: #49426c;
  transition: 0.3s all ease;
  hr {
    text-align: center;
    width: 0;
    border: none;
    border-bottom: 0.3rem solid #2a9df4;
    transition: 0.3s all ease;
  }
  &:hover {
    background-color: #49426c;
    transition: 0.9s all ease;
    hr {
      width: 100%;
      transition: 0.0s all ease;
      box-shadow: 1px -10px 20px rgba(42, 157, 244, 0.9);
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
  }
`;

export const MenuItemLink = styled.a`
  padding: 0.5rem 4rem;
  color: #ccc;
  font-family: "Oswald";
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  width: 100%;
  text-decoration: none;
`;

export const MobileMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    margin-right: 0.5rem;
    svg {
      animation: ${({ showMobileMenu }) =>
        showMobileMenu ? "rotationMoveInitial" : "rotationMoveReverse"};
      animation-duration: 0.5s;
    }
    @keyframes rotationMoveInitial {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(90deg);
      }
    }
    @keyframes rotationMoveReverse {
      0% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;