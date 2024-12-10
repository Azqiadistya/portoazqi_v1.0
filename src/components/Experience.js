import { useContext } from "react";
import { context } from "../context";

const experiences = [
  {
    id: 1,
    image: "assets/img/experience/datains.png",
    date: "Nov 2024 - Present",
    company: "Global Data Inspirasi",
    designation: "Fullstack Developer",
    desc: "PT Global Data Inspirasi (Datains) is a subsidiary of PT Gamatechno Indonesia which has a business focus on providing Big Data & Artificial Intelligence solutions",
  },
  {
    id: 2,
    image: "assets/img/experience/ziraymedia.png",
    date: "2022 - 2024",
    company: "Ziraymedia",
    designation: "Frontend Developer",
    desc: "ZirayMedia is a web development service that specializes in corporate websites and solutions for small and medium-sized enterprises (UMKM). Additionally, ZirayMedia offers services for creating virtual tour websites.",
  },
  {
    id: 3,
    image: "assets/img/experience/alterra.png",
    date: "Feb 2022 -  July 2022",
    company: "Alterra Academy",
    designation: "Frontend with VueJs",
    desc: "Alterra Academy offers an internship program with a curriculum tailored to the demands of the professional workforce.",
  },
  {
    id: 4,
    image: "assets/img/experience/4.jpg",
    date: "Des 2021 - Des 2023",
    company: "Imagiri Jogja",
    designation: "Chairman",
    desc: "Imagiri Jogja is a student organization consisting of students from the Wonogiri region who are currently studying in Yogyakarta.",
  },
];
const Experience = () => {
  const { modalToggle, setexperienceModal } = useContext(context);
  return (
    <div className="elisc_tm_experience w-full float-left bg-[#F3F9FF] pt-[100px] pb-[70px] px-0">
      <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
        <div className="elisc_tm_title w-full float-left">
          <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
            - Experience
          </span>
          <h3 className="text-[40px] font-extrabold">Everything about me!</h3>
        </div>
        <div className="list w-full float-left mt-[40px]">
          <ul className="ml-[-30px] flex flex-wrap">
            {experiences.map((experience) => (
              <li
                className="mb-[40px] pl-[30px] float-left w-1/2"
                key={experience.id}
              >
                <img
                  className="popup_image"
                  src="assets/img/experience/1.jpg"
                  alt="image"
                />
                <div className="list_inner w-full float-left clear-both bg-white rounded-[4px] px-[70px] py-[45px] relative">
                  <div className="short w-full float-left flex justify-between mb-[16px]">
                    <div className="job">
                      <span className="text-yellow-color font-medium inline-block mb-[4px]">
                        -{experience.date}
                      </span>
                      <h3 className="text-[20px]">{experience.designation}</h3>
                    </div>
                    <div className="place">
                      <span className="font-medium font-inter">
                        -{experience.company}
                      </span>
                    </div>
                  </div>
                  <div className="text w-full float-left">
                    <p className="opacity-[0.7] line-clamp-3">{experience.desc}</p>
                  </div>
                  <a
                    className="elisc_tm_full_link absolute inset-0 z-[5]"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      modalToggle(true);
                      setexperienceModal(experience);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Experience;
