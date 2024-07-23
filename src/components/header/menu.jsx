const Menu = ({ menuList }) => {
  return (
    <div>
      <ul className="flex gap-4">
        {menuList.map((menu) => (
          <li key={menu.menuId}>
            <a href={menu.link}>{menu.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
