// Product Database
const products = [
    // Electronics - Smartphones
    {
        id: 1,
        name: "TechPro X1 Smartphone",
        category: "electronics",
        subcategory: "smartphones",
        price: 799.99,
        originalPrice: 899.99,
        discount: 11,
        brand: "TechPro",
        rating: 4.7,
        reviewCount: 3842,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=TechPro+X1+Front",
            "https://via.placeholder.com/500x500?text=TechPro+X1+Back",
            "https://via.placeholder.com/500x500?text=TechPro+X1+Side"
        ],
        features: [
            "6.5-inch Super AMOLED display",
            "Triple camera system with 64MP main sensor",
            "8GB RAM with 128GB storage",
            "5000mAh battery with fast charging",
            "5G connectivity"
        ],
        colors: ["Black", "Silver", "Blue"],
        description: "The TechPro X1 combines cutting-edge technology with elegant design. Featuring a stunning 6.5-inch Super AMOLED display and powerful triple camera system, this smartphone delivers exceptional performance for both work and play. With 5G connectivity and all-day battery life, you'll stay connected wherever you go.",
        specifications: {
            "Display": "6.5-inch Super AMOLED, 2400 x 1080 resolution",
            "Processor": "OctaCore 2.4GHz",
            "RAM": "8GB",
            "Storage": "128GB",
            "Rear Camera": "64MP + 12MP + 8MP",
            "Front Camera": "20MP",
            "Battery": "5000mAh",
            "Operating System": "Android 12",
            "Dimensions": "164.3 x 74.8 x 8.9 mm",
            "Weight": "189g"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 2,
        name: "UltraPhone Pro Max",
        category: "electronics",
        subcategory: "smartphones",
        price: 1099.99,
        originalPrice: 1299.99,
        discount: 15,
        brand: "UltraPhone",
        rating: 4.8,
        reviewCount: 2754,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=UltraPhone+Pro+Max+Front",
            "https://via.placeholder.com/500x500?text=UltraPhone+Pro+Max+Back"
        ],
        features: [
            "6.7-inch Retina XDR display",
            "Quad camera system with 108MP main sensor",
            "12GB RAM with 256GB storage",
            "4800mAh battery with wireless charging",
            "Advanced AI capabilities"
        ],
        colors: ["Graphite", "Gold", "Silver", "Pacific Blue"],
        description: "Experience the ultimate in smartphone technology with the UltraPhone Pro Max. Featuring a breathtaking 6.7-inch Retina XDR display and revolutionary quad camera system, this device sets a new standard for mobile photography and performance. With the fastest processor ever in a smartphone, you'll enjoy seamless multitasking and gaming.",
        specifications: {
            "Display": "6.7-inch Retina XDR, 2778 x 1284 resolution",
            "Processor": "A15 Bionic chip",
            "RAM": "12GB",
            "Storage": "256GB",
            "Rear Camera": "108MP + 12MP + 12MP + 8MP",
            "Front Camera": "24MP",
            "Battery": "4800mAh",
            "Operating System": "iOS 15",
            "Dimensions": "160.8 x 78.1 x 7.4 mm",
            "Weight": "228g"
        },
        featured: true,
        bestseller: false
    },
    {
        id: 3,
        name: "Google Pixel 7",
        category: "electronics",
        subcategory: "smartphones",
        price: 599.99,
        originalPrice: 699.99,
        discount: 14,
        brand: "Google",
        rating: 4.6,
        reviewCount: 1987,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Google+Pixel+7+Front",
            "https://via.placeholder.com/500x500?text=Google+Pixel+7+Back"
        ],
        features: [
            "6.3-inch OLED display",
            "Dual camera with advanced computational photography",
            "8GB RAM with 128GB storage",
            "4500mAh battery",
            "Pure Android experience"
        ],
        colors: ["Obsidian", "Snow", "Lemongrass"],
        description: "Introducing the Google Pixel 7, delivering the ultimate Android experience with a powerful camera system that uses computational photography to capture stunning images in any light. With the Google Tensor chip, the Pixel 7 offers innovative AI features to make your phone more helpful than ever. Enjoy the clean, intuitive interface of pure Android with guaranteed updates.",
        specifications: {
            "Display": "6.3-inch OLED, 2400 x 1080 resolution",
            "Processor": "Google Tensor G2",
            "RAM": "8GB",
            "Storage": "128GB",
            "Rear Camera": "50MP + 12MP ultrawide",
            "Front Camera": "10.8MP",
            "Battery": "4500mAh",
            "Operating System": "Android 13",
            "Dimensions": "155.6 x 73.2 x 8.7 mm",
            "Weight": "197g"
        },
        featured: false,
        bestseller: true
    },
    
    // Electronics - Laptops
    {
        id: 4,
        name: "TechPro UltraBook X",
        category: "electronics",
        subcategory: "laptops",
        price: 1299.99,
        originalPrice: 1499.99,
        discount: 13,
        brand: "TechPro",
        rating: 4.5,
        reviewCount: 1245,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=TechPro+UltraBook+Front",
            "https://via.placeholder.com/500x500?text=TechPro+UltraBook+Side"
        ],
        features: [
            "15.6-inch 4K OLED display",
            "Intel Core i7 processor",
            "16GB RAM with 512GB SSD",
            "NVIDIA GeForce RTX 3050 graphics",
            "Up to 12 hours battery life"
        ],
        colors: ["Silver", "Space Gray"],
        description: "The TechPro UltraBook X combines power and portability in a sleek design. With a stunning 15.6-inch 4K OLED display and powerful Intel Core i7 processor, this laptop delivers exceptional performance for both creative professionals and casual users. The NVIDIA GeForce RTX 3050 graphics card ensures smooth performance for demanding applications and light gaming.",
        specifications: {
            "Display": "15.6-inch 4K OLED, 3840 x 2160 resolution",
            "Processor": "Intel Core i7-11800H",
            "RAM": "16GB DDR4",
            "Storage": "512GB NVMe SSD",
            "Graphics": "NVIDIA GeForce RTX 3050 4GB",
            "Battery": "70Wh (up to 12 hours)",
            "Operating System": "Windows 11 Home",
            "Ports": "2x USB-C, 1x USB-A, HDMI, headphone jack",
            "Dimensions": "356 x 234 x 15.8 mm",
            "Weight": "1.6kg"
        },
        featured: true,
        bestseller: false
    },
    {
        id: 5,
        name: "MacBook Air M2",
        category: "electronics",
        subcategory: "laptops",
        price: 1199.99,
        originalPrice: 1199.99,
        discount: 0,
        brand: "Apple",
        rating: 4.9,
        reviewCount: 3576,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=MacBook+Air+M2+Front",
            "https://via.placeholder.com/500x500?text=MacBook+Air+M2+Side"
        ],
        features: [
            "13.6-inch Liquid Retina display",
            "Apple M2 chip with 8-core CPU",
            "8GB unified memory with 256GB SSD",
            "Up to 18 hours of battery life",
            "FaceTime HD camera"
        ],
        colors: ["Silver", "Space Gray", "Midnight", "Starlight"],
        description: "Supercharged by the next-generation M2 chip, the redesigned MacBook Air combines incredible performance and up to 18 hours of battery life in a thin, fanless design. With a stunning Liquid Retina display and new 1080p FaceTime HD camera, this MacBook Air is the perfect everyday laptop for work, study, and creative projects.",
        specifications: {
            "Display": "13.6-inch Liquid Retina, 2560 x 1664 resolution",
            "Processor": "Apple M2 chip with 8-core CPU, 8-core GPU",
            "Memory": "8GB unified memory",
            "Storage": "256GB SSD",
            "Battery": "Up to 18 hours",
            "Camera": "1080p FaceTime HD camera",
            "Operating System": "macOS Ventura",
            "Ports": "2x Thunderbolt / USB 4, MagSafe 3, headphone jack",
            "Dimensions": "304.1 x 215 x 11.3 mm",
            "Weight": "1.24kg"
        },
        featured: true,
        bestseller: true
    },
    
    // Electronics - Headphones
    {
        id: 6,
        name: "SoundMax Pro Wireless Headphones",
        category: "electronics",
        subcategory: "headphones",
        price: 249.99,
        originalPrice: 299.99,
        discount: 17,
        brand: "SoundMax",
        rating: 4.7,
        reviewCount: 2189,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=SoundMax+Headphones+Front",
            "https://via.placeholder.com/500x500?text=SoundMax+Headphones+Side"
        ],
        features: [
            "Active Noise Cancellation",
            "Up to 30 hours of battery life",
            "High-fidelity audio with custom drivers",
            "Comfortable memory foam ear cushions",
            "Touch controls and voice assistant support"
        ],
        colors: ["Black", "Silver", "Midnight Blue"],
        description: "Immerse yourself in sound with the SoundMax Pro Wireless Headphones. Featuring best-in-class Active Noise Cancellation and studio-quality sound, these headphones deliver an exceptional listening experience in any environment. With up to 30 hours of battery life and ultra-comfortable design, you can enjoy your music all day long.",
        specifications: {
            "Driver Size": "40mm custom dynamic drivers",
            "Frequency Response": "20Hz - 20kHz",
            "Battery Life": "Up to 30 hours (ANC on), 40 hours (ANC off)",
            "Charging Time": "2 hours full charge, 10 minutes for 5 hours playback",
            "Connectivity": "Bluetooth 5.2, 3.5mm wired",
            "Microphones": "4 microphones for calls and ANC",
            "Weight": "254g"
        },
        featured: false,
        bestseller: true
    },
    
    // Electronics - Smartwatches
    {
        id: 7,
        name: "FitPro Smart Watch Series 5",
        category: "electronics",
        subcategory: "smartwatches",
        price: 199.99,
        originalPrice: 249.99,
        discount: 20,
        brand: "FitPro",
        rating: 4.6,
        reviewCount: 1572,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=FitPro+Watch+Front",
            "https://via.placeholder.com/500x500?text=FitPro+Watch+Side"
        ],
        features: [
            "1.4-inch AMOLED always-on display",
            "Heart rate and blood oxygen monitoring",
            "30+ sport modes",
            "Sleep tracking",
            "Water-resistant to 50m",
            "Up to 14 days battery life"
        ],
        colors: ["Black", "Silver", "Rose Gold"],
        description: "Take control of your fitness journey with the FitPro Smart Watch Series 5. This advanced fitness tracker monitors your heart rate, blood oxygen levels, and sleep patterns to provide comprehensive health insights. With 30+ sport modes and water resistance up to 50 meters, this smartwatch is perfect for any activity. The stunning AMOLED display and 14-day battery life ensure you stay connected and motivated throughout your fitness journey.",
        specifications: {
            "Display": "1.4-inch AMOLED, 454 x 454 resolution",
            "Sensors": "Heart rate, SpO2, accelerometer, gyroscope, geomagnetic",
            "Battery": "Up to 14 days typical use, 20 days basic use",
            "Water Resistance": "5 ATM (50 meters)",
            "Connectivity": "Bluetooth 5.0, GPS",
            "Compatibility": "Android 5.0+, iOS 10.0+",
            "Dimensions": "46.2 x 46.2 x 10.7 mm",
            "Weight": "32g (without strap)"
        },
        featured: true,
        bestseller: false
    },
    
    // Electronics - Tablets
    {
        id: 8,
        name: "TechPro TabX Pro",
        category: "electronics",
        subcategory: "tablets",
        price: 449.99,
        originalPrice: 499.99,
        discount: 10,
        brand: "TechPro",
        rating: 4.5,
        reviewCount: 987,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=TechPro+TabX+Front",
            "https://via.placeholder.com/500x500?text=TechPro+TabX+Back"
        ],
        features: [
            "10.8-inch 2K display with HDR support",
            "Octa-core processor",
            "6GB RAM with 128GB storage",
            "Quad speakers with Dolby Atmos",
            "8000mAh battery with fast charging",
            "Optional keyboard and stylus"
        ],
        colors: ["Gray", "Silver"],
        description: "The TechPro TabX Pro is the perfect companion for work and entertainment on the go. Featuring a stunning 10.8-inch 2K display and powerful octa-core processor, this tablet delivers exceptional performance for productivity and media consumption. The quad speaker system with Dolby Atmos creates an immersive audio experience, while the large battery ensures all-day usage.",
        specifications: {
            "Display": "10.8-inch IPS LCD, 2560 x 1600 resolution",
            "Processor": "Octa-core 2.3GHz",
            "RAM": "6GB",
            "Storage": "128GB (expandable via microSD)",
            "Battery": "8000mAh",
            "Camera": "13MP rear, 8MP front",
            "Operating System": "Android 12",
            "Connectivity": "Wi-Fi 6, Bluetooth 5.1, USB-C",
            "Dimensions": "258.4 x 163 x 7.2 mm",
            "Weight": "490g"
        },
        featured: false,
        bestseller: true
    },
    
    // Electronics - Cameras
    {
        id: 9,
        name: "PhotoMaster X3 Digital Camera",
        category: "electronics",
        subcategory: "cameras",
        price: 899.99,
        originalPrice: 999.99,
        discount: 10,
        brand: "PhotoMaster",
        rating: 4.8,
        reviewCount: 758,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=PhotoMaster+X3+Front",
            "https://via.placeholder.com/500x500?text=PhotoMaster+X3+Top"
        ],
        features: [
            "24.2MP APS-C CMOS sensor",
            "4K video recording at 30fps",
            "3-inch vari-angle touchscreen",
            "45-point all cross-type AF system",
            "Built-in Wi-Fi and Bluetooth",
            "Weather-sealed body"
        ],
        colors: ["Black"],
        description: "Capture life's moments with exceptional clarity using the PhotoMaster X3 Digital Camera. This versatile mirrorless camera combines a high-resolution 24.2MP sensor with advanced autofocus capabilities to deliver stunning photos in any situation. With 4K video recording and a vari-angle touchscreen, the PhotoMaster X3 is perfect for both photography enthusiasts and content creators.",
        specifications: {
            "Sensor": "24.2MP APS-C CMOS",
            "Processor": "DIGIC X",
            "ISO Range": "100-25600 (expandable to 51200)",
            "Autofocus": "45-point all cross-type AF system",
            "Video": "4K at 30fps, Full HD at 120fps",
            "Display": "3-inch vari-angle touchscreen, 1.04 million dots",
            "Connectivity": "Wi-Fi, Bluetooth, USB-C",
            "Battery Life": "Approx. 800 shots per charge",
            "Dimensions": "132.5 x 92.8 x 70.0 mm",
            "Weight": "485g (body only)"
        },
        featured: true,
        bestseller: false
    },
    
    // Electronics - Smart Home
    {
        id: 10,
        name: "HomeSmart Pro Speaker",
        category: "electronics",
        subcategory: "smart_home",
        price: 129.99,
        originalPrice: 159.99,
        discount: 19,
        brand: "HomeSmart",
        rating: 4.6,
        reviewCount: 2156,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=HomeSmart+Speaker+Front",
            "https://via.placeholder.com/500x500?text=HomeSmart+Speaker+Side"
        ],
        features: [
            "Room-filling 360° sound",
            "Built-in voice assistant",
            "Smart home hub functionality",
            "Multi-room audio support",
            "Privacy controls with physical mute button"
        ],
        colors: ["Charcoal", "Sandstone", "Twilight Blue"],
        description: "Transform your home with the HomeSmart Pro Speaker. This intelligent speaker delivers room-filling sound while serving as the command center for your smart home. With a built-in voice assistant, you can control compatible devices, play music, get answers to questions, and manage your day—all hands-free. The HomeSmart Pro Speaker adapts to any room, automatically sensing the acoustics to optimize sound.",
        specifications: {
            "Speakers": "1\" tweeter, 3\" woofer",
            "Microphones": "7 far-field microphones",
            "Connectivity": "Dual-band Wi-Fi, Bluetooth 5.0",
            "Compatibility": "Works with major smart home platforms",
            "Power": "120V power adapter",
            "Dimensions": "148 x 148 x 160 mm",
            "Weight": "970g"
        },
        featured: true,
        bestseller: true
    }
];

// More products will continue in products2.js 