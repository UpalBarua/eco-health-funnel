import { PackageCard } from "./package-card";
import { SalesBadge } from "./sales-badge";

export function Packages() {
  return (
    <section className="| mx-auto mb-20 max-w-5xl">
      <h2 className="pb-5 text-center text-3xl font-bold text-brand-green sm:text-5xl">
        Choose Your Package
      </h2>
      <div className="grid justify-center gap-20 pt-20 lg:grid-cols-3 lg:gap-5">
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
      <div className="grid justify-center pt-14 text-center">
        <SalesBadge />
        <span className="pt-10">Have questions? We can answer them!</span>
        <a className="font-semibold text-brand-lime" href="#">
          (888) 491-5043
        </a>
        <a className="font-semibold text-brand-lime" href="#">
          support@myecohealth.com
        </a>
      </div>
    </section>
  );
}
