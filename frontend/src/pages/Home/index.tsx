import Create from "../../components/Create";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { HomeWrapper } from "./styles";

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Hero />
      <Create />
      <Gallery />
    </HomeWrapper>
  );
}

export default Home;
