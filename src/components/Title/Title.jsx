function Title(props) {
  return (
    <div>
      <h2 className="relative head-services font-sans-Medium text-zinc-500 text-sm">
        {props.title2}
      </h2>
      <h1 className="text-2xl md:text-4xl font-sans-Demibold mt-4">
        {props.title1}
      </h1>
    </div>
  );
}
export default Title;
