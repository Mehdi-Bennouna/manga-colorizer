import { ReactCompareSliderImage } from "react-compare-slider";
import { GalleryWrapper, StyledReactCompareSlider } from "./styles";
import image_1 from "../../assets/images/Before.png";
import image_2 from "../../assets/images/After.png";

export default function Gallery() {
  return (
    <GalleryWrapper>
      <h1>Gallery</h1>
      <StyledReactCompareSlider
        changePositionOnHover
        itemOne={<ReactCompareSliderImage src={image_1} />}
        itemTwo={<ReactCompareSliderImage src={image_2} />}
      />
    </GalleryWrapper>
  );
}
