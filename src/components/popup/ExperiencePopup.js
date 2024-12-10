import { context } from "@/src/context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";

const ExperiencePopup = () => {
  const { experienceModal, setexperienceModal } = useContext(context);
  return (
    <ModalContainer nullValue={setexperienceModal}>
      <div className="descriptions">
        <div className="top_image">
          <img src="assets/img/thumbs/4-2.jpg" alt="image" />
          <div
            className="main"
            data-img-url={experienceModal.image}
            style={{ backgroundImage: `url(${experienceModal.image})` }}
          />
        </div>
        <div className="infos">
          <div className="year">
            <span>{experienceModal.date}</span>
          </div>
          <div className="job">
            <span>{experienceModal.company}</span>
            <h3>{experienceModal.designation}</h3>
          </div>
        </div>
        <p>{experienceModal.desc}</p>
      </div>
    </ModalContainer>
  );
};
export default ExperiencePopup;
