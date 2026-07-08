export interface FleetItem {
  id: string;
  name: string;
  brand: string;
  type: string;
  capacity: string;
  features: string[];
  imageUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
}

export interface CityItem {
  name: string;
  tagline: string;
  imageUrl: string;
}

export interface RajasthanAttraction {
  name: string;
  location: string;
  imageUrl: string;
}

export interface DriverBehaviorItem {
  title: string;
  description: string;
  iconName: string;
}

export interface StrengthItem {
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  role: string;
  responsibilities: string[];
}

export interface TeamStructure {
  md: TeamMember;
  sales: TeamMember;
  operations: TeamMember;
  billing: TeamMember;
  accounts: TeamMember;
}

export interface DepartmentItem {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const fleetData: FleetItem[] = [
  {
    id: 'innova',
    name: 'Innova',
    brand: 'Toyota',
    type: 'MUV / SUV',
    capacity: '6-7 Seats',
    features: ['Spacious Cabin', 'Premium Comfort', 'Ample Luggage space', 'Dual AC'],
    imageUrl: 'https://images.overdrive.in/wp-content/uploads/2023/05/Untitled-design-10-900x506.png' // SUV/MUV placeholder
  },
  {
    id: 'etios',
    name: 'Etios',
    brand: 'Toyota',
    type: 'Sedan',
    capacity: '4 Seats',
    features: ['Fuel Efficient', 'Comfortable ride', 'Spacious Trunk', 'Compact Design'],
    imageUrl: 'https://media.zigcdn.com/media/content/2014/Jul/toyota-etios-xclusive-pic-photo-image-04072014-m1_560x420.jpg?tr=w-420'
  },
  {
    id: 'dzire',
    name: 'Swift Dzire',
    brand: 'Maruti Suzuki',
    type: 'Compact Sedan',
    capacity: '4 Seats',
    features: ['Urban commutes', 'Punctual transit', 'Perfect for small families', 'AC'],
    imageUrl: 'https://www.skyautomobiles.in/images/car/arena/dzire/bluishblack.webp'
  },
  {
    id: 'ertiga',
    name: 'Ertiga',
    brand: 'Maruti Suzuki',
    type: 'MUV',
    capacity: '6 Seats',
    features: ['Versatile seating', 'Economical group tours', 'AC', 'Reliable performance'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-giH693KuPM6DPTlKjsHefV5UVa4Tb-bC5AiIuUuHw&s=10'
  },
  {
    id: 'tempo',
    name: 'Tempo Traveller',
    brand: 'Force Motors',
    type: 'Large Van',
    capacity: '12-26 Seats',
    features: ['Perfect for group tours', 'High head room', 'Individual AC vents', 'Huge luggage capacity'],
    imageUrl: 'https://cdn.bluebirdtravels.in/wp-content/uploads/2017/01/Tempo_Traveller_PI-531x354.png'
  },
  {
    id: 'deluxe_bus',
    name: 'Deluxe Bus / Coach',
    brand: 'Tata / Ashok Leyland',
    type: 'Luxury Coach',
    capacity: '35-45 Seats',
    features: ['Pushback seats', 'AC / Non-AC options', 'Ample Luggage Hold', 'Stereo Music System'],
    imageUrl: 'https://punetours.com/wp-content/uploads/2017/01/hire-semi-luxury-bus-pune-mumbai.jpg'
  },
  {
    id: 'volvo_bus',
    name: 'Volvo Club Class Bus',
    brand: 'Volvo / Scania',
    type: 'Luxury Multi-Axle',
    capacity: '40-50 Seats',
    features: ['Premium Reclining Seats', 'GPS Live Tracking', 'Air Suspension', 'USB Charger Ports'],
    imageUrl: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/maroon-bus?qlt=82&wid=1024&ts=1660222495591&dpr=off&fit=constrain'
  }
];

export const serviceData: ServiceItem[] = [
  {
    id: 'airport',
    title: 'Airport Transfers',
    description: 'Timely pickups and drops for a stress-free travel experience, operating round the clock.',
    iconName: 'PlaneTakeoff',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'outstation',
    title: 'Outstation Cabs',
    description: 'Comfortable intercity travel with well-maintained vehicles and expert highway drivers.',
    iconName: 'Compass',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'local',
    title: 'Local City Rides',
    description: 'Quick, convenient, and affordable rides within the city limits for business or shopping.',
    iconName: 'MapPin',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'corporate',
    title: 'Corporate Travel',
    description: 'Reliable business travel solutions for you and your team with executive billing structures.',
    iconName: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'rental',
    title: 'Hourly / Daily Rentals',
    description: 'Rent a cab by the hour or by the day to explore or complete multi-stop routes at ease.',
    iconName: 'Calendar',
    imageUrl: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80'
  }
];

export const cityData: CityItem[] = [
  { name: 'DELHI', tagline: 'The Heart of India', imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80' },
  { name: 'MUMBAI', tagline: 'The City of Dreams', imageUrl: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=400&q=80' },
  { name: 'BENGALURU', tagline: 'The Silicon Valley', imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80' },
  { name: 'KOLKATA', tagline: 'The City of Joy', imageUrl: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=400&q=80' },
  { name: 'CHENNAI', tagline: 'The Detroit of India', imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80' },
  { name: 'HYDERABAD', tagline: 'The City of Nizams', imageUrl: 'https://images.unsplash.com/photo-1605007493699-af65834f8a00?auto=format&fit=crop&w=400&q=80' },
  { name: 'AHMEDABAD', tagline: 'The Heritage City', imageUrl: 'https://images.unsplash.com/photo-1601999007938-f584b4734474?auto=format&fit=crop&w=400&q=80' },
  { name: 'PUNE', tagline: 'The Oxford of the East', imageUrl: 'https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&w=400&q=80' }
];

export const rajasthanAttractions: RajasthanAttraction[] = [
  { name: 'AMER FORT, JAIPUR', location: 'Jaipur', imageUrl: 'https://images.unsplash.com/photo-1477584322811-53372851789c?auto=format&fit=crop&w=400&q=80' },
  { name: 'HAWA MAHAL, JAIPUR', location: 'Jaipur', imageUrl: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=400&q=80' },
  { name: 'CITY PALACE, UDAIPUR', location: 'Udaipur', imageUrl: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=400&q=80' },
  { name: 'JAL MAHAL, JAIPUR', location: 'Jaipur', imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897826741?auto=format&fit=crop&w=400&q=80' },
  { name: 'MEHRANGARH FORT, JODHPUR', location: 'Jodhpur', imageUrl: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=400&q=80' },
  { name: 'BADA BAGH, JAISALMER', location: 'Jaisalmer', imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=400&q=80' },
  { name: 'KUMBHALGARH FORT', location: 'Rajsamand', imageUrl: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=400&q=80' },
  { name: 'JAISALMER DESERT SAFARI', location: 'Jaisalmer', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
  { name: 'RANAKPUR JAIN TEMPLE', location: 'Pali', imageUrl: 'https://images.unsplash.com/photo-1545231027-63b3f1e37be1?auto=format&fit=crop&w=400&q=80' },
  { name: 'PUSHKAR LAKE', location: 'Pushkar', imageUrl: 'https://images.unsplash.com/photo-1627894481066-b31b1b151e3c?auto=format&fit=crop&w=400&q=80' }
];

export const driverBehaviors: DriverBehaviorItem[] = [
  {
    title: 'PROFESSIONAL',
    description: 'Well-dressed, polite, and professional at all times.',
    iconName: 'Award'
  },
  {
    title: 'RESPECTFUL',
    description: 'Treat every client with utmost respect and courtesy.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'FRIENDLY',
    description: 'Warm, helpful, and always ready to assist with a smile.',
    iconName: 'Smile'
  },
  {
    title: 'SAFE DRIVING',
    description: 'Strictly follow all traffic rules and prioritize passenger safety.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'CLEAN & NEAT',
    description: 'Maintain a clean car and pristine layout for your comfort.',
    iconName: 'Sparkles'
  },
  {
    title: 'GOOD COMMUNICATION',
    description: 'Communicate politely, clearly, and understand client needs.',
    iconName: 'MessageSquare'
  }
];

export const strengthsData: StrengthItem[] = [
  {
    title: 'RELIABLE & SAFE',
    description: 'Well-maintained vehicles and trained professional drivers ensure a safe and comfortable journey every time.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'EXPERIENCED TEAM',
    description: 'A dedicated and experienced team committed to delivering seamless service and the best customer experience.',
    iconName: 'Users'
  },
  {
    title: '24/7 AVAILABILITY',
    description: 'Round-the-clock support and services to meet your travel needs anytime, anywhere.',
    iconName: 'Clock'
  },
  {
    title: 'TECHNOLOGY DRIVEN',
    description: 'Smart systems and real-time tracking for efficient operations and total transparency.',
    iconName: 'Zap'
  },
  {
    title: 'WIDE FLEET NETWORK',
    description: 'A diverse fleet of vehicles across categories to suit every requirement and every destination.',
    iconName: 'Map'
  },
  {
    title: 'COST EFFECTIVE SOLUTIONS',
    description: 'Competitive pricing and transparent billing with no hidden costs.',
    iconName: 'CreditCard'
  },
  {
    title: 'CUSTOMER FOCUS',
    description: 'We prioritize our clients with personalized service and quick resolution.',
    iconName: 'ThumbsUp'
  }
];

export const teamStructure: TeamStructure = {
  md: {
    role: 'MD - Managing Director',
    responsibilities: ['Strategic Planning', 'Executive Decision Making', 'Growth & Vision Direction', 'Stakeholder Management']
  },
  sales: {
    role: '2. SALES TEAM',
    responsibilities: ['Business Development', 'Client Acquisition', 'Sales & Marketing', 'Relationship Management']
  },
  operations: {
    role: '3. REVERSION & OPERATIONS TEAM',
    responsibilities: ['Booking & Reservation', 'Fleet Operations', 'Driver Management', 'Route Planning & Monitoring', 'Customer Support']
  },
  billing: {
    role: '4. BILLING TEAM',
    responsibilities: ['Invoicing & Billing', 'Fare Management', 'Billing Reconciliation', 'GST & Compliance', 'Payment Follow-up']
  },
  accounts: {
    role: '5. ACCOUNT & FINANCIAL TEAM',
    responsibilities: ['Accounts Management', 'Expense Tracking', 'Financial Reporting', 'Budgeting & Planning', 'Taxation & Compliance']
  }
};

export const officeDepartments: DepartmentItem[] = [
  { id: 1, name: 'Managing Director (MD)', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80', description: 'MD cabin steering business goals.' },
  { id: 2, name: 'Sales Team', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80', description: 'Generating business and onboarding partners.' },
  { id: 3, name: 'Reservation & Operations Team', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80', description: 'Live tracking and driver dispatch controls.' },
  { id: 4, name: 'Billing Team', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80', description: 'Seamless billing and invoice reconciliation.' },
  { id: 5, name: 'Accounts & Financial Team', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80', description: 'Taxation, budgeting, and corporate ledgers.' }
];

export const indiaStatesData = [
  { name: 'Jammu & Kashmir', desc: 'Heaven on Earth', image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&w=150&q=80' },
  { name: 'Himachal Pradesh', desc: 'Land of Gods', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=150&q=80' },
  { name: 'Punjab', desc: 'Soulful & Spiritual', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=150&q=80' },
  { name: 'Rajasthan', desc: 'The Royal Legacy', image: 'https://images.unsplash.com/photo-1477584322811-53372851789c?auto=format&fit=crop&w=150&q=80' },
  { name: 'Gujarat', desc: 'Vibrant & Versatile', image: 'https://images.unsplash.com/photo-1599661046289-e31897826741?auto=format&fit=crop&w=150&q=80' },
  { name: 'Maharashtra', desc: 'Heritage & Progress', image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=150&q=80' },
  { name: 'Goa', desc: 'Beach, Peace & Party', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=150&q=80' },
  { name: 'Karnataka', desc: 'Culture & Nature', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=150&q=80' },
  { name: 'Kerala', desc: "God's Own Country", image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=150&q=80' },
  { name: 'Uttarakhand', desc: 'Devbhoomi', image: 'https://images.unsplash.com/photo-1588414734732-660b07304ddb?auto=format&fit=crop&w=150&q=80' },
  { name: 'Uttar Pradesh', desc: 'Timeless Heritage', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=150&q=80' },
  { name: 'Bihar', desc: 'Land of Enlightenment', image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=150&q=80' },
  { name: 'West Bengal', desc: 'Culture & Creativity', image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=150&q=80' },
  { name: 'Odisha', desc: 'Spiritual & Serene', image: 'https://images.unsplash.com/photo-1608958416876-be4d35a39626?auto=format&fit=crop&w=150&q=80' },
  { name: 'Andhra Pradesh', desc: 'Land of Temples', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=150&q=80' },
  { name: 'Tamil Nadu', desc: 'Tradition & Temples', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=150&q=80' },
  { name: 'North East India', desc: 'Unexplored Beauty', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=150&q=80' },
  { name: 'Andaman & Nicobar', desc: 'Tropical Paradise', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=150&q=80' },
];

export const siteContacts = {
  phone: '9821504916',
  email: 'Radhey6887@gmail.com',
  address: 'plot No.229, Pocket -9, DDA Flats, Nasirpur Road Sector - Dwarka, Palam - 110045',
  workingHours: '24*7 SERVICES'
};
