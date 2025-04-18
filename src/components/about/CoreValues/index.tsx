import { FaUsers, FaCogs, FaBullhorn, FaClipboardList } from "react-icons/fa";

function CoreValues() {
  const values = [
    {
      title: "Client-Centric Excellence",
      description:
        "We prioritize your success by deeply understanding your needs, delivering solutions that exceed expectations, and building lasting partnerships.",
      icon: <FaUsers className="text-4xl text-teal-500" />,
    },
    {
      title: "Innovative Problem Solving",
      description:
        "We approach every challenge with creativity and expertise, turning obstacles into opportunities for your business to thrive.",
      icon: <FaCogs className="text-4xl text-teal-500" />,
    },
    {
      title: "Clear & Effective Communication",
      description:
        "We believe in straightforward, precise communication, ensuring clarity in every interaction and decision-making process.",
      icon: <FaBullhorn className="text-4xl text-teal-500" />,
    },
    {
      title: "Accountability & Ownership",
      description:
        "We take full responsibility for our work, committed to delivering quality and integrity in everything we do.",
      icon: <FaClipboardList className="text-4xl text-teal-500" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[18px] font-bold text-[#004C4C] mb-2">
          Reason behind our success
        </h2>
        <h3 className="text-[32px] font-bold text-[#0E1012] leading-[38px] mb-12">
          Our Core Values
        </h3>

        <div className="flex flex-wrap justify-center gap-10 text-left">
          {values.map((val, index) => (
            <div
              key={index}
              className="flex flex-col w-full sm:w-[45%] lg:w-[22%] gap-4"
            >
              <div className="self-start">{val.icon}</div>

              <h4 className="text-[16px] font-bold text-[#004C4C] leading-[19px]">
                {val.title}
              </h4>

              <p className="text-[16px] font-normal text-[#7D7F83] leading-[24px]">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
