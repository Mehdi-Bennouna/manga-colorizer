import styled from "styled-components";

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 3rem 0 3rem 0;

  h1 {
    font-family: "Roboto";
    font-size: 48px;
    font-weight: 600;
  }

  p {
    font-family: "Roboto";
    font-size: 28px;
    font-weight: 300;
    color: #6c7176;
  }
`;

export { AboutWrapper };
