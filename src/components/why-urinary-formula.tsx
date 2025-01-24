import { config } from "../config";
import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";

export function WhyUrinaryFormula() {
  return (
    <section className="| relative mx-auto mb-20 grid max-w-2xl justify-items-center gap-y-8 lg:max-w-none">
      <div>
        <h3 className="pb-4 text-center text-2xl font-bold text-brand-maroon sm:text-3xl">
          Why Advance Urinary Formula?
        </h3>
        <p className="text-balance pb-4 text-center text-4xl font-black md:text-5xl">
          Harness the Power of <br />
          Advance Urinary Formula
        </p>
        <p className="mx-auto max-w-[65ch] text-pretty px-2 text-center font-semibold leading-relaxed md:text-lg">
          Becasue it's A Guaranteed Remedy that helps RE-BUILD your bladder
          muscles from the Inside out.
        </p>
      </div>
      <div className="grid justify-items-center gap-8 lg:grid-cols-2 lg:items-center">
        <img
          className="max-w-[14rem] rounded-xl lg:max-w-[35rem]"
          src="/images/multiple-bottle.png"
          alt="problem section image"
        />
        <ul className="space-y-10 text-start">
          {config.whyUrinaryFormula.map(({ title, description, icon }) => (
            <li key={title} className="flex items-start gap-x-6">
              <div className="rounded-lg border bg-banner-gradient p-2 shadow-sm">
                <img className="w-20" src={icon} alt={title} />
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
      <p className="text-balance pt-16 text-center text-2xl font-semibold leading-relaxed sm:text-4xl sm:leading-relaxed">
        Try Eco Health® Advance Urinary Formula Risk Free for 90 Days
      </p>
      <CartBadge />
      <AddToCartButton />
      <OffersBadge />
    </section>
  );
}
