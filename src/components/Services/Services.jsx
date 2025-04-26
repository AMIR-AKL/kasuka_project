import Title from "../Title/Title";
import ServicesItem from "./ServicesItem";
function Services() {
  return (
    <section className="my-20">
      <div className="container">
        <Title title2={"خدمات"} title1={"خدمات ما را بررسی کنید"}></Title>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <ServicesItem
            iconId={"#dribbble"}
            title={"لورم اپیسوم"}
            text={
              "برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد"
            }
          ></ServicesItem>
          <ServicesItem
            iconId={"#file"}
            title={"اما همانطور که مشاهده می کنید"}
            text={
              "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"
            }
          ></ServicesItem>
          <ServicesItem
            iconId={"#tachor-meter"}
            title={"دردهای بزرگ"}
            text={
              "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"
            }
          ></ServicesItem>
          <ServicesItem
            iconId={"#world"}
            title={"هیچکس دیگر"}
            text={
              "اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم"
            }
          ></ServicesItem>
          <ServicesItem
            iconId={"#slide-show"}
            title={"لولا را پاک کنید"}
            text={
              "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"
            }
          ></ServicesItem>
          <ServicesItem
            iconId={"#build"}
            title={"دیوا دان"}
            text={
              "روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد"
            }
          ></ServicesItem>
        </div>
      </div>
    </section>
  );
}
export default Services;
