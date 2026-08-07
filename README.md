# Whatbytes Frontend Developer Intern Assignment

A responsive E-Commerce application built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Zustand** for state management.

Built by **Amit Kumar Yadav** for the Whatbytes Frontend Developer Intern assignment.

---

## 🔗 Live Demo & Repository

* **Live Demo (Vercel)**: [https://whatbytes-assignment.vercel.app](https://whatbytes-assignment.vercel.app)
* **GitHub Repository**: [https://github.com/amitkumaryadav2672/WhatBytes](https://github.com/amitkumaryadav2672/WhatBytes)

---

## 💡 Overview & Features

This application follows the design specifications and requirements provided in the assignment document. It includes full URL search state synchronization, client-side cart management, responsive grid layouts, and dynamic product routes.

### 1. Home Page & Product Listing (`/`)
* **Header**: Deep blue header matching the design mockup with a logo, real-time search bar, and cart item counter badge.
* **Search & Filters**: Search bar and sidebar filters (category options, price slider, and brand filter) that sync directly with URL parameters (`?search=...&category=...&price=...`).
* **Responsive Grid**: Displays products in 3 columns on desktop, 2 on tablet, and 1 on mobile devices.
* **Product Cards**: Includes cover images, titles, prices, star ratings, brand badges, and an interactive "Add to Cart" button with instant feedback.
* **Smartphone Featured Card**: Prominent callout card matching the assignment design mockup.

### 2. Product Detail Page (`/product/[id]`)
* **Dynamic Routes**: Built using Next.js App Router (`app/product/[id]/page.tsx`).
* **Gallery & Info**: Interactive thumbnail switcher, in-stock badge, description, and highlights.
* **Purchase Actions**: Quantity selector (`-` / `+`), "Add to Cart", and "Buy Now" buttons.
* **Customer Reviews**: Rating summary and review form allowing users to submit feedback.
* **404 Fallback**: Displays a clean "Product Not Found" page for invalid product IDs.

### 3. Shopping Cart Page (`/cart`)
* **Cart Management**: Increase/decrease quantities or remove items from the cart.
* **Promo Code**: Enter promo code `WHATBYTES` to apply a 20% discount.
* **Order Summary**: Subtotal, discount calculations, free shipping threshold, and total price.
* **State Persistence**: Uses Zustand with `localStorage` persistence so cart items stay saved after page reloads.

---

## 🛠️ Tech Stack

* **Framework**: Next.js 15 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **State Management**: Zustand
* **Icons**: Lucide React (`lucide-react`)

---

## 💻 Running Locally

To run this project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amitkumaryadav2672/WhatBytes.git
   cd WhatBytes
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**:
   Open [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Building & Verification

```bash
# Type checking
npx tsc --noEmit

# Production build
npm run build
```
