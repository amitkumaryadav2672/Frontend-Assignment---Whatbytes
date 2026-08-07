'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { RotateCcw } from 'lucide-react';

export const SidebarFilters: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category') || 'All';
  const currentBrand = searchParams.get('brand') || 'All';
  const currentMaxPrice = searchParams.get('price') ? Number(searchParams.get('price')) : 1000;
  
  const [selectedCategory, setSelectedCategory] = useState(currentCategory);
  const [selectedBrand, setSelectedBrand] = useState(currentBrand);
  const [maxPrice, setMaxPrice] = useState(currentMaxPrice);
  const [customPriceInput, setCustomPriceInput] = useState(searchParams.get('customPrice') || '5000');

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'All');
    setSelectedBrand(searchParams.get('brand') || 'All');
    if (searchParams.get('price')) {
      setMaxPrice(Number(searchParams.get('price')));
    }
  }, [searchParams]);

  const updateFilters = (newCategory: string, newBrand: string, newMaxPrice: number, customPrice?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (newCategory && newCategory !== 'All') {
      params.set('category', newCategory);
    } else {
      params.delete('category');
    }

    if (newBrand && newBrand !== 'All') {
      params.set('brand', newBrand);
    } else {
      params.delete('brand');
    }

    if (newMaxPrice < 1000) {
      params.set('price', newMaxPrice.toString());
    } else {
      params.delete('price');
    }

    if (customPrice && customPrice !== '5000') {
      params.set('customPrice', customPrice);
    }

    router.push(`/?${params.toString()}`);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    updateFilters(cat, selectedBrand, maxPrice, customPriceInput);
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    updateFilters(selectedCategory, brand, maxPrice, customPriceInput);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setMaxPrice(val);
    updateFilters(selectedCategory, selectedBrand, val, customPriceInput);
  };

  const handleCustomPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomPriceInput(val);
    updateFilters(selectedCategory, selectedBrand, maxPrice, val);
  };

  const handleReset = () => {
    setSelectedCategory('All');
    setSelectedBrand('All');
    setMaxPrice(1000);
    setCustomPriceInput('5000');
    router.push('/');
  };

  const categories = ['All', 'Electronics', 'Clothing', 'Home'];
  const brands = [
    'All',
    'SportFlex',
    'AudioMax',
    'UrbanGear',
    'TechPulse',
    'LuxeVision',
    'OpticSnap',
    'ThreadCraft',
    'NovaTech',
    'NordicLiving',
    'ArtisanClay'
  ];

  return (
    <aside className="w-full lg:w-64 space-y-6 flex-shrink-0">
      {/* Blue Main Filter Card */}
      <div className="bg-[#0b5cbe] text-white p-6 rounded-2xl shadow-md">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold tracking-tight">Filters</h2>
          {(selectedCategory !== 'All' || selectedBrand !== 'All' || maxPrice < 1000) && (
            <button
              onClick={handleReset}
              className="text-xs bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded flex items-center gap-1 transition-colors"
              title="Reset Filters"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          )}
        </div>

        {/* Category Radio Group */}
        <div className="mb-6">
          <h3 className="text-base font-semibold mb-3">Category</h3>
          <div className="space-y-2.5">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-3 cursor-pointer group text-sm select-none"
              >
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="main-category"
                    checked={selectedCategory === cat}
                    onChange={() => handleCategoryChange(cat)}
                    className="appearance-none w-4 h-4 rounded-full border-2 border-white/80 checked:border-white bg-transparent checked:bg-white transition-all cursor-pointer"
                  />
                  {selectedCategory === cat && (
                    <div className="w-2 h-2 rounded-full bg-[#0b5cbe] absolute pointer-events-none" />
                  )}
                </div>
                <span className={`transition-colors ${selectedCategory === cat ? 'font-bold text-white' : 'text-white/90 group-hover:text-white'}`}>
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand Filter (Optional Requirement) */}
        <div className="mb-6">
          <h3 className="text-base font-semibold mb-2">Brand (Optional)</h3>
          <select
            value={selectedBrand}
            onChange={handleBrandChange}
            className="w-full bg-white/10 text-white text-xs p-2.5 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
          >
            {brands.map((b) => (
              <option key={b} value={b} className="bg-[#0b5cbe] text-white">
                {b === 'All' ? 'All Brands' : b}
              </option>
            ))}
          </select>
        </div>

        {/* Price Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-base font-semibold">Price</h3>
            <span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded text-white">
              Max: ${maxPrice}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={maxPrice}
            onChange={handlePriceChange}
            className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
          />

          <div className="flex justify-between text-xs font-semibold mt-2 text-white/90">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </div>

      {/* Secondary White Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-gray-800">
        <h3 className="text-lg font-bold mb-4 text-gray-900">Cacyroy</h3>
        <div className="space-y-2.5 mb-6">
          {categories.map((cat) => (
            <label
              key={`sec-${cat}`}
              className="flex items-center gap-3 cursor-pointer group text-sm text-gray-700 select-none"
            >
              <input
                type="radio"
                name="sec-category"
                checked={selectedCategory === cat}
                onChange={() => handleCategoryChange(cat)}
                className="w-4 h-4 text-[#0b5cbe] focus:ring-[#0b5cbe] border-gray-300 cursor-pointer"
              />
              <span className={selectedCategory === cat ? 'font-semibold text-[#0b5cbe]' : 'group-hover:text-gray-900'}>
                {cat}
              </span>
            </label>
          ))}
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-gray-800">Price</h4>
          <div className="relative">
            <input
              type="number"
              value={customPriceInput}
              onChange={handleCustomPriceChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#0b5cbe] focus:ring-1 focus:ring-[#0b5cbe] text-gray-800"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
