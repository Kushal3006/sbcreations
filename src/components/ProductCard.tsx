import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const WHATSAPP_NUMBER = '9054400512'; // Change to your WhatsApp number

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="w-full aspect-square flex items-center justify-center bg-gray-50 min-h-[260px]">
        {product.media && product.media.length > 0 ? (
          product.media[0].type === 'video' ? (
            <video
              src={product.media[0].src.startsWith('/') ? product.media[0].src : `/${product.media[0].src.replace(/^public\//, '')}`}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="w-full h-full object-cover object-center rounded bg-black"
              style={{ background: '#fff' }}
              poster={product.media.find(m => m.type === 'image')?.src?.replace('/public/', '/')}
            />
          ) : (
            <img
              src={product.media[0].src.startsWith('/') ? product.media[0].src : `/${product.media[0].src.replace(/^public\//, '')}`}
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 rounded"
              style={{ background: '#fff' }}
            />
          )
        ) : (
          product.image && (
            <img
              src={product.image.startsWith('/') ? product.image : `/${product.image.replace(/^public\//, '')}`}
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 rounded"
              style={{ background: '#fff' }}
            />
          )
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-medium text-[#8B7355] min-h-[2.5rem] flex items-center">{product.name}</h3>
        {product.sizeInches && (
          <div className="text-base font-semibold text-[#6B5B45] mb-1">Size: {product.sizeInches}"</div>
        )}
        <p className="mt-1 text-sm md:text-base text-[#6B5B45] min-h-[2.5rem]">{product.description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 mt-auto">
          <span className="text-lg font-bold text-[#8B7355]">₹{product.price}</span>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300 w-full sm:w-auto"
            onClick={handleWhatsAppOrder}
          >
            Order on WhatsApp
          </button>
        </div>
        {product.isCustomizable && (
          <span className="mt-2 inline-block text-xs text-[#8B7355] border border-[#8B7355] rounded-full px-2 py-1">
            Customizable
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;