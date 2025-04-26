import Title from "../Title/Title";

function Portfolio() {
  return (
    <section className="my-30">
      <div className="container">
        <Title
          title2={"نمونه کارها"}
          title1={"نمونه کارها ما را بررسی کنید"}
        ></Title>
        <div className="flex justify-center mt-10">
          <div className=" *:py-1.5 *:px-4 *:rounded-sm text-zinc-800 *:hover:bg-amber-400 *:transition-colors *:font-sans-Demibold text-sm ">
            <a className="active" href="#">
              همه
            </a>
            <a href="#">برنامه</a>
            <a href="#">محصول</a>
            <a href="#">اینترنت</a>
          </div>
        </div>
        <div class=" mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
            <img
              className="w-100 h-70"
              src="./image/products/portfolio-3.jpg"
              alt=""
            />
            <img
              className="w-100 h-70"
              src="./image/products/portfolio-2.jpg"
              alt=""
            />
            <img
              className="w-100 h-70"
              src="./image/products/portfolio-1.jpg"
              alt=""
            />
            <img
              className="w-100 h-70"
              src="./image/products/portfolio-4.jpg"
              alt=""
            />
            <img
              className="w-100 h-70"
              src="./image/products/portfolio-6.jpg"
              alt=""
            />
            <img
              className="w-100 h-70"
              src="./image/products/portfolio-7.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
