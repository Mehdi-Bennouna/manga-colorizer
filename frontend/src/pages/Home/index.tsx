import Create from "../../components/Create";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { HomeWrapper } from "./styles";

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Hero />
      <Create />
    </HomeWrapper>
  );
}

export default Home;
