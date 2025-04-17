function CreativePortfolio() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 font-['InterVariable']">
      <div className="max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="text-left max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          {/* Creative Portfolio */}
          <h2 className="text-[18px] leading-[22px] font-bold text-[#004C4C]">
            Creative Portfolio
          </h2>

          {/* Recent Works */}
          <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-3xl leading-[24px] font-normal text-[#171A1D] mt-2">
            Recent Works
          </h3>

          {/* Paragraph */}
          <p className="text-[16px] leading-[24px] font-medium text-[#7D7F83] mt-4">
            Explore our creative portfolio showcasing a selection of recent
            works. From innovative designs to cutting-edge solutions, each
            project highlights our dedication to quality and creativity.
            Discover how we've transformed ideas into impactful digital
            experiences for businesses like yours.
          </p>
        </div>

        {/* Button Centered */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button className="w-12 h-12 bg-[#004C4C] text-white text-[16px] leading-[24px] font-normal rounded-full flex items-center justify-center">
            All
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreativePortfolio;
