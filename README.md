
#  Interactive Product Explorer

A modern, high-performance **React.js** application that allows users to browse, search, and explore products in real-time. Built with a focus on clean architecture, responsive design, and seamless user experience.

##  Live Demo

**Check out the live app here:** [https://data-explorer-five.vercel.app](https://www.google.com/search?q=https://data-explorer-five.vercel.app)

-----

##  Features

  * **Real-time Search:** Instantly filter products as you type using an optimized client-side search logic.
  * **Fully Responsive:** Designed with a "Mobile-First" approach, ensuring a perfect view on desktops, tablets, and smartphones.
  * **Modern UI:** Dark-themed, sleek card interface built with **Tailwind CSS v4**.
  * **State Management:** Efficient handling of API data using **Custom React Hooks** (`useProducts`).
  * **UX Focused:** Includes loading states and graceful error handling for a smooth user journey.

-----

##  Tech Stack

  * **Frontend:** React.js (Vite)
  * **Styling:** Tailwind CSS v4 (Latest)
  * **API:** [DummyJSON API](https://dummyjson.com/)
  * **Deployment:** Vercel
  * **Version Control:** Git & GitHub

-----

##  Project Structure

```text
src/
 ├── components/       # Reusable UI components (SearchBar, ProductCard)
 ├── hooks/            # Custom logic/API fetching (useProducts)
 ├── App.jsx           # Main application logic
 ├── main.jsx          # Entry point
 └── index.css         # Tailwind global styles
```

-----

##  Setup & Installation

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Krishna0812478/data-explorer.git
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd data-explorer
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```

-----

##  Architectural Decisions

  **Custom Hooks:** Separated the API logic into `useProducts.js` to keep the UI components clean and follow the **DRY (Don't Repeat Yourself)** principle.
  **Tailwind v4:** Utilized the latest version of Tailwind for faster builds and modern CSS capabilities.
  **Component-Based:** Each UI element is a standalone component, making the app highly maintainable and scalable.

-----

##  Author

**Krishna**

  * Aspiring Frontend Developer
* [GitHub Profile](https://github.com/Krishna0812478)
-----
