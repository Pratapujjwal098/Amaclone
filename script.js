// Main JavaScript for AmaClone

// Combine all product arrays
let allProducts = [];
try {
    // First try to get products from both Indian files
    allProducts = [...productsIndia, ...productsIndia2];
} catch (e) {
    // If productsIndia2 isn't loaded, just use productsIndia
    try {
        allProducts = [...productsIndia];
    } catch (err) {
        console.error("Product data could not be loaded", err);
        allProducts = [];
    }
}

// Shopping cart
let cart = JSON.parse(localStorage.getItem('amaCloneCart')) || [];
updateCartCount();

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize notification container if it doesn't exist
    if (!document.getElementById('notification-container')) {
        const container = document.createElement('div');
        container.id = 'notification-container';
        document.body.appendChild(container);
    }
    
    // Initialize page based on URL
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === '' || currentPage === 'index.html') {
        initHomePage();
    } else if (currentPage === 'product.html') {
        initProductPage();
    } else if (currentPage === 'cart.html') {
        initCartPage();
    } else if (currentPage === 'products-page.html') {
        initProductsPage();
    }
    
    // Initialize search
    initSearch();
    
    // Initialize auth UI
    if (typeof updateAuthUI === 'function') {
        updateAuthUI();
    }
    
    // Initialize footer functionality
    initFooter();
});

// Initialize Home Page
function initHomePage() {
    // Load featured products
    const featuredProductsContainer = document.getElementById('featured-products-container');
    if (featuredProductsContainer) {
        const featuredProducts = allProducts.filter(product => product.featured).slice(0, 4);
        featuredProducts.forEach(product => {
            featuredProductsContainer.appendChild(createProductCard(product));
        });
    }
    
    // Load deals
    const dealsContainer = document.getElementById('deals-container');
    if (dealsContainer) {
        const deals = allProducts.filter(product => product.discount >= 20).slice(0, 4);
        deals.forEach(product => {
            dealsContainer.appendChild(createProductCard(product));
        });
    }
}

