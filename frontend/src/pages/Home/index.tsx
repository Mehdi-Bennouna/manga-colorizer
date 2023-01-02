import About from "../../components/About";
import Create from "../../components/Create";
import Footer from "../../components/Footer";
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
      <About />
      <Footer />
    </HomeWrapper>
  );
}

export default Home;
