import styled from "styled-components";

const HeroWrapper = styled.section`
  position: relative;
  height: 93vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("images/HeroBackground.jpg");
    background-repeat: no-repeat;
    background-size: auto 105vh;
    background-position: 10% 80%;
    filter: brightness(85%);
  }
`;

const HeroMain = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-family: "Roboto";
    font-size: 64px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-family: "Roboto";
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }

  a {
    text-decoration: none;
    font-family: "Roboto";
    font-size: 32px;
    font-weight: 400;
    color: #fff;

    padding: 0.7rem 1.3rem;
    margin-top: 1rem;
    border: 3px solid #fff;
    border-radius: 10px;

    backdrop-filter : blur(7px);
  }
`;

const DownButton = styled.a`
  position: absolute;
  top: 94%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 0;

  height: 3rem;
  width: 3rem;
  background-color: red;
  background: url("images/icons/down-circle.svg");
  
  border-radius : 50%;
  backdrop-filter : blur(7px);
`;

export { HeroWrapper, HeroMain, DownButton };
