import { AsSeenIn } from "./components/as-seen-in";
import { Banner } from "./components/banner";
import { CustomerReviews } from "./components/customer-reviews";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HealthBenefits } from "./components/health-benefits";
import { HealthyIngredients } from "./components/healthy-ingredients";
import { Offerings } from "./components/offerings";
import { Packages } from "./components/packages";
import { Satisfaction } from "./components/satisfaction";
import { TheProblem } from "./components/the-problem";
import { TheSolution } from "./components/the-solution";
import { WhyBeetroot } from "./components/why-beetroot";

export function App() {
  return (
    <div className="grid-container">
      <Header />
      <Banner />
      <Offerings />
      <AsSeenIn />
      <TheProblem />
      <TheSolution />
      <WhyBeetroot />
      <HealthBenefits />
      <HealthyIngredients />
      <Satisfaction />
      <CustomerReviews />
      <Packages />
      <Faq />
      <Footer />
    </div>
  );
}
