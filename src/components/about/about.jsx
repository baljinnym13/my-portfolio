import Tag from "../tag";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 1.1 }}
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
  />;
  return (
    <div className="bg-gray-50  flex-col items-center justify-center dark:bg-black">
      <div id="about" className=" flex flex-col text-center mt-24 px-4 py-4">
        <div>
          <Tag TagText={"abaut me"} />
        </div>
        {/* px-32 mt-12 mb-24 */}
        <div className="flex flex-col gap-12 mt-6">
          <img
            className="shadow-[-20px_20px_#E5E7EB] w-[320px] h-[380px] m-auto border-8 border-gray-50 dark:border-black"
            src="./images/adoutimg.jpg"
            alt="jpg"
          />
          <div className="font-normal text-gray-600 text-base flex flex-col gap-4 text-start mt-12 mb-24 dark:text-white">
            <h1 className="font-semibold text-gray-900 text-[28px] mb-5 dark:text-white">
              Curious ab1out me? Here you have it:
            </h1>
            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and <br /> Node.js. I excel in blending technical and
              visual aspects to craft exceptional <br /> digital products,
              prioritizing user experience, precise design, and optimized <br />{" "}
              code.
            </p>
            <p>
              Since starting my web development journey in 2015, I've embraced{" "}
              <br />
              challenges and kept up with the latest tech trends. Now in my
              early thirties, <br /> seven years in, I'm building cutting-edge
              web apps using Next.js, TypeScript, <br /> Nestjs, Tailwindcss,
              Supabase, and more.
            </p>
            <p>
              With a progressive mindset, I enjoy the entire product development
              process, <br /> from ideation to execution. Off duty, you'll find
              me on Twitter, tracking <br /> startup journeys, or unwinding.
              Follow me for tech insights and public project <br /> updates on
              Twitter or GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <p className="flex gap-10">
              <span className="flex items-center gap-2">
                <FaCircle className="text-[8px]" /> B.E. in Computer Engineering
              </span>
              <span className="flex items-center gap-2">
                <FaCircle className="text-[8px]" /> Avid learner
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaCircle className="text-[8px]" /> Full time freelancer
            </p>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and <br /> say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
