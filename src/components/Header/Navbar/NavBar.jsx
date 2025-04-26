function NavBar() {
  function menuHandler() {
    console.log("test");
    let mobileMenu = document.querySelector("#mobileMenu");
    mobileMenu.classList.toggle("hidden");
  }
  function openSubMenu() {
    let sideMenu = document.querySelector("#side");
    sideMenu.classList.toggle("hidden");
    sideMenu.classList.toggle("flex");
  }
  return (
    <div className="flex justify-between lg:justify-around items-center">
      <div className="flex items-center">
        <img
          className="size-15 md:size-20"
          src="./image/logo/logo.png"
          alt="kasuka"
        />
        <h1 className="uppercase text-2xl md:text-4xl font-semibold">kasuka</h1>
      </div>
      <nav className="hidden lg:flex *:p-4 font-sans-Demibold text-sm *:hover:text-amber-300 *:transition-colors">
        <a className="text-amber-300" href="#">
          خانه
        </a>
        <a href="#">درباره ما</a>
        <a href="#">خدمات</a>
        <a href="#">نمونه کارها</a>
        <a href="#">تیم</a>
        <a href="#">لیست کشویی</a>
        <a href="#">تماس با ما</a>
      </nav>
      {/* mobile menu */}
      <div
        id="mobileMenu"
        className="fixed top-0 bottom-0 left-0 right-0 h-full w-full bg-black/70 hidden"
      >
        <div className="absolute top-14 left-4 right-4 flex flex-col  text-zinc-900 bg-gray-100 bottom-4 *:p-4 font-sans-Demibold text-sm *:transition-colors">
          <a href="#">خانه</a>
          <a href="#">درباره ما</a>
          <a href="#">خدمات</a>
          <a href="#">نمونه کارها</a>
          <a href="#">تیم</a>
          <div>
            <div className="flex" onClick={openSubMenu}>
              <a href="#">لیست کشویی</a>
              <svg className="size-6 rotate-270">
                <use href="#chevron-left"></use>
              </svg>
            </div>
            <div
              id="side"
              className="hidden flex-col shadow-xl p-4 h-50 justify-between *:p-2 *:font-sans-Demibold"
            >
              <a href="#">لیست کشویی1</a>
              <a href="#">لیست کشویی2</a>
              <a href="#">لیست کشویی3</a>
              <a href="#">لیست کشویی4</a>
            </div>
          </div>
          <a href="#">تماس با ما</a>
        </div>
        <svg
          id="menuhandler"
          className="size-6 absolute top-5 text-gray-100 right-5"
          onClick={menuHandler}
        >
          <use href="#x-mark"></use>
        </svg>
      </div>
      <div className="hidden lg:block">
        <a
          className="font-sans-Demibold w-full h-full px-7 py-2 rounded-sm border-2 border-amber-300 bg-zinc-950 text-white hover:bg-amber-300 transition-all hover:text-zinc-900 text-sm ease-linear"
          href="#"
        >
          شروع
        </a>
      </div>
      <div id="menuhandler" className="pl-4 lg:hidden" onClick={menuHandler}>
        <svg className="size-6">
          <use href="#bars"></use>
        </svg>
      </div>
    </div>
  );
}
export default NavBar;
