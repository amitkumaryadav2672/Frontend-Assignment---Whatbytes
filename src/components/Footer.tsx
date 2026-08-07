'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#04244c] text-white pt-12 pb-8 px-4 sm:px-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Column 1: Filters */}
        <div>
          <h4 className="text-lg font-bold mb-4 tracking-wide text-white">Filters</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/?category=All" className="hover:text-white transition-colors">
                All
              </Link>
            </li>
            <li>
              <Link href="/?category=Electronics" className="hover:text-white transition-colors">
                Electronics
              </Link>
            </li>
            <li>
              <Link href="/?category=Clothing" className="hover:text-white transition-colors">
                Clothing
              </Link>
            </li>
            <li>
              <Link href="/?category=Home" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: About Us */}
        <div>
          <h4 className="text-lg font-bold mb-4 tracking-wide text-white">About Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div>
          <h4 className="text-lg font-bold mb-4 tracking-wide text-white">Follow Us</h4>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-[#0b5cbe] hover:bg-blue-600 flex items-center justify-center text-white transition-all shadow"
            >
              <Facebook className="w-4 h-4 fill-white" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-[#0b5cbe] hover:bg-blue-600 flex items-center justify-center text-white transition-all shadow"
            >
              <Twitter className="w-4 h-4 fill-white" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#0b5cbe] hover:bg-blue-600 flex items-center justify-center text-white transition-all shadow"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-blue-900/60 pt-6 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2024 American. All rights reserved.</p>
        <p>Frontend Developer Assignment - Whatbytes</p>
      </div>
    </footer>
  );
};
