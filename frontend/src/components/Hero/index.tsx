import { Link } from "react-scroll";
import { DownButton, HeroMain, HeroWrapper } from "./styles";

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroMain>
        <h1>AI Art Colorizer</h1>
        <p>Your favorite art now in colors</p>
        <Link to="Create" spy={true} smooth={true} offset={0} duration={500}>
          Let's go
        </Link>
      </HeroMain>
      <DownButton
        to="Create"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Go down button
      </DownButton>
    </HeroWrapper>
  );
}
