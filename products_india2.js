// Indian Products Database (Part 2) with prices in Rupees
const productsIndia2 = [
    // Electronics - Smart TVs (continued)
    {
        id: 303,
        name: "LG 139 cm (55 inch) 4K Smart TV",
        category: "electronics",
        subcategory: "televisions",
        price: 59999,
        originalPrice: 72999,
        discount: 18,
        brand: "LG",
        rating: 4.5,
        reviewCount: 1278,
        inStock: true,
        images: [
            "images/lg 139 cm tv.jpg"
        ],
        features: [
            "55-inch 4K Ultra HD display",
            "α5 AI Processor 4K Gen6",
            "WebOS 23 with ThinQ AI",
            "Active HDR with HDR10 Pro",
            "AI Sound with Virtual 5.1.2 up-mix"
        ],
        colors: ["Black"],
        description: "The LG 4K Smart TV delivers exceptional picture and sound quality with its α5 AI Processor and AI Sound technology. Enjoy smooth gaming with Game Optimizer and ALLM, plus access to a world of content with WebOS 23.",
        specifications: {
            "Display": "55-inch 4K Ultra HD LED, 3840 x 2160",
            "Processor": "α5 AI Processor 4K Gen6",
            "HDR": "Active HDR with HDR10 Pro",
            "Refresh Rate": "60Hz",
            "Sound": "20W, Virtual 5.1.2 up-mix",
            "Smart TV": "WebOS 23 with ThinQ AI",
            "Connectivity": "Wi-Fi, Bluetooth, AirPlay 2",
            "Ports": "3x HDMI, 2x USB, Ethernet",
            "Dimensions": "1233 x 776 x 235 mm (with stand)",
            "Weight": "16.5kg (with stand)"
        },
        featured: false,
        bestseller: true
    },
    {
        id: 304,
        name: "Realme 108 cm (43 inch) Full HD Smart TV",
        category: "electronics",
        subcategory: "televisions",
        price: 22999,
        originalPrice: 29999,
        discount: 23,
        brand: "Realme",
        rating: 4.2,
        reviewCount: 983,
        inStock: true,
        images: [
            "images/realme tv.jpg"
        ],
        features: [
            "43-inch Full HD display",
            "Chroma Boost Picture Engine",
            "24W Quad Stereo Speakers with Dolby Audio",
            "Android TV 11 with Google Assistant",
            "Bezel-less design"
        ],
        colors: ["Black"],
        description: "The Realme Full HD Smart TV offers an immersive viewing experience with its Chroma Boost Picture Engine and bezel-less design. Enjoy powerful sound from 24W Quad Stereo Speakers with Dolby Audio, and access all your favorite content through Android TV 11.",
        specifications: {
            "Display": "43-inch Full HD LED, 1920 x 1080",
            "Picture Engine": "Chroma Boost",
            "Refresh Rate": "60Hz",
            "Sound": "24W Quad Stereo Speakers, Dolby Audio",
            "Smart TV": "Android TV 11",
            "Connectivity": "Wi-Fi, Bluetooth 5.0",
            "Ports": "3x HDMI, 2x USB, Ethernet",
            "Dimensions": "958 x 569 x 82 mm (without stand)",
            "Weight": "7.3kg (without stand)"
        },
        featured: false,
        bestseller: true
    },
    
    // Electronics - Refrigerators
    {
        id: 305,
        name: "Samsung 653L Side-by-Side Refrigerator",
        category: "electronics",
        subcategory: "appliances",
        price: 89990,
        originalPrice: 118900,
        discount: 24,
        brand: "Samsung",
        rating: 4.6,
        reviewCount: 753,
        inStock: true,
        images: [
            "images/fridge1.webp"
        ],
        features: [
            "653 liters capacity",
            "SpaceMax Technology",
            "Twin Cooling Plus",
            "Digital Inverter Technology",
            "Smart Conversion 5-in-1"
        ],
        colors: ["Refined Inox", "Black"],
        description: "The Samsung Side-by-Side Refrigerator features SpaceMax Technology that creates more storage space inside without increasing external dimensions. Twin Cooling Plus provides optimal humidity and prevents odor mixing, while Digital Inverter Technology ensures energy efficiency and durability.",
        specifications: {
            "Capacity": "653 liters (409L fresh food, 244L freezer)",
            "Energy Rating": "3 Star",
            "Technology": "Twin Cooling Plus",
            "Compressor": "Digital Inverter",
            "Cooling": "Multi Flow",
            "Special Features": "Smart Conversion 5-in-1, Power Cool, Power Freeze",
            "Dimensions": "912 x 1780 x 716 mm",
            "Weight": "110kg"
        },
        featured: true,
        bestseller: false
    },
    {
        id: 306,
        name: "LG 260L Frost-Free Double Door Refrigerator",
        category: "electronics",
        subcategory: "appliances",
        price: 31990,
        originalPrice: 38990,
        discount: 18,
        brand: "LG",
        rating: 4.4,
        reviewCount: 1290,
        inStock: true,
        images: [
            "images/fridge5.jpg"
        ],
        features: [
            "260 liters capacity",
            "Smart Inverter Compressor",
            "Convertible Plus with Multi Air Flow",
            "Door Cooling+",
            "Ice Beam Door Cooling"
        ],
        colors: ["Shiny Steel", "Dazzle Steel"],
        description: "This LG 260L Frost-Free Refrigerator combines efficiency with smart features. The Smart Inverter Compressor adjusts cooling power based on load, saving energy and reducing noise. Convertible Plus offers flexible storage options, while Door Cooling+ ensures uniform cooling throughout.",
        specifications: {
            "Capacity": "260 liters (188L fresh food, 72L freezer)",
            "Energy Rating": "4 Star",
            "Technology": "Smart Inverter Compressor",
            "Cooling": "Multi Air Flow",
            "Special Features": "Door Cooling+, Convertible Plus",
            "Dimensions": "595 x 1565 x 685 mm",
            "Weight": "54kg"
        },
        featured: false,
        bestseller: true
    },
    
    // Electronics - Microwaves
    {
        id: 307,
        name: "IFB 30L Convection Microwave Oven",
        category: "electronics",
        subcategory: "appliances",
        price: 16990,
        originalPrice: 20990,
        discount: 19,
        brand: "IFB",
        rating: 4.5,
        reviewCount: 845,
        inStock: true,
        images: [
            "images/microwave1.jpg"
        ],
        features: [
            "30 liters capacity",
            "Convection with 101 auto cook menus",
            "301 auto cook menu options",
            "Multi-stage cooking",
            "Steam cleaning"
        ],
        colors: ["Black"],
        description: "The IFB 30L Convection Microwave Oven offers versatile cooking options with 301 auto cook menus. It features convection technology for baking and grilling, multi-stage cooking for complex recipes, and steam cleaning for easy maintenance.",
        specifications: {
            "Capacity": "30 liters",
            "Type": "Convection",
            "Power Output": "900W (Microwave), 1500W (Convection)",
            "Control": "Touch Key Pad + Jog Dial",
            "Special Features": "Steam Clean, Multi Stage Cooking, Weight Defrost",
            "Dimensions": "539 x 328 x 422 mm",
            "Weight": "19.8kg"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 308,
        name: "Samsung 28L Slim Fry Convection Microwave",
        category: "electronics",
        subcategory: "appliances",
        price: 14990,
        originalPrice: 18990,
        discount: 21,
        brand: "Samsung",
        rating: 4.3,
        reviewCount: 726,
        inStock: true,
        images: [
            "images/microwave3.jpg"
        ],
        features: [
            "28 liters capacity",
            "Slim Fry Technology",
            "Convection with 30 auto cook menus",
            "Tandoor Technology",
            "Eco Mode to save energy"
        ],
        colors: ["Black"],
        description: "The Samsung 28L Slim Fry Convection Microwave combines healthy cooking with convenience. Slim Fry Technology lets you prepare crispy food with minimal oil, while Tandoor Technology creates authentic tandoor-style dishes. With 30 auto cook menus and Eco Mode, it offers versatility and energy efficiency.",
        specifications: {
            "Capacity": "28 liters",
            "Type": "Convection",
            "Power Output": "900W (Microwave), 1400W (Convection)",
            "Control": "Touch Panel + Jog Dial",
            "Special Features": "Slim Fry, Tandoor Technology, Eco Mode",
            "Dimensions": "517 x 310 x 474.8 mm",
            "Weight": "17.5kg"
        },
        featured: false,
        bestseller: true
    },
    
    // Electronics - Smart Watches
    {
        id: 309,
        name: "Apple Watch Series 9",
        category: "electronics",
        subcategory: "wearables",
        price: 41900,
        originalPrice: 45900,
        discount: 9,
        brand: "Apple",
        rating: 4.8,
        reviewCount: 1567,
        inStock: true,
        images: [
            "images/smart watch 1.jpg"
        ],
        features: [
            "45mm always-on Retina display",
            "S9 SiP with 64-bit dual-core processor",
            "Temperature sensing, blood oxygen, and ECG",
            "Water resistant to 50 meters",
            "Up to 18 hours of battery life"
        ],
        colors: ["Midnight", "Starlight", "Silver", "Product RED"],
        description: "The Apple Watch Series 9 features a powerful S9 chip, a bright always-on Retina display, and advanced health sensors including temperature sensing, blood oxygen monitoring, and ECG. With up to 18 hours of battery life and water resistance to 50 meters, it's the perfect companion for an active lifestyle.",
        specifications: {
            "Display": "45mm always-on Retina LTPO OLED, 396 x 484 pixels",
            "Processor": "S9 SiP with 64-bit dual-core processor",
            "Storage": "64GB",
            "Connectivity": "Wi-Fi, Bluetooth 5.3, NFC, LTE (optional)",
            "Sensors": "Accelerometer, gyro, heart rate, barometer, always-on altimeter, compass, blood oxygen, ECG, temperature",
            "Battery": "Up to 18 hours (36 hours in Low Power Mode)",
            "Water Resistance": "50 meters",
            "Dimensions": "45 x 38 x 10.7 mm",
            "Weight": "38.7g (aluminum)"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 310,
        name: "Samsung Galaxy Watch6",
        category: "electronics",
        subcategory: "wearables",
        price: 27999,
        originalPrice: 33999,
        discount: 18,
        brand: "Samsung",
        rating: 4.6,
        reviewCount: 932,
        inStock: true,
        images: [
            "images/smart watch 2.jpg"
        ],
        features: [
            "44mm Super AMOLED display",
            "Exynos W930 Dual-Core processor",
            "BioActive Sensor for health monitoring",
            "Wear OS with One UI Watch 5",
            "Up to 40 hours of battery life"
        ],
        colors: ["Graphite", "Silver", "Gold"],
        description: "The Samsung Galaxy Watch6 combines sophisticated style with advanced health monitoring. Track your fitness goals, sleep patterns, and heart health with the BioActive Sensor, and enjoy a seamless experience with Wear OS Powered by Samsung. With up to 40 hours of battery life, it keeps up with your active lifestyle.",
        specifications: {
            "Display": "44mm Super AMOLED, 450 x 450 pixels",
            "Processor": "Exynos W930 Dual-Core 1.4GHz",
            "Storage": "16GB",
            "RAM": "2GB",
            "Connectivity": "Bluetooth 5.3, Wi-Fi, NFC, LTE (optional)",
            "Sensors": "Samsung BioActive Sensor (Optical Heart Rate + Electrical Heart Signal + Bioelectrical Impedance Analysis), Temperature Sensor, Accelerometer, Barometer, Gyro Sensor, Geomagnetic Sensor, Light Sensor",
            "Battery": "425mAh (up to 40 hours)",
            "Water Resistance": "5ATM + IP68",
            "Dimensions": "42.8 x 44.4 x 9.0 mm",
            "Weight": "33.3g"
        },
        featured: true,
        bestseller: false
    },
    {
        id: 311,
        name: "boAt Wave Pro Smart Watch",
        category: "electronics",
        subcategory: "wearables",
        price: 2999,
        originalPrice: 5990,
        discount: 50,
        brand: "boAt",
        rating: 4.2,
        reviewCount: 12543,
        inStock: true,
        images: [
            "images/smart watch 3.jpg"
        ],
        features: [
            "1.69-inch HD display",
            "Multiple sports modes",
            "Heart rate and SpO2 monitoring",
            "Sleep tracking",
            "7-day battery life"
        ],
        colors: ["Active Black", "Deep Blue", "Pink", "Teal Green"],
        description: "The boAt Wave Pro Smart Watch offers a perfect blend of style and functionality at an affordable price. With a vibrant 1.69-inch HD display, multiple sports modes, and comprehensive health monitoring including heart rate and SpO2, it's your perfect fitness companion. Enjoy up to 7 days of battery life on a single charge.",
        specifications: {
            "Display": "1.69-inch HD, 240 x 280 pixels",
            "Sports Modes": "Multiple sports modes including walking, running, cycling",
            "Health Monitoring": "24x7 heart rate, SpO2, sleep tracking",
            "Battery": "Up to 7 days",
            "Water Resistance": "IP67",
            "Connectivity": "Bluetooth 5.0",
            "Compatibility": "Android 5.0+, iOS 9.0+",
            "Dimensions": "45.5 x 37 x 11.2 mm",
            "Weight": "35g"
        },
        featured: false,
        bestseller: true
    },
    
    // Electronics - VR Headsets
    {
        id: 312,
        name: "Meta Quest 3",
        category: "electronics",
        subcategory: "vr",
        price: 59999,
        originalPrice: 69999,
        discount: 14,
        brand: "Meta",
        rating: 4.7,
        reviewCount: 487,
        inStock: true,
        images: [
            "images/meta vr headset.jpg"
        ],
        features: [
            "Mixed reality with high-resolution color passthrough",
            "Snapdragon XR2 Gen 2 processor",
            "128GB storage",
            "2064 x 2208 pixels per eye",
            "Wi-Fi 6E and Bluetooth 5.2"
        ],
        colors: ["White"],
        description: "The Meta Quest 3 delivers next-level mixed reality experiences with high-resolution color passthrough, allowing you to seamlessly blend virtual content with your physical surroundings. Powered by the Snapdragon XR2 Gen 2 processor, it offers incredible performance for gaming, fitness, and social experiences.",
        specifications: {
            "Display": "2064 x 2208 pixels per eye, LCD",
            "Processor": "Snapdragon XR2 Gen 2",
            "Storage": "128GB",
            "RAM": "8GB",
            "Battery Life": "Up to 2.5 hours",
            "Connectivity": "Wi-Fi 6E, Bluetooth 5.2",
            "Tracking": "Inside-out, 6DoF",
            "Audio": "Spatial audio, built-in speakers and microphone",
            "Dimensions": "184 x 160 x 98 mm",
            "Weight": "515g"
        },
        featured: true,
        bestseller: false
    },
    
    // Home & Kitchen - Curtains
    {
        id: 503,
        name: "Floral Print Blackout Curtains",
        category: "home",
        subcategory: "decor",
        price: 1499,
        originalPrice: 2199,
        discount: 32,
        brand: "HomeDecor",
        rating: 4.4,
        reviewCount: 327,
        inStock: true,
        images: [
            "images/curtains 2.jpg"
        ],
        features: [
            "Elegant floral print design",
            "100% blackout functionality",
            "Set of 2 panels (each 46\" x 84\")",
            "Rod pocket top for easy installation",
            "Machine washable"
        ],
        colors: ["Blue", "Grey", "Pink", "Green"],
        description: "Add a touch of elegance to your home with these floral print blackout curtains. The beautiful design complements any decor style, while the 100% blackout functionality ensures privacy and light control. Each set includes 2 panels with rod pocket tops for easy installation.",
        specifications: {
            "Material": "Polyester",
            "Dimensions": "Each panel: 46\" W x 84\" L",
            "Installation": "Rod pocket (fits rods up to 1.5\" diameter)",
            "Care": "Machine washable, gentle cycle",
            "Features": "100% blackout, thermal insulating, noise reducing",
            "Package Contents": "2 curtain panels"
        },
        featured: false,
        bestseller: true
    },
    
    // Home & Kitchen - Cookware
    {
        id: 504,
        name: "Brass Cooking Set (5 Pieces)",
        category: "home",
        subcategory: "kitchen",
        price: 3499,
        originalPrice: 4999,
        discount: 30,
        brand: "Traditional Cookware",
        rating: 4.5,
        reviewCount: 217,
        inStock: true,
        images: [
            "images/brass cooking containers.jpg"
        ],
        features: [
            "Pure brass construction",
            "5-piece set (kadai, tawa, and 3 containers with lids)",
            "Traditional design with modern functionality",
            "Even heat distribution",
            "Ideal for Indian cooking"
        ],
        colors: ["Brass"],
        description: "Experience the benefits of traditional brass cookware with this 5-piece cooking set. Perfect for authentic Indian cooking, the pure brass construction ensures even heat distribution and imparts unique flavor to your dishes. The set includes a kadai, tawa, and 3 containers with lids.",
        specifications: {
            "Material": "Pure brass",
            "Pieces Included": "Kadai with lid (2L), Tawa (10\"), 3 containers with lids (1L, 1.5L, 2L)",
            "Heat Source Compatibility": "Gas, traditional stove",
            "Care": "Hand wash only with lemon and salt solution",
            "Dimensions": "Varies by piece",
            "Weight": "3.5kg (total set)"
        },
        featured: true,
        bestseller: false
    },
    {
        id: 505,
        name: "Carbon Fiber Cutlery Set (24 Pieces)",
        category: "home",
        subcategory: "kitchen",
        price: 1299,
        originalPrice: 1799,
        discount: 28,
        brand: "Modern Kitchen",
        rating: 4.3,
        reviewCount: 187,
        inStock: true,
        images: [
            "images/carbon fiber soppns and fork.jpg"
        ],
        features: [
            "Carbon fiber-look design",
            "24-piece set (6 dinner spoons, 6 dinner forks, 6 dinner knives, 6 teaspoons)",
            "Stainless steel construction with black finish",
            "Dishwasher safe",
            "Elegant presentation box"
        ],
        colors: ["Black"],
        description: "Add a touch of modern elegance to your dining table with this carbon fiber-look cutlery set. The 24-piece set includes 6 dinner spoons, 6 dinner forks, 6 dinner knives, and 6 teaspoons, all crafted from durable stainless steel with a stylish black finish. Dishwasher safe for easy cleaning.",
        specifications: {
            "Material": "Stainless steel with black finish",
            "Pieces Included": "6 dinner spoons, 6 dinner forks, 6 dinner knives, 6 teaspoons",
            "Care": "Dishwasher safe",
            "Package Contents": "24-piece cutlery set in presentation box",
            "Dimensions": "Dinner spoon: 8\", Dinner fork: 8\", Dinner knife: 9\", Teaspoon: 6\""
        },
        featured: false,
        bestseller: true
    },
    
    // Books
    {
        id: 602,
        name: "Little Women",
        category: "books",
        subcategory: "fiction",
        price: 399,
        originalPrice: 499,
        discount: 20,
        brand: "Penguin Classics",
        rating: 4.7,
        reviewCount: 856,
        inStock: true,
        images: [
            "images/little women book.jpg"
        ],
        features: [
            "Classic novel by Louisa May Alcott",
            "Hardcover collector's edition",
            "Beautiful cover design",
            "Includes introduction and notes",
            "Perfect for gifts and collections"
        ],
        description: "This beautiful hardcover edition of Louisa May Alcott's beloved classic follows the lives of the four March sisters—Meg, Jo, Beth, and Amy—as they grow up during the American Civil War. This collector's edition includes an introduction, notes, and stunning cover design, making it a perfect addition to any bookshelf.",
        specifications: {
            "Author": "Louisa May Alcott",
            "Publisher": "Penguin Classics",
            "Language": "English",
            "Hardcover": "528 pages",
            "ISBN-10": "0143106651",
            "ISBN-13": "978-0143106654",
            "Dimensions": "5.6 x 1.3 x 8.4 inches",
            "Weight": "540g"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 603,
        name: "Famous Five Collection (3 Books)",
        category: "books",
        subcategory: "children",
        price: 599,
        originalPrice: 799,
        discount: 25,
        brand: "Hodder Children's Books",
        rating: 4.8,
        reviewCount: 432,
        inStock: true,
        images: [
            "images/famouos five book.jpg"
        ],
        features: [
            "Collection of 3 Famous Five adventures",
            "Written by Enid Blyton",
            "Paperback edition with colorful covers",
            "Perfect for young readers aged 7-12",
            "Exciting stories of adventure and mystery"
        ],
        description: "Introduce young readers to the exciting world of the Famous Five with this collection of 3 classic adventures by Enid Blyton. Join Julian, Dick, Anne, George, and Timmy the dog as they solve mysteries and have thrilling adventures. Perfect for children aged 7-12, these stories inspire imagination and a love of reading.",
        specifications: {
            "Author": "Enid Blyton",
            "Publisher": "Hodder Children's Books",
            "Language": "English",
            "Paperback": "640 pages total (3 books)",
            "ISBN-13": "978-1444935011",
            "Reading Age": "7-12 years",
            "Dimensions": "5.1 x 1.6 x 7.8 inches",
            "Weight": "460g"
        },
        featured: false,
        bestseller: true
    },
    
    // Gaming
    {
        id: 701,
        name: "Sony DualSense Wireless Controller",
        category: "electronics",
        subcategory: "gaming",
        price: 5990,
        originalPrice: 6990,
        discount: 14,
        brand: "Sony",
        rating: 4.8,
        reviewCount: 3254,
        inStock: true,
        images: [
            "images/sony controller'.jpg"
        ],
        features: [
            "Haptic feedback",
            "Adaptive triggers",
            "Built-in microphone",
            "Create button",
            "USB-C charging"
        ],
        colors: ["White", "Midnight Black", "Cosmic Red", "Starlight Blue", "Nova Pink"],
        description: "The DualSense wireless controller for PlayStation 5 offers immersive haptic feedback, dynamic adaptive triggers and a built-in microphone, all integrated into an iconic design. Feel physically responsive feedback to your in-game actions with dual actuators which replace traditional rumble motors.",
        specifications: {
            "Connectivity": "Bluetooth, USB-C",
            "Battery": "Rechargeable lithium-ion",
            "Features": "Haptic feedback, adaptive triggers, motion sensor, built-in microphone",
            "Compatibility": "PlayStation 5, PC",
            "Dimensions": "160 x 66 x 106 mm",
            "Weight": "280g"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 702,
        name: "Xbox Wireless Controller",
        category: "electronics",
        subcategory: "gaming",
        price: 4990,
        originalPrice: 5990,
        discount: 17,
        brand: "Microsoft",
        rating: 4.7,
        reviewCount: 2876,
        inStock: true,
        images: [
            "images/xboxcontroller.jpg"
        ],
        features: [
            "Hybrid D-pad",
            "Textured grip on triggers, bumpers, and back case",
            "Share button",
            "USB-C and Bluetooth connectivity",
            "Up to 40 hours of battery life"
        ],
        colors: ["Carbon Black", "Robot White", "Shock Blue", "Pulse Red"],
        description: "Experience the modernized design of the Xbox Wireless Controller, featuring sculpted surfaces and refined geometry for enhanced comfort. The hybrid D-pad and textured grip on triggers, bumpers, and back case ensure precise game control, while the dedicated Share button lets you capture screenshots and clips effortlessly.",
        specifications: {
            "Connectivity": "Bluetooth, USB-C",
            "Battery": "2 AA batteries (included)",
            "Battery Life": "Up to 40 hours",
            "Compatibility": "Xbox Series X|S, Xbox One, Windows PC, Android, iOS",
            "Dimensions": "152 x 101 x 63 mm",
            "Weight": "287g"
        },
        featured: false,
        bestseller: true
    },
    {
        id: 703,
        name: "Nintendo Switch OLED Model",
        category: "electronics",
        subcategory: "gaming",
        price: 34999,
        originalPrice: 38999,
        discount: 10,
        brand: "Nintendo",
        rating: 4.9,
        reviewCount: 1324,
        inStock: true,
        images: [
            "images/nintendo switch.jpg"
        ],
        features: [
            "7-inch OLED screen",
            "Enhanced audio",
            "64GB internal storage",
            "Wired LAN port in dock",
            "Wide adjustable stand"
        ],
        colors: ["White", "Neon Red/Neon Blue"],
        description: "The Nintendo Switch OLED Model features a vibrant 7-inch OLED screen, a wide adjustable stand for tabletop mode, 64GB of internal storage, enhanced audio, and a wired LAN port in the dock. Play anytime, anywhere, with anyone - at home on the TV or on-the-go in handheld or tabletop mode.",
        specifications: {
            "Screen": "7-inch OLED, 1280 x 720 resolution",
            "CPU/GPU": "NVIDIA Custom Tegra processor",
            "Storage": "64GB (expandable via microSD)",
            "Battery Life": "4.5-9 hours",
            "Connectivity": "Wi-Fi, Bluetooth 4.1, wired LAN (in dock)",
            "Dimensions": "9.5 x 4 x 0.55 inches (with Joy-Con attached)",
            "Weight": "398g (with Joy-Con attached)"
        },
        featured: true,
        bestseller: true
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { productsIndia2 };
} else {
    // For browser environment
    window.productsIndia2 = productsIndia2;
} 