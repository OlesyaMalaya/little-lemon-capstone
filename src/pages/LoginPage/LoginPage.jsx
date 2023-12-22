import Hero from "../../components/Hero/Hero";
import { loginPageHero } from "../../constants/heroes";

const LoginPage = () => {
  return (
    <>
      <Hero hero={loginPageHero} />
    </>
  );
};

export default LoginPage;
