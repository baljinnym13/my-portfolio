import Tag from "../tag";

const About = () => {
  return (
    <div className="bg-gray-50 mb-24 mt-24 flex-col items-center justify-center">
      <div id="about" className="text-center">
        <Tag TagText={"abaut me"} />
        <div className="flex justify-center">
          <img
            className="shadow-[-40px_40px_#E5E7EB] w-[400px] h-[480px]"
            src="./images/adoutimg.jpg"
            alt="jpg"
          />
          <div className="text-start">
            <h1>Curious about me? Here you have it:</h1>
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
            <p>
              <span>B.E. in Computer Engineering</span>
              <span>Avid learner</span>
            </p>
            <p>Full time freelancer</p>
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
