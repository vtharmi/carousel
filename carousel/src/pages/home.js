import Carousel from "../components/Carousel";

function Home() {
  return (
    <>
    <Carousel slides={1} infinite="false"/>
    <Carousel slides={4} infinite="true"/>
    <Carousel slides={10} infinite="false"/>
    </>
  )
}

export default Home;