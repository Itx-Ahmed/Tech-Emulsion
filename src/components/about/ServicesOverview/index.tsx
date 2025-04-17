import { Link } from "react-router-dom";

function ServicesOverview() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="font-bold text-[18px] leading-[22px] text-[#1D2025] font-['InterVariable','Inter',sans-serif] mb-1">
              What We Do
            </h2>
            <p className="font-bold text-[28px] sm:text-[32px] leading-[38px] text-[#1D2025] font-['InterVariable','Inter',sans-serif]">
              We help to build clients their <br className="hidden sm:block" />
              dream projects
            </p>
          </div>
          <Link
            to="/services"
            className="text-[#1D2025] font-bold hover:underline text-lg sm:text-xl font-['InterVariable','Inter',sans-serif] flex items-center gap-2"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Service Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-xl shadow hover:shadow-md transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              {/* Text */}
              <div className="p-6">
                <h3 className="text-[24px] font-bold text-[#1D2025] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#7D7F83] text-[16px] leading-[24px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <section className="w-full">
          <div className="h-[1px] bg-gray-200 mt-10 shadow-[0_2px_4px_rgba(0,0,0,0.1)] w-screen"></div>
        </section>
      </div>
    </section>
  );
}

export default ServicesOverview;

// Services Data
const services = [
  {
    title: "QA Testing & Automation",
    description:
      "We deliver comprehensive QA testing and automation services, ensuring your software is bug-free, reliable, and ready for market with speed and precision.",
    image: "images/QATesting.webp",
  },
  {
    title: "Automation Solutions",
    description:
      "Streamline your business processes with our cutting-edge automation services. We design and implement automated workflows to enhance productivity, reduce manual errors, and optimize efficiency.",
    image: "images/Automation.webp",
  },
];
