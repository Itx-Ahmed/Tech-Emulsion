import { Briefcase, Users, Rocket, Globe } from "lucide-react";

const HowWeEmpowerSection = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-[#004C4C] ml-8">
          How We Empower Your Business
        </h2>

        {/* Parent Flex Container */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          {/* Software Outsourcing */}
          <div className="flex-1 bg-white p-6 rounded">
            <div className="flex flex-col items-start mb-4">
              <Briefcase className="w-8 h-8 text-[#004C4C] mb-2" />
              <h3 className="text-[16px] sm:text-[18px] font-[700] leading-[19px] text-[#004C4C] font-inter">
                Software Outsourcing
              </h3>
            </div>
            <p className="text-[16px] sm:text-[16px] font-[400] leading-[24px] text-[rgb(125, 127, 131)] font-inter">
              We take full ownership of your software development, delivering
              high-quality solutions from start to finish, allowing you to focus
              on your core business.
            </p>
          </div>

          {/* Staff Augmentation */}
          <div className="flex-1 bg-white p-6 rounded">
            <div className="flex flex-col items-start mb-4">
              <Users className="w-8 h-8 text-[#004C4C] mb-2" />
              <h3 className="text-[16px] sm:text-[18px] font-[700] leading-[19px] text-[#004C4C] font-inter">
                Staff Augmentation
              </h3>
            </div>
            <p className="text-[16px] sm:text-[16px] font-[400] leading-[24px] text-[rgb(125, 127, 131)] font-inter">
              Seamlessly expand your team with our pre-vetted developers, saving
              you the hassle of recruitment, training, and onboarding.
            </p>
          </div>

          {/* Dedicated Teams */}
          <div className="flex-1 bg-white p-6 rounded">
            <div className="flex flex-col items-start mb-4">
              <Rocket className="w-8 h-8 text-[#004C4C] mb-2" />
              <h3 className="text-[16px] sm:text-[18px] font-[700] leading-[19px] text-[#004C4C] font-inter">
                Dedicated Teams
              </h3>
            </div>
            <p className="text-[16px] sm:text-[16px] font-[400] leading-[24px] text-[rgb(125, 127, 131)] font-inter">
              Accelerate your projects by integrating a fully functional and
              dedicated team into your development process for faster results.
            </p>
          </div>

          {/* Offshore Contractors */}
          <div className="flex-1 bg-white p-6 rounded">
            <div className="flex flex-col items-start mb-4">
              <Globe className="w-8 h-8 text-[#004C4C] mb-2" />
              <h3 className="text-[16px] sm:text-[18px] font-[700] leading-[19px] text-[#004C4C] font-inter">
                Offshore Contractors
              </h3>
            </div>
            <p className="text-[16px] sm:text-[16px] font-[400] leading-[24px] text-[rgb(125, 127, 131)] font-inter">
              Leverage our global talent pool to hire experienced offshore
              contractors, providing cost-effective, high-quality development
              services tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeEmpowerSection;
