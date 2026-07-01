export const CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "tours", label: "Tours & Packages" },
  { id: "transport", label: "Cab & Transportation" },
  { id: "media-planning", label: "Media & Planning" },
];

export const SERVICES = [
  {
    id: "domestic-tours",
    title: "Domestic Tour Packages",
    category: "tours",
    categoryLabel: "Tour Packages",
    iconName: "Compass",
    shortDescription:
      "Handpicked scenic destinations across the country, fully managed with local guides and premium stays.",
    longDescription:
      "Embark on seamless journeys to the country's most breathtaking destinations. Our domestic packages are curated by local experts, featuring premium 4/5-star boutique accommodations, expert-guided city walkthroughs, customized food maps, and flawless logistics. From tranquil mountain peaks to sunny coastal retreats, we craft travel plans that let you focus entirely on the experience.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Handpicked 4 & 5-Star Stays",
      "Certified Multi-Lingual Local Guides",
      "Private Transfers & Sightseeing",
      "24/7 Ground Assistance Support",
    ],
    badgeText: "Top Rated",
    startingPrice: "$399 / person",
  },
  {
    id: "temple-pilgrimage",
    title: "Temple & Pilgrimage Tours",
    category: "tours",
    categoryLabel: "Tour Packages",
    iconName: "Sparkles",
    shortDescription:
      "Elderly-friendly spiritual journeys to sacred temples with fast-track VIP darshan passes.",
    longDescription:
      "Reconnect with your inner peace on our masterfully paced pilgrimage tours. We take care of every detail—including hassle-free fast-track VIP temple darshans, comfortable climate-controlled transfers, expert spiritual guides who explain local lore, and pure vegetarian dining options. Designed to be highly comfortable and relaxed for multi-generational families.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "VIP Quick-Darshan Access",
      "Wheelchair & Elderly Support",
      "Pure Vegetarian Culinary Plans",
      "Verified Historical Guides",
    ],
    badgeText: "Spiritual",
    startingPrice: "$249 / person",
  },
  {
    id: "family-tours",
    title: "Family Tours",
    category: "tours",
    categoryLabel: "Tour Packages",
    iconName: "Users",
    shortDescription:
      "Memorable family retreats featuring highly balanced paces and multi-generational attractions.",
    longDescription:
      "Bring your loved ones closer on our specialized family-friendly retreats. We design itineraries with a balanced, leisurely pace—ensuring infants play happily and grandparents rest comfortably. Includes spacious villa-style stays with connecting rooms, exciting child-safe theme park entries, organic dining, and interactive workshops for the whole family.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Interconnected Suite Options",
      "Kid-Safe Resorts & Attractions",
      "Complimentary Family Photographer",
      "Custom Diet-Friendly Meals",
    ],
    badgeText: "Family-First",
    startingPrice: "$450 / family",
  },
  {
    id: "couple-honeymoon",
    title: "Couple & Honeymoon Tours",
    category: "tours",
    categoryLabel: "Tour Packages",
    iconName: "Heart",
    shortDescription:
      "Romantic secluded escapes featuring candlelit dinners, couple spas, and panoramic stays.",
    longDescription:
      "Celebrate your love with beautifully tailored intimate escapes. From private beachfront villas with infinity pools to misty hillside treehouses, our honeymoon suites offer ultimate privacy. Enjoy complimentary romantic upgrades like sunset yacht cruises, premium flower-bath couple spa therapies, candlelit multi-course beachside dining, and luxury surprise gifts.",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Private Pool Honeymoon Villas",
      "Candlelit Sunset Dinners",
      "Couples Aromatherapy Session",
      "Champagne & Cake on Arrival",
    ],
    badgeText: "Romantic",
    startingPrice: "$599 / couple",
  },
  {
    id: "group-tours",
    title: "Group Tours",
    category: "tours",
    categoryLabel: "Tour Packages",
    iconName: "Users2",
    shortDescription:
      "High-energy adventure tours for corporate, college, or community groups with campfire jams.",
    longDescription:
      "Designed for friends, corporate squads, and community squads who love adventure. We coordinate exciting high-energy group activities (rafting, zip-lining, hiking) balanced with evening relaxation like campfires, live music, and acoustic jams. Group packages feature massive discount tiers while guaranteeing top-notch safety and comfortable luxury group coach transport.",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Exclusive Luxury Coach Buses",
      "Adventure Guide & Safety Gear",
      "Acoustic Campfire Music Jams",
      "Tiered Group Discount Rates",
    ],
    badgeText: "Best Value",
    startingPrice: "$199 / person",
  },
  {
    id: "cab-service",
    title: "Cab Service",
    category: "transport",
    categoryLabel: "Transportation",
    iconName: "Car",
    shortDescription:
      "Local city tours and outstation transfers in pristine, sanitized cars with professional drivers.",
    longDescription:
      "Safe, premium, and fully air-conditioned city cabs and outstation tour vehicles at your service. Our pristine fleet spans fuel-efficient hatchbacks, comfortable executive sedans, and spacious family SUVs. Drivers are meticulously vetted, English-fluent, GPS-trained, and local route experts to ensure a safe, pleasant transit.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "100% Sanitized Premium Fleet",
      "Vetted, English-Fluent Chauffeurs",
      "GPS & Real-time Client Tracking",
      "Fixed Transparent Rates",
    ],
    badgeText: "Instant Book",
    startingPrice: "$45 / day",
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    category: "transport",
    categoryLabel: "Transportation",
    iconName: "PlaneTakeoff",
    shortDescription:
      "Punctual airport transfers featuring live flight tracking and terminal meet-and-greet.",
    longDescription:
      "Never miss a flight or search for rides in chaotic terminals. Our premium airport pickup/drop service tracks your flights in real-time, meaning your chauffeur is always perfectly on-time even if your flight is early or delayed. Standard offerings include terminal meet-and-greets, a complimentary 60-minute terminal waiting slot, and luggage assistance.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Live Automatic Flight Syncing",
      "60-Min Complimentary Terminal Wait",
      "Chauffeur Meet & Greet Service",
      "Pristine High-End Sedans Only",
    ],
    badgeText: "Punctual",
    startingPrice: "$30 / trip",
  },
  {
    id: "flight-booking",
    title: "Flight Booking Assistance",
    category: "media-planning",
    categoryLabel: "Media & Planning",
    iconName: "Ticket",
    shortDescription:
      "Corporate discount discovery, preferred seat blocks, and instant rebooking assistance.",
    longDescription:
      "Avoid endless comparison charts and hidden ticket markups. Our professional flight brokers tap directly into global distribution systems (GDS) to secure corporate travel rates, premium seats, extra baggage limits, and instant cancellations. Rest easy with 24/7 dedicated agents managing any emergency flight re-routes in real-time.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Exclusive Partner Corporate Rates",
      "Preferred Window/Aisle Blocks",
      "Free Web Check-In & Boarding Passes",
      "24/7 Emergency Re-routing Support",
    ],
    badgeText: "Smart Saver",
    startingPrice: "No Booking Fees",
  },
  {
    id: "customized-planning",
    title: "Customized Travel Planning",
    category: "media-planning",
    categoryLabel: "Media & Planning",
    iconName: "Map",
    shortDescription:
      "Bespoke daily itineraries designed by destination architects tailored to your exact pacing.",
    longDescription:
      "Your dream trip, exactly as you imagine. Work side-by-side with our destination experts to co-create a personalized day-by-day travel plan. Specify your culinary preferences, activity levels, preferred daily wake-up times, and budget. We provide a beautifully crafted, highly detailed interactive digital itinerary with local hidden gems.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "1-on-1 Dedicated Destination Expert",
      "Interactive Custom Travel Mobile App",
      "Curated Hidden-Gem Culinary Map",
      "Unlimited Revisions & Tweaks",
    ],
    badgeText: "100% Bespoke",
    startingPrice: "Free Consultation",
  },
  {
    id: "personal-driver",
    title: "Personal Car with Driver",
    category: "transport",
    categoryLabel: "Transportation",
    iconName: "ShieldCheck",
    shortDescription:
      "Luxury sedans or large SUVs paired with a dedicated personal chauffeur for multi-day freedom.",
    longDescription:
      "Experience absolute VIP freedom. Rent a premium luxury vehicle accompanied by a dedicated, smartly-dressed personal chauffeur for the entire duration of your trip. Your professional driver handles all routing, parking, refueling, and security, giving you complete peace of mind.",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Luxury Sedans & Premium SUVs",
      "Dedicated Chauffeur at Hand 24/7",
      "Zero Petrol, Toll, or Parking Overhead",
      "Flexible Route Planning on the Fly",
    ],
    badgeText: "Premium VIP",
    startingPrice: "$110 / day",
  },
  {
    id: "photographer-arrangement",
    title: "Photographer & Videographer Arrangement",
    category: "media-planning",
    categoryLabel: "Media & Planning",
    iconName: "Camera",
    shortDescription:
      "Professional visual storytellers accompanying your trip to capture high-res candid snaps.",
    longDescription:
      "Put down your phone and live the experience fully. We assign a local, certified travel photographer and videographer to join you at key sightseeing locations. They capture high-definition candid portraits, cinematic 4K video clips, and gorgeous drone angles of your adventures. Perfect for honeymoons, anniversaries, and family portraits.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Full-Frame Professional DSLR Gear",
      "Cinematic 4K DJI Drone Footage",
      "Candid & Styled Destination Shoots",
      "Digital Album Delivery in 48 Hours",
    ],
    badgeText: "High-Res",
    startingPrice: "$150 / session",
  },
  {
    id: "travel-reel",
    title: "Travel Reel Creation",
    category: "media-planning",
    categoryLabel: "Media & Planning",
    iconName: "Video",
    shortDescription:
      "Highly engaging, viral-optimized vertical short videos edited with trending sound tracks.",
    longDescription:
      "Set your social media feed on fire. Share your travel adventures in stunning high-impact vertical edits. Our professional travel video editors gather your raw smartphone or camera footage, apply expert stabilization, synchronize clips to trending audio tracks, implement cinematic color grading, and deliver ready-to-share vertical reels.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Viral-Optimized Vertical Formats",
      "Perfect Audio Sync with Trending Music",
      "Cinematic Color Correction & Effects",
      "Express Deliveries Under 24 Hours",
    ],
    badgeText: "Social Ready",
    startingPrice: "$49 / edit",
  },
];