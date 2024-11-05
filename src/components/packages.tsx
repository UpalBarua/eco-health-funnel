import { SalesBadge } from "./sales-badge";

export function Packages() {
  return (
    <section>
      <h2 className="pb-5 text-center text-3xl font-bold text-brand-green sm:text-5xl">
        Choose Your Package
      </h2>
      <div className="grid justify-center gap-4 pt-20 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`package${index}`}
            className="relative grid max-w-80 gap-2 rounded-xl border px-4 pb-8 pt-4 text-center shadow-sm"
          >
            <div className="absolute top-0 flex h-12 w-full -translate-y-full items-center justify-center rounded-t-lg bg-brand-lime text-center font-semibold text-white">
              Most Popular
            </div>
            <h3 className="text-balance text-4xl font-bold tracking-tight">
              Buy 2, Get 1 FREE!
            </h3>
            <span className="block text-sm font-semibold italic text-brand-lime">
              Instant Savings $64.94
            </span>
            <img src="/images/img-package-2.webp" alt="" />
            <span className="text-5xl font-bold">$28.30</span>
            <span className="font-bold">Per canister</span>
            <span className="pb-4 text-xl font-bold uppercase opacity-60">
              REGULARLY <span className="line-through">$149.85</span>
            </span>
            <div className="flex items-center gap-x-2 text-start">
              <input type="radio" className="size-5 accent-black" />
              <label
                className="flex w-full items-center justify-between"
                htmlFor=""
              >
                <span>Subscribe & Save 15%</span>
                <div className="font-semibold">
                  <span className="text-brand-lime">
                    $84.91
                    <span />
                    <span className="line-through opacity-60">$149.85</span>
                  </span>
                </div>
              </label>
            </div>
            <div className="flex items-center gap-x-2 text-start">
              <input type="radio" className="size-5 accent-black" />
              <label
                className="flex w-full items-center justify-between"
                htmlFor=""
              >
                <span>One-time</span>
                <div className="font-semibold">
                  <span className="text-brand-lime">$99.90</span>
                  <span className="line-through opacity-60">$149.85</span>
                </div>
              </label>
            </div>
            <button className="mt-5 h-14 w-full rounded-md bg-brand-lime text-xl font-bold text-white">
              Add To Cart
            </button>
            <span className="font-bold">Total: $99.90 + FREE Shipping</span>
            <span className="text-sm italic">90-day money-back guaranteed</span>
          </div>
        ))}
      </div>
      <div className="grid justify-center pt-14 text-center">
        <SalesBadge />
        <span className="pt-10">Have questions? We can answer them!</span>
        <a className="font-semibold text-brand-lime" href="#">
          (888) 491-5043
        </a>
        <a className="font-semibold text-brand-lime" href="#">
          upport@snapsupplements.com
        </a>
      </div>
    </section>
  );
}
