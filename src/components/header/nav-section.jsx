import Menu from "./menu";
import NavButtons from "./nav-buttons";
import { TiThMenuOutline } from "react-icons/ti";
const menuList = [
  { menuId: "Id01", label: "Home", link: "/" },
  { menuId: "Id02", label: "About", link: "#about" },
  { menuId: "Id03", label: "Skills", link: "#skill" },
  { menuId: "Id04", label: "experience", link: "#experience" },
  { menuId: "Id04", label: "work", link: "#work" },
];
const NavSection = () => {
  return (
    <div>
      <div className="flex gap-6 items-center max-sm:hidden">
        <Menu menuList={menuList} />
        <NavButtons />
      </div>
      <TiThMenuOutline className="max-sm:block" />
    </div>
  );
};

export default NavSection;
