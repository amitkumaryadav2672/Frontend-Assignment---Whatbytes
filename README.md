# WhatBytes Frontend Developer Assignment

A modern, responsive, pixel-matched E-Commerce web application built using **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Zustand**, and **Lucide Icons**.

---

## 🔗 Project Links

* **GitHub Repository**: [https://github.com/amitkumaryadav2672/WhatBytes](https://github.com/amitkumaryadav2672/WhatBytes)
* **Live Vercel Deployment**: [https://whatbytes-assignment.vercel.app](https://whatbytes-assignment.vercel.app) *(Deploy on Vercel to activate live URL)*

---

## 🌟 Key Features

1. **Header Navigation**:
   * Brand logo linked to home.
   * Real-time search bar with instant URL parameter synchronization (`?search=...`).
   * Dynamic Cart action button with an animated item count badge.

2. **Sidebar Filters**:
   * **Category Filter**: Radio options (`All`, `Electronics`, `Clothing`, `Home`).
   * **Price Range Slider**: Dual-bound slider (`$0` to `$1000`) with live numeric feedback.
   * **Brand Filter**: Dropdown selector supporting multi-brand filtering (`SportFlex`, `AudioMax`, `NovaTech`, etc.).
   * **Reset Action**: One-click reset to restore default catalog view.

3. **Product Listing Grid (`/`)**:
   * Responsive layout (3 columns on desktop, 2 on tablet, 1 on mobile).
   * **Product Cards**: Cover image with hover zoom effect, bold title, formatted price, star ratings (`★ 4.7`), and interactive `Add to Cart` feedback button.
   * **Featured Smartphone Callout Card**: Dedicated callout design featuring 5-star ratings, category badge, description snippet, and full-width CTA.
   * **Empty State View**: Friendly graphic with "Clear All Filters" button when search criteria yield 0 results.

4. **Product Detail Page (`/product/[id]`)**:
   * Dynamic Next.js routing (`/product/[id]`).
   * Interactive thumbnail image carousel switcher.
   * In-stock status & key highlights list.
   * Quantity selector (`-`, input, `+`), `Add to Cart`, and `Buy Now` actions.
   * Customer review list with star ratings + interactive review form.
   * Custom **404 Product Not Found** fallback page.

5. **Shopping Cart Page (`/cart`)**:
   * Itemized cart list with quantity update controls and item deletion.
   * Promo code discount system (Enter code **`WHATBYTES`** for 20% off).
   * Order summary (Subtotal, Discount, Shipping, Total Price).
   * Checkout confirmation modal/flow.
   * **State Persistence**: Cart items persist across browser reloads using Zustand and `localStorage`.

6. **Footer**:
   * Deep navy background (`#04244c`), category quick links, contact info, social media icons (Facebook, Twitter, Instagram), and copyright details (`© 2024 American`).

---

## 🛠️ Tech Stack & Dependencies

* **Framework**: Next.js 15.5+ (App Router)
* **Language**: TypeScript 5.7+
* **Styling**: Tailwind CSS 4.0
* **State Management**: Zustand 5.0 (with `persist` middleware)
* **Icons**: Lucide React (`lucide-react`)
* **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`

---

## 🚀 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amitkumaryadav2672/WhatBytes.git
   cd WhatBytes
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧪 Build & Type Verification

```bash
# Type check
npx tsc --noEmit

# Production build
npm run build
```

---

## 📄 License

This project is created for the Frontend Developer Intern assignment at Whatbytes.
