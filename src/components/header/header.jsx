import Phono_menu from "../phono-menu";
import NavSection from "./nav-section";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white mb-24 dark:bg-black md:px-20 ">
      <h1 className="text-3xl font-black">BALJAA</h1>

      <NavSection />
      {<Phono_menu />}
    </header>
  );
};

export default Header;
