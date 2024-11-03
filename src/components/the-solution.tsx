import { IoIosCheckmarkCircle } from "react-icons/io";

const problems = [
  {
    title: "Supports Heart Health and Circulation",
    description:
      "Our beetroot-based formula naturally boosts nitric oxide levels, promoting healthy blood flow and circulation to support your heart’s well-being.",
  },
  {
    title: "Provides Natural Energy Without the Crash",
    description:
      "Rich in nitrates, Nitric Oxide Beets delivers sustained energy throughout the day, helping you stay active and alert without the dreaded energy crash.",
  },
  {
    title: "Promotes Healthy Detoxification",
    description:
      "Packed with antioxidants and soluble fiber, our product supports liver and bowel detoxification, aiding in digestion and cellular regeneration for overall health.",
  },
] as const;

export function TheSolution() {
  return (
    <section className="mx-auto max-w-xl space-y-2 pt-32 text-center lg:max-w-full">
      <h3 className="pb-2 text-xl font-bold text-[#1f8e2a] sm:text-2xl">
        The Solution
      </h3>
      <p className="text-3xl font-bold sm:text-5xl">
        Confused About Heart
        <br />
        Health? We Make It Simple.
      </p>
      <p className="mx-auto max-w-[60ch] text-pretty leading-relaxed sm:text-lg">
        Heart health can be overwhelming, but our formula simplifies it. By
        incorporating natural, effective ingredients, we’ve created a solution
        that easily fits into your daily routine.
      </p>
      <div className="grid gap-6 pt-2 sm:pt-4 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pt-8">
        <img
          className="rounded-xl lg:order-last"
          src="/images/img-solution-section.webp"
          alt="problem section image"
        />
        <ul className="space-y-6 text-start">
          {problems.map(({ title, description }) => (
            <li key={title} className="flex items-start gap-x-2">
              <div>
                <IoIosCheckmarkCircle className="size-8 text-[#1f8e2a]" />
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
