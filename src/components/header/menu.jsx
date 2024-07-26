const Menu = ({ menuList, phonoStyle }) => {
  return (
    <div>
      <ul
        className={`${phonoStyle} flex gap-4 font-medium text-[16px] text-gray-600 dark:text-white`}
      >
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
