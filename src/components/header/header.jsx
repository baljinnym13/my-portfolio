import NavSection from "./nav-section";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 py-4 bg-white">
      <h1 className="text-3xl font-bold">BALJAA</h1>
      <NavSection />
    </header>
  );
};

export default Header;
