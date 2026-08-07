'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';
import { Star, Check, ShoppingCart } from 'lucide-react';

interface FeaturedProductCardProps {
  product: Product;
}

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-center col-span-1 md:col-span-2 lg:col-span-2 hover:shadow-md transition-shadow">
      {/* Smartphone Image */}
      <Link href={`/product/${product.id}`} className="flex justify-center items-center bg-gray-50 rounded-xl p-4 h-64 overflow-hidden group">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={240}
          className="max-h-60 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Product Details */}
      <div className="flex flex-col justify-between h-full py-1">
        <div>
          <Link href={`/product/${product.id}`}>
            <h3 className="text-2xl font-bold text-gray-900 hover:text-[#0b5cbe] transition-colors mb-1">
              {product.title}
            </h3>
          </Link>

          <p className="text-2xl font-extrabold text-gray-900 mb-3">
            ${product.price}
          </p>

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-4 text-[#0b5cbe]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-[#0b5cbe] text-[#0b5cbe]'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
            {product.description}
          </p>

          <div className="mb-6">
            <span className="text-xs text-gray-500 font-medium block mb-1">Category</span>
            <span className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded-md inline-block">
              {product.category}
            </span>
          </div>
        </div>

        {/* Add to Cart CTA */}
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full py-3 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm ${
            added
              ? 'bg-emerald-600 text-white'
              : 'bg-[#0b5cbe] hover:bg-[#094aa0] text-white active:scale-[0.99]'
          }`}
        >
          {added ? (
            <>
              <Check className="w-5 h-5" /> Added to Cart!
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};
