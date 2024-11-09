import { IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";
import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";
import { SalesBadge } from "./sales-badge";

const offerings = [
  "Regain Control Over Your Bladder",
  "Minimize Urgent Bathroom Trips",
  "Strengthen Pelvic & Bladder Function Long Term",
  "Promote Healthy Urinary Tract Function",
  "Enjoy Greater Comfort and Condence in Daily Life",
  "Reduce Nighttime Disruptions for Better Sleep",
] as const;

export function Banner() {
  return (
    <section className="full-width grid-container bg-brand-beige">
      <div className="relative grid items-center justify-center justify-items-center gap-y-4 py-14 pt-10 text-center md:grid-cols-2 md:gap-0 md:text-start lg:grid-cols-[60%_1fr] lg:justify-items-start">
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
        <p className="text-balance text-[1.75rem] font-black leading-[1.25] text-[#8e2253] md:col-start-1 lg:text-5xl lg:leading-[1.25]">
          BLADDER-BUILDING Super Nutrient
          <span className="text-neutral-dark"> for </span> LEAK FREE days
          <span className="text-neutral-dark"> and </span>
          RESTFUL NIGHTS!
        </p>
        <p className="col-span-full text-pretty text-lg font-semibold leading-relaxed lg:col-span-1 lg:row-start-3">
          If bladder problems have you stressed, frustrated, and embarrassed
          then it might be time to try this remedy you can try at home. It’s
          natural, affordable and works day and night.
        </p>
        <ul className="col-span-full col-start-1 space-y-2 pb-10 text-start font-semibold md:text-xl lg:col-span-1 lg:row-start-4">
          {offerings.map((offering, index) => (
            <li className="flex items-start gap-x-2" key={`offering${index}`}>
              <div>
                <IoIosCheckmarkCircle className="size-7 text-[#1f8e2a]" />
              </div>
              <span>{offering}</span>
            </li>
          ))}
        </ul>
        <SalesBadge className="row-start-7 md:row-start-3 lg:row-start-5" />
        <CartBadge className="row-start-8 md:row-start-4 lg:row-start-6" />
        <AddToCartButton className="col-span-full row-start-4 md:row-start-5 lg:col-span-1 lg:col-start-1 lg:row-start-7" />
        <OffersBadge className="col-span-full row-start-5 md:row-start-6 lg:col-span-1 lg:col-start-1 lg:row-start-8" />
        <img
          className="row-start-3 object-cover object-center md:col-start-2 md:row-span-4 md:row-start-1 lg:row-span-8 lg:min-w-[35rem]"
          src="/images/img-banner.png"
          alt="banner image"
        />
        <picture>
          <source
            media="(min-width:64rem)"
            srcSet="/icons/icon-manufacturer-vertical.webp"
          />
          <source srcSet="/icons/icon-manufacturer-horizontal.webp" />
          <img
            className="left-[30rem] top-[26rem] col-span-full max-w-[16rem] md:row-start-1 lg:absolute lg:row-span-full lg:max-w-20"
            src="/icons/icon-manufacturer-horizontal.webp"
            alt="Manufacturer logos"
          />
        </picture>
      </div>
    </section>
  );
}
