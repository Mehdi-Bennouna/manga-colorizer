import { ReactCompareSlider } from "react-compare-slider";
import styled from "styled-components";

const ModalWrapper = styled.div`
  transition: 0.5s;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  backdrop-filter: blur(4px);
  min-height: 200px;
  min-width: 200px;
  border-radius: 10px;
  box-shadow: 0 6px 10px 0 rgb(27 28 30 / 31%);
  z-index: 1000;
  font-family: "Roboto";
  padding: 20px 50px 50px 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-family: "Roboto";
    font-size: 30px;
    padding-top: 20px;
  }

  h2 {
    font-family: "Roboto";
    font-size: 30px;
    margin-bottom: -50px;
  }

  input {
    visibility: hidden;
  }

  label {
    border: 1px dashed #000;
    padding: 20px 45px;
    border-radius: 5px;

    &:hover {
      background-color: rgba(150, 150, 150, 0.2);
    }
  }

  button {
    font-family: "Roboto";
    background-color: transparent;
    border-width: 0;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px black solid;
  }

  img {
    width: 400px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const StyledReactCompareSlider = styled(ReactCompareSlider)`
  width: 500px;
  filter: drop-shadow(0px 0px 28px rgba(0, 0, 0, 0.25));
`;

export { ModalWrapper, Overlay, StyledReactCompareSlider };
