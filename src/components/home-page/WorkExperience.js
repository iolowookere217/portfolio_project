import React from "react";
import WorkExperienceItem from "./WorkExperienceItem";
const experiences = [
  {
    date: "JANUARY, 2023 - JUNE, 2023",
    title: "Frontend Engineer",
    company: "TechStars Community",
    description: `Contributed to the development of a fully responsive web application named
"bookslab", an open-source project focused on online library management`,
  },
  {
    date: "JULY, 2023 - PRESENT",
    title: "Frontend Engineer",
    company: "Dotwaju",
    description: `Developed the User Interface for responsive mobile and web applications in various sectors including food delivery, fintech, health and school management`,
  },

  {
    date: "MARCH, 2024 - MAY, 2024",
    title: "Technical Support Engineer",
    company: "Alx",
    description: `Attended inquiries and resolved technical problems clients were having. Promptly attended to customer requests to exceed KPIs and ensured that customers receive exemplary customer service during all contact points with the company. Utilized interpersonal communication skills when engaging with customers.`,
  },
  {
    date: "JANUARY, 2024 - PRESENT",
    title: "Tech Facilitator",
    company: "Self Employed",
    description: `Explained complex concept in Devops, cloud services (AWS) and software programs (Python, C, Javascript) to a group of students. Mentored a group of learners and helped them to debug errors in their codebase. Implemented improvements based on feedback to enhance the student experience.`,
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
