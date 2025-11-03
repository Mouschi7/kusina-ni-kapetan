const AnnouncementBar = ({ isVisible, onClose }) => {
      if (!isVisible) return null;

      return (
            <div className="announcement-bar" role="status">
                  <div className="announcement-content">
                        <span>
                              Limited Time Offer: Get 20% Off Your First Order!
                        </span>
                  </div>
                  <button
                        className="announcement-close"
                        aria-label="Close offer"
                        onClick={onClose}
                  >
                        ✕
                  </button>
            </div>
      );
};

export default AnnouncementBar;
