import ProjectCard from "./ProjectCard";

// Main Component
const CaseStudy = () => {
  const caseStudies = [
    {
      imgSrc: "/assets/img/dotfood.png",
      title: "DotFood",
      description: "Restaurant and Supermarket Management App",
      url: "https://dot-food.co.uk/",
    },
    {
      imgSrc: "/assets/img/dotmed.png",
      title: "Dotmed",
      description: "Hospital Management app",
      url: "https://dot-med.co.uk/",
    },
    {
      imgSrc: "/assets/img/dotedu.png",
      title: "dotedu",
      description: "School Management app",
      url: "https://dotedu.co.uk/",
    },
    {
      imgSrc: "/assets/img/quiz.jpg",
      title: "Quiz App",
      description: "Question and Answer Management App",
      url: "https://dot-food.co.uk/",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-12 md:py-16" id="case-studies">
      {/* Heading */}
      <div className="flex flex-wrap gap-3 items-center mb-16">
        <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">
          Projects
        </h2>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {caseStudies.map((study, index) => (
          <a
            key={index}
            href={study.url}
            target="_blank"
            rel="noopener noreferrer">
            <ProjectCard
              imgSrc={study.imgSrc}
              title={study.title}
              description={study.description}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