// Initialize Product Page
function initProductPage() {
    const productId = new URLSearchParams(window.location.search).get('id');
    
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    const product = allProducts.find(p => p.id.toString() === productId);
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Set page title
    document.title = `${product.name} | AmaClone`;
    
    // Update breadcrumbs
    updateBreadcrumbs(product);
    
    // Set product details
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('main-product-image').src = product.images[0];
    document.getElementById('main-product-image').alt = product.name;
    
    // Set price
    const currentPrice = document.getElementById('current-price');
    const originalPrice = document.getElementById('original-price');
    const discountLabel = document.getElementById('discount-label');
    const purchasePrice = document.getElementById('purchase-price');
    
    currentPrice.textContent = `₹${product.price.toLocaleString()}`;
    purchasePrice.textContent = `₹${product.price.toLocaleString()}`;
    
    if (product.discount > 0) {
        originalPrice.textContent = `₹${product.originalPrice.toLocaleString()}`;
        discountLabel.textContent = `${product.discount}% off`;
    }
    
    // Set rating
    const ratingElement = document.getElementById('product-rating');
    ratingElement.innerHTML = generateRatingStars(product.rating);
    ratingElement.innerHTML += `<span class="review-count">(${product.reviewCount} reviews)</span>`;
    
    // Set description
    document.getElementById('product-description').innerHTML = `<p>${product.description}</p><ul>${product.features.map(feature => `<li>${feature}</li>`).join('')}</ul>`;
    
    // Set availability
    document.getElementById('product-availability').textContent = product.inStock ? 'In Stock' : 'Out of Stock';
    document.getElementById('stock-status').textContent = product.inStock ? 'In Stock' : 'Out of Stock';
    
    // Set delivery date (dummy date 3 days from now)
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);
    document.getElementById('delivery-date').textContent = deliveryDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    
    // Set specifications
    const specsTable = document.getElementById('specifications-table');
    for (const [key, value] of Object.entries(product.specifications)) {
        const row = document.createElement('tr');
        const th = document.createElement('th');
        const td = document.createElement('td');
        
        th.textContent = key;
        td.textContent = value;
        
        row.appendChild(th);
        row.appendChild(td);
        specsTable.appendChild(row);
    }
    
    // Create thumbnails
    const thumbnailContainer = document.getElementById('thumbnail-container');
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `${product.name} - Image ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        if (index === 0) thumbnail.classList.add('active');
        
        thumbnail.addEventListener('click', function() {
            document.getElementById('main-product-image').src = image;
            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        
        thumbnailContainer.appendChild(thumbnail);
    });
    
    // Add to cart button
    document.getElementById('add-to-cart').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantity-select').value);
        addToCart(product, quantity);
    });
    
    // Buy now button
    document.getElementById('buy-now').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantity-select').value);
        
        // Add to cart first
        addToCart(product, quantity, false); // Pass false to prevent notification
        
        // Check if user is logged in
        if (!userManager || !userManager.isLoggedIn()) {
            if (typeof window.showNotification === 'function') {
                window.showNotification('Please sign in to checkout', 'info');
            }
            setTimeout(() => {
                window.location.href = 'login.html?redirect=checkout.html';
            }, 1500);
            return;
        }
        
        // Go directly to checkout
        window.location.href = 'checkout.html';
    });
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Load related products
    loadRelatedProducts(product);
}

// Initialize Cart Page
function initCartPage() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartItemCount = document.getElementById('cart-item-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const checkoutButton = document.getElementById('checkout-button');
    const clearCartButton = document.getElementById('clear-cart-button');
    
    // Clear previous content
    if (cartItemsContainer) {
        // Keep the empty cart message div
        Array.from(cartItemsContainer.children).forEach(child => {
            if (child.id !== 'empty-cart-message') {
                cartItemsContainer.removeChild(child);
            }
        });
    }
    
    if (cart.length === 0) {
        if (emptyCartMessage) emptyCartMessage.style.display = 'block';
        if (cartItemCount) cartItemCount.textContent = '0';
        if (cartSubtotal) cartSubtotal.textContent = '₹0.00';
        if (checkoutButton) checkoutButton.disabled = true;
        if (clearCartButton) clearCartButton.disabled = true;
        return;
    }
    
    if (emptyCartMessage) emptyCartMessage.style.display = 'none';
    if (checkoutButton) checkoutButton.disabled = false;
    if (clearCartButton) clearCartButton.disabled = false;
    
    let subtotal = 0;
    let totalItems = 0;
    
    cart.forEach(item => {
        const cartItem = createCartItem(item);
        cartItemsContainer.appendChild(cartItem);
        
        subtotal += item.price * item.quantity;
        totalItems += item.quantity;
    });
    
    if (cartItemCount) cartItemCount.textContent = totalItems.toString();
    if (cartSubtotal) cartSubtotal.textContent = `₹${subtotal.toLocaleString()}`;
    
    // Checkout button
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            // Check if user is logged in before proceeding to checkout
            if (!userManager || !userManager.isLoggedIn()) {
                if (typeof window.showNotification === 'function') {
                    window.showNotification('Please sign in to checkout', 'info');
                }
                setTimeout(() => {
                    window.location.href = 'login.html?redirect=checkout.html';
                }, 1500);
                return;
            }
            
            // Proceed to checkout page
            window.location.href = 'checkout.html';
        });
    }
    
    // Clear cart button
    if (clearCartButton) {
        clearCartButton.addEventListener('click', function() {
            if (cart.length === 0) {
                return;
            }
            
            if (confirm('Are you sure you want to clear your cart?')) {
                clearCart();
            }
        });
    }
    
    // Load cart recommendations
    loadCartRecommendations();
}

// Initialize Products Page
function initProductsPage() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const searchQuery = params.get('search');
    
    let filteredProducts = [...allProducts];
    let title = 'All Products';
    
    // Filter by search query if specified
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(product => {
            return product.name.toLowerCase().includes(query) || 
                   product.description.toLowerCase().includes(query) ||
                   product.brand.toLowerCase().includes(query) ||
                   (product.specifications && Object.values(product.specifications)
                       .some(value => value.toString().toLowerCase().includes(query)));
        });
        title = `Search results for "${searchQuery}"`;
        
        // Set the search input value in the search bar
        const searchInputs = document.querySelectorAll('.search-bar input');
        searchInputs.forEach(input => {
            input.value = searchQuery;
        });
    }
    
    // Filter by category if specified
    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
        if (!searchQuery) {
            title = category.charAt(0).toUpperCase() + category.slice(1);
        }
        
        // Set the category select value in the search bar
        const categorySelects = document.querySelectorAll('.search-bar select');
        categorySelects.forEach(select => {
            const option = Array.from(select.options).find(opt => opt.value === category);
            if (option) {
                select.value = category;
            }
        });
    }
    
    // Update page title
    document.getElementById('products-title').textContent = title;
    document.getElementById('products-count').textContent = `${filteredProducts.length} products`;
    
    // Update breadcrumbs
    const breadcrumbs = document.getElementById('products-breadcrumbs');
    if (breadcrumbs) {
        let breadcrumbHtml = `<a href="index.html">Home</a>`;
        
        if (searchQuery) {
            breadcrumbHtml += ` > <a href="products-page.html">All Products</a> > Search results for "${searchQuery}"`;
        } else if (category) {
            breadcrumbHtml += ` > <a href="products-page.html">All Products</a> > ${category.charAt(0).toUpperCase() + category.slice(1)}`;
        } else {
            breadcrumbHtml += ` > All Products`;
        }
        
        breadcrumbs.innerHTML = breadcrumbHtml;
    }
    
    // Generate category filters
    generateCategoryFilters();
    
    // Generate brand filters
    generateBrandFilters(filteredProducts);
    
    // Display products
    displayProducts(filteredProducts);
    
    // Initialize sorting
    document.getElementById('sort-select').addEventListener('change', function() {
        const sortValue = this.value;
        const sortedProducts = sortProducts(filteredProducts, sortValue);
        displayProducts(sortedProducts);
    });
    
    // Initialize price filters
    document.querySelectorAll('#price-filters a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const min = parseFloat(this.getAttribute('data-min'));
            const max = parseFloat(this.getAttribute('data-max'));
            
            const priceFiltered = filteredProducts.filter(product => 
                product.price >= min && product.price <= max
            );
            
            displayProducts(priceFiltered);
            addActiveFilter(`Price: ₹${min.toLocaleString()} - ₹${max.toLocaleString()}`);
        });
    });
    
    // Custom price range
    document.getElementById('price-go').addEventListener('click', function() {
        const min = parseFloat(document.getElementById('min-price').value) || 0;
        const max = parseFloat(document.getElementById('max-price').value) || Number.MAX_SAFE_INTEGER;
        
        const priceFiltered = filteredProducts.filter(product => 
            product.price >= min && product.price <= max
        );
        
        displayProducts(priceFiltered);
        addActiveFilter(`Price: ₹${min.toLocaleString()} - ₹${max.toLocaleString()}`);
    });
    
    // Initialize rating filters
    document.querySelectorAll('.rating-filters input').forEach(input => {
        input.addEventListener('change', function() {
            const minRating = parseFloat(this.getAttribute('data-stars'));
            
            const ratingFiltered = filteredProducts.filter(product => 
                product.rating >= minRating
            );
            
            displayProducts(ratingFiltered);
            addActiveFilter(`Rating: ${minRating}+ stars`);
        });
    });
}

// Helper Functions
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    
    const image = document.createElement('img');
    image.src = product.images[0];
    image.alt = product.name;
    
    const title = document.createElement('h3');
    const titleLink = document.createElement('a');
    titleLink.href = `product.html?id=${product.id}`;
    titleLink.textContent = product.name;
    title.appendChild(titleLink);
    
    const rating = document.createElement('div');
    rating.classList.add('product-rating');
    rating.innerHTML = generateRatingStars(product.rating);
    rating.innerHTML += `<span class="review-count">(${product.reviewCount})</span>`;
    
    const price = document.createElement('div');
    price.classList.add('price');
    
    if (product.discount > 0) {
        const discountLabel = document.createElement('span');
        discountLabel.classList.add('discount-label');
        discountLabel.textContent = `${product.discount}% off`;
        price.appendChild(discountLabel);
    }
    
    const currentPrice = document.createElement('span');
    currentPrice.textContent = `₹${product.price.toLocaleString()} `;
    price.appendChild(currentPrice);
    
    if (product.discount > 0) {
        const originalPrice = document.createElement('span');
        originalPrice.classList.add('original-price');
        originalPrice.textContent = `₹${product.originalPrice.toLocaleString()}`;
        price.appendChild(originalPrice);
    }
    
    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('btn');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1, true);
    });
    
    // Add wishlist button
    if (typeof userManager !== 'undefined') {
        const wishlistBtn = document.createElement('button');
        wishlistBtn.classList.add('wishlist-btn');
        
        if (userManager.isLoggedIn() && userManager.isInWishlist(product.id)) {
            wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Wishlist';
            wishlistBtn.dataset.inWishlist = 'true';
        } else {
            wishlistBtn.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
            wishlistBtn.dataset.inWishlist = 'false';
        }
        
        wishlistBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (!userManager.isLoggedIn()) {
                if (typeof window.showNotification === 'function') {
                    window.showNotification('Please sign in to add items to your wishlist', 'info');
                }
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1500);
                return;
            }
            
            if (this.dataset.inWishlist === 'true') {
                // Remove from wishlist
                const result = userManager.removeFromWishlist(product.id);
                if (result.success) {
                    this.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
                    this.dataset.inWishlist = 'false';
                    if (typeof window.showNotification === 'function') {
                        window.showNotification(result.message, 'success');
                    }
                } else {
                    if (typeof window.showNotification === 'function') {
                        window.showNotification(result.message, 'error');
                    }
                }
            } else {
                // Add to wishlist
                const result = userManager.addToWishlist(product.id);
                if (result.success) {
                    this.innerHTML = '<i class="fas fa-heart"></i> Remove from Wishlist';
                    this.dataset.inWishlist = 'true';
                    if (typeof window.showNotification === 'function') {
                        window.showNotification(result.message, 'success');
                    }
                } else {
                    if (typeof window.showNotification === 'function') {
                        window.showNotification(result.message, 'error');
                    }
                }
            }
        });
        
        card.appendChild(wishlistBtn);
    }
    
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(rating);
    card.appendChild(price);
    card.appendChild(addToCartBtn);
    
    // Make entire card clickable
    card.addEventListener('click', function() {
        window.location.href = `product.html?id=${product.id}`;
    });
    
    return card;
}

function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    const product = allProducts.find(p => p.id === item.id);
    
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('cart-item-image');
    
    const image = document.createElement('img');
    image.src = product.images[0];
    image.alt = product.name;
    imageDiv.appendChild(image);
    
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('cart-item-details');
    
    const title = document.createElement('h3');
    const titleLink = document.createElement('a');
    titleLink.href = `product.html?id=${product.id}`;
    titleLink.textContent = product.name;
    title.appendChild(titleLink);
    
    const price = document.createElement('div');
    price.classList.add('cart-item-price');
    price.textContent = `₹${product.price.toLocaleString()}`;
    
    const quantity = document.createElement('div');
    quantity.classList.add('cart-item-quantity');
    
    const quantityLabel = document.createElement('span');
    quantityLabel.textContent = 'Quantity: ';
    
    const quantitySelect = document.createElement('select');
    for (let i = 1; i <= 10; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        if (i === item.quantity) option.selected = true;
        quantitySelect.appendChild(option);
    }
    
    quantitySelect.addEventListener('change', function() {
        updateCartItemQuantity(item.id, parseInt(this.value));
    });
    
    const subtotal = document.createElement('span');
    subtotal.textContent = ` Subtotal: ₹${(product.price * item.quantity).toLocaleString()}`;
    
    quantity.appendChild(quantityLabel);
    quantity.appendChild(quantitySelect);
    quantity.appendChild(subtotal);
    
    const actions = document.createElement('div');
    actions.classList.add('cart-item-actions');
    
    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(e) {
        e.preventDefault();
        removeFromCart(item.id);
    });
    
    const saveButton = document.createElement('a');
    saveButton.href = '#';
    saveButton.textContent = 'Save for later';
    saveButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (typeof window.showNotification === 'function') {
            window.showNotification('Save for later functionality is not implemented in this demo.', 'info');
        } else {
            alert('Save for later functionality is not implemented in this demo.');
        }
    });
    
    actions.appendChild(deleteButton);
    actions.appendChild(saveButton);
    
    detailsDiv.appendChild(title);
    detailsDiv.appendChild(price);
    detailsDiv.appendChild(quantity);
    detailsDiv.appendChild(actions);
    
    cartItem.appendChild(imageDiv);
    cartItem.appendChild(detailsDiv);
    
    return cartItem;
}

function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '<div class="stars">';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    starsHTML += '</div>';
    
    return starsHTML;
}

function addToCart(product, quantity, showNotificationFlag = true) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            price: product.price,
            quantity: quantity
        });
    }
    
    // Animate cart icon
    const cartIcon = document.querySelector('.cart i');
    if (cartIcon) {
        cartIcon.classList.add('animate-add-to-cart');
        setTimeout(() => {
            cartIcon.classList.remove('animate-add-to-cart');
        }, 500);
    }
    
    // Save to localStorage
    localStorage.setItem('amaCloneCart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show notification instead of alert if flag is true
    if (showNotificationFlag) {
        if (typeof window.showNotification === 'function') {
            window.showNotification(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart`, 'success');
        } else {
            alert(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart`);
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    
    // Save to localStorage
    localStorage.setItem('amaCloneCart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    if (typeof window.showNotification === 'function') {
        window.showNotification('Item removed from cart', 'info');
    }
    
    // Reload cart page
    initCartPage();
}

function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = quantity;
    }
    
    // Save to localStorage
    localStorage.setItem('amaCloneCart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    if (typeof window.showNotification === 'function') {
        window.showNotification(`Cart updated: ${quantity} item(s)`, 'success');
    }
    
    // Reload cart page
    initCartPage();
}

function updateCartCount() {
    const cartCounts = document.querySelectorAll('#cart-count');
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartCounts.forEach(cartCount => {
        cartCount.textContent = count.toString();
    });
}

function clearCart() {
    // Empty the cart array
    cart = [];
    
    // Remove from localStorage
    localStorage.removeItem('amaCloneCart');
    
    // Update cart count display
    updateCartCount();
    
    // Show notification
    if (typeof window.showNotification === 'function') {
        window.showNotification('Your cart has been cleared', 'info');
    }
    
    // If on cart page, reload it
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'cart.html') {
        initCartPage();
    }
}

function updateBreadcrumbs(product) {
    const breadcrumbs = document.getElementById('breadcrumbs');
    if (breadcrumbs) {
        const category = product.category.charAt(0).toUpperCase() + product.category.slice(1);
        breadcrumbs.innerHTML = `
            <a href="index.html">Home</a> > 
            <a href="products-page.html?category=${product.category}">${category}</a> > 
            ${product.name}
        `;
    }
}

function loadRelatedProducts(product) {
    const relatedContainer = document.getElementById('related-products');
    if (relatedContainer) {
        // Get products in the same category
        const relatedProducts = allProducts
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4);
        
        relatedProducts.forEach(relatedProduct => {
            relatedContainer.appendChild(createProductCard(relatedProduct));
        });
    }
}

function loadCartRecommendations() {
    const recommendationsContainer = document.getElementById('cart-recommendations');
    if (recommendationsContainer && cart.length > 0) {
        // Get recommendations based on cart items
        const cartProductIds = cart.map(item => item.id);
        const cartProducts = allProducts.filter(product => cartProductIds.includes(product.id));
        
        // Get products in the same categories as cart items
        const categories = [...new Set(cartProducts.map(product => product.category))];
        
        const recommendations = allProducts
            .filter(product => categories.includes(product.category) && !cartProductIds.includes(product.id))
            .slice(0, 4);
        
        recommendations.forEach(product => {
            recommendationsContainer.appendChild(createProductCard(product));
        });
    }
}

function initSearch() {
    const searchForms = document.querySelectorAll('.search-bar');
    
    searchForms.forEach(searchForm => {
        const searchInput = searchForm.querySelector('input');
        const categorySelect = searchForm.querySelector('select');
        const searchButton = searchForm.querySelector('button');
        
        // Create suggestions container
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.classList.add('search-suggestions');
        searchForm.appendChild(suggestionsContainer);
        
        // Handle form submission
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (searchInput && searchInput.value.trim() !== '') {
                performSearch(searchInput.value.trim(), categorySelect.value);
            }
        });
        
        // Add click event to search button
        if (searchButton) {
            searchButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (searchInput && searchInput.value.trim() !== '') {
                    performSearch(searchInput.value.trim(), categorySelect.value);
                }
            });
        }
        
        // Add input event for live suggestions
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const query = this.value.trim().toLowerCase();
                
                // Clear suggestions if query is empty
                if (query === '') {
                    suggestionsContainer.innerHTML = '';
                    suggestionsContainer.style.display = 'none';
                    return;
                }
                
                // Get suggestions based on query
                const suggestions = getSuggestions(query, categorySelect.value);
                
                // Display suggestions
                if (suggestions.length > 0) {
                    displaySuggestions(suggestions, suggestionsContainer, query, categorySelect.value);
                    suggestionsContainer.style.display = 'block';
                } else {
                    suggestionsContainer.innerHTML = '';
                    suggestionsContainer.style.display = 'none';
                }
            });
            
            // Hide suggestions when clicking outside
            document.addEventListener('click', function(e) {
                if (!searchForm.contains(e.target)) {
                    suggestionsContainer.style.display = 'none';
                }
            });
            
            // Show suggestions on focus if input has value
            searchInput.addEventListener('focus', function() {
                const query = this.value.trim().toLowerCase();
                if (query !== '') {
                    const suggestions = getSuggestions(query, categorySelect.value);
                    if (suggestions.length > 0) {
                        displaySuggestions(suggestions, suggestionsContainer, query, categorySelect.value);
                        suggestionsContainer.style.display = 'block';
                    }
                }
            });
        }
        
        // Handle category change
        if (categorySelect) {
            categorySelect.addEventListener('change', function() {
                const query = searchInput.value.trim().toLowerCase();
                if (query !== '') {
                    const suggestions = getSuggestions(query, this.value);
                    if (suggestions.length > 0) {
                        displaySuggestions(suggestions, suggestionsContainer, query, this.value);
                        suggestionsContainer.style.display = 'block';
                    } else {
                        suggestionsContainer.innerHTML = '';
                        suggestionsContainer.style.display = 'none';
                    }
                }
            });
        }
    });
}

// Function to get search suggestions
function getSuggestions(query, category) {
    // Filter products based on query and category
    let filteredProducts = allProducts.filter(product => {
        const matchesQuery = product.name.toLowerCase().includes(query) || 
                             product.description.toLowerCase().includes(query) ||
                             product.brand.toLowerCase().includes(query);
        
        const matchesCategory = category === 'all' || product.category === category;
        
        return matchesQuery && matchesCategory;
    });
    
    // Limit to 5 suggestions
    return filteredProducts.slice(0, 5);
}

// Function to display suggestions
function displaySuggestions(suggestions, container, query, category) {
    container.innerHTML = '';
    
    suggestions.forEach(product => {
        const suggestion = document.createElement('div');
        suggestion.classList.add('search-suggestion-item');
        
        // Highlight matching text
        const highlightedName = highlightText(product.name, query);
        
        suggestion.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}" class="suggestion-img">
            <div class="suggestion-details">
                <div class="suggestion-name">${highlightedName}</div>
                <div class="suggestion-price">₹${product.price.toLocaleString()}</div>
            </div>
        `;
        
        // Add click event to suggestion
        suggestion.addEventListener('click', function() {
            window.location.href = `product.html?id=${product.id}`;
        });
        
        container.appendChild(suggestion);
    });
    
    // Add "View all results" link
    const viewAllLink = document.createElement('div');
    viewAllLink.classList.add('view-all-results');
    viewAllLink.textContent = `View all results for "${query}"`;
    
    viewAllLink.addEventListener('click', function() {
        performSearch(query, category);
    });
    
    container.appendChild(viewAllLink);
}

