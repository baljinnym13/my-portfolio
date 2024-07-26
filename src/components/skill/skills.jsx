import Tag from "../tag";
const Skills = () => {
  return (
    <div id="skill" className="px-20 py-4 text-center">
      <div className="mb-12">
        <Tag TagText={"Skills"} />
        <h1 className="mt-4">
          The skills, tools and technologies I am really good at:
        </h1>
      </div>
      <div className="mb-24">
        <div className="flex justify-between mb-12">
          <img src="./images/skillsImg/cypress.png" alt="" />
          <img src="./images/skillsImg/ex.png" alt="" />
          <img src="./images/skillsImg/figma.png" alt="" />
          <img src="./images/skillsImg/git.png" alt="" />
          <img src="./images/skillsImg/js.png" alt="" />
          <img src="./images/skillsImg/mongo.png" alt="" />
          <img src="./images/skillsImg/nest.png" alt="" />
          <img src="./images/skillsImg/next.png" alt="" />
        </div>
        <div className="flex justify-between">
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
