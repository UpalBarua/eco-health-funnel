import { AsSeenIn } from "./components/as-seen-in";
import { Banner } from "./components/banner";
import { Header } from "./components/header";
import { HealthBenefits } from "./components/health-benefits";
import { Offerings } from "./components/offerings";
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
    </div>
  );
}
