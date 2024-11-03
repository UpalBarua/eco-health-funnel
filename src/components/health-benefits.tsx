import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";

const benefits = [
  {
    image: "/images/img-benefits-1.webp",
    icon: "/icons/icon-benefits-1.svg",
    title: "Promotes Healthy Inflammatory Response",
    description: (
      <pre>
        Contains antioxidants that help manage inflammation and support overall
        health. - Supports healthy inflammatory response. - Protects against
        oxidative stress. - Promotes cellular regeneration.
      </pre>
    ),
  },
  {
    image: "/images/img-benefits-1.webp",
    icon: "/icons/icon-benefits-1.svg",
    title: "Promotes Healthy Inflammatory Response",
    description: (
      <pre>
        Contains antioxidants that help manage inflammation and support overall
        health. - Supports healthy inflammatory response. - Protects against
        oxidative stress. - Promotes cellular regeneration.
      </pre>
    ),
  },
  {
    image: "/images/img-benefits-1.webp",
    icon: "/icons/icon-benefits-1.svg",
    title: "Promotes Healthy Inflammatory Response",
    description: (
      <pre>
        Contains antioxidants that help manage inflammation and support overall
        health. - Supports healthy inflammatory response. - Protects against
        oxidative stress. - Promotes cellular regeneration.
      </pre>
    ),
  },
] as const;

export function HealthBenefits() {
  return (
    <section className="relative mx-auto max-w-xl space-y-2 pt-32 text-center lg:max-w-full">
      <h3 className="pb-2 text-xl font-bold text-brand-maroon sm:text-2xl">
        Key Health Benefits
      </h3>
      <p className="text-3xl font-bold sm:text-5xl">
        Comprehensive Health
        <br />
        Support in Every Scoop
      </p>
      <p className="mx-auto max-w-[60ch] text-pretty leading-relaxed sm:text-lg">
        Our Nitric Oxide Beets are designed to support a wide range of health
        benefits, ensuring you feel your best every day.
      </p>
      <div className=""></div>
      <div className="grid justify-items-center gap-y-6">
        <p className="pt-16 text-xl font-semibold sm:text-4xl">
          Try Nitric Oxide Organic Beets Risk-Free For 90 Days
        </p>
        <CartBadge />
        <AddToCartButton />
        <OffersBadge />
      </div>
    </section>
  );
}
