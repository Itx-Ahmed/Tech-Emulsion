const logos: string[] = [
  "/images/Atarim.svg",
  "/images/krypto-labs.webp",
  "/images/jarvis-logo.webp",
  "/images/Logo_IPG.webp",
  "/images/moodtube_img.webp",
  "/images/logo-black-small.webp",
  "/images/Podcast-Beacon.webp",
  "/images/republic_power_logo.webp",
  "/images/Sprintzeal_Logo.webp",
  "/images/teadit.webp",
];

const TrustedByBrands: React.FC = () => {
  return (
    <>
      {/* MAIN LOGO SECTION */}
      <section className="bg-[#004C4C] w-full py-28 relative flex flex-col items-center text-center z-0">
        <div className="text-white w-full px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Leading Brands
          </h2>

          <p className="text-base sm:text-lg text-white/80 mb-12">
            We’re proud to have worked with a diverse range of clients across
            industries, delivering <br /> impactful solutions that drive
            results. Our clients trust us for our commitment to quality,
            <br />
            innovation, and lasting partnerships, helping them achieve their
            digital goals with ease.
          </p>
        </div>

        {/* LOGO SECTION */}
        <div className="w-full flex gap-8 justify-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-8 sm:h-10 max-w-[120px] object-contain"
            />
          ))}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="bg-[#008080] mx-6 py-10 -mt-16 shadow-xl relative z-10 px-4 max-w-full">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            Subscribe to our newsletter to receive future <br /> updates.
          </h2>
          <div className="flex justify-center py-8">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-4 border border-white rounded-full w-full focus:outline-none pr-24"
              />
              <button className="absolute right-0 top-0 bottom-0 px-6 py-3 rounded-full border-2 border-white text-[#004C4C] bg-white font-semibold transition duration-300 hover:bg-[#004C4C] hover:text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedByBrands;
