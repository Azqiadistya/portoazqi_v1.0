import { useContext } from "react";
import { context } from "../context";
import SectionContainer from "./SectionContainer";
import TypeingAnimation from "./TypeingAnimation";
const Home = () => {
  const { navChange } = useContext(context);
  return (
    <SectionContainer name="home">
      <div className="elisc_tm_home w-full min-h-[100vh] clear-both float-left bg-[#EFFBF8]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="details w-full min-h-[100vh] flex items-center">
            <div className="left w-1/2">
              <div className="title w-full float-left mb-[21px]">
                <h3 className="font-extrabold text-[60px] leading-[70px]">
                  Hi, I'm <span className="text-blue-color">Azqiadistya!</span>
                </h3>
                <h3 className="font-extrabold text-[60px] leading-[70px]">
                  <span className="cd-headline rotate-1">
                    {" "}
                    {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                    <span className="blc">Frontend </span>
                    <TypeingAnimation />
                  </span>
                </h3>
                <h5 className="font-extrabold text-[24px] leading-[50px]">
                  Based in Yogyakarta
                </h5>
              </div>
              <div className="subtitle wfll max-w-[80%] float-left mb-[40px]">
                <p>
                  I'm a Yogyakarta based web designer &amp; front‑end developer
                  with <span className="text-blue-color">4+ years</span> of
                  experience
                </p>
              </div>
              <div className="buttons w-full float-left flex items-center mb-[150px]">
                <div className="elisc_tm_button transition_link">
                  <a href="https://drive.google.com/file/d/1p7w9YYq5AUaRzcn8qL0x6stVcxwhbvia/view?usp=sharing">
                    Download CV
                  </a>
                </div>
                <div
                  className="elisc_tm_button transition_link"
                  data-style="border"
                >
                  <a href="https://wa.me/6282322302193?text=Halo,%20saya%20tertarik%20dengan%20produk%20Anda">
                    Let's talk
                  </a>
                </div>
              </div>
              <div className="info w-full float-left">
                <ul className="relative">
                  <li className="pl-[15px]">
                    <a
                      className="text-[#130F49] font-semibold text-[18px]"
                      href="tel:+77 022 444 05 05"
                    >
                      +62 82 322 302 193
                    </a>
                  </li>
                  <li className="pl-[15px]">
                    <a
                      className="text-[#130F49] font-semibold text-[18px]"
                      href="mailto:support@elisc.com"
                    >
                      azqiabdillah@gmail.com
                    </a>
                  </li>
                  <li className="pl-[15px]">
                    <a
                      className="href_location text-[#130F49] font-semibold text-[18px]"
                      href="#"
                    >
                      Maguwoharjo, Yogyakarta
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right w-1/2 pl-[50px]">
              <img src="assets/img/about/fotoAzqi.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
