import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context";
import { sliderProps } from "../sliderProps";
import Clients from "./Clients";
import SectionContainer from "./SectionContainer";
import Testimonial from "./Testimonial";
const Portfolio = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  return (
    <SectionContainer name="portfolio">
      <div className="elisc_tm_portfolio w-full float-left pt-[120px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_portfolio_title w-full float-left flex items-end justify-between">
            <div className="elisc_tm_title w-auto float-left">
              <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                - Projects
              </span>
              <h3 className="text-[40px] font-extrabold">
                Recent completed works
              </h3>
            </div>
            <div className="buttons">
              <a className="prev_button" href="#">
                <img
                  className="svg"
                  src="assets/img/svg/prev.svg"
                  alt="image"
                />
              </a>
              <a className="next_button" href="#">
                <img
                  className="svg"
                  src="assets/img/svg/next.svg"
                  alt="image"
                />
              </a>
            </div>
          </div>
          <div className="portfolio_list w-full float-left mt-[40px] mb-[120px]">
            <Swiper
              {...sliderProps.portfolio}
              className="gallery_zoom mb-[65px]"
            >
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/1.jpg"
                    />
                    <a
                      className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                      href="#"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   modalToggle(true);
                      //   setPortfolioModal(true);
                      // }}
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Company Profile
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Ziraymedia.com
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/2.jpg"
                    />
                    <a
                      className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                      href="#"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   modalToggle(true);
                      //   setPortfolioModal(true);
                      // }}
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Virtual Tour
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Museum Vredeburg
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/3.jpg"
                    />
                    <a
                      className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                      href="#"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   modalToggle(true);
                      //   setPortfolioModal(true);
                      // }}
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Company Profile
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Induro International
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/4.jpg"
                    />
                    <a
                      className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                      href="#"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   modalToggle(true);
                      //   setPortfolioModal(true);
                      // }}
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Katalog Web
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Bakpia Wong Keraton
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/5.jpg"
                    />
                    <a
                      className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                      href="#"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   modalToggle(true);
                      //   setPortfolioModal(true);
                      // }}
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Virtual Tour
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Museumku Gerabah
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/6.jpg"
                    />
                    <a
                      className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                      href="#"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   modalToggle(true);
                      //   setPortfolioModal(true);
                      // }}
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Company Profile
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Media Indonesia
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/7.jpg"
                    />
                    <a
                      className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                      href="#"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   modalToggle(true);
                      //   setPortfolioModal(true);
                      // }}
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Portal Berita
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Media Indonesia
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/8.jpg"
                    />
                    <a
                      className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                      href="#"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   modalToggle(true);
                      //   setPortfolioModal(true);
                      // }}
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Al Quran
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Media Indonesia
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <div className="image relative rounded-[4px] overflow-hidden mb-[25px]">
                    <img
                      className="min-w-full relative opacity-0"
                      src="assets/img/thumbs/31-36.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                      data-img-url="assets/img/portfolio/9.jpg"
                    />
                    <a
                      className="elisc_tm_full_link portfolio_popup absolute inset-0 z-[5]"
                      href="#"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   modalToggle(true);
                      //   setPortfolioModal(true);
                      // }}
                    />
                  </div>
                  <div className="details w-full float-left">
                    <span className="category inline-block mb-[7px]">
                      <a
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        Energi Batu Hitam
                      </a>
                    </span>
                    <h3 className="title">
                      <a
                        className="line_effect portfolio_popup"
                        href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   modalToggle(true);
                        //   setPortfolioModal(true);
                        // }}
                      >
                        PT. Energi Batu Hitam
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <div className="elisc_tm_button" data-position="center">
              <a href="#">View all projects</a>
            </div> */}
          </div>
        </div>
      </div>
      {/* PARTNERS */}
      <Clients />
      {/* /PARTNERS */}
      {/* TESTIMONIALS */}
      {/* <Testimonial /> */}
      {/* /TESTIMONIALS */}
    </SectionContainer>
  );
};
export default Portfolio;