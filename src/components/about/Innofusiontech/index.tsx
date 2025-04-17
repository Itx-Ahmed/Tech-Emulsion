function Innofusiontech() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-4 py-10 md:px-16 md:py-20 bg-white gap-10">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="font-sans text-[48px] leading-[58px] text-[#171A1D] font-[800]">
          Imagineering
        </h2>
        <h3 className="font-sans text-[48px] leading-[58px] text-[#004C4C] font-[800]">
          digital transformation <br className="hidden sm:block" />
          <span className="text-[#171A1D]">for your business</span>
        </h3>

        <p className="font-[500] text-[#7D7F83] text-[20px] leading-[30px] font-sans mb-6">
          Empowering businesses with next-gen{" "}
          <span className="text-[#004C4C]">SaaS, web, and AI solutions</span>{" "}
          driving innovation and excellence through tailored technology
          strategies that propel your brand to new heights.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-300 mb-6">
          Explore Portfolio
        </button>

        {/* Trusted By Text with Line */}
        <div className="flex items-center justify-center md:justify-start mb-4">
          <h4 className="font-sans text-[13px] leading-[20px] text-[#7D7F83] font-[500] mr-3">
            Trusted By the Best
          </h4>
          <div className="border-t-2 border-gray-300 w-16 md:w-24"></div>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
          <img
            src="images/Atarim.svg"
            alt="Atarim logo"
            className="h-10 w-auto"
          />
          <img
            src="images/farmin-dark.webp"
            alt="Farmin logo"
            className="h-10 w-auto"
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="images/image1.jpg"
          alt="Main visual"
          className="max-w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default Innofusiontech;
