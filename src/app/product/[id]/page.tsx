'use client';

import React, { useState, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PRODUCTS } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';
import { Star, ChevronLeft, Minus, Plus, ShoppingCart, Check, ShieldCheck, Truck, RefreshCw, AlertCircle } from 'lucide-react';

function ProductDetailContent() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;

  const product = PRODUCTS.find((p) => p.id === productId);

  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [userReviewRating, setUserReviewRating] = useState(5);
  const [userReviewComment, setUserReviewComment] = useState('');
  const [reviewsList, setReviewsList] = useState(product?.reviews || []);

  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f3f6fa] flex flex-col justify-between font-sans">
        <div>
          <Header />
          <main className="max-w-4xl mx-auto px-4 py-16 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
              <p className="text-gray-500 text-sm mb-6">
                Sorry, the product you are looking for does not exist or has been removed.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#0b5cbe] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#094aa0] transition-colors shadow-sm"
              >
                Back to Product Listing
              </Link>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.additionalImages || [product.image];
  const activeImage = selectedImage || product.image;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userReviewComment.trim()) return;

    const newReview = {
      id: `rev-${Date.now()}`,
      userName: 'Verified Buyer',
      rating: userReviewRating,
      date: new Date().toISOString().split('T')[0],
      comment: userReviewComment
    };

    setReviewsList([newReview, ...reviewsList]);
    setUserReviewComment('');
  };

  return (
    <div className="min-h-screen bg-[#f3f6fa] flex flex-col justify-between font-sans">
      <div>
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          {/* Breadcrumb & Back */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#0b5cbe] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to products
            </button>
            <div className="text-xs text-gray-500">
              <Link href="/" className="hover:underline">Home</Link> &gt; <span className="text-gray-700">{product.category}</span> &gt; <span className="font-semibold text-gray-900">{product.title}</span>
            </div>
          </div>

          {/* Main Product Detail Grid */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            {/* Image Section (Left) */}
            <div className="flex flex-col gap-4">
              <div className="bg-gray-50 rounded-2xl p-6 h-[380px] sm:h-[450px] flex items-center justify-center relative overflow-hidden border border-gray-100">
                <Image
                  src={activeImage}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                />
              </div>

              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-20 h-20 rounded-xl p-2 bg-gray-50 border-2 transition-all flex-shrink-0 flex items-center justify-center ${
                        activeImage === img ? 'border-[#0b5cbe] ring-2 ring-blue-100' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image src={img} alt={`Thumbnail ${idx}`} width={70} height={70} className="max-h-full max-w-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Section (Right) */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0b5cbe] bg-blue-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Brand: <strong className="text-gray-800">{product.brand}</strong></span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                  {product.title}
                </h1>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviewCount} customer reviews)</span>
                </div>

                <div className="mb-6 flex items-baseline gap-3">
                  <span className="text-3xl font-black text-[#0b5cbe]">${product.price}</span>
                  <span className="text-sm text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-md">
                    In Stock & Ready to Ship
                  </span>
                </div>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {product.description}
                </p>

                {product.features && (
                  <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Key Highlights</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0b5cbe]" /> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-800">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-gray-50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 text-sm font-bold text-gray-900 bg-white min-w-[40px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={added}
                    className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all shadow-md ${
                      added
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#0b5cbe] hover:bg-[#094aa0] text-white active:scale-[0.99]'
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-5 h-5" /> Added ({quantity}) to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" /> Add to Cart
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      handleAddToCart();
                      router.push('/cart');
                    }}
                    className="px-6 py-3.5 bg-gray-900 hover:bg-black text-white font-bold rounded-xl text-base transition-colors"
                  >
                    Buy Now
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 text-center text-xs text-gray-500 border-t border-gray-100">
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-4 h-4 text-[#0b5cbe]" /> Free Express Shipping
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#0b5cbe]" /> 2-Year Warranty
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <RefreshCw className="w-4 h-4 text-[#0b5cbe]" /> 30-Day Easy Returns
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews & Ratings</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 h-fit">
                <h4 className="text-base font-bold text-gray-900 mb-3">Write a Review</h4>
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">Rating</label>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setUserReviewRating(star)}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Star className={`w-5 h-5 ${star <= userReviewRating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">Your Review</label>
                    <textarea
                      rows={3}
                      value={userReviewComment}
                      onChange={(e) => setUserReviewComment(e.target.value)}
                      placeholder="Share your thoughts about this product..."
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#0b5cbe] bg-white text-gray-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#0b5cbe] hover:bg-[#094aa0] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                  >
                    Submit Review
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2 space-y-4">
                {reviewsList.length === 0 ? (
                  <p className="text-gray-500 text-sm italic">No reviews yet for this product. Be the first to leave one!</p>
                ) : (
                  reviewsList.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0b5cbe] font-bold text-xs flex items-center justify-center">
                            {rev.userName[0]}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-gray-900 block">{rev.userName}</span>
                            <span className="text-[11px] text-gray-400">{rev.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed">{rev.comment}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f3f6fa] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0b5cbe]"></div>
      </div>
    }>
      <ProductDetailContent />
    </Suspense>
  );
}
