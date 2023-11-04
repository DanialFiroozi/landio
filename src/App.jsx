// Layout
import Layout from "./layout/Layout";

// Components
import HeroSectionMain from "./components/HeroSection/HeroSectionMain";
import AboutMain from "./components/About/AboutMain";
import HowWorksMain from "./components/HowWorks/HowWorksMain";
import OurServicesMain from "./components/OurServices/OurServicesMain";
import TeamMain from "./components/Team/TeamMain";
import MoveUpMain from "./components/MoveUp/MoveUpMain";
import CommentsMain from "./components/Comments/CommentsMain";
import PricingMain from "./components/Pricing/PricingMain";
import FaqMain from "./components/Faq/FaqMain";
import CustomersMain from "./components/Customers/CustomersMain";
import LoadingMain from "./components/Loading/LoadingMain";
import { useEffect, useState } from "react";

const App = () => {
  const [pageRendered, setPageRendered] = useState(true);

  useEffect(() => {
    setPageRendered(false);
  }, []);

  return (
    <>
      <Layout>
        <HeroSectionMain />
        <AboutMain />
        <HowWorksMain />
        <OurServicesMain />
        <TeamMain />
        <CommentsMain />
        <PricingMain />
        <FaqMain />
        <CustomersMain />

        <LoadingMain percentage={!pageRendered && -100} />

        <MoveUpMain />
      </Layout>
    </>
  );
};

export default App;
