import Tags from "../tag";
import WorkCard from "./workCard";
const proList = [
  {
    proImg: "/images/Picture.png",
    proTitle: "UB cab",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    proImg: "/images/mentor.png",
    proTitle: "Mentorhub",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    proImg: "/images/Itoim.png",
    proTitle: "iToim",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];
const Work = () => {
  return (
    <section>
      <div>
        <Tags TagText="Work" />
        <div className="flex justify-center">
          <span className="text-xl text-gray-600">
            Some of the noteworthy projects I have built:
          </span>
        </div>
      </div>
      <div>
        {proList.map(({ proImg, proTitle, proText, useApp }) => (
          <WorkCard
            proImg={proImg}
            proTitle={proTitle}
            proText={proText}
            useApp={useApp.map((app, idx) => (
              <Tags key={idx} TagText={app} />
            ))}
          />
        ))}
      </div>
    </section>
  );
};
export default Work;
