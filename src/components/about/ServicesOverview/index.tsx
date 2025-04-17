const services = [
  {
    title: "Agentic AI Engineering",
    description:
      "We create intelligent AI-driven agent systems tailored to your business needs, delivering cutting-edge automation, personalized interactions, and exceptional user experiences.",
    image: "/images/Agentic.webp",
  },
  {
    title: "Next-Gen SaaS Development",
    description:
      "We design and develop scalable, custom SaaS solutions tailored to your business needs, ensuring robust performance and seamless user experiences.",
    image: "/images/Next-Gen.webp",
  },
  {
    title: "Innovative Website Development",
    description:
      "From concept to launch, we create responsive and visually stunning websites that captivate your audience and drive business growth.",
    image: "/images/innovative.webp",
  },
  {
    title: "Custom Chrome Extensions",
    description:
      "We build powerful Chrome extensions that enhance productivity and offer unique functionalities, perfectly aligned with your business objectives.",
    image: "images/custom.webp",
  },
  {
    title: "Expert DevOps Solutions",
    description:
      "Our DevOps services streamline your development process, enhance collaboration, and ensure continuous integration and deployment for faster, reliable releases.",
    image: "images/Expert.webp",
  },
  {
    title: "Generative AI Integration",
    description:
      "Harness the power of AI to revolutionize your operations. We integrate advanced generative AI solutions to automate tasks, enhance creativity, and boost efficiency.",
    image: "images/Generative.webp",
  },
  {
    title: "QA Testing & Automation",
    description:
      "We deliver comprehensive QA testing and automation services, ensuring your software is bug-free, reliable, and ready for market with speed and precision.",
    image: "/images/QATesting.webp",
  },
  {
    title: "Automation Solutions",
    description:
      "Streamline your business processes with our cutting-edge automation services. We design and implement automated workflows to enhance productivity, reduce manual errors, and optimize efficiency.",
    image: "/images/Automation.webp",
  },
];

function ServicesOverview() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-[18px] font-[700] text-[#004C4C] leading-[22px] mb-2">
            What We Do
          </h2>
          <p className="text-[32px] font-[700] text-[#171A1D] leading-[38px]">
            We help to build clients their <br /> dream projects
          </p>
        </div>
        <a
          href="/services"
          className="text-[#004C4C] text-2xl font-[500] leading-[24px] underline"
        >
          Explore Our Services
        </a>
      </div>

      {/* Service Boxes */}
      <div className="flex flex-wrap -mx-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 mb-6 flex flex-col items-start min-h-[370px] w-full sm:w-[32%] sm:mr-4"
          >
            <img
              src={service.image}
              alt={service.title}
              className="mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-[24px] font-bold mb-2 text-[#1D2025] leading-[29px]">
              {service.title}
            </h3>
            <p className="text-sm text-[#1D2025] font-normal text-[16px] leading-[24px] font-inter">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full">
        <hr className="border-t-[1px] border-gray-200 w-full" />
      </div>
    </div>
  );
}

export default ServicesOverview;
