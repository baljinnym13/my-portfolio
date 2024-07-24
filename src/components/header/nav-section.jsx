import Menu from "./menu";
import NavButtons from "./nav-buttons";

const menuList = [
  { menuId: "Id01", label: "Home", link: "/" },
  { menuId: "Id02", label: "About", link: "#about" },
  { menuId: "Id03", label: "Skills", link: "#work" },
  { menuId: "Id04", label: "Contact", link: "#contact" },
];

const NavSection = () => {
  return (
    <div className="flex gap-6 items-center">
      <Menu menuList={menuList} />
      <NavButtons />
    </div>
  );
};

export default NavSection;
