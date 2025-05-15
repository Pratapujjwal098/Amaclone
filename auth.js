// Authentication and Notification System

// User management
const userManager = {
    // Store for registered users
    users: JSON.parse(localStorage.getItem('amaCloneUsers')) || [],
    
    // Current logged in user - fixed initialization to properly retrieve user object
    get currentUser() {
        // If we already have the current user object loaded, return it
        if (this._currentUser) {
            return this._currentUser;
        }
        
        // Otherwise, try to load from localStorage
        const userId = localStorage.getItem('amaCloneCurrentUser');
        if (userId) {
            // Find the complete user object from the users array
            const userIndex = this.users.findIndex(u => u.id === userId);
            if (userIndex !== -1) {
                // Remove password for security
                const { password: _, ...userWithoutPassword } = this.users[userIndex];
                this._currentUser = userWithoutPassword;
                return this._currentUser;
            }
        }
        
        return null;
    },
    
    set currentUser(user) {
        this._currentUser = user;
        // When setting null (logging out), remove from localStorage
        if (user === null) {
            localStorage.removeItem('amaCloneCurrentUser');
        } else {
            // Only store the user ID in localStorage, not the whole object
            localStorage.setItem('amaCloneCurrentUser', user.id);
        }
    },
    
    // Register a new user
    register: function(name, email, password) {
        // Check if user already exists
        if (this.getUserByEmail(email)) {
            return {
                success: false,
                message: 'An account with this email already exists'
            };
        }
        
        // Create new user object
        const newUser = {
            id: Date.now().toString(),
            name: name,
            email: email,
            password: this.hashPassword(password), // In a real app, use proper hashing
            createdAt: new Date().toISOString(),
            orders: [],
            addresses: [],
            wishlist: [],
            preferences: {
                language: 'en-IN',
                currency: 'INR',
                notifications: {
                    email: true,
                    sms: false,
                    app: true
                },
                region: 'India'
            }
        };
        
        // Add to users array
        this.users.push(newUser);
        
        // Save to localStorage
        this.saveUsers();
        
        // Automatically log in
        const { password: _, ...userWithoutPassword } = newUser;
        this.currentUser = userWithoutPassword;
        
        return {
            success: true,
            message: 'Registration successful'
        };
    },
    
    // Login user
    login: function(email, password) {
        const user = this.getUserByEmail(email);
        
        if (!user) {
            return {
                success: false,
                message: 'Invalid email or password'
            };
        }
        
        // Check password (using simple comparison for demo)
        if (user.password !== this.hashPassword(password)) {
            return {
                success: false,
                message: 'Invalid email or password'
            };
        }
        
        // Set as current user (exclude password for security)
        const { password: _, ...userWithoutPassword } = user;
        this.currentUser = userWithoutPassword;
        
        return {
            success: true,
            message: 'Login successful'
        };
    },
    
    // Logout user
    logout: function() {
        this.currentUser = null;
        
        return {
            success: true,
            message: 'Logout successful'
        };
    },
    
    // Update user profile
    updateProfile: function(updates) {
        if (!this.currentUser) {
            return {
                success: false,
                message: 'You must be logged in to update your profile'
            };
        }
        
        // Find user in array
        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        
        if (userIndex === -1) {
            return {
                success: false,
                message: 'User not found'
            };
        }
        
        // Update user data
        const updatedUser = { ...this.users[userIndex], ...updates };
        this.users[userIndex] = updatedUser;
        
        // Update current user (maintain the reference)
        const { password: _, ...userWithoutPassword } = updatedUser;
        this._currentUser = userWithoutPassword;
        
        // Save changes
        this.saveUsers();
        
        return {
            success: true,
            message: 'Profile updated successfully'
        };
    },
    
    // Add to wishlist
    addToWishlist: function(productId) {
        if (!this.currentUser) {
            return {
                success: false,
                message: 'You must be logged in to add items to your wishlist'
            };
        }
        
        // Check if product is already in wishlist
        if (this.isInWishlist(productId)) {
            return {
                success: false,
                message: 'This item is already in your wishlist'
            };
        }
        
        // Add to wishlist
        const wishlistItem = {
            productId: productId,
            dateAdded: new Date().toISOString()
        };
        
        // Update profile with new wishlist item
        const updatedWishlist = [...this.currentUser.wishlist, wishlistItem];
        const result = this.updateProfile({ wishlist: updatedWishlist });
        
        if (result.success) {
            return {
                success: true,
                message: 'Item added to your wishlist'
            };
        } else {
            return result;
        }
    },
    
    // Remove from wishlist
    removeFromWishlist: function(productId) {
        if (!this.currentUser || !this.currentUser.wishlist) {
            return {
                success: false,
                message: 'Wishlist not found'
            };
        }
        
        const initialLength = this.currentUser.wishlist.length;
        const updatedWishlist = this.currentUser.wishlist.filter(item => item.productId !== productId);
        
        if (this.currentUser.wishlist.length === initialLength) {
            return {
                success: false,
                message: 'Item not found in wishlist'
            };
        }
        
        // Update profile
        const result = this.updateProfile({ wishlist: updatedWishlist });
        
        if (result.success) {
            return {
                success: true,
                message: 'Item removed from your wishlist'
            };
        } else {
            return result;
        }
    },
    
    // Check if product is in wishlist
    isInWishlist: function(productId) {
        if (!this.currentUser || !this.currentUser.wishlist) {
            return false;
        }
        
        return this.currentUser.wishlist.some(item => item.productId === productId);
    },
    
    // Get user by email
    getUserByEmail: function(email) {
        return this.users.find(user => user.email.toLowerCase() === email.toLowerCase());
    },
    
    // Save users to localStorage
    saveUsers: function() {
        localStorage.setItem('amaCloneUsers', JSON.stringify(this.users));
    },
    
    // Simple password hashing (NOT secure - for demo only)
    hashPassword: function(password) {
        // In a real app, use a proper hashing library like bcrypt
        // This is just for demonstration purposes
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash.toString();
    },
    
    // Check if user is logged in
    isLoggedIn: function() {
        return !!this.currentUser;
    },
    
    // Get addresses
    getAddresses: function() {
        if (!this.currentUser) {
            return [];
        }
        
        return this.currentUser.addresses || [];
    },
    
    // Add address
    addAddress: function(address) {
        if (!this.currentUser) {
            return {
                success: false,
                message: 'You must be logged in to add an address'
            };
        }
        
        // Initialize addresses array if it doesn't exist
        if (!this.currentUser.addresses) {
            this.currentUser.addresses = [];
        }
        
        // If this is set as default, unset any other default
        if (address.isDefault) {
            this.currentUser.addresses = this.currentUser.addresses.map(addr => ({
                ...addr,
                isDefault: false
            }));
        }
        
        // If this is the first address, make it default
        if (this.currentUser.addresses.length === 0) {
            address.isDefault = true;
        }
        
        // Add the address
        this.currentUser.addresses.push(address);
        
        // Update in storage
        const userIndex = this.users.findIndex(user => user.id === this.currentUser.id);
        this.users[userIndex] = this.currentUser;
        this.saveUsers();
        
        return {
            success: true,
            message: 'Address added successfully'
        };
    },
    
    // Get orders
    getOrders: function() {
        if (!this.currentUser) {
            return [];
        }
        
        return this.currentUser.orders || [];
    },
    
    // Get order
    getOrder: function(orderId) {
        if (!this.currentUser || !this.currentUser.orders) {
            return null;
        }
        
        return this.currentUser.orders.find(order => order.id === orderId);
    }
};

