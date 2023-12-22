import Hero from "../../components/Hero/Hero";
import TilesView from "../../layouts/TilesView/TilesView";
import Carousel from "../../components/Carousel/Carousel";
import { aboutPageHero } from "../../data/heroes";
import { infos } from "../../data/infos";
import { testimonials } from "../../data/testimonials";

const AboutPage = () => {
  return (
    <>
      <Hero hero={aboutPageHero} />
      <article>
        <section className="container content-container">
          <h3>About Us</h3>
        </section>
        <section className="container content-container">
          <Carousel infos={infos} />
        </section>
      </article>
      <article>
        <h3 className="container content-container">Our customers say</h3>
        <TilesView tiles={testimonials} type="testimonial" />
      </article>
    </>
  );
};

export default AboutPage;
