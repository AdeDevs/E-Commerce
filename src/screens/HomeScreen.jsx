import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/home.css";

function HomeScreen() {
  return (
    <div className="container">
      <header>
        <div className="top">
          <h1>VINTAGEFUR</h1>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">shop</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
          <h2>
            <a href="#">LOGIN</a>
          </h2>
        </div>
        <div className="swipe">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 4090 }}
            slidesPerView={1}
            navigation
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {toggleSwiper()}
            {toggleSwiper()}
          </Swiper>
        </div>
      </header>
    </div>
  );
}

function toggleSwiper() {
  return (
    <SwiperSlide>
      <div className="furniture">
        <section>
          <h1>FURNITURE</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some fo
          </p>
        </section>

        <button className="ctc-btn">
          <a href="#">contact us</a>
        </button>
      </div>
    </SwiperSlide>
  );
}

export default HomeScreen;
