export function Footer() {
  return (
    <footer className="full-width grid-container items-center bg-[#efefe9] py-10">
      <div className="flex items-center justify-center gap-x-20 font-semibold text-[#17311b]">
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
    </footer>
  );
}
