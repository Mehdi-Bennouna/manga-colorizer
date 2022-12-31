import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height : 7vh;
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
    gap: 2rem;
  }

  a {
    font-size: 24px;
    font-weight: 300;
  }
`;

const Github = styled.a`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  gap : 1rem;

  &::after {
    content: url("images/icons/github.svg");
    height : 40px;
    width : 40px;
  }
`;

export { HeaderWrapper, Logo, Navigation, Github };
