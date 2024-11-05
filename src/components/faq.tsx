import * as Accordion from "@radix-ui/react-accordion";
import { IoChevronDown } from "react-icons/io5";
import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";

const faqs = [
  {
    question: "Can I use this as a pre-workout?",
    answer:
      "Yes! Many of our customers love this product as a natural alternative because of the clean consistent energy it provides. Unlike the caffeine-loaded products, this one won’t give you palpitations, or the jitters.",
  },
  {
    question: "Can I take it along with any current medication I am taking?",
    answer:
      "Unless you’re allergic to beets or any of the other ingredients you can take the product, however, it is recommended to always consult with your medical care provider.",
  },
  {
    question:
      "My urine and stool look pinkish after taking this product, is that normal?",
    answer:
      "Yes, this is very normal, the color change is due to the presence of betacyanin, a pigment that is natural to beets.",
  },
  {
    question:
      "Can I combine Nitric Oxide Beets with Nitric Oxide Booster Capsules?",
    answer:
      "Yes! They have very different and complementary main ingredients and are designed to work very well together.",
  },
] as const;

export function Faq() {
  return (
    <section>
      <h2 className="pb-10 text-center text-3xl font-bold sm:text-5xl">
        Frequently Asked Questions
      </h2>
      <Accordion.Root
        type="single"
        defaultValue="item-1"
        collapsible
        className="mx-auto max-w-2xl divide-y divide-neutral-dark/25 border-b border-t border-neutral-dark/25"
      >
        {faqs.map(({ question, answer }, index) => (
          <Accordion.Item
            key={`faq${index}`}
            value={`faq${index}`}
            className="overflow-hidden"
          >
            <Accordion.Trigger className="group text-start flex w-full flex-1 items-center justify-between px-2 py-5 leading-none outline-none">
              <span>{question}</span>
              <IoChevronDown className="size-5 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
            <Accordion.Content className="overflow-hidden px-2 pb-6">
              {answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      <div className="grid justify-items-center gap-6 py-16">
        <CartBadge />
        <AddToCartButton />
        <OffersBadge />
      </div>
    </section>
  );
}
