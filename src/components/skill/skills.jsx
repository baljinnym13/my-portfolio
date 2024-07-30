import Tag from "../tag";
const Skills = () => {
  return (
    <div id="skill" className="px-4 py-4 text-center">
      <div className="mb-12">
        <Tag TagText={"Skills"} />
        <h1 className="mt-4 font-normal text-[18px]">
          The skills, tools and technologies I am really good at:
        </h1>
      </div>
      <div className="m-auto">
        <div className="grid grid-cols-3 gap-16 mb-12">
          <img src="./images/skillsImg/cypress.png" alt="" />
          <img src="./images/skillsImg/ex.png" alt="" />
          <img src="./images/skillsImg/figma.png" alt="" />
          <img src="./images/skillsImg/git.png" alt="" />
          <img src="./images/skillsImg/js.png" alt="" />
          <img src="./images/skillsImg/mongo.png" alt="" />
          <img src="./images/skillsImg/nest.png" alt="" />
          <img src="./images/skillsImg/next.png" alt="" />
          <img src="./images/skillsImg/node.png" alt="" />
          <img src="./images/skillsImg/postgre.png" alt="" />
          <img src="./images/skillsImg/react.png" alt="" />
          <img src="./images/skillsImg/sass.png" alt="" />
          <img src="./images/skillsImg/socket.png" alt="" />
          <img src="./images/skillsImg/story.png" alt="" />
          <img src="./images/skillsImg/tailwind.png" alt="" />
          <img src="./images/skillsImg/ts.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Skills;