// Notification system
const notificationSystem = {
    container: document.getElementById('notification-container'),
    
    // Show notification
    show: function(message, type = 'info', duration = 5000) {
        if (!this.container) {
            console.error('Notification container not found');
            return;
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        // Set icon based on type
        let icon = '';
        switch (type) {
            case 'success':
                icon = '<i class="fas fa-check-circle notification-icon"></i>';
                break;
            case 'error':
                icon = '<i class="fas fa-exclamation-circle notification-icon"></i>';
                break;
            case 'warning':
                icon = '<i class="fas fa-exclamation-triangle notification-icon"></i>';
                break;
            default:
                icon = '<i class="fas fa-info-circle notification-icon"></i>';
        }
        
        // Set content
        notification.innerHTML = `
            ${icon}
            <div class="notification-content">${message}</div>
            <div class="notification-close"><i class="fas fa-times"></i></div>
        `;
        
        // Add to container
        this.container.appendChild(notification);
        
        // Add close event
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.hide(notification);
        });
        
        // Auto hide after duration
        setTimeout(() => {
            this.hide(notification);
        }, duration);
    },
    
    // Hide notification
    hide: function(notification) {
        notification.classList.add('hide');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    },
    
    // Success notification
    success: function(message, duration) {
        this.show(message, 'success', duration);
    },
    
    // Error notification
    error: function(message, duration) {
        this.show(message, 'error', duration);
    },
    
    // Info notification
    info: function(message, duration) {
        this.show(message, 'info', duration);
    },
    
    // Warning notification
    warning: function(message, duration) {
        this.show(message, 'warning', duration);
    }
};

