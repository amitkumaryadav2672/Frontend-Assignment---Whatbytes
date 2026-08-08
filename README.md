# Whatbytes Frontend Developer Intern Assignment

A responsive E-Commerce application built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Zustand** for state management.

Built by **Amit Kumar Yadav** for the Whatbytes Frontend Developer Intern assignment.

---

## 🔗 Live Demo & Repository

* **Live Demo (Vercel)**: [https://frontend-assignment-whatbytes-lovat.vercel.app/](https://frontend-assignment-whatbytes-lovat.vercel.app/)
* **GitHub Repository**: [https://github.com/amitkumaryadav2672/Frontend-Assignment---Whatbytes](https://github.com/amitkumaryadav2672/Frontend-Assignment---Whatbytes)

---

## 📖 Project Overview

In this project, I built a complete frontend e-commerce store based on the exact design mockups and requirements provided in the assignment description. My main goal was to deliver a responsive, performant, and visual experience while making sure every feature requested in the assignment image was fully implemented.

The app is built using **Next.js 15 App Router** and styled with **Tailwind CSS**. State management for the shopping cart is handled using **Zustand** with persistent storage in `localStorage`. Search and filter choices are synced with browser URL query parameters so users can share or bookmark filtered links.

---

## ✨ Features Implemented

Here is a detailed walkthrough of every feature I built across the application:

### 1. Home Page & Product Listing (`/`)

* **Header Navigation**:
  * **Brand Logo**: Positioned on the top left, linking back to the homepage.
  * **Real-time Search Bar**: Positioned in the center. As you type, it filters products dynamically by title, category, brand, and description while updating the URL (`?search=...`).
  * **Cart Action & Badge**: Displays the total count of items in the cart in a red notification badge (with client hydration safety to avoid SSR mismatch).
  * **User Profile**: User avatar icon on the right.

* **Sidebar Filters (Left)**:
  * **Category Filter**: Filter products using radio options (*All*, *Electronics*, *Clothing*, *Home*). Selecting a category updates the URL (`?category=...`).
  * **Price Range Slider**: An interactive range slider ($0 to $1000) allowing users to set a maximum budget. Updates the URL (`?price=...`).
  * **Brand Filter (Optional Requirement)**: A dropdown menu allowing users to filter items by specific brands like *SportFlex*, *AudioMax*, *UrbanGear*, *TechPulse*, *LuxeVision*, and more. Updates the URL (`?brand=...`).
  * **Dual Filter Cards**: Created both the primary blue filter container and the secondary white card to match the exact design mockup screenshot.
  * **One-Click Reset**: A reset button that clears active search query, category, price, and brand filters back to default.

* **Product Grid (Right)**:
  * **Responsive Grid Layout**: Displays 3 columns on desktop screens, 2 columns on tablets, and 1 column on mobile devices.
  * **Standard Product Cards**: Each card displays a product image, title, price tag, brand pill, star rating score, review count, and a quick "Add to Cart" button with instant visual feedback ("Added!").
  * **Featured Smartphone Card**: A dedicated callout card for featured products (like the Smartphone) that spans 2 columns on desktop matching the assignment mockup layout. It displays a larger image preview, full product description, rating stars, category tag, and a wide CTA button.

* **Empty State Handling**:
  * If no products match the user's active filter or search criteria, a "No products found" message is displayed along with a "Clear All Filters" button.

* **Footer**:
  * Displays copyright information, links, and social media icon buttons (Facebook, Twitter, Instagram).

---

### 2. Dynamic Product Detail Page (`/product/[id]`)

* **Dynamic Next.js Routing**: Implemented using `/product/[id]/page.tsx` to handle individual product pages dynamically.
* **Breadcrumb & Navigation**: Clickable breadcrumb path (`Home > Category > Product Title`) and a "Back to products" button.
* **Product Image Carousel / Thumbnail Switcher**: Displays a main preview image with a row of interactive thumbnails below, allowing users to switch view angles.
* **Product Details**: Title, price tag, brand name, category badge, in-stock availability indicator ("In Stock & Ready to Ship"), full description, and bulleted key highlight features.
* **Quantity Selector**: `-` and `+` buttons allowing users to select their desired quantity before adding to the cart.
* **Purchase Buttons**: Includes an "Add to Cart" button and a direct "Buy Now" button that routes straight to the cart page.
* **Interactive Customer Reviews Section**:
  * Lists existing customer reviews with star ratings, reviewer initial avatars, timestamps, and comments.
  * Includes a "Write a Review" form where users can select 1–5 stars, write a comment, and submit new reviews live.
* **404 Fallback**: Displays a friendly "Product Not Found" screen if an invalid product ID is entered in the URL.

---

### 3. Shopping Cart Page (`/cart`)

* **Cart Item List**: Displays all added items with image thumbnails, titles, categories, individual unit prices, line item total price, and direct links to product pages.
* **Quantity Controls**: Adjust item quantities (`+` or `-`) directly from the cart page. Setting quantity to `0` removes the item.
* **Remove Item Option**: Trash icon button to instantly remove an item from the cart.
* **Promo Code Feature**: Users can enter the promo code **`WHATBYTES`** to apply a 20% discount to their order subtotal.
* **Order Price Summary**: Displays a clear breakdown of:
  * **Subtotal**
  * **Discount Amount** (when promo code is active)
  * **Shipping Fee** (Calculates FREE shipping for orders over $150, or $15 flat rate otherwise)
  * **Total Price**
* **Checkout Flow**: Clicking "Proceed to Checkout" opens an order confirmation state with an animated success icon and automatically resets the cart.

---

### 4. State Management & Logic

* **URL State Synchronization**: Search query, category selection, price range, and brand filters are all encoded in browser URL search params using Next.js `useSearchParams` and `useRouter`.
* **Persistent Cart State**: Cart data is managed using **Zustand** paired with `localStorage` (`whatbytes-cart-storage`), ensuring user cart items remain saved even after refreshing or reopening the browser.
* **Hydration Safety**: Handled SSR hydration carefully to prevent layout shift or React mismatch errors on cart badges and saved items.

---

## 🛠️ Tech Stack & Libraries

* **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **State Management**: [Zustand](https://github.com/pmndrs/zustand)
* **Icons**: [Lucide React](https://lucide.react.dev/)

---

## 🚀 Running the Project Locally

Follow these steps to set up and run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/amitkumaryadav2672/Frontend-Assignment---Whatbytes.git
cd Frontend-Assignment---Whatbytes
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## ⚙️ Building for Production

To run static type checking and build the production bundle:

```bash
# Type check
npx tsc --noEmit

# Production build
npm run build

# Start production server locally
npm run start
```

---

## 📦 Deployment

This project is deployed live on **Vercel**:
👉 **[https://frontend-assignment-whatbytes-lovat.vercel.app/](https://frontend-assignment-whatbytes-lovat.vercel.app/)**

