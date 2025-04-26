function ServicesItem({ iconId, title, text }) {
  return (
    <div className="border border-zinc-200 md:w-85 lg:w-100 h-auto py-20 px-2 flex flex-col items-center gap-y-10 hover:border-white hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300">
      <div className="size-16 bg-amber-300 flex justify-center items-center rounded-sm">
        <svg className="size-8">
          <use href={iconId}></use>
        </svg>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-sans-Demibold">{title}</h2>
        <p className="text-sm md:text-base font-sans-Medium mt-5 text-zinc-500">
          {text}
        </p>
      </div>
    </div>
  );
}
export default ServicesItem;