// Event listeners for login form
document.addEventListener('DOMContentLoaded', function() {
    // Initialize notification container if it doesn't exist
    if (!document.getElementById('notification-container')) {
        const container = document.createElement('div');
        container.id = 'notification-container';
        document.body.appendChild(container);
        notificationSystem.container = container;
    }
    
    // Update UI based on login status
    updateAuthUI();
    
    // Login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            const result = userManager.login(email, password);
            
            if (result.success) {
                notificationSystem.success(result.message);
                // Redirect to homepage after successful login
                setTimeout(() => {
                    const redirectUrl = new URLSearchParams(window.location.search).get('redirect') || 'index.html';
                    window.location.href = redirectUrl;
                }, 1500);
            } else {
                notificationSystem.error(result.message);
            }
        });
    }
    
    // Registration form submission
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                notificationSystem.error('Passwords do not match');
                return;
            }
            
            const result = userManager.register(name, email, password);
            
            if (result.success) {
                notificationSystem.success(result.message);
                // Redirect to login page after successful registration
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1500);
            } else {
                notificationSystem.error(result.message);
            }
        });
    }
    
    // Social login buttons (demo functionality)
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            notificationSystem.info('Social login is not implemented in this demo');
        });
    });
    
    // Add wishlist functionality to product pages
    const productDetail = document.getElementById('product-detail');
    if (productDetail) {
        // Get product ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        if (productId) {
            // Create and add the wishlist button
            const purchaseBox = document.querySelector('.purchase-box');
            if (purchaseBox) {
                const wishlistButton = document.createElement('button');
                wishlistButton.id = 'add-to-wishlist';
                wishlistButton.className = 'btn wishlist-btn';
                
                // Check if product is already in wishlist
                if (userManager.isLoggedIn() && userManager.isInWishlist(parseInt(productId))) {
                    wishlistButton.innerHTML = '<i class="fas fa-heart"></i> Remove from Wishlist';
                    wishlistButton.dataset.inWishlist = 'true';
                } else {
                    wishlistButton.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
                    wishlistButton.dataset.inWishlist = 'false';
                }
                
                // Add click event
                wishlistButton.addEventListener('click', function() {
                    if (!userManager.isLoggedIn()) {
                        notificationSystem.info('Please sign in to add items to your wishlist');
                        setTimeout(() => {
                            window.location.href = 'login.html';
                        }, 1500);
                        return;
                    }
                    
                    if (this.dataset.inWishlist === 'true') {
                        // Remove from wishlist
                        const result = userManager.removeFromWishlist(parseInt(productId));
                        if (result.success) {
                            this.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
                            this.dataset.inWishlist = 'false';
                            notificationSystem.success(result.message);
                        } else {
                            notificationSystem.error(result.message);
                        }
                    } else {
                        // Add to wishlist
                        const result = userManager.addToWishlist(parseInt(productId));
                        if (result.success) {
                            this.innerHTML = '<i class="fas fa-heart"></i> Remove from Wishlist';
                            this.dataset.inWishlist = 'true';
                            notificationSystem.success(result.message);
                        } else {
                            notificationSystem.error(result.message);
                        }
                    }
                });
                
                // Insert after buy now button
                const buyNowBtn = document.getElementById('buy-now');
                if (buyNowBtn) {
                    buyNowBtn.parentNode.insertBefore(wishlistButton, buyNowBtn.nextSibling);
                } else {
                    purchaseBox.appendChild(wishlistButton);
                }
            }
        }
    }
});

