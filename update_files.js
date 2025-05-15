// Script to update all HTML files for offline use
const fs = require('fs');
const path = require('path');

// Get all HTML files in the current directory
const htmlFiles = fs.readdirSync('./').filter(file => file.endsWith('.html'));

// Function to add service worker registration to file
function addServiceWorkerRegistration(content) {
    // Check if service worker registration already exists
    if (content.includes('serviceWorker.register')) {
        return content;
    }
    
    // Find the closing body tag and insert the script before it
    const scriptToAdd = `
    <script>
        // Register service worker for offline functionality
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js')
                    .then(reg => console.log('Service Worker registered successfully'))
                    .catch(err => console.log('Service Worker registration failed', err));
            });
        }
    </script>
</body>`;

    return content.replace('</body>', scriptToAdd);
}

// Function to add manifest link to head
function addManifestLink(content) {
    // Check if manifest link already exists
    if (content.includes('<link rel="manifest"')) {
        return content;
    }
    
    // Add manifest link after the last stylesheet link
    const headSection = `    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#131921">
    <!-- iOS support -->
    <link rel="apple-touch-icon" href="Images/logo-192.png">
    <meta name="apple-mobile-web-app-status-bar" content="#131921">`;

    return content.replace('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">', headSection);
}

// Function to remove the attribution
function removeAttribution(content) {
    return content.replace(/&copy; 2025 AmaClone India. All Rights Reserved.@Tahsin Raza<\/p>/, '&copy; 2025 AmaClone India. All Rights Reserved.</p>');
}

// Process each HTML file
htmlFiles.forEach(file => {
    console.log(`Processing ${file}...`);
    const filePath = path.join('./', file);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply modifications
    content = removeAttribution(content);
    
    // Only add manifest and service worker to files that have a proper HTML structure
    if (content.includes('<head>') && content.includes('</body>')) {
        content = addManifestLink(content);
        content = addServiceWorkerRegistration(content);
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content);
    
    console.log(`✓ Updated ${file}`);
});

console.log('All files updated successfully!'); 