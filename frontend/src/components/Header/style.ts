import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 7vh;
  padding: 1rem 2rem;

  a {
    text-decoration: none;
    font-family: "Open Sans";
  }
`;

const Logo = styled.a`
  font-size: 34px;
  font-weight: 600;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  a {
    font-size: 24px;
    font-weight: 300;
    cursor: pointer;
    display: inline-block;
    position: relative;
    /* color: #0087ca; */

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -2px;
      width: 0px;
      height: 1px;
      background: #000;
      transition: all 0.2s;
    }

    &:hover::after {
      width: 110%;
      left: -5%;
    }
  }
`;

const Github = styled.a`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  gap: 1rem;

  &::after {
    content: url("images/icons/github.svg");
    height: 35px;
    width: 35px;
  }
`;

export { HeaderWrapper, Logo, Navigation, Github };
