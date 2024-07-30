import { IoLocationOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SiFigma } from "react-icons/si";
import Heroimages from "./hero-images";
// h-[370px] px-20 py-4 flex justify-between m-auto items-center mb-24
const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse gap-12 m-auto items-center px-4 py-4 md:flex md:flex-row md:justify-between md:px-20 md:mb-24">
      <div>
        <h1 className="font-bold text-[60px] mb-2">Hi, I’m Baljaa 👋</h1>
        <p className="font-normal text-[16px] text-gray-600 mb-12">
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
          <span className="font-normal text-[16px] text-gray-600">
            Ulaanbaatar, Mongolia
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-green-500 h-2 w-2 rounded-full"></div>
          <span className="font-normal text-[16px] text-gray-600">
            Available for new projects
          </span>
        </div>
        <div className="flex items-center gap-4 mt-12">
          <FiGithub className="w-9 h-9 p-[6px]" />
          <FiTwitter className="w-9 h-9 p-[6px]" />
          <SiFigma className="w-9 h-9 p-[6px]" />
        </div>
      </div>
      <Heroimages imgUrl={"./images/profile.jpg"} size="w-[280px] h-80" />
    </div>
  );
};

export default HeroSection;
