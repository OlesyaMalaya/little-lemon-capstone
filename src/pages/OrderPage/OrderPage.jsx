import Hero from "../../components/Hero/Hero";
import { orderPageHero } from "../../data/heroes";

const OrderPage = () => {
  return (
    <>
      <Hero hero={orderPageHero} />
    </>
  );
};

export default OrderPage;
