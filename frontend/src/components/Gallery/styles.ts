import { ReactCompareSlider } from "react-compare-slider";
import styled from "styled-components";

const GalleryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 3rem 0 0 0;

  h1 {
    font-family: "Roboto";
    font-size: 48px;
    font-weight: 600;
    margin-bottom : 2rem;
  }
`;

const StyledReactCompareSlider = styled(ReactCompareSlider)`
  width: 35%;
  filter: drop-shadow(0px 0px 28px rgba(0, 0, 0, 0.25));
`;

export { GalleryWrapper, StyledReactCompareSlider };
