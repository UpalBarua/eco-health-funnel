import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { Offerings } from "./components/offerings";

export function App() {
  return (
    <div className="grid-container">
      <Header />
      <Banner />
      <Offerings />
    </div>
  );
}
