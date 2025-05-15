// Indian Products Database with prices in Rupees
const productsIndia = [
    // Electronics - Smartphones
    {
        id: 101,
        name: "iPhone 15",
        category: "electronics",
        subcategory: "smartphones",
        price: 79900,
        originalPrice: 84900,
        discount: 6,
        brand: "Apple",
        rating: 4.8,
        reviewCount: 2145,
        inStock: true,
        images: [
            "images/iphonww15.jpg"
        ],
        features: [
            "6.1-inch Super Retina XDR display",
            "48MP main camera with advanced features",
            "A16 Bionic chip",
            "All-day battery life",
            "iOS 17"
        ],
        colors: ["Black", "Blue", "Pink", "Yellow", "Green"],
        description: "Experience the iPhone 15 with powerful features including a 48MP camera, A16 Bionic chip, and all-day battery life. The durable design features Color-infused glass and aluminum.",
        specifications: {
            "Display": "6.1-inch Super Retina XDR",
            "Processor": "A16 Bionic chip",
            "RAM": "6GB",
            "Storage": "128GB",
            "Rear Camera": "48MP main + 12MP ultrawide",
            "Front Camera": "12MP TrueDepth",
            "Battery": "3349mAh",
            "Operating System": "iOS 17",
            "Dimensions": "147.6 x 71.6 x 7.8 mm",
            "Weight": "171g"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 102,
        name: "iPhone 14 Pro Max",
        category: "electronics",
        subcategory: "smartphones",
        price: 119900,
        originalPrice: 139900,
        discount: 14,
        brand: "Apple",
        rating: 4.9,
        reviewCount: 3254,
        inStock: true,
        images: [
            "images/iphone14 pro max.jpg"
        ],
        features: [
            "6.7-inch Super Retina XDR display with ProMotion",
            "48MP main camera with 4x optical zoom",
            "A16 Bionic chip",
            "Dynamic Island",
            "Always-On display"
        ],
        colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
        description: "The ultimate iPhone experience with a stunning 6.7-inch Super Retina XDR display, the innovative Dynamic Island, an Always-On display, and a 48MP main camera for incredible detail.",
        specifications: {
            "Display": "6.7-inch Super Retina XDR with ProMotion",
            "Processor": "A16 Bionic chip",
            "RAM": "6GB",
            "Storage": "128GB/256GB/512GB/1TB",
            "Rear Camera": "48MP main + 12MP ultrawide + 12MP telephoto",
            "Front Camera": "12MP TrueDepth",
            "Battery": "4323mAh",
            "Operating System": "iOS 16 (upgradable)",
            "Dimensions": "160.7 x 77.6 x 7.9 mm",
            "Weight": "240g"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 103,
        name: "Nothing Phone 2",
        category: "electronics",
        subcategory: "smartphones",
        price: 44999,
        originalPrice: 49999,
        discount: 10,
        brand: "Nothing",
        rating: 4.5,
        reviewCount: 1245,
        inStock: true,
        images: [
            "images/nothingphone2.jpg"
        ],
        features: [
            "6.7-inch LTPO OLED display",
            "Glyph Interface with customizable lights",
            "Snapdragon 8+ Gen 1 processor",
            "50MP dual camera system",
            "4700mAh battery with fast charging"
        ],
        colors: ["White", "Dark Gray"],
        description: "The Nothing Phone 2 combines premium performance with a unique Glyph Interface. This advanced smartphone features a customizable LED notification system, powerful Snapdragon processor, and a clean, intuitive interface.",
        specifications: {
            "Display": "6.7-inch LTPO OLED, 120Hz",
            "Processor": "Snapdragon 8+ Gen 1",
            "RAM": "8GB/12GB",
            "Storage": "128GB/256GB",
            "Rear Camera": "50MP main + 50MP ultrawide",
            "Front Camera": "32MP",
            "Battery": "4700mAh",
            "Operating System": "Nothing OS 2.0 based on Android 13",
            "Dimensions": "162.1 x 76.4 x 8.6 mm",
            "Weight": "201g"
        },
        featured: true,
        bestseller: false
    },
    {
        id: 104,
        name: "Nothing CMF Phone",
        category: "electronics",
        subcategory: "smartphones",
        price: 19999,
        originalPrice: 22999,
        discount: 13,
        brand: "Nothing",
        rating: 4.2,
        reviewCount: 875,
        inStock: true,
        images: [
            "images/nhing cmf.jpg"
        ],
        features: [
            "6.5-inch AMOLED display",
            "MediaTek Dimensity 7200 processor",
            "50MP main camera",
            "5000mAh battery",
            "Clean, minimalist design"
        ],
        colors: ["Orange", "Black", "Blue"],
        description: "The Nothing CMF Phone offers premium features at an affordable price. With a sleek design, powerful performance, and exceptional battery life, it's the perfect everyday companion.",
        specifications: {
            "Display": "6.5-inch AMOLED, 90Hz",
            "Processor": "MediaTek Dimensity 7200",
            "RAM": "6GB/8GB",
            "Storage": "128GB",
            "Rear Camera": "50MP main + 8MP ultrawide",
            "Front Camera": "16MP",
            "Battery": "5000mAh",
            "Operating System": "Nothing OS Lite based on Android 13",
            "Dimensions": "160.1 x 75.7 x 8.1 mm",
            "Weight": "188g"
        },
        featured: false,
        bestseller: true
    },
    {
        id: 105,
        name: "OnePlus Nord CE 3",
        category: "electronics",
        subcategory: "smartphones",
        price: 26999,
        originalPrice: 29999,
        discount: 10,
        brand: "OnePlus",
        rating: 4.4,
        reviewCount: 1543,
        inStock: true,
        images: [
            "images/oneplusnord11.jpg"
        ],
        features: [
            "6.7-inch Fluid AMOLED display",
            "Snapdragon 782G processor",
            "50MP Sony IMX890 main camera",
            "5000mAh battery with 80W fast charging",
            "OxygenOS 13"
        ],
        colors: ["Black", "Aqua Surge"],
        description: "The OnePlus Nord CE 3 delivers flagship-level features at an affordable price. Enjoy smooth performance, exceptional photography, and all-day battery life with 80W SUPERVOOC fast charging.",
        specifications: {
            "Display": "6.7-inch Fluid AMOLED, 120Hz",
            "Processor": "Snapdragon 782G",
            "RAM": "8GB/12GB",
            "Storage": "128GB/256GB",
            "Rear Camera": "50MP + 8MP ultrawide + 2MP macro",
            "Front Camera": "16MP",
            "Battery": "5000mAh",
            "Operating System": "OxygenOS 13 based on Android 13",
            "Dimensions": "162.9 x 75.1 x 8.2 mm",
            "Weight": "184g"
        },
        featured: false,
        bestseller: true
    },
    
    // Electronics - Laptops
    {
        id: 201,
        name: "MacBook Air M2",
        category: "electronics",
        subcategory: "laptops",
        price: 114900,
        originalPrice: 119900,
        discount: 4,
        brand: "Apple",
        rating: 4.8,
        reviewCount: 2167,
        inStock: true,
        images: [
            "images/macbook.jpg"
        ],
        features: [
            "13.6-inch Liquid Retina display",
            "Apple M2 chip with 8-core CPU",
            "8GB unified memory with 256GB SSD",
            "Up to 18 hours of battery life",
            "1080p FaceTime HD camera"
        ],
        colors: ["Midnight", "Starlight", "Silver", "Space Gray"],
        description: "The new MacBook Air with M2 chip combines incredible performance and up to 18 hours of battery life with a thin, fanless design. The Liquid Retina display, 1080p FaceTime HD camera, and four-speaker sound system make this the perfect everyday laptop.",
        specifications: {
            "Display": "13.6-inch Liquid Retina, 2560 x 1664 resolution",
            "Processor": "Apple M2 chip with 8-core CPU, 8/10-core GPU",
            "Memory": "8GB/16GB/24GB unified memory",
            "Storage": "256GB/512GB/1TB/2TB SSD",
            "Battery": "Up to 18 hours",
            "Camera": "1080p FaceTime HD camera",
            "Operating System": "macOS Sonoma",
            "Ports": "2x Thunderbolt 3, MagSafe 3, headphone jack",
            "Dimensions": "304.1 x 215 x 11.3 mm",
            "Weight": "1.24kg"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 202,
        name: "Dell XPS 16",
        category: "electronics",
        subcategory: "laptops",
        price: 179900,
        originalPrice: 189900,
        discount: 5,
        brand: "Dell",
        rating: 4.7,
        reviewCount: 1289,
        inStock: true,
        images: [
            "images/xps 16.jpg"
        ],
        features: [
            "16-inch 4K+ OLED touch display",
            "Intel Core Ultra 9 processor",
            "32GB RAM, 1TB SSD",
            "NVIDIA GeForce RTX 4070 graphics",
            "InfinityEdge display with minimal bezels"
        ],
        colors: ["Platinum Silver", "Graphite"],
        description: "The Dell XPS 16 sets a new standard for premium laptops with its stunning 4K+ OLED display, powerful Intel Core Ultra processor, and RTX graphics. Perfect for creative professionals and demanding users.",
        specifications: {
            "Display": "16-inch 4K+ OLED touch, 3840 x 2400",
            "Processor": "Intel Core Ultra 9 185H",
            "RAM": "32GB LPDDR5x",
            "Storage": "1TB PCIe NVMe SSD",
            "Graphics": "NVIDIA GeForce RTX 4070 8GB",
            "Battery": "90WHr (up to 14 hours)",
            "Operating System": "Windows 11 Pro",
            "Ports": "3x Thunderbolt 4, 1x USB-C, SD card reader, headphone jack",
            "Dimensions": "359 x 240 x 18.6 mm",
            "Weight": "2.2kg"
        },
        featured: true,
        bestseller: false
    },
    {
        id: 203,
        name: "HP Pavilion 15",
        category: "electronics",
        subcategory: "laptops",
        price: 64999,
        originalPrice: 72999,
        discount: 11,
        brand: "HP",
        rating: 4.4,
        reviewCount: 2354,
        inStock: true,
        images: [
            "images/hp pavellian.jpg"
        ],
        features: [
            "15.6-inch FHD IPS display",
            "Intel Core i5-12500H processor",
            "16GB RAM, 512GB SSD",
            "Intel Iris Xe Graphics",
            "Long battery life with fast charging"
        ],
        colors: ["Silver", "Blue"],
        description: "The HP Pavilion 15 offers excellent performance for everyday computing tasks, with a bright Full HD display, powerful processor, and solid battery life in a sleek, stylish package.",
        specifications: {
            "Display": "15.6-inch FHD IPS, 1920 x 1080",
            "Processor": "Intel Core i5-12500H",
            "RAM": "16GB DDR4",
            "Storage": "512GB PCIe NVMe SSD",
            "Graphics": "Intel Iris Xe Graphics",
            "Battery": "Up to 8 hours",
            "Operating System": "Windows 11 Home",
            "Ports": "1x USB-C, 2x USB-A, HDMI, headphone jack",
            "Dimensions": "360.2 x 234 x 17.9 mm",
            "Weight": "1.75kg"
        },
        featured: false,
        bestseller: true
    },
    
    // Electronics - TVs
    {
        id: 301,
        name: "Samsung QLED 4K Smart TV",
        category: "electronics",
        subcategory: "televisions",
        price: 79999,
        originalPrice: 89999,
        discount: 11,
        brand: "Samsung",
        rating: 4.6,
        reviewCount: 1879,
        inStock: true,
        images: [
            "images/samsung qled tv.jpg"
        ],
        features: [
            "55-inch 4K QLED display",
            "Quantum Processor 4K",
            "Object Tracking Sound",
            "Motion Xcelerator Turbo+",
            "100% Color Volume with Quantum Dot"
        ],
        colors: ["Black"],
        description: "Experience breathtaking color and clarity with the Samsung QLED 4K Smart TV. The Quantum Processor 4K optimizes content for stunning picture quality, while Object Tracking Sound delivers immersive audio that follows the action.",
        specifications: {
            "Display": "55-inch 4K QLED, 3840 x 2160",
            "Processor": "Quantum Processor 4K",
            "HDR": "Quantum HDR",
            "Refresh Rate": "120Hz",
            "Sound": "40W, 2.2.2 channel",
            "Smart TV": "Tizen OS",
            "Connectivity": "Wi-Fi, Bluetooth, AirPlay 2",
            "Ports": "4x HDMI (1x eARC), 2x USB, Ethernet",
            "Dimensions": "1227.4 x 784.2 x 255.6 mm (with stand)",
            "Weight": "18.5kg (with stand)"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 302,
        name: "Sony Bravia 4K Ultra HD Smart TV",
        category: "electronics",
        subcategory: "televisions",
        price: 94999,
        originalPrice: 109999,
        discount: 14,
        brand: "Sony",
        rating: 4.7,
        reviewCount: 1532,
        inStock: true,
        images: [
            "images/sony bravia tv.jpg"
        ],
        features: [
            "65-inch 4K Ultra HD display",
            "Cognitive Processor XR",
            "XR Triluminos Pro",
            "Google TV with voice search",
            "Acoustic Multi-Audio"
        ],
        colors: ["Black"],
        description: "The Sony Bravia 4K Ultra HD Smart TV delivers lifelike picture quality with the revolutionary Cognitive Processor XR. Experience immersive sound that perfectly matches the on-screen action and enjoy seamless access to content with Google TV.",
        specifications: {
            "Display": "65-inch 4K Ultra HD, 3840 x 2160",
            "Processor": "Cognitive Processor XR",
            "HDR": "XR HDR Remaster",
            "Refresh Rate": "120Hz",
            "Sound": "30W, Acoustic Multi-Audio",
            "Smart TV": "Google TV",
            "Connectivity": "Wi-Fi, Bluetooth, Apple AirPlay, HomeKit",
            "Ports": "4x HDMI (2x HDMI 2.1), 2x USB, Ethernet",
            "Dimensions": "1450 x 903 x 338 mm (with stand)",
            "Weight": "23.2kg (with stand)"
        },
        featured: true,
        bestseller: false
    },
    
    // Clothing
    {
        id: 401,
        name: "Women's Formal Shirt",
        category: "clothing",
        subcategory: "women",
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        brand: "FashionPlus",
        rating: 4.3,
        reviewCount: 528,
        inStock: true,
        images: [
            "images/formal shirt for women.jpg"
        ],
        features: [
            "Premium cotton blend fabric",
            "Formal design with classic collar",
            "Button-down front",
            "Long sleeves with cuffs",
            "Machine washable"
        ],
        colors: ["White", "Black", "Blue", "Pink"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "This elegant formal shirt for women offers a perfect blend of comfort and style. Made from premium cotton blend fabric, it features a classic collar, button-down front, and long sleeves with cuffs. Ideal for office wear or formal occasions.",
        specifications: {
            "Material": "65% Cotton, 35% Polyester",
            "Care": "Machine wash cold, tumble dry low",
            "Closure": "Button-down front",
            "Collar": "Classic collar",
            "Sleeves": "Long with cuffs",
            "Fit": "Regular fit"
        },
        featured: false,
        bestseller: true
    },
    {
        id: 402,
        name: "Men's Casual Shirt",
        category: "clothing",
        subcategory: "men",
        price: 1299,
        originalPrice: 1599,
        discount: 19,
        brand: "Lifestyle",
        rating: 4.4,
        reviewCount: 762,
        inStock: true,
        images: [
            "images/casual shirt.jpg"
        ],
        features: [
            "100% cotton fabric",
            "Regular fit with button-down front",
            "Casual collar design",
            "Single chest pocket",
            "Available in multiple colors"
        ],
        colors: ["Blue", "Black", "Grey", "White", "Red"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "This men's casual shirt is perfect for everyday wear. Made from 100% cotton, it offers exceptional comfort and breathability. The regular fit and casual collar design make it versatile for various occasions, from office casual to weekend outings.",
        specifications: {
            "Material": "100% Cotton",
            "Care": "Machine wash cold",
            "Closure": "Button-down front",
            "Collar": "Casual collar",
            "Sleeves": "Long sleeves with button cuffs",
            "Fit": "Regular fit"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 403,
        name: "Kids' T-Shirt Pack of 3",
        category: "clothing",
        subcategory: "kids",
        price: 899,
        originalPrice: 1299,
        discount: 31,
        brand: "KidsCorner",
        rating: 4.5,
        reviewCount: 324,
        inStock: true,
        images: [
            "images/pack of 3 shirts.jpg"
        ],
        features: [
            "Soft cotton material",
            "Pack of 3 different colors",
            "Round neck design",
            "Short sleeves",
            "Fun graphic prints"
        ],
        colors: ["Multicolor"],
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-12Y"],
        description: "This pack of 3 kids' t-shirts offers excellent value and versatility. Made from soft cotton material, these t-shirts feature fun graphic prints that kids will love. The comfortable round neck design and short sleeves make them perfect for everyday wear.",
        specifications: {
            "Material": "100% Cotton",
            "Care": "Machine wash cold",
            "Neckline": "Round neck",
            "Sleeves": "Short sleeves",
            "Package Contents": "3 t-shirts in different colors/designs",
            "Fit": "Regular fit"
        },
        featured: false,
        bestseller: true
    },
    
    // Home & Kitchen
    {
        id: 501,
        name: "Stainless Steel Cookware Set",
        category: "home",
        subcategory: "kitchen",
        price: 4999,
        originalPrice: 6999,
        discount: 29,
        brand: "HomeCook",
        rating: 4.6,
        reviewCount: 892,
        inStock: true,
        images: [
            "images/steel utensils.jpg"
        ],
        features: [
            "Premium stainless steel construction",
            "Includes 5 pieces: frying pan, saucepan, stockpot, and lids",
            "Oven safe up to 500°F",
            "Dishwasher safe",
            "Induction compatible"
        ],
        colors: ["Silver"],
        description: "This premium stainless steel cookware set includes everything you need for your kitchen. The set features a frying pan, saucepan, stockpot, and lids, all made from high-quality stainless steel. The cookware is oven safe up to 500°F, dishwasher safe, and compatible with all stovetops including induction.",
        specifications: {
            "Material": "18/10 Stainless Steel",
            "Pieces Included": "10-inch frying pan, 2-quart saucepan with lid, 5-quart stockpot with lid",
            "Oven Safe": "Up to 500°F",
            "Dishwasher Safe": "Yes",
            "Induction Compatible": "Yes",
            "Care": "Dishwasher safe or hand wash"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 502,
        name: "Decorative Curtains - Set of 2",
        category: "home",
        subcategory: "decor",
        price: 1799,
        originalPrice: 2299,
        discount: 22,
        brand: "HomeDecor",
        rating: 4.3,
        reviewCount: 568,
        inStock: true,
        images: [
            "images/curtains1.jpg"
        ],
        features: [
            "Blackout curtains with elegant design",
            "Set of 2 panels",
            "Each panel: 52 inches wide x 84 inches long",
            "8 grommets per panel",
            "Machine washable"
        ],
        colors: ["Blue", "Grey", "Beige", "Burgundy"],
        description: "Transform your space with these elegant decorative curtains. The set includes 2 panels, each measuring 52 inches wide by 84 inches long. The blackout feature helps block sunlight and provides privacy, while the stylish design adds a touch of elegance to any room.",
        specifications: {
            "Material": "100% Polyester",
            "Dimensions": "Each panel: 52\" W x 84\" L",
            "Grommet Size": "1.6 inch interior diameter",
            "Care": "Machine washable, gentle cycle, cold water",
            "Features": "Blackout, noise reducing, thermal insulating",
            "Package Contents": "2 curtain panels"
        },
        featured: false,
        bestseller: true
    },
    
    // Books
    {
        id: 601,
        name: "Sherlock Holmes Collection",
        category: "books",
        subcategory: "fiction",
        price: 899,
        originalPrice: 1199,
        discount: 25,
        brand: "Penguin Classics",
        rating: 4.8,
        reviewCount: 1243,
        inStock: true,
        images: [
            "images/sherlock holmes book.jpg"
        ],
        features: [
            "Complete collection of Sherlock Holmes stories",
            "Written by Sir Arthur Conan Doyle",
            "Hardcover edition with elegant design",
            "Includes all 4 novels and 56 short stories",
            "Beautifully illustrated"
        ],
        description: "Immerse yourself in the world of the legendary detective with this complete Sherlock Holmes collection. This elegant hardcover edition includes all four novels and 56 short stories written by Sir Arthur Conan Doyle, beautifully illustrated throughout.",
        specifications: {
            "Author": "Sir Arthur Conan Doyle",
            "Publisher": "Penguin Classics",
            "Language": "English",
            "Hardcover": "1096 pages",
            "ISBN-10": "1234567890",
            "ISBN-13": "978-1234567890",
            "Dimensions": "6 x 2 x 9 inches",
            "Weight": "1.2 kg"
        },
        featured: true,
        bestseller: true
    },
    
    // Electronics - Accessories
    {
        id: 701,
        name: "Wireless Earbuds",
        category: "electronics",
        subcategory: "accessories",
        price: 3999,
        originalPrice: 4999,
        discount: 20,
        brand: "SoundMax",
        rating: 4.5,
        reviewCount: 2345,
        inStock: true,
        images: [
            "images/twsearbuds.jpeg"
        ],
        features: [
            "True wireless stereo technology",
            "Active noise cancellation",
            "Up to 30 hours total battery life with case",
            "Sweat and water resistant (IPX5)",
            "Touch controls"
        ],
        colors: ["Black", "White", "Navy Blue"],
        description: "Experience premium sound quality with these wireless earbuds featuring active noise cancellation and true wireless stereo technology. With up to 30 hours of total battery life with the charging case, these earbuds are perfect for commuting, workouts, and everyday use.",
        specifications: {
            "Driver Size": "10mm dynamic drivers",
            "Bluetooth Version": "5.2",
            "Battery Life": "6 hours (earbuds), 24 hours additional (case)",
            "Charging Time": "1.5 hours for earbuds, 2 hours for case",
            "Water Resistance": "IPX5",
            "Microphones": "4 mics for calls and ANC",
            "Controls": "Touch controls on both earbuds",
            "Weight": "5.4g per earbud, 45g charging case"
        },
        featured: true,
        bestseller: true
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { productsIndia };
} else {
    // For browser environment
    window.productsIndia = productsIndia;
} 