const ExperienceCard = ({ companyLogo, position, date, jobRoles }) => {
  return (
    <section className="p-8 bg-white rounded-xl mb-6 dark:bg-black border-2 border-white">
      <div className="flex flex-col items-start gap-4">
        <div className="flex-1">
          <img src={companyLogo} alt="" />
        </div>
        <div className="flex-1 ">
          <h1 className="font-bold text-gray-900 text-xl dark:text-white">
            {position}
          </h1>
          <ul className="mt-4 list-disc text-base text-gray-600 font-normal dark:text-white">
            {jobRoles.map((role) => (
              <li>{role}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex  dark:text-white">
          <span className="text-gray-700 font-normal text-base dark:text-white">
            {date}
          </span>
        </div>
      </div>
    </section>
  );
};
export default ExperienceCard;
