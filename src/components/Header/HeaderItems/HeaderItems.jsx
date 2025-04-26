function HeaderItems({ title, iconId }) {
  return (
    <div className="flex flex-col items-center justify-center border w-80 sm:w-50 h-35 hover:border-amber-300 transition-all">
      <svg className="size-10 text-amber-300">
        <use href={iconId}></use>
      </svg>
      <h3 className="mt-5 hover:text-amber-300 transition-colors font-sans-bold text-lg">
        <a href="#">{title}</a>
      </h3>
    </div>
  );
}
export default HeaderItems;
