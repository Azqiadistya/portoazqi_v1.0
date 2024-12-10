import { useContext } from "react";
import { context } from "../context";
import SectionContainer from "./SectionContainer";
const services = [
  {
    id: 1,
    name: "Frontend Developer",
    image: "assets/img/service/1.jpg",
    desc: "With extensive expertise in frontend development, I have succeeded in creating responsive and attractive websites using various combinations of frameworks such as React.js, Next.js, and Vue.js, as well as various CSS frameworks such as Tailwind CSS, Bootstrap, Bulma, and Vuetify. My ability to adapt to a variety of technologies allows me to tailor the right approach to suit project needs, while my primary focus remains on responsive design, ensuring that every website I build provides an optimal user experience across all devices and screen sizes.",
  },
  {
    id: 2,
    name: "UI/UX Designer",
    image: "assets/img/service/2.jpg",
    desc: "As a UI/UX designer who is also skilled in frontend development, I deliver designs that are focused on usability, ensuring that each element is not only visually appealing but also meets user needs and preferences. Using design tools like Figma, I create interactive prototypes that allow users to experience real-time before the development process begins. In every project, my focus is on responsive and intuitive design, providing a consistent experience across all devices and screen sizes.",
  },
  {
    id: 3,
    name: "Content Writing",
    image: "assets/img/service/3.jpg",
    desc: "In the world of content writing, my expertise lies in the ability to convey clear, interesting and engaging messages to website visitors. I am skilled in producing informative, relevant and inspiring content, in line with brand goals and identity. With extensive experience in a variety of topics and writing styles, I am able to create articles, blog posts, product descriptions, and other website content that attracts the attention of the audience and strengthens the brand's online presence. In every post, I pay attention to SEO to increase online visibility, as well as focus on the quality and authenticity of the content to ensure a satisfying and memorable user experience.",
  },
  {
    id: 4,
    name: "Social Media Planner",
    image: "assets/img/service/4.jpg",
    desc: "I have the ability to plan and manage effective social media strategies to achieve desired goals. With a deep understanding of user behavior and market trends, I can identify the right target audience and develop relevant and engaging content. With a strategic and creative approach, I am determined to provide optimal results in utilizing the full potential of social media platforms to achieve business success and strengthen brand presence online.",
  },
  {
    id: 5,
    name: "Graphic Design",
    image: "assets/img/service/5.jpg",
    desc: "With my graphic design skills, I can make a significant contribution in building an attractive and professional website. Through graphic design, I can create eye-catching visual elements, such as logos, icons, graphics, and other design elements that reinforce brand identity and enhance the overall aesthetic of a website. With extensive experience using design software such as Adobe Photoshop, Illustrator, and InDesign, I am able to produce designs that are consistent with the vision and goals of the project. With a combination of skills in graphic design, content writing, and social media planning, I am ready to help build a website that is stunning and effective in achieving business goals",
  },
  {
    id: 6,
    name: "Virtual Tour Website",
    image: "assets/img/service/6.jpg",
    desc: "We will help you to create interactive visual experiences for your property, destination or business. With the latest technology, we bring the physical environment into the digital world, allowing visitors to explore your space in depth. Get high-quality virtual tours to increase attraction and engagement with your customers.",
  },
];
const Services = () => {
  const { setServiceModal, modalToggle } = useContext(context);

  return (
    <SectionContainer name="service">
      <div className="elisc_tm_services w-full float-left pt-[110px]">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="elisc_tm_service_title w-full float-left flex justify-between items-end">
            <div className="elisc_tm_title w-auto float-left">
              <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                - Services
              </span>
              <h3 className="text-[40px] font-extrabold">My Services</h3>
            </div>
            <a href="mailto:support@elisc.com">azqiabdillah@gmail.com</a>
          </div>
          <div className="service_list w-full float-left mt-[40px] mb-[50px]">
            <ul className="ml-[-30px] flex flex-wrap">
              {services.map((service) => (
                <li
                  className="mb-[30px] pl-[30px] w-1/3 float-left"
                  key={service.id}
                >
                  <img
                    className="popup_image"
                    src={service.image}
                    alt="image"
                  />
                  <div className="list_inner w-full float-left clear-both h-full relative px-[40px] pt-[32px] pb-[55px] rounded-[4px]">
                    <div className="details w-full float-left relative z-[1]">
                      <div className="title w-full float-left mb-[13px]">
                        <span className="font-inter font-medium text-[20px] text-[rgba(19,15,73,.5)] inline-block mb-[15px]">
                          0{service.id}
                        </span>
                        <h3 className="text-[20px]">{service.name}</h3>
                      </div>
                      <div className="text w-full float-left mb-[25px]">
                        <p className="text-[#55527C] opacity-[0.7] line-clamp-2">
                          {service.desc}
                        </p>
                      </div>
                      <div className="elisc_tm_read_more">
                        <a href="#">
                          Read More
                          <span className="inline-block">
                            <img
                              className="svg"
                              src="assets/img/svg/rightArrow.svg"
                              alt="image"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <a
                      className="elisc_tm_full_link absolute inset-0 z-[5]"
                      href="#"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   modalToggle(true);
                      //   setServiceModal(service);
                      // }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="elisc_tm_video w-full float-left relative mb-[120px] overflow-hidden rounded-[4px]">
            <img
              className="placeholder min-w-full opacity-0 relative"
              src="assets/img/thumbs/4-2.jpg"
              alt="image"
            />
            <div
              className="image absolute inset-0 bg-no-repeat bg-cover bg-center"
              data-img-url="assets/img/service/2.jpg"
            />
            <div className="overlay absolute inset-0 bg-[rgba(0,0,0,.4)]" />
            <span className="play absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[2] w-[111px] h-[111px] bg-white rounded-full">
              <a
                href="https://www.youtube.com/watch?v=arGIxuPj2M8&amp;t=576s&amp;ab_channel=Azqiadistya"
                class="play absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[2] w-[111px] h-[111px] bg-white rounded-full"
              >
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="null"
                  class="svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px] h-[18px] ml-[2px] replaced-svg"
                >
                  <path
                    d="M14.4462 10.6965C14.3614 10.7835 14.0414 11.1555 13.7433 11.4615C11.9956 13.386 7.43643 16.536 5.05017 17.4975C4.68777 17.652 3.77155 17.979 3.28203 18C2.81296 18 2.36581 17.892 1.93911 17.673C1.40721 17.367 0.980516 16.8855 0.746712 16.317C0.596201 15.9225 0.362397 14.742 0.362397 14.721C0.128592 13.4295 0 11.331 0 9.012C0 6.8025 0.128592 4.7895 0.320019 3.4785C0.341939 3.4575 0.575743 1.9905 0.831466 1.488C1.30054 0.57 2.21676 0 3.19727 0H3.28203C3.9206 0.0225 5.26352 0.5925 5.26352 0.6135C7.52119 1.5765 11.9752 4.572 13.7652 6.5625C13.7652 6.5625 14.2694 7.074 14.4886 7.3935C14.8305 7.8525 15 8.421 15 8.9895C15 9.624 14.8086 10.215 14.4462 10.6965"
                    fill="#5D3BEE"
                  ></path>
                </svg>
              </a>
            </span>
            <div className="text absolute bottom-[16px] right-[16px] bg-white py-[20px] px-[30px]">
              <h3 className="text-[#51586A] text-[17px] font-bold uppercase">
                Intro Video
              </h3>
            </div>
            <a
              className="elisc_tm_full_link absolute inset-0 z-5 popup-youtube"
              href="https://www.youtube.com/watch?v=arGIxuPj2M8&t=576s&ab_channel=Azqiadistya"
            />
          </div> */}
        </div>
      </div>
    </SectionContainer>
  );
};
export default Services;
