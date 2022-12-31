import { Github, HeaderWrapper, Logo, Navigation } from "./style";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo href=".">DeOldify</Logo>
      <Navigation>
        <ul>
          <li>
            <a href=".">Home</a>
          </li>
          <li>
            <a href=".">Gallery</a>
          </li>
          <li>
            <a href=".">About</a>
          </li>
          <li>
            <a href=".">Create</a>
          </li>
        </ul>
      </Navigation>
      <Github href=".">Github</Github>
    </HeaderWrapper>
  );
}
