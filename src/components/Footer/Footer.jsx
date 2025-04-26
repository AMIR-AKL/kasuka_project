import IconContact from "../Team/IconContact";
import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer className="py-20 bg-zinc-950 text-white">
      <div className="container flex flex-col md:flex-row gap-y-10 items-start justify-between">
        {/* info */}
        <div>
          <h3 className="flex items-center  uppercase text-3xl font-semibold">
            <img className="size-20" src="./image/logo/logo.png" alt="" />
            kasuka
          </h3>
          <div className="text-sm font-sans-Medium space-y-2">
            <p>تهران خیابان آزادی</p>
            <p>تلفن:0123467895</p>
            <p>ایمیل:email@example.com</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <IconContact iconId={"#twitter"}></IconContact>
            <IconContact iconId={"#facebook"}></IconContact>
            <IconContact iconId={"#instagram"}></IconContact>
            <IconContact iconId={"#skype"}></IconContact>
            <IconContact iconId={"#linkdin"}></IconContact>
          </div>
        </div>
        {/* links */}
        <div>
          <FooterLink
            title={"لینک های مفید"}
            link1={"خانه"}
            link2={"درباره ما"}
            link3={"خدمات"}
            link4={"شرایط استفاده از خدمات"}
            link5={"سیاست حفظ حریم خصوصی"}
          ></FooterLink>
        </div>
        <div className="hidden lg:block">
          <FooterLink
            title={"خدمات ما"}
            link1={"طراحی وب سایت"}
            link2={"توسعه وب"}
            link3={"مدیریت تولید"}
            link4={"بازار یابی"}
            link5={"طراحی گرافیک"}
          ></FooterLink>
        </div>
        {/* newsletter */}
        <div className="md:hidden lg:block">
          <h3>خبرنامه ما</h3>
          <p>
            با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد
            بود
          </p>
          <form
            className="bg-white py-2 px-2.5 relative rounded-sm text-black overflow-hidden mt-10"
            action=""
          >
            <input className="w-email outline-0" type="email" name="email" />
            <input
              className="bg-amber-300 absolute top-0 bottom-0 left-0 px-5"
              type="submit"
              value="دنبال کردن"
            />
          </form>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
