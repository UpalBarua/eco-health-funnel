import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { SalesBadge } from "./sales-badge";

export function Satisfaction() {
  return (
    <section className="relative mx-auto grid max-w-xl justify-items-center space-y-4 rounded-xl bg-brand-beige p-8 text-center lg:max-w-full lg:grid-cols-2">
      <div className="grid justify-items-center lg:justify-items-start lg:text-start">
        <h3 className="pb-2 text-xl font-bold text-brand-maroon sm:text-2xl">
          You have nothing to lose!
        </h3>
        <p className="text-3xl font-bold sm:text-5xl">
          100% satisfaction guaranteed on every order!
        </p>
        <p className="max-w-[60ch] text-lg leading-relaxed">
          At Snap Supplements we believe optimizing your health should be
          simple. That’s why we’re committed to providing you with natural,
          high-quality supplements made with only the purest and carefully
          selected superfoods, botanicals, vitamins, and minerals that have been
          scientifically proven to produce real results.
        </p>
        <div className="grid justify-items-center gap-y-6 lg:gap-y-8">
          <SalesBadge />
          <CartBadge />
          <AddToCartButton />
        </div>
        <img
          className="ms-auto size-20 -translate-y-[5rem]"
          src="/icons/icon-90-day.png"
          alt="90 day icon"
        />
      </div>
      <img src="/images/img-satisfaction.jpg" alt="satisfaction image" />
    </section>
  );
}
