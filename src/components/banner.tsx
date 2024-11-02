import { BsCart3 } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

export function Banner() {
  return (
    <section className="full-width grid-container bg-brand-beige">
      <div className="relative grid max-h-[27rem] items-start gap-5 md:grid-cols-2">
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
          <div className="relative hidden rounded-xl border border-dashed border-brand-maroon bg-white px-4 py-1 font-bold md:block">
            Selling fast, HURRY!
            <span className="text-brand-maroon"> 43 sold in last hour!</span>
            <span className="absolute -right-[0.5em] -top-[0.75em] text-3xl">
              🔥
            </span>
          </div>
          <span className="hidden items-center gap-x-2 font-bold md:flex">
            <BsCart3 strokeWidth="0.5" className="size-5" />
            This is in 35 carts right now!
          </span>
        </div>
        <div className="relative flex max-h-[inherit] items-center justify-center overflow-y-clip">
          <img
            className="w-[max(100%,_55vw)] max-w-none object-cover object-center"
            src="/images/img-banner.webp"
            alt="banner image"
          />
        </div>
        <button className="absolute bottom-0 left-1/2 z-10 flex h-12 w-[14em] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-lg border border-dashed border-brand-maroon bg-brand-maroon px-4 text-xl font-bold text-white">
          Add To Cart
          <svg
            fill="none"
            height="48"
            width="45"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[2.125em] z-10"
          >
            <path d="m0 0h22l23 48h-45z" fill="#b11e54"></path>
            <path
              d="m45 48-23-48-13.924 27.849c-2.594 5.187.323 11.437 5.965 12.78z"
              fill="#ffd972"
            ></path>
          </svg>
          <span className="absolute right-0 top-0 flex h-full w-[3.25em] items-center justify-center rounded-r-[inherit] bg-[#ffffe2] px-4 font-semibold text-neutral-dark">
            FREE
          </span>
        </button>
      </div>
    </section>
  );
}
