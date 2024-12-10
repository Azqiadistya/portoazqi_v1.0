import { context } from "@/src/context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";

const ServicePopup = () => {
  const { serviceModal, setServiceModal } = useContext(context);
  return (
    <ModalContainer nullValue={setServiceModal}>
      <div className="descriptions">
        <div className="top_image">
          <img src="assets/img/thumbs/4-2.jpg" alt="image" />
          <div
            className="main"
            data-img-url={serviceModal.image}
            style={{ backgroundImage: `url(${serviceModal.image})` }}
          />
        </div>
        <div className="main_title">
          <h3>{serviceModal.name}</h3>
        </div>
        <p>{serviceModal.desc}</p>
      </div>
    </ModalContainer>
  );
};
export default ServicePopup;
