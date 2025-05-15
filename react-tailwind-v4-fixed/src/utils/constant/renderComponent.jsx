import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import TestimonialSection from "../../components/TestimonialSection";
import Footer from "../../components/Footer";

const renderComponent = (component) => {
  switch (component.type) {
    case "Header":
      return <Header {...component.props} />;
    case "HeroSection":
      return <HeroSection {...component.props} />;
    case "FeaturesSection":
      return <FeaturesSection {...component.props} />;
    case "TestimonialSection":
      return <TestimonialSection {...component.props} />;
    case "Footer":
      return <Footer {...component.props} />;
    default:
      return <div>Unknown component type: {component.type}</div>;
  }
};

export default renderComponent;
