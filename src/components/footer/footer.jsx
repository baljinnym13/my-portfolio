import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="bg-gray-50  dark:bg-[#111827] flex justify-center px-4 py-6">
      <div className="flex gap-1 items-center text-[14px] dark:text-[#D1D5DB] text-gray-600">
        <span>
          <FaRegCopyright />
        </span>
        <span>2024</span>
        <span>|</span>
        <span className="">Greetings with 🖤 from Ulaanbaatar</span>
      </div>
    </section>
  );
};
export default Footer;
