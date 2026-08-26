import React, { useState } from 'react';
import { Product } from '../types';
import ProductImageModal from './ProductImageModal';

interface ProductCardProps {
  product: Product;
}

const WHATSAPP_NUMBER = '9054400512'; // Change to your WhatsApp number

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hello! I would like to order the following product:\n` +
      `🛍️ Product: ${product.name}\n` +
      `💵 Price: ₹${product.price}\n` +
      `📝 Description: ${product.description}\n` +
      `📏 Size: ${product.sizeInches ? `${product.sizeInches}"` : 'N/A'}\n` +
      `\nPlease let me know the next steps to place my order. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  // Collect all images for modal (ignore videos)
  const images = product.media
    ? product.media.filter(m => m.type === 'image').map(m => m.src.startsWith('/') ? m.src : `/${m.src.replace(/^public\//, '')}`)
    : product.image
      ? [product.image.startsWith('/') ? product.image : `/${product.image.replace(/^public\//, '')}`]
      : [];

  return (
    <>
      <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col w-full min-w-0 border border-[#ece7e1]">
        <div className="w-full aspect-square flex items-center justify-center bg-gradient-to-br from-[#f5f5dc] to-[#f9f6f2] min-h-[100px] p-2 cursor-zoom-in"
          onClick={() => images.length > 0 && setModalOpen(true)}
        >
          {product.media && product.media.length > 0 ? (
            product.media[0].type === 'video' ? (
              <video
                src={product.media[0].src.startsWith('/') ? product.media[0].src : `/${product.media[0].src.replace(/^public\//, '')}`}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="w-full h-full object-contain object-center rounded bg-white"
                style={{ background: '#fff' }}
                poster={product.media.find(m => m.type === 'image')?.src?.replace('/public/', '/')}
              />
            ) : (
              <img
                src={product.media[0].src.startsWith('/') ? product.media[0].src : `/${product.media[0].src.replace(/^public\//, '')}`}
                alt={product.name}
                className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300 rounded bg-white"
                style={{ background: '#fff' }}
              />
            )
          ) : (
            product.image && (
              <img
                src={product.image.startsWith('/') ? product.image : `/${product.image.replace(/^public\//, '')}`}
                alt={product.name}
                className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300 rounded bg-white"
                style={{ background: '#fff' }}
              />
            )
          )}
        </div>
        <div className="p-2 flex flex-col flex-grow">
          <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-[#8B7355] min-h-[1.8rem] flex justify-center items-center break-words text-center">
            {product.name}
          </h3>
          {product.sizeInches && (
            <div className="text-[10px] xs:text-xs sm:text-sm font-semibold text-[#6B5B45] mb-1 break-words text-center w-full mx-auto">
              Size: {product.sizeInches}"
            </div>
          )}
          <p className="mt-1 text-[10px] xs:text-xs sm:text-sm text-[#6B5B45] min-h-[1.5rem] break-words leading-tight text-center w-full mx-auto">
            {product.description}
          </p>
          <div className="flex flex-col items-center justify-between gap-1 mt-auto w-full">
            {product.originalPrice ? (
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs xs:text-sm sm:text-base text-gray-400 line-through">₹{product.originalPrice}</span>
                <span className="text-sm xs:text-base font-bold text-[#8B7355]">₹{product.price}</span>
              </div>
            ) : (
              <span className="text-sm xs:text-base font-bold text-[#8B7355] mb-1">₹{product.price}</span>
            )}
            <button
              className="px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 bg-green-600 text-[10px] xs:text-xs sm:text-sm text-white rounded-full hover:bg-green-700 transition-colors duration-300 w-full font-semibold shadow-md"
              onClick={handleWhatsAppOrder}
            >
              <span className="block truncate">Order on WhatsApp</span>
            </button>
          </div>
          {product.isCustomizable && (
            <span className="mt-2 inline-block text-[9px] xs:text-[10px] sm:text-xs text-[#8B7355] border border-[#8B7355] rounded-full px-2 py-0.5 mx-auto">
              Customizable
            </span>
          )}
        </div>
      </div>
      <ProductImageModal images={images} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default ProductCard;