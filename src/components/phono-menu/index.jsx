import Menu from "../header/menu";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
const menuList = [
  { menuId: "Id01", label: "Home", link: "/" },
  { menuId: "Id02", label: "About", link: "#about" },
  { menuId: "Id03", label: "Skills", link: "#skill" },
  { menuId: "Id04", label: "experience", link: "#experience" },
  { menuId: "Id04", label: "work", link: "#work" },
];
const Phono_menu = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-gray-200 absolute top-0 left-0 w-full h-screen ">
      <div className="bg-white  w-10/12 h-screen ml-auto dark:bg-black dark:text-white  px-4 py-6">
        <div className="flex justify-between items-center  px-4 py-6 border-b">
          <h1 className="text-3xl font-black">Baljaa</h1>
          <RxCross2 className="text-black text-2xl dark:text-white" />
        </div>
        <Menu
          phonoStyle="flex flex-col px-4 py-6 border-b"
          menuList={menuList}
        />
        <div className="flex justify-between items-center  px-4 py-6">
          <h1 className="font-normal text-xl  ">Switch Theme</h1>
          <span className="text-gray-600 mr-4"></span>
          {theme === "light" ? (
            <MdOutlineLightMode
              className="hover:cursor-pointer"
              onClick={() => {
                setTheme("dark");
              }}
            />
          ) : (
            <MdOutlineDarkMode
              className="hover:cursor-pointer"
              onClick={() => {
                setTheme("light");
              }}
            />
          )}
        </div>
        <div className="pr-4">
          <button className="w-full py-2 ml-4 dark:text-black text-white dark:bg-white  bg-black  rounded-xl">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phono_menu;
