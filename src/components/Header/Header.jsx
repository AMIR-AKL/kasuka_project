import NavBar from "./Navbar/NavBar";
import MainHeader from "./MainHeader/MainHeader";
function Header() {
  return (
    <div className="relative  bg-hero parallex h-300 sm:h-200 ">
      <div className="parallex-content">
        <NavBar></NavBar>
        <MainHeader></MainHeader>
      </div>
    </div>
  );
}
export default Header;
