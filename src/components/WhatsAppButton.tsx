import React from 'react';
import { MessageSquare } from 'lucide-react';

export interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 left-5 z-40 bg-stone-200/90 hover:bg-stone-300/90 text-stone-800 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-stone-300/50 flex items-center space-x-2 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={16} className="text-stone-700" />
      <span>Chat</span>
    </button>
  );
};

export default WhatsAppButton;