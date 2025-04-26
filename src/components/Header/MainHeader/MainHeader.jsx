import HeaderItems from "../HeaderItems/HeaderItems";
function MainHeader() {
  return (
    <div className="flex flex-col items-center mt-30">
      <div className="text-center *:mb-5">
        <h1 className="text-lg sm:text-3xl md:text-5xl font-sans-bold">
          راه حل های قدرتمند دیجیتال با{" "}
        </h1>
        <h1 className="text-lg sm:text-3xl md:text-5xl font-sans-bold text-amber-300">
          Kasuka
        </h1>
        <h3 className="text-lg sm:text-3xl md:text-2xl font-sans-Medium">
          ما تیمی از بازاریابان با استعداد دیجیتال هستیم
        </h3>
      </div>
      <div className="flex gap-5 flex-wrap mt-12 justify-center">
        <HeaderItems title={"متن نمایشی"} iconId={"#store"}></HeaderItems>
        <HeaderItems title={"نمونه کارها"} iconId={"#chart-box"}></HeaderItems>
        <HeaderItems
          title={"عملکردهای پایانی"}
          iconId={"#calender"}
        ></HeaderItems>
        <HeaderItems
          title={"نمودار کیفی"}
          iconId={"#paint-brush"}
        ></HeaderItems>
        <HeaderItems
          title={"اطلاعات ذخیره شده"}
          iconId={"#circle-stack"}
        ></HeaderItems>
      </div>
    </div>
  );
}
export default MainHeader;
