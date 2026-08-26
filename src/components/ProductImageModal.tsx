import React, { useEffect, useRef } from 'react';

interface ProductImageModalProps {
  images: string[];
  open: boolean;
  initialIndex?: number;
  onClose: () => void;
}

const ProductImageModal: React.FC<ProductImageModalProps> = ({ images, open, initialIndex = 0, onClose }) => {
  const [current, setCurrent] = React.useState(initialIndex);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrent(initialIndex);
  }, [initialIndex, open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + images.length) % images.length);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, images.length, onClose]);

  // Swipe support
  useEffect(() => {
    if (!open) return;
    let startX = 0;
    let endX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
      if (startX - endX > 50) setCurrent((c) => (c + 1) % images.length);
      if (endX - startX > 50) setCurrent((c) => (c - 1 + images.length) % images.length);
    };
    const node = modalRef.current;
    node?.addEventListener('touchstart', handleTouchStart);
    node?.addEventListener('touchmove', handleTouchMove);
    node?.addEventListener('touchend', handleTouchEnd);
    return () => {
      node?.removeEventListener('touchstart', handleTouchStart);
      node?.removeEventListener('touchmove', handleTouchMove);
      node?.removeEventListener('touchend', handleTouchEnd);
    };
  }, [open, images.length]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80" onClick={onClose}>
      <div
        className="relative max-w-full max-h-full flex flex-col items-center justify-center"
        ref={modalRef}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 z-10 hover:bg-black/80 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          src={images[current]}
          alt="Product Full Size"
          className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg object-contain bg-white"
        />
        {images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 z-10 hover:bg-black/80 transition"
              onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-2 z-10 hover:bg-black/80 transition"
              onClick={() => setCurrent((c) => (c + 1) % images.length)}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-2 h-2 rounded-full ${idx === current ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductImageModal;
