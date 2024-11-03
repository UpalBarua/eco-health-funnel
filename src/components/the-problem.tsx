import { IoIosCloseCircle } from "react-icons/io";

const problems = [
  {
    title: "Chemicals Compromise Purity",
    description:
      "Competitors often use beets treated with chemicals, compromising their purity and effectiveness.",
  },
  {
    title: "Processed Sugars and Artificial Sweeteners",
    description:
      "Many supplements rely on added sugars to enhance flavor, and are laden with artificial sweeteners and high sugar content.",
  },
  {
    title: "Subpar Efficacy, Not Organic",
    description:
      "Competitors often fall short in delivering the same level of efficacy, leaving you with subpar results.",
  },
] as const;

export function TheProblem() {
  return (
    <section className="mx-auto max-w-xl space-y-2 text-center lg:max-w-full">
      <h3 className="pb-2 text-xl font-bold text-brand-maroon sm:text-2xl">
        The Problem
      </h3>
      <p className="text-3xl font-bold sm:text-5xl">Why Settle for Less?</p>
      <p className="text-pretty leading-relaxed sm:text-lg">
        There are many beetroot supplements out there, many fall short and here
        is why:
      </p>
      <div className="grid gap-6 pt-2 sm:pt-4 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pt-8">
        <img
          className="rounded-xl"
          src="/images/img-problem-section.webp"
          alt="problem section image"
        />
        <ul className="space-y-6 text-start">
          {problems.map(({ title, description }) => (
            <li key={title} className="flex items-start gap-x-2">
              <div>
                <IoIosCloseCircle className="size-8 text-[#d14600]" />
              </div>
              <div>
                <h4 className="pb-1 text-xl font-bold sm:text-2xl">{title}</h4>
                <p className="text-pretty leading-relaxed sm:text-lg">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
