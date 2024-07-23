import { IoLocationOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SiFigma } from "react-icons/si";
import Heroimages from "./hero-images";

const HeroSection = () => {
  return (
    <div className="h-screen bg-red-300">
      <div>
        <h1>Hi, I’m Tom 👋</h1>
        <p>
          I specialize in full stack development, particularly with React.js and
          Node.js. <br /> My main goal is to create exceptional digital
          experiences that are fast, visually <br /> appealing, and accessible
          to everyone. With over 7 years of experience in web <br />{" "}
          development, I continue to find joy in crafting innovative solutions
          and designs.
        </p>
        <div className="flex items-center gap-2">
          <div>
            <IoLocationOutline />
          </div>
          <span>Ulaanbaatar, Mongolia</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-green-500 h-2 w-2 rounded-full"></div>
          <span>Available for new projects</span>
        </div>
        <div className="flex items-center gap-1">
          <FiGithub />
          <FiTwitter />
          <SiFigma />
        </div>
      </div>
      <Heroimages imgUrl={""} />
    </div>
  );
};

export default HeroSection;
