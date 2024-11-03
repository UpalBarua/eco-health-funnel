import { BsCart3 } from "react-icons/bs";

export function CartBadge() {
  return (
    <span className="hidden items-center gap-x-2 font-bold md:flex">
      <BsCart3 strokeWidth="0.5" className="size-5" />
      This is in 35 carts right now!
    </span>
  );
}
