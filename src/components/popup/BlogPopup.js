import { context } from "@/src/context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";
const BlogPopup = () => {
  const { setBlogModal, blogModal } = useContext(context);
  return (
    <ModalContainer nullValue={setBlogModal}>
      <div className="news_popup_informations">
        <div className="image">
          <img src="assets/img/thumbs/4-2.jpg" alt="image" />
          <div
            className="main"
            data-img-url="assets/img/news/1.jpg"
            style={{ backgroundImage: `url(${blogModal.img})` }}
          />
        </div>
        <div className="details">
          <div className="meta">
            <img
              className="svg w-[18px] h-[18px]"
              src="assets/img/svg/calendar.svg"
              alt="image"
            />{" "}
            <span className="font-medium pl-[8px]">{blogModal.date}</span>
          </div>
          <div className="title">
            <h3>{blogModal.title}</h3>
          </div>
        </div>
        <div className="text">
          <p>{blogModal.article}</p>
        </div>
      </div>
    </ModalContainer>
  );
};
export default BlogPopup;
