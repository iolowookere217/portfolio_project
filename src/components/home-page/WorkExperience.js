import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";
const experiences = [
  {
    date: "JULY, 2023 - PRESENT",
    title: "Frontend Engineer",
    company: "Dotwaju",
    description: `Developed the User Interface for responsive mobile and web applications in various sectors including food delivery, fintech, health and school management`,
  },
  {
    date: "JANUARY, 2023 - JUNE, 2023",
    title: "Frontend Engineer",
    company: "TechStars Community",
    description: `Contributed to the development of a fully responsive web application named
"bookslab", an open-source project focused on online library management`,
  },
  {
    date: "MARCH, 2024 - MAY, 2024",
    title: "Technical Support Engineer",
    company: "Alx",
    description: `Reshaped the platform's user experience, making blockchain technology more accessible. My visionary approach and financial acumen converged seamlessly, creating intuitive interfaces for newcomers and advanced features for seasoned traders. By introducing intuitive interfaces and advanced features, I successfully contributed to making Coinbase more user-friendly, resulting in a 20% rise in overall customer satisfaction.`,
  },
];

const WorkExperience = () => {
  return (
    <div
      className="py-28 max-w-screen-xl mx-auto framer-animation"
      id="work-experience">
      {/* Section Heading */}
      <div className="space-y-6">
        <span className="flex flex-wrap gap-3 items-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">
            Work Experience
          </h2>
        </span>

        {/* Work Experience Items */}
        {experiences.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            date={experience.date}
            title={experience.title}
            company={experience.company}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
