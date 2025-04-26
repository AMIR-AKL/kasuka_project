function InfoItem({ iconId, title, info }) {
  return (
    <div className="flex gap-x-4 items-start">
      <div className="size-12 rounded-sm flex items-center justify-center bg-amber-400">
        <svg className="size-6">
          <use href={iconId}></use>
        </svg>
      </div>
      <div>
        <h2 className="font-sans-Demibold text-xl md:text-2xl">{title}</h2>
        <p className="font-sans-Medium tracking-tight text-zinc-600 text-sm mt-2">
          {info}
        </p>
      </div>
    </div>
  );
}
export default InfoItem;
