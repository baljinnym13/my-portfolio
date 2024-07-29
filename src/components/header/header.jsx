import Phono_menu from "../phono-menu";
import NavSection from "./nav-section";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 py-4 bg-white mb-24 dark:bg-black">
      <h1 className="text-3xl font-black">BALJAA</h1>

      <NavSection />
      {<Phono_menu />}
    </header>
  );
};

export default Header;
