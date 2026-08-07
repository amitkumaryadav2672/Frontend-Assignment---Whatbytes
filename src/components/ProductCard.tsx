'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';
import { Check, ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100/80 hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      {/* Product Image Link */}
      <Link href={`/product/${product.id}`} className="block relative w-full h-48 mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={240}
          height={180}
          className="max-h-44 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Info & Add to Cart */}
      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span className="font-medium text-[#0b5cbe] bg-blue-50 px-2 py-0.5 rounded">
            {product.brand}
          </span>
          <span className="text-gray-400">{product.category}</span>
        </div>

        <Link href={`/product/${product.id}`} className="block">
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#0b5cbe] transition-colors mb-1 line-clamp-1">
            {product.title}
          </h3>
        </Link>

        {/* Rating Stars (Optional Feature) */}
        <div className="flex items-center gap-1 my-1.5 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? 'fill-amber-400 text-amber-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs font-semibold text-gray-700 ml-1">
            {product.rating}
          </span>
          <span className="text-[11px] text-gray-400">({product.reviewCount})</span>
        </div>

        <p className="text-lg font-bold text-gray-900 mb-4">
          ${product.price}
        </p>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={added}
        className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm ${
          added
            ? 'bg-emerald-600 text-white'
            : 'bg-[#0b5cbe] hover:bg-[#094aa0] text-white active:scale-[0.98]'
        }`}
      >
        {added ? (
          <>
            <Check className="w-4 h-4" /> Added!
          </>
        ) : (
          <>
            <ShoppingBag className="w-4 h-4 opacity-80" /> Add to Cart
          </>
        )}
      </button>
    </div>
  );
};
