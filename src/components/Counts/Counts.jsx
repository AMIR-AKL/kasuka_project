import CountItem from "./CountItem";

function Counts() {
  return (
    <section className="my-30">
      <div className="lg:container flex flex-col lg:flex-row gap-5 max-lg:px-2 ">
        <div className="lg:w-1/2 w-full bg-counts"></div>
        <div className="flex flex-col justify-around">
          <div className="mt-5">
            <h1 className="font-sans-Extrabold text-xl md:text-3xl">
              شایسته ترین لذت را به هر حال ارائه می دهد
            </h1>
            <p className="text-sm font-sans-Medium tracking-tighter mt-5">
              {" "}
              خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما
              من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود درد
              مقصر است.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <CountItem
              iconId={"#smile"}
              count={65}
              disc={"مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم."}
            ></CountItem>
            <CountItem
              iconId={"#boklet"}
              count={85}
              disc={
                "پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد"
              }
            ></CountItem>
            <CountItem
              iconId={"#clock"}
              count={35}
              disc={"سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد"}
            ></CountItem>
            <CountItem
              iconId={"#award"}
              count={20}
              disc={
                "جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند"
              }
            ></CountItem>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Counts;
