'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useCartStore } from '@/store/useCartStore';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

function CartContent() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCartStore();
  const [isHydrated, setIsHydrated] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const subtotal = isHydrated ? getTotalPrice() : 0;
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 15;
  const discountAmount = (subtotal * discount) / 100;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'WHATBYTES') {
      setDiscount(20);
      setPromoMessage('20% discount applied!');
    } else if (promoCode.trim()) {
      setDiscount(0);
      setPromoMessage('Invalid promo code. Try "WHATBYTES".');
    }
  };

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#f3f6fa] flex flex-col justify-between font-sans">
      <div>
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <h1 className="text-3xl font-extrabold text-[#092548] tracking-tight mb-8">
            Shopping Cart
          </h1>

          {checkoutSuccess ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-xl mx-auto my-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
              <p className="text-gray-600 text-sm mb-6">
                Thank you for your order! Your payment has been processed and your items will be dispatched shortly.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#0b5cbe] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#094aa0] transition-colors shadow-sm"
              >
                Continue Shopping <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : !isHydrated || items.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm my-4">
              <div className="w-16 h-16 bg-blue-50 text-[#0b5cbe] rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                Looks like you haven&apos;t added any products to your cart yet. Explore our top products and find great deals!
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#0b5cbe] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#094aa0] transition-colors shadow-sm"
              >
                Start Shopping <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Added Products List */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900">
                      Cart Items ({items.reduce((acc, i) => acc + i.quantity, 0)})
                    </h2>
                    <button
                      onClick={clearCart}
                      className="text-xs text-red-500 hover:text-red-700 font-semibold transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {items.map(({ product, quantity }) => (
                      <div key={product.id} className="py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <Link href={`/product/${product.id}`} className="w-20 h-20 bg-gray-50 rounded-xl p-2 flex-shrink-0 flex items-center justify-center border border-gray-100">
                            <Image src={product.image} alt={product.title} width={70} height={70} className="max-h-full max-w-full object-contain" />
                          </Link>
                          <div>
                            <Link href={`/product/${product.id}`} className="text-base font-bold text-gray-900 hover:text-[#0b5cbe] transition-colors line-clamp-1">
                              {product.title}
                            </Link>
                            <p className="text-xs text-gray-500 mb-1">Category: {product.category}</p>
                            <p className="text-sm font-extrabold text-[#0b5cbe]">${product.price}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 py-1.5 text-xs font-bold text-gray-900 bg-white min-w-[32px] text-center">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="text-right min-w-[70px]">
                            <p className="text-base font-bold text-gray-900">
                              ${product.price * quantity}
                            </p>
                          </div>

                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Price Summary */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 space-y-6">
                <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">
                  Order Summary
                </h2>

                <form onSubmit={handleApplyPromo} className="space-y-2">
                  <label className="text-xs font-semibold text-gray-700 block">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="e.g. WHATBYTES"
                      className="flex-1 text-xs px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#0b5cbe] uppercase"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p className={`text-xs font-medium ${discount > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                      {promoMessage}
                    </p>
                  )}
                </form>

                <div className="space-y-3 text-sm border-t border-b border-gray-100 py-4 text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Discount ({discount}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold text-gray-900">
                      {shipping === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${shipping}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-base font-bold text-gray-900">Total Price</span>
                  <span className="text-2xl font-black text-[#0b5cbe]">${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-[#0b5cbe] hover:bg-[#094aa0] text-white font-extrabold text-base rounded-xl transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Guaranteed 256-Bit SSL Encryption
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f3f6fa] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0b5cbe]"></div>
      </div>
    }>
      <CartContent />
    </Suspense>
  );
}
