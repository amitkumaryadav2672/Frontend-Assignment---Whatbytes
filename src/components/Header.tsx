'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export const Header: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [isHydrated, setIsHydrated] = useState(false);
  
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);

    const params = new URLSearchParams(searchParams.toString());
    if (val.trim()) {
      params.set('search', val);
    } else {
      params.delete('search');
    }
    router.push(`/?${params.toString()}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery.trim()) {
      params.set('search', searchQuery);
    } else {
      params.delete('search');
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <header className="bg-[#0b5cbe] text-white py-3.5 px-4 sm:px-8 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 hover:opacity-95 transition-opacity">
          <span>Logo</span>
        </Link>

        {/* Search Bar */}
        <form 
          onSubmit={handleSearchSubmit}
          className="flex-1 max-w-md relative mx-2 sm:mx-6"
        >
          <div className="relative flex items-center w-full">
            <Search className="absolute left-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="w-full bg-white text-gray-800 text-sm pl-10 pr-4 py-2 rounded-full border-none outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 transition-all shadow-inner"
            />
          </div>
        </form>

        {/* Actions (Cart & Profile) */}
        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="flex items-center gap-2 bg-[#094aa0] hover:bg-[#073c82] text-white px-4 py-2 rounded-md font-medium text-sm transition-all shadow-sm relative group"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Cart</span>
            {isHydrated && totalItems > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center -top-1.5 -right-1.5 absolute animate-pulse shadow-md">
                {totalItems}
              </span>
            )}
          </Link>

          <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-[#094aa0] hover:bg-[#073c82] text-white cursor-pointer transition-colors" title="Account Profile">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};
