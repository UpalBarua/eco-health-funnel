import { IoMdStar } from "react-icons/io";
import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { SalesBadge } from "./sales-badge";

export function Banner() {
  return (
    <section className="full-width grid-container bg-brand-beige">
      <div className="relative grid min-h-[32rem] items-center gap-5 md:grid-cols-2">
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
          <p className="text-balance text-3xl font-bold text-brand-maroon">
            Natural Boost <span className="text-neutral-dark">for</span>{" "}
            Balanced Blood Pressure <span className="text-neutral-dark">&</span>{" "}
            Heart Healths
          </p>
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
