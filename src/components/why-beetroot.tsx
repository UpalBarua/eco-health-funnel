import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";

const reasons = [
  {
    icon: "/icons/icon-reason-1.svg",
    title: "Supports Healthy Blood Pressure",
    description:
      "Beetroot’s nitrates help to relax and dilate blood vessels, supporting balanced blood pressure and improved circulation throughout the body.",
  },
  {
    icon: "/icons/icon-reason-2.svg",
    title: "Inflammation Support",
    description:
      "Beetroot supports a healthy inflammatory response, which is vital for maintaining cardiovascular health and enhancing overall well-being.",
  },
  {
    icon: "/icons/icon-reason-3.svg",
    title: "Natural Energy Booster",
    description:
      "The natural nitrates in beetroot convert to nitric oxide, enhancing energy production and stamina without the crash associated with caffeine or sugar.",
  },
] as const;

export function WhyBeetroot() {
  return (
    <section className="relative mx-auto max-w-xl space-y-2 pt-32 text-center lg:max-w-full">
      <h3 className="pb-2 text-xl font-bold text-brand-maroon sm:text-2xl">
        Why Beetroot?
      </h3>
      <p className="text-3xl font-bold sm:text-5xl">
        Harness the Power of <br />
        Beetroot
      </p>
      <p className="mx-auto max-w-[60ch] text-pretty leading-relaxed sm:text-lg">
        There are many Beetroot supplements out there, many fall short and here
        is why:
      </p>
      <div className="grid gap-6 pt-2 sm:pt-4 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pt-8">
        <img
          className="rounded-xl"
          src="/images/img-solution-section.webp"
          alt="problem section image"
        />
        <ul className="space-y-6 text-start">
          {reasons.map(({ title, description, icon }) => (
            <li key={title} className="flex items-start gap-x-4">
              <div>
                <img className="w-28" src={icon} alt={title} />
              </div>
              <div>
                <h4 className="pb-1 text-xl font-bold sm:text-2xl">{title}</h4>
                <p className="text-pretty leading-relaxed sm:text-lg">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid justify-items-center gap-y-6">
        <p className="pt-16 text-xl font-semibold sm:text-4xl">
          Try Nitric Oxide Organic Beets Risk-Free For 90 Days
        </p>
        <CartBadge />
        <AddToCartButton />
        <OffersBadge />
      </div>
    </section>
  );
}
