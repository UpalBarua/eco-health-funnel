import { IoMdStar } from "react-icons/io";
import { AddToCartButton } from "./add-to-cart-button";

export function Offers() {
  return (
    <div className="full-width flex flex-col items-center justify-center space-y-6 bg-[url('/images/cpl-walking.jpg')] bg-cover bg-right py-20 text-center">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <IoMdStar className="size-10 text-yellow-500" key={i} />
        ))}
      </div>
      <p className="max-w-[60rem] text-3xl font-semibold italic leading-relaxed">
        "Since using Advanced Urinary Formula, I've regained control and
        confidence, Fewer urgent trips to the bathroom, better sleep, and peace
        of mind it's been life-changing" - Sarah T.
      </p>
      <AddToCartButton />
    </div>
  );
}