// Function to highlight matching text
function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Function to perform search
function performSearch(query, category) {
    // Build search URL
    let searchUrl = 'products-page.html?search=' + encodeURIComponent(query);
    
    if (category !== 'all') {
        searchUrl += '&category=' + encodeURIComponent(category);
    }
    
    window.location.href = searchUrl;
}

function displayProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        productsGrid.innerHTML = '';
        
        if (products.length === 0) {
            productsGrid.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
            return;
        }
        
        products.forEach(product => {
            productsGrid.appendChild(createProductCard(product));
        });
    }
}

function sortProducts(products, sortBy) {
    const sortedProducts = [...products];
    
    switch (sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            // In a real app, we would sort by date
            // Here we'll just use the id as a proxy for newness
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
        default: // 'featured'
            sortedProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            break;
    }
    
    return sortedProducts;
}

function generateCategoryFilters() {
    const categoryFilters = document.getElementById('category-filters');
    if (categoryFilters) {
        // Get unique categories
        const categories = [...new Set(allProducts.map(product => product.category))];
        
        categories.forEach(category => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `products-page.html?category=${category}`;
            link.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            
            li.appendChild(link);
            categoryFilters.appendChild(li);
        });
    }
}

function generateBrandFilters(products) {
    const brandFilters = document.getElementById('brand-filters');
    if (brandFilters) {
        // Get unique brands from the current filtered products
        const brands = [...new Set(products.map(product => product.brand))];
        
        brandFilters.innerHTML = '';
        
        brands.forEach(brand => {
            const li = document.createElement('li');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `brand-${brand.replace(/\s+/g, '-').toLowerCase()}`;
            checkbox.setAttribute('data-brand', brand);
            
            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = brand;
            
            checkbox.addEventListener('change', function() {
                const selectedBrand = this.getAttribute('data-brand');
                
                if (this.checked) {
                    const brandFiltered = products.filter(product => product.brand === selectedBrand);
                    displayProducts(brandFiltered);
                    addActiveFilter(`Brand: ${selectedBrand}`);
                } else {
                    displayProducts(products);
                    removeActiveFilter(`Brand: ${selectedBrand}`);
                }
            });
            
            li.appendChild(checkbox);
            li.appendChild(label);
            brandFilters.appendChild(li);
        });
    }
}

