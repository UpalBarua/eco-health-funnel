import { IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";
import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { SalesBadge } from "./sales-badge";
import { OffersBadge } from "./offers-badge";

const offersings = [
  "Regain Control Over Your Bladder",
  "Minimize Urgent Bathroom Trips",
  "Strengthen Pelvic and Bladder Function for Long-Term Support",
  "Promote Healthy Urinary Tract Function",
  "Enjoy Greater Comfort and Condence in Daily Life",
  "Reduce Nighttime Disruptions for Better Sleep",
] as const;

export function Banner() {
  return (
    <section className="full-width grid-container bg-brand-beige">
      <div className="relative grid min-h-[35rem] items-center gap-5 py-14 md:grid-cols-2">
        <div className="grid justify-center justify-items-center gap-y-4 pt-10 text-center md:justify-items-start md:gap-y-6 md:text-start">
          <div className="flex flex-wrap items-center justify-center gap-x-3 rounded-full bg-white px-4 py-2 text-sm font-bold md:py-1 md:text-base">
            <span className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoMdStar
                  className="-ms-1 size-[1.675rem] text-[#e5c729]"
                  key={`star${index}`}
                />
              ))}
            </span>
            <span>4.7/5 stars</span>
            <span>859 verified reviews</span>
          </div>
          <p className="text-balance text-3xl font-bold text-brand-maroon lg:text-4xl">
            THE BLADDER-BUILDING SUPER NUTRIENT
            <span className="text-neutral-dark">FOR</span> LEAK-FREE DAYS AND
            RESTFUL NIGHTS!
          </p>
          <div>
            <p className="pb-6 text-lg leading-relaxed">
              If bladder problems have you stressed, frustrated, and embarrassed
              then it might be time to try this remedy you can try at home. It’s
              natural, affordable and works day and night.
            </p>
            <ul className="space-y-2 md:text-xl">
              {offersings.map((offering, index) => (
                <li
                  className="flex items-center gap-x-2"
                  key={`offering${index}`}
                >
                  <IoIosCheckmarkCircle className="size-6 text-[#1f8e2a]" />
                  <span>{offering}</span>
                </li>
              ))}
            </ul>
          </div>
          <OffersBadge />
          <SalesBadge />
          <CartBadge />
          <AddToCartButton />
        </div>
        <img
          className="object-cover object-center lg:min-w-[35rem]"
          src="/images/img-banner.png"
          alt="banner image"
        />
      </div>
    </section>
  );
}
