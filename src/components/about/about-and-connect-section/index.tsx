import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

function AboutAndConnectSection() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:space-x-12">
        {/* About Us Section */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-xl sm:text-2xl font-normal text-shadow-blue-950 mb-2 font-inter">
            About Us
          </h2>

          <div className="mb-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-gray-900 font-inter">
              Impactful Product Design
              <br />
              Memorable Experience
            </h3>
          </div>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-inter">
            We believe that collaboration is key, working closely with you to
            craft tailored solutions. Our mission is to guide you with the best
            tools and personalized support, ensuring a rewarding journey from
            concept to completion.
          </p>
        </div>

        {/* Connect With Us Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-inter">
            Connect With Us
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed mb-6 font-inter">
            We'd love to hear from you! Reach out to us for any inquiries,
            feedback, or support. Our team is here to assist you and ensure you
            have the best experience.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutAndConnectSection;
