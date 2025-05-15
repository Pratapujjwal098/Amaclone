// Additional Products (continuing from products.js)
const products2 = [
    // Clothing - Men's
    {
        id: 11,
        name: "Men's Classic Fit Oxford Shirt",
        category: "clothing",
        subcategory: "men",
        price: 39.99,
        originalPrice: 49.99,
        discount: 20,
        brand: "StyleCo",
        rating: 4.5,
        reviewCount: 1286,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Oxford+Shirt+Front",
            "https://via.placeholder.com/500x500?text=Oxford+Shirt+Back"
        ],
        features: [
            "100% cotton Oxford fabric",
            "Button-down collar",
            "Regular fit",
            "Machine washable",
            "Available in multiple colors"
        ],
        colors: ["White", "Light Blue", "Navy", "Gray"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "This classic Oxford shirt is a timeless addition to any wardrobe. Made from 100% cotton, it offers both comfort and durability. The versatile button-down design can be dressed up with a blazer or worn casually with jeans. With its classic fit and high-quality construction, this shirt is perfect for both office wear and weekend outings.",
        specifications: {
            "Material": "100% Cotton",
            "Fit": "Classic/Regular",
            "Collar": "Button-down",
            "Closure": "Button front",
            "Care": "Machine wash cold, tumble dry low"
        },
        featured: false,
        bestseller: true
    },
    {
        id: 12,
        name: "Men's Slim Fit Chino Pants",
        category: "clothing",
        subcategory: "men",
        price: 44.99,
        originalPrice: 59.99,
        discount: 25,
        brand: "UrbanStyle",
        rating: 4.6,
        reviewCount: 923,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Chino+Pants+Front",
            "https://via.placeholder.com/500x500?text=Chino+Pants+Back"
        ],
        features: [
            "98% cotton, 2% elastane",
            "Slim fit",
            "Stretch for comfort",
            "Flat front",
            "Machine washable"
        ],
        colors: ["Khaki", "Navy", "Olive", "Black", "Gray"],
        sizes: ["28x30", "30x30", "32x30", "32x32", "34x30", "34x32", "36x32"],
        description: "These slim fit chino pants combine classic style with modern comfort. The cotton-elastane blend provides just the right amount of stretch, while the slim fit offers a contemporary silhouette. Perfect for the office or casual outings, these versatile pants can be easily dressed up or down. Available in a range of colors to suit any occasion.",
        specifications: {
            "Material": "98% Cotton, 2% Elastane",
            "Fit": "Slim",
            "Rise": "Mid-rise",
            "Closure": "Button and zip fly",
            "Pockets": "Side slant pockets, back welt pockets",
            "Care": "Machine wash cold, tumble dry low"
        },
        featured: true,
        bestseller: false
    },
    
    // Clothing - Women's
    {
        id: 13,
        name: "Women's Wrap Dress",
        category: "clothing",
        subcategory: "women",
        price: 59.99,
        originalPrice: 79.99,
        discount: 25,
        brand: "LuxeStyle",
        rating: 4.7,
        reviewCount: 1475,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Wrap+Dress+Front",
            "https://via.placeholder.com/500x500?text=Wrap+Dress+Back"
        ],
        features: [
            "95% polyester, 5% spandex",
            "True wrap style",
            "V-neckline",
            "3/4 length sleeves",
            "Knee-length"
        ],
        colors: ["Black", "Navy", "Burgundy", "Forest Green"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "This flattering wrap dress is a versatile addition to any wardrobe. The classic V-neckline and true wrap design create a timeless silhouette that complements all body types. Made from a soft, stretchy fabric that drapes beautifully, this dress is comfortable enough for all-day wear. Perfect for the office, special occasions, or dressed down with sandals for a casual look.",
        specifications: {
            "Material": "95% Polyester, 5% Spandex",
            "Style": "True wrap",
            "Length": "Knee-length",
            "Sleeves": "3/4 length",
            "Care": "Machine wash cold, line dry"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 14,
        name: "Women's High-Rise Skinny Jeans",
        category: "clothing",
        subcategory: "women",
        price: 49.99,
        originalPrice: 69.99,
        discount: 29,
        brand: "DenimCo",
        rating: 4.6,
        reviewCount: 2187,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Skinny+Jeans+Front",
            "https://via.placeholder.com/500x500?text=Skinny+Jeans+Back"
        ],
        features: [
            "92% cotton, 6% polyester, 2% elastane",
            "High-rise waist",
            "Skinny fit through hip and thigh",
            "5-pocket styling",
            "Ankle length"
        ],
        colors: ["Dark Wash", "Medium Wash", "Light Wash", "Black"],
        sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32"],
        description: "These high-rise skinny jeans offer the perfect combination of style, comfort, and versatility. The premium stretch denim hugs your curves while providing all-day comfort. The high-rise waist is flattering and pairs perfectly with both cropped tops and tucked-in blouses. These jeans will quickly become your go-to for both casual and dressier occasions.",
        specifications: {
            "Material": "92% Cotton, 6% Polyester, 2% Elastane",
            "Rise": "High-rise (10.5\")",
            "Inseam": "28\" (ankle length)",
            "Closure": "Button and zip fly",
            "Care": "Machine wash cold, inside out"
        },
        featured: false,
        bestseller: true
    },
    
    // Clothing - Shoes
    {
        id: 15,
        name: "Men's Classic Leather Sneakers",
        category: "clothing",
        subcategory: "shoes",
        price: 79.99,
        originalPrice: 99.99,
        discount: 20,
        brand: "StrideRight",
        rating: 4.8,
        reviewCount: 1456,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Leather+Sneakers+Side",
            "https://via.placeholder.com/500x500?text=Leather+Sneakers+Top"
        ],
        features: [
            "Genuine leather upper",
            "Rubber outsole",
            "Cushioned insole",
            "Classic lace-up design",
            "Minimalist styling"
        ],
        colors: ["White", "Black", "Navy", "Brown"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        description: "These classic leather sneakers combine timeless style with everyday comfort. Crafted from premium leather with a minimalist design, they're versatile enough to pair with both casual and smart-casual outfits. The cushioned insole and durable rubber outsole provide all-day comfort and long-lasting wear. These sneakers are a wardrobe essential that will never go out of style.",
        specifications: {
            "Upper Material": "Genuine Leather",
            "Outsole": "Rubber",
            "Insole": "Cushioned foam",
            "Closure": "Traditional lace-up",
            "Care": "Wipe clean with damp cloth"
        },
        featured: true,
        bestseller: false
    },
    {
        id: 16,
        name: "Women's Running Shoes",
        category: "clothing",
        subcategory: "shoes",
        price: 89.99,
        originalPrice: 119.99,
        discount: 25,
        brand: "SpeedForce",
        rating: 4.7,
        reviewCount: 1823,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Running+Shoes+Side",
            "https://via.placeholder.com/500x500?text=Running+Shoes+Top"
        ],
        features: [
            "Breathable mesh upper",
            "Responsive cushioning",
            "Durable rubber outsole",
            "Reflective details for visibility",
            "Lightweight design (8.5 oz)"
        ],
        colors: ["Black/Pink", "Gray/Teal", "White/Purple", "Blue/Orange"],
        sizes: ["5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
        description: "Take your running to the next level with these performance-focused running shoes. The breathable mesh upper keeps your feet cool while the responsive cushioning provides energy return with every step. Designed for road running, these versatile shoes offer the perfect balance of comfort, support, and durability. The lightweight construction won't weigh you down, even on your longest runs.",
        specifications: {
            "Upper": "Engineered mesh",
            "Midsole": "Responsive foam cushioning",
            "Outsole": "Durable rubber",
            "Drop": "8mm heel-to-toe offset",
            "Weight": "8.5 oz (women's size 8)",
            "Pronation": "Neutral"
        },
        featured: true,
        bestseller: true
    },
    
    // Books
    {
        id: 17,
        name: "The Midnight Library",
        category: "books",
        subcategory: "fiction",
        price: 14.99,
        originalPrice: 24.99,
        discount: 40,
        brand: "Viking",
        author: "Matt Haig",
        rating: 4.6,
        reviewCount: 2876,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x700?text=The+Midnight+Library"
        ],
        features: [
            "Hardcover: 304 pages",
            "Publisher: Viking (September 29, 2020)",
            "Language: English",
            "New York Times Bestseller"
        ],
        description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets? A novel about all the choices that go into a life well lived.",
        specifications: {
            "Format": "Hardcover",
            "Pages": "304",
            "Publisher": "Viking",
            "Publication Date": "September 29, 2020",
            "Language": "English",
            "ISBN-10": "0525559477",
            "ISBN-13": "978-0525559474",
            "Dimensions": "5.75 x 1 x 8.5 inches"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 18,
        name: "Atomic Habits",
        category: "books",
        subcategory: "non-fiction",
        price: 13.99,
        originalPrice: 27.00,
        discount: 48,
        brand: "Avery",
        author: "James Clear",
        rating: 4.8,
        reviewCount: 4672,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x700?text=Atomic+Habits"
        ],
        features: [
            "Hardcover: 320 pages",
            "Publisher: Avery (October 16, 2018)",
            "Language: English",
            "#1 New York Times Bestseller"
        ],
        description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. You'll learn how to make time for new habits, overcome a lack of motivation and willpower, design your environment to make success easier, and much more.",
        specifications: {
            "Format": "Hardcover",
            "Pages": "320",
            "Publisher": "Avery",
            "Publication Date": "October 16, 2018",
            "Language": "English",
            "ISBN-10": "0735211299",
            "ISBN-13": "978-0735211292",
            "Dimensions": "6.25 x 1.1 x 9.3 inches"
        },
        featured: false,
        bestseller: true
    },
    
    // Home & Kitchen
    {
        id: 19,
        name: "Professional Stand Mixer",
        category: "home",
        subcategory: "kitchen_appliances",
        price: 329.99,
        originalPrice: 429.99,
        discount: 23,
        brand: "KitchenPro",
        rating: 4.9,
        reviewCount: 3245,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Stand+Mixer+Front",
            "https://via.placeholder.com/500x500?text=Stand+Mixer+Side"
        ],
        features: [
            "5.5-quart stainless steel bowl",
            "10 speeds for nearly any task",
            "Tilt-head design for easy access",
            "Includes flat beater, dough hook, and wire whip",
            "Available in multiple colors"
        ],
        colors: ["Red", "Black", "Silver", "White", "Blue"],
        description: "This powerful stand mixer makes it easy to create everything from delicate meringues to hearty bread dough. The 10 speed settings allow for precise control, while the tilt-head design provides easy access to the bowl. The included attachments handle a variety of mixing tasks, and the mixer is compatible with numerous optional attachments to expand its capabilities further. Built to last with durable all-metal construction.",
        specifications: {
            "Capacity": "5.5-quart stainless steel bowl",
            "Power": "325 watts",
            "Speeds": "10",
            "Dimensions": "14.1 x 8.7 x 13.9 inches",
            "Weight": "23 pounds",
            "Warranty": "1-year manufacturer's warranty"
        },
        featured: true,
        bestseller: true
    },
    {
        id: 20,
        name: "12-Piece Nonstick Cookware Set",
        category: "home",
        subcategory: "cookware",
        price: 149.99,
        originalPrice: 199.99,
        discount: 25,
        brand: "ChefElite",
        rating: 4.6,
        reviewCount: 1867,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Cookware+Set",
            "https://via.placeholder.com/500x500?text=Cookware+Individual"
        ],
        features: [
            "Hard anodized aluminum construction",
            "Triple-layer nonstick coating",
            "Tempered glass lids",
            "Stainless steel handles",
            "Oven safe up to 450°F",
            "Dishwasher safe"
        ],
        colors: ["Black"],
        description: "This comprehensive cookware set has everything you need for everyday cooking. The hard anodized aluminum construction ensures fast, even heating, while the triple-layer nonstick coating allows for easy food release and cleaning. The set includes a variety of pots and pans with tempered glass lids and stay-cool stainless steel handles. Oven safe and dishwasher safe for convenience.",
        specifications: {
            "Set Includes": "8\" fry pan, 10\" fry pan, 1.5qt saucepan with lid, 2.5qt saucepan with lid, 3qt sauté pan with lid, 6qt stockpot with lid, steamer insert",
            "Material": "Hard anodized aluminum",
            "Coating": "Triple-layer nonstick",
            "Handles": "Stainless steel",
            "Lids": "Tempered glass",
            "Oven Safe": "Up to 450°F",
            "Dishwasher Safe": "Yes",
            "Induction Compatible": "No"
        },
        featured: false,
        bestseller: true
    },
    
    // Home & Furniture
    {
        id: 21,
        name: "Mid-Century Modern Sofa",
        category: "home",
        subcategory: "furniture",
        price: 799.99,
        originalPrice: 999.99,
        discount: 20,
        brand: "ModernLiving",
        rating: 4.5,
        reviewCount: 783,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Modern+Sofa+Front",
            "https://via.placeholder.com/500x500?text=Modern+Sofa+Side"
        ],
        features: [
            "Mid-century modern design",
            "Durable polyester upholstery",
            "Solid wood frame and legs",
            "Foam cushioning for comfort",
            "Easy assembly"
        ],
        colors: ["Gray", "Blue", "Green", "Beige"],
        description: "Add a touch of mid-century modern style to your living space with this elegant sofa. The clean lines and tapered legs create a timeless silhouette, while the comfortable cushioning ensures this piece is as functional as it is beautiful. The durable polyester upholstery is easy to maintain, and the solid wood frame provides stability and longevity. Perfect for apartments, offices, or any living area.",
        specifications: {
            "Dimensions": "78\" W x 32\" D x 32\" H",
            "Weight": "95 pounds",
            "Seat Height": "17 inches",
            "Frame Material": "Solid wood",
            "Upholstery Material": "Polyester",
            "Assembly Required": "Yes, minimal assembly",
            "Weight Capacity": "750 pounds"
        },
        featured: true,
        bestseller: false
    },
    
    // Home - Bedding
    {
        id: 22,
        name: "Luxury Cotton Sheet Set",
        category: "home",
        subcategory: "bedding",
        price: 89.99,
        originalPrice: 119.99,
        discount: 25,
        brand: "SleepLuxe",
        rating: 4.7,
        reviewCount: 2134,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Sheet+Set",
            "https://via.placeholder.com/500x500?text=Sheet+Detail"
        ],
        features: [
            "100% long-staple cotton",
            "500 thread count",
            "Sateen weave for silky smooth feel",
            "Deep pocket fitted sheet fits mattresses up to 18\" deep",
            "OEKO-TEX Standard 100 certified"
        ],
        colors: ["White", "Ivory", "Gray", "Navy", "Sage"],
        sizes: ["Twin", "Full", "Queen", "King", "California King"],
        description: "Experience the ultimate in comfort with these luxury cotton sheets. Made from 100% long-staple cotton with a 500 thread count and silky sateen weave, these sheets offer a soft, smooth feel that gets better with every wash. The deep pocket fitted sheet accommodates even the thickest mattresses, and the set is available in a range of colors to complement any bedroom decor.",
        specifications: {
            "Material": "100% Long-staple Cotton",
            "Thread Count": "500",
            "Weave": "Sateen",
            "Set Includes": "1 fitted sheet, 1 flat sheet, 2 pillowcases (1 for Twin)",
            "Fitted Sheet Pocket Depth": "18 inches",
            "Care": "Machine washable, tumble dry low"
        },
        featured: false,
        bestseller: true
    },
    
    // Home - Decor
    {
        id: 23,
        name: "Handwoven Decorative Throw Blanket",
        category: "home",
        subcategory: "decor",
        price: 49.99,
        originalPrice: 69.99,
        discount: 29,
        brand: "CozyHome",
        rating: 4.8,
        reviewCount: 947,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Throw+Blanket",
            "https://via.placeholder.com/500x500?text=Throw+Detail"
        ],
        features: [
            "100% cotton",
            "Handwoven with traditional techniques",
            "Decorative tassels on ends",
            "Versatile size for sofa or bed",
            "Lightweight yet warm"
        ],
        colors: ["Natural/Black", "Gray/White", "Blue/Natural", "Terracotta/Natural"],
        description: "Add texture and warmth to any space with this beautiful handwoven throw blanket. Crafted using traditional techniques, each blanket features unique subtle variations that highlight its handmade quality. The soft cotton material makes it perfect for snuggling on the couch, while the stylish design means it looks just as good draped over furniture as a decorative accent. The perfect gift for housewarming or special occasions.",
        specifications: {
            "Material": "100% Cotton",
            "Dimensions": "50\" x 60\"",
            "Weight": "1.5 pounds",
            "Construction": "Handwoven",
            "Care": "Machine wash cold on gentle cycle, tumble dry low"
        },
        featured: true,
        bestseller: false
    },
    
    // Toys & Games
    {
        id: 24,
        name: "Building Blocks Set (250 Pieces)",
        category: "toys",
        subcategory: "building_toys",
        price: 29.99,
        originalPrice: 39.99,
        discount: 25,
        brand: "BlockMaster",
        rating: 4.9,
        reviewCount: 1532,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Building+Blocks+Set",
            "https://via.placeholder.com/500x500?text=Building+Blocks+Example"
        ],
        features: [
            "250 colorful building blocks",
            "Compatible with all major building block brands",
            "Includes storage container",
            "Suitable for ages 4+",
            "Inspires creativity and STEM skills"
        ],
        colors: ["Multi-colored"],
        description: "Unleash your child's creativity with this comprehensive 250-piece building blocks set. Compatible with all major building block brands, these high-quality blocks snap together perfectly for hours of imaginative play. The set includes a variety of shapes, sizes, and colors, allowing for endless building possibilities. Comes with a convenient storage container to keep pieces organized when not in use.",
        specifications: {
            "Pieces": "250",
            "Material": "Non-toxic ABS plastic",
            "Age Recommendation": "4+ years",
            "Safety": "Meets ASTM F963 and CPSIA safety standards",
            "Dimensions": "Storage box: 10\" x 8\" x 7\""
        },
        featured: true,
        bestseller: true
    },
    
    // Sports & Outdoors
    {
        id: 25,
        name: "18-Speed Mountain Bike",
        category: "sports",
        subcategory: "cycling",
        price: 299.99,
        originalPrice: 399.99,
        discount: 25,
        brand: "TrailRider",
        rating: 4.6,
        reviewCount: 872,
        inStock: true,
        images: [
            "https://via.placeholder.com/500x500?text=Mountain+Bike+Side",
            "https://via.placeholder.com/500x500?text=Mountain+Bike+Detail"
        ],
        features: [
            "Aluminum frame",
            "18-speed Shimano drivetrain",
            "Front suspension fork",
            "Disc brakes for reliable stopping power",
            "27.5\" wheels with knobby tires",
            "Adjustable seat post"
        ],
        colors: ["Black/Red", "Blue/Silver", "Green/Black"],
        sizes: ["15\" (S)", "17\" (M)", "19\" (L)", "21\" (XL)"],
        description: "Hit the trails with confidence on this durable mountain bike. The lightweight aluminum frame and front suspension fork provide a responsive, comfortable ride on various terrains. With 18 speeds to choose from, you'll always find the right gear for any climb or descent. The powerful disc brakes offer reliable stopping power in all conditions, while the knobby tires provide excellent traction on dirt and gravel trails.",
        specifications: {
            "Frame": "Aluminum alloy",
            "Fork": "Front suspension with lockout",
            "Drivetrain": "18-speed Shimano",
            "Brakes": "Mechanical disc brakes",
            "Wheels": "27.5\" aluminum double-wall rims",
            "Tires": "27.5\" x 2.1\" knobby tread",
            "Weight": "Approximately 30 lbs (13.6 kg)",
            "Weight Capacity": "300 lbs (136 kg)"
        },
        featured: false,
        bestseller: true
    }
];

// The products array will be combined with products.js in script.js 