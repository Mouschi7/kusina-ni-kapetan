import React from "react";
import "../index.css";

const AnnouncementBar = ({ isVisible, onClose }) => {
      return (
            <div
                  className={`announcement-bar ${
                        isVisible ? "visible" : "hidden"
                  }`}
            >
                  <div className="announcement-content">
                        🎉 Limited Time Offer: Get 20% Off Your First Order!
                  </div>
                  <button
                        className="announcement-close"
                        onClick={onClose}
                        aria-label="Close announcement"
                  >
                        &times;
                  </button>
            </div>
      );
};

export default AnnouncementBar;
