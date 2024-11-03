export function OffersBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-7 pb-8">
      <div className="grid justify-items-center gap-3 text-center text-sm">
        <img src="/icons/icon-offerings-1.svg" alt="offerings icon" />
        <span>
          100% Secure
          <br />
          Checkout
        </span>
      </div>
      <div className="grid justify-items-center gap-3 text-center text-sm font-semibold">
        <img src="/icons/icon-offerings-2.svg" alt="offerings icon" />
        <span>
          Ships in 1<br />
          Business Day
        </span>
      </div>
      <div className="grid justify-items-center gap-3 text-center text-sm font-semibold">
        <img src="/icons/icon-offerings-3.svg" alt="offerings icon" />
        <span>
          90-Day
          <br />
          Guarantee
        </span>
      </div>
    </div>
  );
}
