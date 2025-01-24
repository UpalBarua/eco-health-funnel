export function PackageCard() {
  return (
    <div className="relative grid gap-2 rounded-xl border px-4 pb-8 pt-4 text-center shadow-sm">
      <div className="absolute top-0 flex h-12 w-full -translate-y-full items-center justify-center rounded-t-lg bg-brand-lime text-center font-semibold text-white">
        Bronze Good Value
      </div>
      <h3 className="text-balance text-4xl font-bold tracking-tight">
        1 Bottle
      </h3>
      <span className="block text-sm font-semibold italic text-brand-lime">
        Instant Savings $70.12
      </span>
      <img
        className="mx-auto max-w-40 py-4"
        src="/images/img-why-section.png"
        alt=""
      />
      <span className="text-5xl font-bold">$23.99</span>
      <span className="font-bold">Per canister</span>
      <span className="pb-4 text-xl font-bold uppercase opacity-60">
        REGULARLY <span className="line-through">$149.85</span>
      </span>
      <div className="flex items-center gap-x-2 text-start">
        <input
          id="package"
          name="package"
          type="radio"
          className="size-5 accent-black"
        />
        <label className="flex w-full items-center justify-between" htmlFor="">
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
        <input
          id="package"
          name="package"
          type="radio"
          className="size-5 accent-black"
        />
        <label className="flex w-full items-center justify-between" htmlFor="">
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
  );
}
