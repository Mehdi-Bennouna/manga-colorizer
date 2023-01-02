import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #f5f5f5;
  padding: 2rem 4rem;

  h2 {
    font-family: "Roboto";
    font-size: 32px;
    font-weight: 500;
    color: #3d4246;
    display: flex;
    gap: 1rem;

    &::before {
      content: url("images/icons/github.svg");
      color: #3d4246;
      height: 40px;
      width: 40px;
    }
  }

  ul {
    margin-top : 1rem;
    display : flex;
    flex-direction : column;
    gap: 0.5rem;
  }

  a {
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 300;
    color: #3d4246;
    text-decoration : none;
  }
`;

export { FooterWrapper };
