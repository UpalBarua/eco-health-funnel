export function Footer() {
  return (
    <footer className="full-width grid-container items-center bg-[#efefe9] py-10">
      <div className="flex flex-wrap items-center justify-center gap-10 font-semibold text-[#17311b] md:gap-20">
        <div className="flex items-center gap-x-4">
          <img className="size-12" src="/icons/icon-footer-1.svg" alt="" />
          <div className="grid">
            <span>Up to 40% savings</span>
            <span>on all subscriptions</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <img className="size-12" src="/icons/icon-footer-2.svg" alt="" />
          <div className="grid">
            <span>Free shipping</span>
            <span>on orders over $50</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <img className="size-12" src="/icons/icon-footer-3.svg" alt="" />
          <div className="grid">
            <span>90-day money</span>
            <span>back guarantee</span>
          </div>
        </div>
      </div>
      <div className="grid justify-items-center gap-y-8 text-center">
        <div className="space-y-2 pt-14">
          <h3 className="text-2xl font-bold">Contact</h3>
          <div className="flex items-center gap-x-3 text-sm">
            <img className="size-8" src="/icons/icon-footer-4.svg" alt="" />
            <a href="tel:(888) 280-0339">(888) 280-0339</a>
          </div>
          <div className="flex items-center gap-x-3 text-sm">
            <img className="size-8" src="/icons/icon-footer-5.svg" alt="" />
            <a href="mailto:support@example.com">support@example.com</a>
          </div>
        </div>
        <p className="max-w-[65ch] leading-relaxed opacity-60">
          *These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure,
          or prevent any disease. +As part of a healthy lifestyle.
        </p>
        <span className="opacity-60">
          © {new Date().getFullYear()} Snap Supplements. All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
