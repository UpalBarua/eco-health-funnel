import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { Offerings } from "./components/offerings";
import { AsSeenIn } from "./components/as-seen-in";

export function App() {
  return (
    <div className="grid-container">
      <Header />
      <Banner />
      <Offerings />
      <AsSeenIn />
    </div>
  );
}
