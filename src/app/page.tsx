'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { SidebarFilters } from '@/components/SidebarFilters';
import { ProductCard } from '@/components/ProductCard';
import { FeaturedProductCard } from '@/components/FeaturedProductCard';
import { Footer } from '@/components/Footer';
import { PRODUCTS } from '@/data/products';
import { SearchX } from 'lucide-react';
import Link from 'next/link';

function ProductCatalogContent() {
  const searchParams = useSearchParams();

  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || 'All';
  const brand = searchParams.get('brand') || 'All';
  const price = searchParams.get('price') ? Number(searchParams.get('price')) : 1000;

  // Filter products by category, brand, price, and search query
  const filteredProducts = PRODUCTS.filter((product) => {
    // Category match
    const matchCategory = category === 'All' || product.category === category;
    
    // Brand match (Optional Filter)
    const matchBrand = brand === 'All' || product.brand.toLowerCase() === brand.toLowerCase();

    // Price match
    const matchPrice = product.price <= price;

    // Search query match
    const matchSearch = search.trim() === '' || 
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchBrand && matchPrice && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#f3f6fa] flex flex-col justify-between font-sans">
      <div>
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sidebar Filters */}
            <SidebarFilters />

            {/* Main Product Section */}
            <section className="flex-1 w-full">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-extrabold text-[#092548] tracking-tight">
                  Product Listing
                </h1>
                <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                </span>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm my-4">
                  <div className="w-16 h-16 bg-blue-50 text-[#0b5cbe] rounded-full flex items-center justify-center mx-auto mb-4">
                    <SearchX className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                    We couldn&apos;t find any products matching your current search or filter criteria. Try adjusting your price range or clearing filters.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-[#0b5cbe] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#094aa0] transition-colors shadow-sm"
                  >
                    Clear All Filters
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) =>
                    product.isFeatured ? (
                      <FeaturedProductCard key={product.id} product={product} />
                    ) : (
                      <ProductCard key={product.id} product={product} />
                    )
                  )}
                </div>
              )}
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f3f6fa] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0b5cbe]"></div>
      </div>
    }>
      <ProductCatalogContent />
    </Suspense>
  );
}
