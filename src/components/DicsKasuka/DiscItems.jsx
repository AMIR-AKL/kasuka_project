function DiscItems({ iconId, text }) {
  return (
    <div className="max-w-xl mb-3">
      <svg className="size-6 float-right text-amber-300">
        <use href="#check-double"></use>
      </svg>
      <p className="font-sans-Medium">{text}</p>
    </div>
  );
}
export default DiscItems;
