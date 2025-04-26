import FeatureItem from "./FeatureItem";
function Feature() {
  return (
    <div className="my-20">
      <div className="lg:container flex flex-col lg:flex-row items-center gap-8 max-lg:px-4">
        <div className=" bg-feature w-full h-80 lg:w-1/2"></div>
        <div className="lg:w-1/2 flex flex-col justify-between gap-5 w-full">
          <FeatureItem
            title={"تبلیغ سختی است"}
            text={"نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"}
            iconId={"#paper"}
          ></FeatureItem>
          <FeatureItem
            title={"کدام یک از اینهاست"}
            text={
              "کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"
            }
            iconId={"#cube"}
          ></FeatureItem>
          <FeatureItem
            title={"یا کور شده است"}
            text={
              "یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"
            }
            iconId={"#multi-image"}
          ></FeatureItem>
          <FeatureItem
            title={"حقیقت مبارک"}
            text={
              "آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"
            }
            iconId={"#shield"}
          ></FeatureItem>
        </div>
      </div>
    </div>
  );
}
export default Feature;
