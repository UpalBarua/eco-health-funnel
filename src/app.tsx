import { Banner } from "./components/banner";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HealthyIngredients } from "./components/healthy-ingredients";
import { Packages } from "./components/packages";
import { Satisfaction } from "./components/satisfaction";
import { TheProblem } from "./components/the-problem";
import { TheSolution } from "./components/the-solution";
import { WhyItWorks } from "./components/why-it-works";
import { WhyUrinaryFormula } from "./components/why-urinary-formula";
import { Cta } from "./components/cta";
import { CustomerReviews } from "./components/customer-reviews";
import { Offers } from "./components/offers";

export function App() {
  return (
    <div className="grid-container">
      <Header />
      <Banner />
      <TheProblem />
      <TheSolution />
      <Offers />
      <WhyUrinaryFormula />
      <WhyItWorks />
      <HealthyIngredients />
      <Satisfaction />
      <Packages />
      <Faq />
      <CustomerReviews />
      <Cta />
      <Footer />
    </div>
  );
}
