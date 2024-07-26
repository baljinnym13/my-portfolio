import Tag from "../tag";
import WorkCard from "./workCard";
const proList = [
  {
    proImg: "/images/adoutimg.jpg",
    proTitle: "UB cab",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSql",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    proImg: "/images/adoutimg.jpg",
    proTitle: "Mentorhub",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSql",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    proImg: "/images/adoutimg.jpg",
    proTitle: "Itoim",
    proText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    useApp: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSql",
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
    <section id="work" className="px-20 py-24 text-center">
      <div>
        <Tag TagText="Work" />
        <div className="flex justify-center">
          <span className="text-xl text-gray-600 mt-4 mb-12 dark:text-white">
            Some of the noteworthy projects I have built:
          </span>
        </div>
      </div>
      <div>
        {proList.map(({ proImg, proTitle, proText, useApp }, idx) => (
          <WorkCard
            key={idx}
            index={idx}
            proImg={proImg}
            proTitle={proTitle}
            proText={proText}
            useApp={useApp.map((app, idx) => {
              console.log("app", app);
              return <Tag key={idx} TagText={app} />;
            })}
          />
        ))}
      </div>
    </section>
  );
};
export default Work;
