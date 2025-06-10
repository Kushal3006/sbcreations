import React, { useEffect, useState } from 'react';

export interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
    const timer = setTimeout(() => setShowPopup(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-24 right-6 z-50 flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fadeInUp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.88 5.83L2.2 22l4.17-1.68C7.72 21.37 9.8 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.38-.47-4.78-1.28l-3.39 1.37 1.37-3.39C4.47 15.38 4 13.74 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"
            />
          </svg>
          <span className="font-semibold text-base">Chat on WhatsApp</span>
        </div>
      )}
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="Contact on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.88 5.83L2.2 22l4.17-1.68C7.72 21.37 9.8 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.38-.47-4.78-1.28l-3.39 1.37 1.37-3.39C4.47 15.38 4 13.74 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"
          />
        </svg>
      </button>
    </>
  );
};

export default WhatsAppButton;