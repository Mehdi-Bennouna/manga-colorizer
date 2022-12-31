import { DownButton, HeroMain, HeroWrapper } from "./styles";

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroMain>
        <h1>AI Art Colorizer</h1>
        <p>Your favorite art now in colors</p>
        <a href=".">Let's go</a>
      </HeroMain>
      <DownButton href=".">Go down button</DownButton>
    </HeroWrapper>
  );
}
