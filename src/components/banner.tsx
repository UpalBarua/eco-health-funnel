import { IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";
import { config } from "../config";
import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";
import { SalesBadge } from "./sales-badge";

export function Banner() {
  return (
    <section className="full-width grid-container mb-20 bg-banner-gradient">
      <div className="md:gird-cols-2 relative grid items-center justify-center justify-items-center gap-y-8 py-14 pt-10 text-center md:gap-x-10 md:gap-y-6 md:text-start lg:grid-cols-[75%_1fr] lg:justify-items-start">
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
        <p className="max-w-[30ch] text-balance text-[1.75rem] font-black leading-[1.25] text-[#8e2253] md:col-start-1 lg:text-5xl lg:leading-[1.25]">
          BLADDER-BUILDING Super Nutrient
          <span className="text-neutral-dark"> for </span> LEAK FREE days
          <span className="text-neutral-dark"> and </span>
          RESTFUL NIGHTS!
        </p>
        <p className="col-span-full max-w-[60ch] text-pretty text-lg font-semibold leading-relaxed lg:col-span-1 lg:row-start-3">
          If bladder problems have you stressed, frustrated, and embarrassed
          then it might be time to try this remedy you can try at home. It’s
          natural, affordable and works day and night.
        </p>
        <ul className="col-span-full col-start-1 space-y-2 pb-5 text-start font-semibold md:text-xl lg:col-span-1 lg:row-start-4">
          {config.bannerOfferings.map((offering, index) => (
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
        <div className="right-0 top-1/2 row-start-3 max-w-[30rem] md:col-start-2 md:row-span-4 md:row-start-1 lg:absolute lg:row-span-8 lg:w-[min(52vw,_45rem)] lg:max-w-none lg:-translate-y-1/2">
          <img
            className="object-cover object-center"
            src="/images/img-banner.webp"
            alt="banner image"
          />
        </div>
        <picture className="left-[40%] top-[45%] col-span-full max-w-[16rem] lg:absolute lg:max-w-20">
          <source
            media="(min-width:64rem)"
            srcSet="/icons/icon-manufacturer-vertical.webp"
          />
          <source srcSet="/icons/icon-manufacturer-horizontal.webp" />
          <img
            src="/icons/icon-manufacturer-horizontal.webp"
            alt="Manufacturer logos"
          />
        </picture>
      </div>
    </section>
  );
}
