import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    client: "Ava Thompson",
    feedback:
      "Working with Tech Emulsion was a seamless experience. Their team is professional, efficient, and delivers outstanding results.",
    image: "/images/Alifa.webp",
  },
  {
    client: "James Carter",
    feedback:
      "I was thoroughly impressed with the level of expertise and dedication shown by Tech Emulsion. Highly recommended!",
    image: "/images/moodtube_img.webp",
  },
  {
    client: "Emily Rose",
    feedback:
      "The collaboration with Tech Emulsion exceeded our expectations. They truly understand the client’s needs.",
    image: "/images/logo-black-small.webp",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-10 px-4">
      <div className="relative max-w-4xl mx-auto flex justify-center items-center">
        <button
          onClick={prevTestimonial}
          className="absolute left-2 sm:left-4 p-2 bg-white border border-gray-300 shadow-sm hover:bg-gray-100 z-10"
        >
          <FaChevronLeft className="w-4 h-4 text-gray-700" />
        </button>

        <div className="bg-white border border-gray-300 p-6 w-full max-w-2xl text-left mx-10 sm:mx-16 flex flex-col justify-between">
          <div className="w-20 h-12 mb-4">
            <img
              src="/images/logo.webp"
              alt="Tech Emulsion Logo"
              className="object-contain w-full h-full"
            />
          </div>

          <p
            className="text-[16px] leading-6"
            style={{
              fontFamily: "InterVariable, Inter, sans-serif",
              fontWeight: 400,
              color: "#1D2025",
            }}
          >
            “{current.feedback}”
          </p>

          <div className="flex items-start sm:items-center mt-4">
            <img
              src={current.image}
              alt={current.client}
              className="w-10 h-10 object-cover rounded-full mr-3 mt-1 sm:mt-0"
            />
            <span
              className="text-[16px] leading-6"
              style={{
                fontFamily: "InterVariable, Inter, sans-serif",
                fontWeight: 500,
                color: "#7D7F83",
              }}
            >
              {current.client}
            </span>
          </div>
        </div>

        <button
          onClick={nextTestimonial}
          className="absolute right-2 sm:right-4 p-2 bg-white border border-gray-300 shadow-sm hover:bg-gray-100 z-10"
        >
          <FaChevronRight className="w-4 h-4 text-gray-700" />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
