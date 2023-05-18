import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/home.css";
import ServicesScreen from "./Services";
import AboutScreen from "./About";
import FurnituresScreen from "./Furmitures";
import WhoWeAre from "./Who";

function HomeScreen() {
  return (
    <div className="container">
      <header>
        <div className="top">
          <h1>VINTAGEFUR</h1>
          {/* <ul>
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
          </ul> */}
          <h2>
           <p>LOGIN</p>
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
      <ServicesScreen />
      <AboutScreen />
      <FurnituresScreen />
      <WhoWeAre />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repudiandae sapiente sunt ipsam cupiditate expedita deleniti illo, tempore dolorem voluptatibus vero quibusdam explicabo eligendi adipisci et temporibus id, reprehenderit qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repudiandae sapiente sunt ipsam cupiditate expedita deleniti illo.
          </p>
        </section>

        <button className="ctc-btn">
          contact us
        </button>
      </div>
    </SwiperSlide>
  );
}

export default HomeScreen;
