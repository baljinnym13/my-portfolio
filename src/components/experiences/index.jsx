import Tag from "../tag";
import ExperienceCard from "./experienceText";
const ExperiencesContent = [
  {
    logo: "./images/Group.png",
    position: "Sr.Frontend Developer",
    date: "2014.08-Present",
    jobRoles: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "The job description should accurately reflect the duties and responsibilities of the position.",
      "When well-written, it produces a realistic picture of a job and answers the question",
      "“What does the person in this role actually do?”",
    ],
  },
  {
    logo: "./images/Group.png",
    position: "Team Lead",
    date: "2014.08-Present",
    jobRoles: [
      "A job description not only describes the position’s responsibilities,",
      "it sets the foundation for recruiting",
      "developing, and retaining talent and",
      "also sets the stage for optimum work performance by clarifying responsibilities,",
    ],
  },
  {
    logo: "./images/Group.png",
    position: "Full Stack Developer",
    date: "2014.08-Present",
    jobRoles: ["expected results, ", "and evaluation of performance"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-2 px-4 bg-gray-50 text-center dark:bg-black"
    >
      <div className="px-4">
        <Tag TagText="Experience" />
        <div className="flex justify-center mt-4 mb-12 text-gray-600 text-xl font-normal">
          <span className="text-gray-600 text-xl font-normal dark:text-white">
            Here is a quick summary of my most recent experiences:
          </span>
        </div>
        <div className="text-start">
          {ExperiencesContent.map(({ logo, position, date, jobRoles }) => (
            <ExperienceCard
              companyLogo={logo}
              position={position}
              date={date}
              jobRoles={jobRoles}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
