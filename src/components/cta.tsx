export function Cta() {
  return (
    <section className="full-width grid-container bg-[#2A4947] bg-cover bg-center py-28 text-white">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row-reverse">
        <img
          className="size-[24rem] rounded-full object-cover object-center"
          src="/images/cta-img.jpeg"
          alt=""
        />
        <div className="max-w-[40rem] space-y-6 text-3xl">
          <h4 className="font-bold">
            {
              "Have Questions? We’re Here to Help! Call us at (000) 000-0000 for answers."
            }
          </h4>
          <p>
            Act quickly—these are selling fast! 🔥 XX sold in the past hour. 
          </p>
          <p>
            Stock is limited due to high demand, so availability cannot be
            guaranteed.
          </p>
          <button className="rounded-2xl bg-[#B11E54] px-8 py-5">
            Claim It Before It's Gone!
          </button>
        </div>
      </div>
    </section>
  );
}
