# AmaClone

AmaClone is a front-end web development project that recreates the core shopping experience of Amazon using HTML, CSS, and JavaScript. This project demonstrates how to build a responsive e-commerce website with multiple pages and dynamic content.

## Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop screens
- **Product Catalog:** 100+ products across multiple categories with detailed information
- **Dynamic Content:** All product listings and details are loaded from JavaScript data
- **Shopping Cart:** Add, remove, and update quantities with persistent storage
- **Search & Filtering:** Find products by category, price, rating, and more
- **Interactive UI:** Product image galleries, tabs, and dynamic pricing

## Pages

- **Homepage (`index.html`):** Featured products, categories, and deals
- **Product Detail (`product.html`):** Detailed product information with image gallery
- **Shopping Cart (`cart.html`):** View and manage cart items
- **Products Page (`products-page.html`):** Browse all products with filtering options

## Technologies Used

- **HTML5:** Semantic markup for structure
- **CSS3:** Modern styling with Flexbox and Grid layouts
- **JavaScript:** Dynamic content loading and interactivity
- **LocalStorage:** Persistent shopping cart data
- **Responsive Design:** Media queries for all device sizes
- **Font Awesome:** Icons for enhanced user interface

## Project Structure

```
AmaClone/
├── index.html          # Homepage
├── product.html        # Product detail page
├── cart.html           # Shopping cart page
├── products-page.html  # Products browsing page
├── styles.css          # Main stylesheet
├── script.js           # Main JavaScript functionality
├── products.js         # Product database (first half)
├── products2.js        # Product database (second half)
└── README.md           # Project documentation
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Browse products, add items to cart, and explore the site

## Notes

- This is a front-end only implementation with no actual backend or payment processing
- Product data is stored in JavaScript files rather than fetched from a server
- The shopping cart persists using localStorage, but would connect to a database in a real implementation

## Disclaimer

This project is for educational purposes only. The "AmaClone" name and design are used to demonstrate web development skills and are not affiliated with Amazon. 