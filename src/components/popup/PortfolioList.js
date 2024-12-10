import { useState } from "react";
import PortfolioPopup from "./PortfolioPopup";

const PortfolioList = ({ portfolioItems }) => {
    const [selectedData, setSelectedData] = useState(null);

    // Handle selecting a portfolio item
    const handleSelectItem = (item) => {
        setSelectedData(item);
    };

    return (
        <div>
            <div className="swiper-container">
                {portfolioItems.map((item, index) => (
                    <div
                        key={index}
                        className="swiper-slide"
                        onClick={() => handleSelectItem(item)}
                    >
                        <img src={item.thumbImage} alt={item.title} />
                        <h4>{item.title}</h4>
                    </div>
                ))}
            </div>

            {selectedData && <PortfolioPopup selectedData={selectedData} />}
        </div>
    );
};

export default PortfolioList;
