import { Autoplay, Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react"
import '../styles/projects.css'

function ProjectsScreen() {
    return (
        <div className="projects">
            <section>
                <h1>OUR PROJECTS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </section>
            <section className="swiper-box">
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
            {toggleProjects()}
            {toggleProjects()}
          </Swiper>
            </section>
            <section>
                <h1>WHAT SAYS OUR CLIENTS?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </section>
        </div>
    )
}

function toggleProjects() {
    return (
        <SwiperSlide>
            <section className="projects-swiper">
                <div className="box1">
                    <p>MODERN HOME DESIGN</p>
                </div>
                <div className="box2">
                    <p>MODERN HOME DESIGN</p>
                </div>
                <div className="box3">
                    <p>MODERN HOME DESIGN</p>
                </div>
            </section>
        </SwiperSlide>
    )
}

export default ProjectsScreen;