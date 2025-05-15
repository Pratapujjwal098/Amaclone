# AmaClone - Fully Functional Amazon Clone

AmaClone is a fully functional Amazon clone that works offline and can be shared across multiple devices. The application uses client-side storage to maintain user accounts, cart data, and product information.

## Features

- User authentication system (register, login, logout)
- Product browsing and search
- Shopping cart functionality
- Wishlist
- Order management
- Works completely offline
- Progressive Web App (PWA) support
- Responsive design for all devices

## How to Use Across Multiple Devices

1. Copy the entire `eco` folder to any device you want to run the application on.
2. Open `index.html` in any modern web browser.
3. The application will work fully offline after the first load.

## Technical Details

- User account data is stored in the browser's localStorage
- Product data is stored in localStorage after first load
- Service worker caches all necessary files for offline use
- PWA manifest allows installation on mobile devices

## Browser Support

This application works on all modern browsers:
- Google Chrome
- Firefox
- Safari
- Microsoft Edge

## Setting Up Images for PWA

For full PWA support, create two logo images:
1. Place a 192x192 pixel logo at `Images/logo-192.png`
2. Place a 512x512 pixel logo at `Images/logo-512.png`

These images are used when installing the app on mobile devices.

## Development

If you need to make changes to the codebase:

1. Modify HTML, CSS, and JavaScript files as needed
2. Test changes by opening `index.html` in a browser
3. No build step or server is required

## License

This project is intended for educational purposes only. 