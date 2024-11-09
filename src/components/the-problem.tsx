import { IoIosCloseCircle } from "react-icons/io";

const problems = [
  "Running to the bathroom",
  "Waking up at night to pee",
  "Dribbling and leaking unexpectedly",
  "Feeling like you’re never truly “empty” or “relieved”",
  "Padded underwear and diapers",
];

export function TheProblem() {
  return (
    <section className="mx-auto max-w-xl space-y-2 pt-10 text-center lg:max-w-full">
      <h3 className="text-2xl font-bold text-brand-maroon sm:text-3xl">
        The Problem
      </h3>
      <p className="mx-auto max-w-[60ch] text-pretty font-semibold leading-relaxed sm:text-lg">
        As we age, the intricate network of muscles surrounding the bladder
        weakens often leading these problems.
      </p>
      <div className="grid gap-6 pt-2 sm:pt-4 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pt-8">
        <img
          className="rounded-xl"
          src="/images/img-problem-section.webp"
          alt="problem section image"
        />
        <ul className="space-y-4 text-start">
          {problems.map((problem) => (
            <li key={problem} className="flex items-start gap-x-2">
              <div>
                <IoIosCloseCircle className="size-8 text-[#d14600]" />
              </div>
              <div>
                <h4 className="pb-1 text-xl font-bold sm:text-2xl">
                  {problem}
                </h4>
                {/* <p className="text-pretty leading-relaxed sm:text-lg"> */}
                {/*   {description} */}
                {/* </p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
