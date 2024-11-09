import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";

const reasons = [
  {
    icon: "/icons/icon-reason-1.svg",
    title: "Reduces Urgency and Frequency",
    description:
      "Formulated to alleviate the common discomforts of frequent and urgent urination, with ingredients like Pumpkin Seed Extract shown to reduce urinary urgency by up to 50% after 12 weeks of use",
  },
  {
    icon: "/icons/icon-reason-2.svg",
    title: "Supports Bladder Strength",
    description:
      "Our unique blend includes premium ingredients such asPumpkin Seed Extract and Horsetail, which help strengthen pelvic oor muscles and improve urinary ow. Studies show that Horsetail Extract can increase urinary ow by 15% after 6 weeks",
  },
  {
    icon: "/icons/icon-reason-3.svg",
    title: "Promotes Urinary Tract Health",
    description:
      "Features natural components like Punarnava (Boerhaavia Diffusa) and Soy Germ Extract, which support urinary tract health by reducing inammation and providing hormonal balance, particularly benecial for women.",
  },
] as const;

export function WhyBeetroot() {
  return (
    <section className="relative mx-auto max-w-xl space-y-2 pt-32 text-center lg:max-w-full">
      <h3 className="pb-2 text-xl font-bold text-brand-maroon sm:text-2xl">
        Why Advance Urinary Formula?
      </h3>
      <p className="text-3xl font-bold sm:text-5xl">
        Harness the Power of <br />
        Advance Urinary Formula
      </p>
      <p className="mx-auto max-w-[60ch] text-pretty leading-relaxed sm:text-lg">
        Becasue it's A Guaranteed Remedy that helps RE-BUILD your bladder
        muscles from the Inside out.
      </p>
      <div className="grid gap-6 pt-2 sm:pt-4 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pt-8">
        <div>
          <img
            className="rounded-xl"
            src="/images/img-solution-section.webp"
            alt="problem section image"
          />
        </div>
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
          Try Eco Health® Advance Urinary Formula Risk Free for 90 Days
        </p>
        <CartBadge />
        <AddToCartButton />
        <OffersBadge />
      </div>
    </section>
  );
}
