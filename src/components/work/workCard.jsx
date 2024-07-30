import { FiExternalLink } from "react-icons/fi";

const WorkCard = ({ proImg, proTitle, proText, useApp, index }) => {
  console.log(index);
  return (
    <section
      className={`${
        index % 2 == 0 ? "flex" : "flex-row-reverse flex"
      } shadow-xl py-8 px-8 mb-6 rounded-x text-start flex flex-col`}
    >
      <div className="flex-1 bg-gray-100 rounded-xl dark:bg-[#374151] flex justify-center items-center">
        <img src={proImg} alt="png" />
      </div>
      <div className="flex-1 bg-white dark:bg-[#1F2937]  flex flex-col justify-between">
        <h1 className="text-xl font-bold dark:text-[#F9FAFB] mt-8 mb-6 text-gray-900 dark:text-white">
          {proTitle}{" "}
        </h1>
        <p className="text-base dark:text-[#D1D5DB] text-gray-600 font-normal mb-6 dark:text-white">
          {proText}
        </p>
        <div className="flex flex-wrap gap-2">{useApp}</div>
        <button className="mt-7">
          <a href="" className="dark:text-white">
            <FiExternalLink />
          </a>
        </button>
      </div>
    </section>
  );
};
export default WorkCard;
