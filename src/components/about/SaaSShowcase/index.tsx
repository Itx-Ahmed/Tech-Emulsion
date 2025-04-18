type SaaSProject = {
  title: string;
  description: string;
  imageUrl: string;
};

const saasProjects: SaaSProject[] = [
  {
    title: "Farmin – AI-Powered Satellite Image Detection SaaS",
    description:
      "Tech Emulsion built Farmin, an AI-powered SaaS for satellite image analysis. Using Mapbox, YOLO models, and OpenCV, it detects objects like cars, ships, and oil spills. We added change detection, a data annotation tool, and deployed it on AWS, enabling real-time insights and scalable remote sensing.",
    imageUrl: "images/farmin.webp",
  },
  {
    title: "Atarim – A SaaS tool for visual collaboration & project mgmt",
    description:
      "Tech Emulsion transformed WPFeedback into Atarim, a scalable SaaS platform for visual collaboration on any website. With new features, a Chrome extension, custom scraping, AWS scaling, and performance optimizations, we helped Atarim secure $500K funding and expand to a universal project management tool.",
    imageUrl: "images/atarim.webp",
  },
  {
    title: "Bipcards – Elevate Online Presence with Genuine Reviews",
    description:
      "Tech Emulsion developed a SaaS platform for Bipcards.com, enabling businesses to collect customer reviews via programmable NFC cards and QR codes. Customers benefit from a flexible subscription model, real-time analytics, and easy card programming, while sales reps streamline onboarding, enhancing engagement and efficiency.",
    imageUrl: "images/bipcards.webp",
  },
  {
    title: "Popcard – SaaS for managing review cards",
    description:
      "Tech Emulsion developed a SaaS for PopCard.io, enabling businesses to manage locations, teams, and customer reviews via NFC cards and QR codes. Features included secure authentication with social logins, analytics, leaderboards, and Stripe subscriptions, enhancing engagement and revenue.",
    imageUrl: "images/popcard.webp",
  },
  {
    title:
      "Artis – Blockchain powered SaaS to help artists copyright their work",
    description:
      "Artis is an AI-driven platform that analyzes an artist’s style to provide tailored advice and marketing strategies. It leverages blockchain for secure ownership protection and copyright management. It connects artists with audiences, enabling secure sales. Artis empowers creators across various fields, making creativity secure and profitable.",
    imageUrl: "images/Artis.webp",
  },
  {
    title:
      "JarvisReach – SaaS for LinkedIn prospecting, data extraction & email outreach",
    description:
      "Tech Emulsion developed JarvisReach, a SaaS for LinkedIn prospecting, enabling efficient data extraction, filtering, and automated email outreach. With subscription flexibility, team leaderboards, and admin analytics, JarvisReach streamlines lead management and boosts user productivity.",
    imageUrl: "images/jarvis.webp",
  },
  {
    title: "Alifa App – AI-Driven Client Interaction SaaS",
    description:
      "Tech Emulsion developed Alifa App to help sales reps manage client interactions with ease. It enables Zoom meeting creation, dynamic proposal sharing with hyperlinks, and automated client chats using RAG. With AI agents for web monitoring, data extraction, and web searches, it automates tasks and enhances client engagement, delivering a seamless and scalable sales solution.",
    imageUrl: "images/Alifa.webp",
  },
  {
    title: "MoodTube – AI-Powered Video Search by Mood",
    description:
      "MoodTube allows users to search YouTube videos by mood (e.g., Happy, Relaxed, Motivated) using AI tools like LangChain and vector embeddings. The extension extracts YouTube transcripts, converts them into embeddings with models like all-mpnet-base-v2, and stores them in PGVector. Semantic search retrieves videos matching the selected mood, offering personalized video recommendations.",
    imageUrl: "images/moodtube.webp",
  },
  {
    title: "RAG – AI-Powered Document Querying Application",
    description:
      "This end-to-end RAG application allows users to interact with documents by uploading PDFs and asking questions. It uses advanced AI techniques to extract, understand, and answer queries with remarkable accuracy. The system leverages OpenAI's LLMs, pgvector for similarity search, and image recognition for graphical content, offering an intelligent and intuitive document query experience.",
    imageUrl: "images/raggenai.webp",
  },
];

function SaaSShowcase() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[1600px] mx-auto text-left">
        <div className="flex flex-wrap gap-10 justify-start mt-6">
          {saasProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col w-full sm:w-[380px] md:w-[420px] lg:w-[460px] xl:w-[500px] h-[550px] overflow-hidden"
            >
              {/* Pattern Background */}
              <div className="absolute inset-0 z-0 bg-[url('/images/pattern.svg')] bg-cover opacity-10" />

              {/* Image (Cover Top Part) */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="relative z-10 w-full h-72 object-cover"
              />

              {/* Text Content Below Image */}
              <div className="relative z-10 mt-5">
                <h3 className="text-xl font-[InterVariable] font-bold text-[#1D2025] leading-[29px]">
                  {project.title}
                </h3>
                <p className="text-sm font-[InterVariable] font-normal text-[#7D7F83] mt-3 leading-[24px] overflow-hidden text-ellipsis line-clamp-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SaaSShowcase;
