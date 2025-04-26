import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from 'swiper/modules';
import "./Profile.css";

export default function Profile() {
  return (
    <swiper-container
      className="mySwiper"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <swiper-slide>
        <img
          className=" rounded-full border-4 border-amber-300"
          src="./image/profile/testimonials-1.jpg"
          alt=""
        />
        <h1 className="tracking-tighter text-lg font-sans-Demibold">
          ساول گودمن
        </h1>
        <h3 className="tracking-tighter text-sm text-zinc-200 font-sans-Medium">
          مدیران عامل: پایه گذار
        </h3>
        <div>
          <p className="text-sm font-sans-Medium tracking-tighter">
            پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب
            درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن
            همیشه می خندد.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          className=" rounded-full border-4 border-amber-300"
          src="./image/profile/testimonials-2.jpg"
          alt=""
        />
        <h1 className="tracking-tighter text-lg font-sans-Demibold">
          سارا ویلسون
        </h1>
        <h3 className="tracking-tighter text-sm text-zinc-200 font-sans-Medium">
          طراح
        </h3>
        <div>
          <p className="text-sm font-sans-Medium tracking-tighter">
            پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب
            درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن
            همیشه می خندد.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          className=" rounded-full border-4 border-amber-300"
          src="./image/profile/testimonials-3.jpg"
          alt=""
        />
        <h1 className="tracking-tighter text-lg font-sans-Demibold">
          ینا کارلیس
        </h1>
        <h3 className="tracking-tighter text-sm text-zinc-200 font-sans-Medium">
          صاحب فروشگاه
        </h3>
        <div>
          <p className="text-sm font-sans-Medium tracking-tighter">
            پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب
            درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن
            همیشه می خندد.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          className=" rounded-full border-4 border-amber-300"
          src="./image/profile/testimonials-4.jpg"
          alt=""
        />
        <h1 className="tracking-tighter text-lg font-sans-Demibold">
          مت براندون
        </h1>
        <h3 className="tracking-tighter text-sm text-zinc-200 font-sans-Medium">
          فریلنسر
        </h3>
        <div>
          <p className="text-sm font-sans-Medium tracking-tighter">
            پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب
            درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن
            همیشه می خندد.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          className=" rounded-full border-4 border-amber-300"
          src="./image/profile/testimonials-5.jpg"
          alt=""
        />
        <h1 className="tracking-tighter text-lg font-sans-Demibold">
          جان لارسون
        </h1>
        <h3 className="tracking-tighter text-sm text-zinc-200 font-sans-Medium">
          کارآفرین
        </h3>
        <div>
          <p className="text-sm font-sans-Medium tracking-tighter">
            پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب
            درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن
            همیشه می خندد.
          </p>
        </div>
      </swiper-slide>
    </swiper-container>
  );
}
