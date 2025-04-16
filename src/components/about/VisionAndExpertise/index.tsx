import { useEffect, useState } from "react";

const people = [
  {
    name: "Hassan M. Saddique",
    title: "Co-Founder & CEO",
    image: "images/hassan.png",
    quote:
      "At Tech Emulsion, we don’t just create software, we build AI-powered solutions that elevate business capabilities. We believe in turning complex challenges into growth opportunities for our clients.",
  },
  {
    name: "Zain Ul Abideen",
    title: "Co-Founder & CTO",
    image: "images/zain.png",
    quote:
      "We are committed to delivering exceptional products, achieving outstanding results, and driving significant revenue growth for our clients.",
  },
];

const specialties = [
  "SaaS Development",
  "DevOps",
  "Web Application",
  "Web Development",
  "Full-Stack Development",
  "Front-End Development",
  "Back-End Development",
  "QA Testing & Automation",
  "Mobile App Development",
  "Amazon Web Services",
  "RESTful API",
  "Google Chrome Extension",
  "API Integration",
  "App Development",
];

function VisionAndExpertise() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % people.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const person = people[index];

  return (
    <section className="pt-2 pb-10 px-4 bg-white text-gray-800 font-inter">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="w-full md:w-1/3 bg-[#004C4C] text-white rounded-lg p-4 flex flex-col items-center text-center">
          <img
            src={person.image}
            alt={person.name}
            className="w-20 h-20 rounded-full border-4 border-white mb-3"
          />
          <h2 className="text-lg font-semibold">{person.name}</h2>
          <p className="text-sm text-gray-200 mb-3">{person.title}</p>
          <p className="text-sm italic leading-snug">"{person.quote}"</p>
        </div>

        <div className="w-full md:w-2/3 bg-[#F4F4F4] rounded-lg p-4 shadow h-fit">
          <h3 className="text-2xl leading-6 font-bold text-[#1D2025] mb-2 ">
            Areas We Specialize In
          </h3>

          <p className="text-base leading-6 font-normal text-[#7D7F83] mb-4">
            Our team specializes in delivering innovative software solutions
            using a wide range of modern technologies. From SaaS and full-stack
            development to AI and machine learning, we provide scalable,
            customized services to meet your business needs.
          </p>

          <div className="flex flex-wrap gap-2">
            {specialties.map((item, i) => (
              <span
                key={i}
                className="text-base leading-6 font-normal text-[#1D2025] bg-[#E6F2F2] px-3 py-1 rounded-full hover:bg-[#004C4C] hover:text-white transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionAndExpertise;
