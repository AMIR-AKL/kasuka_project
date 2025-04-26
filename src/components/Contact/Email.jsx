import InfoItem from "./InfoItem";

function Email() {
  return (
    <div className="flex flex-col md:flex-row md:items-start">
      <div className="space-y-8 md:w-1/2">
        <InfoItem
          iconId={"#map-pin"}
          title={"مکان:"}
          info={"تهران خیابان آزادی"}
        ></InfoItem>
        <InfoItem
          iconId={"#email"}
          title={"ایمیل:"}
          info={"email@example.com"}
        ></InfoItem>
        <InfoItem
          iconId={"#smart-phone"}
          title={"شماره تماس:"}
          info={"0123467889"}
        ></InfoItem>
      </div>
      <div className="w-full max-md:mt-10">
        <form className="w-full font-sans-Medium text-xs">
          <div className="max-w-full flex gap-5">
            <div className=" w-1/2 rounded-sm h-10 flex items-center">
              <input
                className="w-full outline-0 border-zinc-300 focus:border-amber-400 h-full border p-2 rounded-sm"
                type="text"
                placeholder="نام"
              />
            </div>
            <div className=" w-1/2 rounded-sm h-10 flex items-center">
              <input
                className="w-full outline-0 border-zinc-300 focus:border-amber-400 h-full border p-2 rounded-sm"
                type="text"
                placeholder="ایمیل"
              />
            </div>
          </div>
          <div className="mt-5 rounded-sm h-10 flex items-center">
            <input
              className="w-full outline-0 border-zinc-300 focus:border-amber-400 h-full border p-2 rounded-sm"
              type="text"
              placeholder="عنوان"
            />
          </div>
          <div className="mt-5 rounded-sm flex items-center">
            <textarea
              className="w-full min-h-30 outline-0 border-zinc-300 focus:border-amber-400 border p-2 rounded-sm"
              placeholder="پیام"
            ></textarea>
          </div>
          <div className="my-8"></div>
          <div className="text-center">
            <button
              className="bg-amber-400 py-2.5 px-6 rounded-sm text-sm font-sans-Demibold hover:bg-amber-500 transition-colors cursor-pointer"
              type="submit"
            >
              ارسال پیام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Email;