function addActiveFilter(filterText) {
    const activeFilters = document.getElementById('active-filters');
    if (activeFilters) {
        // Check if this filter already exists
        const existingFilter = Array.from(activeFilters.children).find(
            filter => filter.textContent.includes(filterText)
        );
        
        if (existingFilter) return;
        
        const filterTag = document.createElement('div');
        filterTag.classList.add('filter-tag');
        filterTag.innerHTML = `${filterText} <i class="fas fa-times"></i>`;
        
        filterTag.querySelector('i').addEventListener('click', function() {
            activeFilters.removeChild(filterTag);
            window.location.reload(); // Simple way to reset filters
        });
        
        activeFilters.appendChild(filterTag);
    }
}

function removeActiveFilter(filterText) {
    const activeFilters = document.getElementById('active-filters');
    if (activeFilters) {
        const filterToRemove = Array.from(activeFilters.children).find(
            filter => filter.textContent.includes(filterText)
        );
        
        if (filterToRemove) {
            activeFilters.removeChild(filterToRemove);
        }
    }
}

// Initialize Footer functionality
function initFooter() {
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.opacity = '1';
            } else {
                backToTopBtn.style.opacity = '0';
            }
        });
    }
    
    // Footer accordion for mobile devices
    const footerHeadings = document.querySelectorAll('.footer-column h3');
    
    if (window.innerWidth <= 768) {
        footerHeadings.forEach(heading => {
            heading.addEventListener('click', function() {
                const parent = this.parentElement;
                
                // Close all other columns first
                document.querySelectorAll('.footer-column.active').forEach(column => {
                    if (column !== parent) {
                        column.classList.remove('active');
                    }
                });
                
                // Toggle the clicked column
                parent.classList.toggle('active');
            });
        });
    }
} 