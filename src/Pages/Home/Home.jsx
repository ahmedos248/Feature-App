import CardHeader from "./CardHeader";
import Future from "./Future";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Cards3 from "./Cards-3";
import Carousel from "./Cursle";
import Timer from "./Timer";
import Gallery from "./Gallery";
import HomeProducts from "./HomeProducts";
import Product from "../Product/Product";

const Home = () => {
  return (
    <>
      <Hero />
      <CardHeader />
      <Future />
      <Cards3 />
      <Testimonials />
      <Carousel />
      <Product />
      <HomeProducts />
      <Timer />
      <Gallery />
    </>
  );
};

export default Home;
