import { IoIosCheckmarkCircle } from "react-icons/io";

const offersings = [
  "Supports Heart Muscle Function*",
  "Promotes Healthy Cholesterol*",
  "Aids Skin and Eye Health*",
  "Boosts Energy and Stamina*",
  "Supports Healthy Inflammatory Response*",
] as const;

export function Offerings() {
  return (
    <section className="pt-20 font-semibold">
      <div className="flex flex-wrap items-center justify-center gap-7 pb-8">
        <div className="grid justify-items-center gap-3 text-center text-sm">
          <img src="/icons/icon-offerings-1.svg" alt="offerings icon" />
          <span>
            100% Secure
            <br />
            Checkout
          </span>
        </div>
        <div className="grid justify-items-center gap-3 text-center text-sm font-semibold">
          <img src="/icons/icon-offerings-2.svg" alt="offerings icon" />
          <span>
            Ships in 1<br />
            Business Day
          </span>
        </div>
        <div className="grid justify-items-center gap-3 text-center text-sm font-semibold">
          <img src="/icons/icon-offerings-3.svg" alt="offerings icon" />
          <span>
            90-Day
            <br />
            Guarantee
          </span>
        </div>
      </div>
      <div>
        <p className="max-w-[60ch] pb-6 text-lg leading-relaxed">
          Rich in natural beetroot and blended with nature's finest ingredients
          to support cardiovascular wellness, each scoop is a step toward a
          heart-healthy lifestyle.
        </p>
        <ul className="space-y-2 md:text-xl">
          {offersings.map((offering, index) => (
            <li className="flex items-center gap-x-2" key={`offering${index}`}>
              <IoIosCheckmarkCircle className="size-6 text-[#1f8e2a]" />
              <span>{offering}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center pt-10">
        <img
          className="w-64"
          src="/icons/icon-manufacturer.webp"
          alt="manufacturer icons"
        />
      </div>
    </section>
  );
}