// Update UI elements based on authentication state
function updateAuthUI() {
    // Update header nav
    const headerNav = document.querySelector('.header-nav');
    if (headerNav) {
        const accountItem = headerNav.querySelector('.nav-item:first-child');
        if (accountItem) {
            if (userManager.isLoggedIn()) {
                accountItem.innerHTML = `
                    <span class="nav-line-1">Hello, ${userManager.currentUser.name}</span>
                    <span class="nav-line-2"><a href="account.html">Your Account</a></span>
                `;
                
                // Create dropdown menu
                const dropdown = document.createElement('div');
                dropdown.className = 'account-dropdown';
                dropdown.innerHTML = `
                    <div class="dropdown-content">
                        <div class="dropdown-section">
                            <h3>Your Account</h3>
                            <ul>
                                <li><a href="account.html">Your Account</a></li>
                                <li><a href="account.html">Your Orders</a></li>
                                <li><a href="wishlist.html">Your Wishlist</a></li>
                            </ul>
                        </div>
                        <div class="dropdown-footer">
                            <a href="#" id="sign-out-btn">Sign Out</a>
                        </div>
                    </div>
                `;
                
                // Add event listener to sign out button
                dropdown.querySelector('#sign-out-btn').addEventListener('click', function(e) {
                    e.preventDefault();
                    const result = userManager.logout();
                    if (result.success) {
                        notificationSystem.success(result.message);
                        setTimeout(() => {
                            window.location.href = 'index.html';
                        }, 1500);
                    }
                });
                
                // Add dropdown to account item
                accountItem.appendChild(dropdown);
                
                // Show dropdown on hover
                accountItem.addEventListener('mouseenter', function() {
                    dropdown.style.display = 'block';
                });
                
                accountItem.addEventListener('mouseleave', function() {
                    dropdown.style.display = 'none';
                });
            } else {
                accountItem.innerHTML = `
                    <span class="nav-line-1">Hello, Sign in</span>
                    <span class="nav-line-2"><a href="login.html">Account & Lists</a></span>
                `;
                
                // Create dropdown menu for non-logged in users
                const dropdown = document.createElement('div');
                dropdown.className = 'account-dropdown';
                dropdown.innerHTML = `
                    <div class="dropdown-content">
                        <div class="dropdown-section sign-in-section">
                            <a href="login.html" class="btn auth-btn">Sign in</a>
                            <p>New customer? <a href="register.html">Start here</a></p>
                        </div>
                        <div class="dropdown-section">
                            <h3>Your Lists</h3>
                            <ul>
                                <li><a href="login.html">Create a Wishlist</a></li>
                                <li><a href="login.html">Find a Wishlist</a></li>
                            </ul>
                        </div>
                        <div class="dropdown-section">
                            <h3>Your Account</h3>
                            <ul>
                                <li><a href="login.html">Your Account</a></li>
                                <li><a href="login.html">Your Orders</a></li>
                            </ul>
                        </div>
                    </div>
                `;
                
                // Add dropdown to account item
                accountItem.appendChild(dropdown);
                
                // Show dropdown on hover
                accountItem.addEventListener('mouseenter', function() {
                    dropdown.style.display = 'block';
                });
                
                accountItem.addEventListener('mouseleave', function() {
                    dropdown.style.display = 'none';
                });
            }
        }
        
        // Update orders nav item
        const ordersItem = headerNav.querySelector('.nav-item:nth-child(2)');
        if (ordersItem) {
            ordersItem.innerHTML = userManager.isLoggedIn() 
                ? `
                    <span class="nav-line-1">Returns</span>
                    <span class="nav-line-2"><a href="account.html#recent-orders-table">& Orders</a></span>
                `
                : `
                    <span class="nav-line-1">Returns</span>
                    <span class="nav-line-2"><a href="login.html?redirect=account.html">& Orders</a></span>
                `;
        }
    }
    
    // Add styles for dropdown menu if not already present
    if (!document.getElementById('dropdown-styles')) {
        const style = document.createElement('style');
        style.id = 'dropdown-styles';
        style.textContent = `
            .account-dropdown {
                position: absolute;
                z-index: 999;
                display: none;
                background-color: white;
                border-radius: 4px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                width: 250px;
                margin-top: 5px;
                right: -50px;
            }
            
            .nav-item {
                position: relative;
            }
            
            .dropdown-content {
                padding: 20px;
            }
            
            .dropdown-section {
                margin-bottom: 15px;
                padding-bottom: 15px;
                border-bottom: 1px solid #eee;
            }
            
            .dropdown-section:last-child {
                margin-bottom: 0;
                padding-bottom: 0;
                border-bottom: none;
            }
            
            .dropdown-section h3 {
                font-size: 14px;
                margin-bottom: 8px;
            }
            
            .dropdown-section ul {
                list-style: none;
            }
            
            .dropdown-section ul li {
                margin-bottom: 4px;
            }
            
            .dropdown-section ul li a {
                font-size: 12px;
                color: #0066c0;
                text-decoration: none;
            }
            
            .dropdown-section ul li a:hover {
                text-decoration: underline;
                color: #c45500;
            }
            
            .sign-in-section {
                text-align: center;
            }
            
            .sign-in-section .btn {
                width: 100%;
                margin-bottom: 8px;
            }
            
            .sign-in-section p {
                font-size: 12px;
            }
            
            .dropdown-footer {
                text-align: center;
            }
            
            .dropdown-footer a {
                color: #0066c0;
                font-size: 14px;
                text-decoration: none;
            }
            
            .dropdown-footer a:hover {
                text-decoration: underline;
                color: #c45500;
            }
            
            .wishlist-btn {
                margin-top: 10px;
                background-color: #f0f2f2;
                border: 1px solid #d5d9d9;
                color: #0f1111;
            }
            
            .wishlist-btn:hover {
                background-color: #e7e9ec;
            }
        `;
        document.head.appendChild(style);
    }
}

// Export the notification system for use in other scripts
window.showNotification = function(message, type, duration) {
    notificationSystem.show(message, type, duration);
};

// Allow access to user manager
window.userManager = userManager;

/* CSS already implemented in auth.css
#notification-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    max-width: 350px;
}
*/ 