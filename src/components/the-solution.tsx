import { IoIosCheckmarkCircle } from "react-icons/io";

const solutions = [
  "Feel totally empty after using the bathroom",
  "No more burning or instant urge to urinate,",
  "Well rested, energetic after sleeping through the night",
  "Wear regular underwear with confidence",
] as const;

export function TheSolution() {
  return (
    <section className="mx-auto max-w-xl space-y-2 pt-32 text-center lg:max-w-full">
      <h3 className="text-2xl font-bold text-brand-lime sm:text-3xl">
        The Solution
      </h3>
      <p className="mx-auto max-w-[60ch] text-pretty font-semibold leading-relaxed sm:text-lg">
        Bye, Buy Bladder Leaks, accidents, discomfort and worries with Eco
        Health's Advance Urinary Formula. Doctor Formulated with clincaly
        studied ingredients. Guaranteed to Work!
      </p>
      <div className="grid gap-6 pt-2 sm:pt-4 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pt-8">
        <img
          className="rounded-xl lg:order-last"
          src="/images/img-solution-section.webp"
          alt="problem section image"
        />
        <ul className="space-y-4 text-start">
          {solutions.map((solution) => (
            <li key={solution} className="flex items-start gap-x-2">
              <div>
                <IoIosCheckmarkCircle className="size-8 text-[#1f8e2a]" />
              </div>
              <div>
                <h4 className="pb-1 text-xl font-bold sm:text-2xl">
                  {solution}
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
