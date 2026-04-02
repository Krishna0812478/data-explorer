
# ProStore - Premium Interactive Product Explorer

A high-performance, modern **React.js** application designed for a seamless e-commerce browsing experience. Built with a focus on clean architecture, glassmorphic UI, and real-time data manipulation.

---

##  Live Demo & Walkthrough
** Live App:** [https://data-explorer-five.vercel.app](https://data-explorer-five.vercel.app)  

### Project Walkthrough
** Watch the live demonstration of the ProStore Dashboard: **[https://drive.google.com/file/d/17UELPNAIKA1jqIf1WiaohdIyBb29HCkk/view?usp=sharing](https://drive.google.com/file/d/17UELPNAIKA1jqIf1WiaohdIyBb29HCkk/view?usp=sharing)
---

## Key Features (The "Pro" Edge)

* ** Glassmorphic Navbar:** Sticky top navigation with a personalized user profile ("Welcome, Krishna") and "Verified Dev" status.
* ** Smart Search Engine:** Instant, real-time product filtering as you type, optimized for performance.
* ** Advanced Sorting:** Dynamic sorting logic allowing users to toggle between "Price: Low to High" and "Price: High to Low".
* ** Business Analytics UI:** * **Discount Badges:** Real-time percentage-off calculation displayed on product thumbnails.
    * **Price Comparisons:** Side-by-side view of original vs. discounted prices.
    * **Stock Status:** Instant visibility of inventory levels (In Stock / Out of Stock).
* ** Interactive UX:** * **Add to Cart Logic:** State-driven feedback (Success/Added states) on user interaction.
    * **Quick View:** Professional "Eye" icon for future modal integration.
* **Modern Styling:** Built with **Tailwind CSS v4**, utilizing custom animations, gradients, and a sleek dark-mode aesthetic.

---

## Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS v4 (Latest)
* **Logic:** Custom React Hooks (`useProducts`) for clean API abstraction.
* **API:** [DummyJSON API](https://dummyjson.com/)
* **Deployment:** Vercel (CI/CD integrated)

---

## Project Structure

```text
src/
 ├── components/       # Reusable UI (SearchBar, ProductCard, Navbar)
 ├── hooks/            # Custom API fetching logic (useProducts.js)
 ├── App.jsx           # Main Dashboard logic & State Management
 ├── main.jsx          # Entry point
 └── index.css         # Tailwind directives & Global styles
```

---

## Setup & Installation

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Krishna0812478/data-explorer.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start Dev Server:**
   ```bash
   npm run dev
   ```

---

## Architectural Decisions

* **Separation of Concerns:** Isolated API logic into `useProducts` to ensure the UI stays "dumb" and focus remains on rendering.
* **User-Centric States:** Integrated specific UIs for **Loading** (Animated Spinners), **Error** (Retry mechanisms), and **Empty States** (No results found).
* **Responsive Scalability:** Used a Mobile-First approach with Tailwind's grid system to ensure 10/10 layout on all devices.

---

## Author
**Krishna**
* **Role:** Aspiring Frontend Developer
* **GitHub:** (https://github.com/Krishna0812478)

---
