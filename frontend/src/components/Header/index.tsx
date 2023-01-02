import { Link } from "react-scroll";
import { Github, HeaderWrapper, Logo, Navigation } from "./style";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo href=".">DeOldify</Logo>
      <Navigation>
        <ul>
          <li>
            <Link  to="Home" spy={true} smooth={true} offset={-5} duration={500}>Home</Link>
          </li>
          <li>
            <Link  to="Create" spy={true} smooth={true} offset={0} duration={500}>Create</Link>
          </li>
          <li>
            <Link  to="Gallery" spy={true} smooth={true} offset={-20} duration={500}>Gallery</Link>
          </li>
          <li>
            <Link  to="About" spy={true} smooth={true} offset={-5} duration={500}>About</Link>
          </li>
        </ul>
      </Navigation>
      <Github href=".">Github</Github>
    </HeaderWrapper>
  );
}
