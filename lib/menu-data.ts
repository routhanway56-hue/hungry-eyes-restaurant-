export interface MenuItem {
  id: string;
  name: string;
  category: 
    | 'Soups' 
    | 'Veg Starters' 
    | 'Non-Veg Starters' 
    | 'Tandoor & Breads' 
    | 'Indian Main Course (Veg)' 
    | 'Indian Main Course (Non-Veg)' 
    | 'Desserts & Beverages';
  price: number; // Price in INR (₹)
  isVeg: boolean;
  tag?: string;
}

export const RESTAURANT_INFO = {
  name: 'Hungry eyes Restaurant',
  rating: 4.1,
  reviewsCount: 846,
  cuisine: 'Bengali, North Indian, Tandoor & Chinese',
  tagline: 'Versatile event venue and restaurant featuring an atmospheric setting with outdoor cottage-style seating.',
  highlights: 'All you can eat · Good for kids birthday',
  hours: 'Open · Closes 11:00 PM',
  phone: '07908188519',
  displayPhone: '079081 88519',
  whatsapp: '917908188519',
  address: '62PG+7HX, Ailakundi P, Bankura, West Bengal 722102',
  mapsQuery: 'https://www.google.com/maps/search/?api=1&query=Hungry+eyes+Restaurant+Ailakundi+Bankura+West+Bengal+722102',
};

export const MENU_ITEMS: MenuItem[] = [
  // --- SOUP - NON VEG ---
  { id: 'soup-1', name: 'Chicken Sweet Corn Soup', category: 'Soups', price: 140, isVeg: false },
  { id: 'soup-2', name: 'Chicken Hot & Sour Soup', category: 'Soups', price: 150, isVeg: false },
  { id: 'soup-3', name: 'Chicken Clear Soup', category: 'Soups', price: 130, isVeg: false },
  { id: 'soup-4', name: 'Chicken Manchow Soup', category: 'Soups', price: 160, isVeg: false, tag: 'Popular' },
  { id: 'soup-5', name: 'Chicken Taliban Soup', category: 'Soups', price: 180, isVeg: false },
  { id: 'soup-6', name: 'Chicken Egg Drop Soup', category: 'Soups', price: 160, isVeg: false },
  { id: 'soup-7', name: 'Chicken Mushroom & Baby Corn Soup', category: 'Soups', price: 180, isVeg: false },
  { id: 'soup-8', name: 'Chicken Lemon Coriander Soup', category: 'Soups', price: 150, isVeg: false },

  // --- STARTER - VEG ---
  { id: 'vstart-1', name: 'Mushroom Salt & Pepper', category: 'Veg Starters', price: 230, isVeg: true },
  { id: 'vstart-2', name: 'Baby Corn Salt & Pepper', category: 'Veg Starters', price: 220, isVeg: true },
  { id: 'vstart-3', name: 'American Corn Salted & Pepper', category: 'Veg Starters', price: 230, isVeg: true },
  { id: 'vstart-4', name: 'Veg Pakoda (6 Pcs)', category: 'Veg Starters', price: 160, isVeg: true },
  { id: 'vstart-5', name: 'Onion Pakoda (6 Pcs)', category: 'Veg Starters', price: 160, isVeg: true },
  { id: 'vstart-6', name: 'Paneer Pakoda (6 Pcs)', category: 'Veg Starters', price: 200, isVeg: true },
  { id: 'vstart-7', name: 'Veg Manchurian Dry (6 Pcs)', category: 'Veg Starters', price: 200, isVeg: true },
  { id: 'vstart-8', name: 'Crispy Potato', category: 'Veg Starters', price: 140, isVeg: true },
  { id: 'vstart-9', name: 'Crispy Chilli Potato', category: 'Veg Starters', price: 170, isVeg: true },
  { id: 'vstart-10', name: 'Crispy Honey Potato', category: 'Veg Starters', price: 180, isVeg: true },
  { id: 'vstart-11', name: 'French Fry', category: 'Veg Starters', price: 120, isVeg: true },
  { id: 'vstart-12', name: 'Crispy Chilli Babycorn', category: 'Veg Starters', price: 230, isVeg: true, tag: 'Bestseller' },
  { id: 'vstart-13', name: 'Crispy Chilli Mushroom', category: 'Veg Starters', price: 230, isVeg: true },
  { id: 'vstart-14', name: 'Veg Cheese Ball', category: 'Veg Starters', price: 230, isVeg: true },
  { id: 'vstart-15', name: 'Paneer Chilli Dry (6 Pcs)', category: 'Veg Starters', price: 240, isVeg: true },
  { id: 'vstart-16', name: 'Paneer Finger', category: 'Veg Starters', price: 230, isVeg: true },
  { id: 'vstart-17', name: 'Paneer 65', category: 'Veg Starters', price: 230, isVeg: true },

  // --- STARTER - NON VEG ---
  { id: 'nvstart-1', name: 'Chicken Cheese Ball (6 Pcs)', category: 'Non-Veg Starters', price: 240, isVeg: false },
  { id: 'nvstart-2', name: 'Crispy Chicken', category: 'Non-Veg Starters', price: 240, isVeg: false, tag: 'Chef Special' },
  { id: 'nvstart-3', name: 'Curry Leaves Pepper Chicken', category: 'Non-Veg Starters', price: 240, isVeg: false },
  { id: 'nvstart-4', name: 'Chicken With Fire Sauce', category: 'Non-Veg Starters', price: 270, isVeg: false },
  { id: 'nvstart-5', name: 'Dragon Chicken', category: 'Non-Veg Starters', price: 240, isVeg: false },
  { id: 'nvstart-6', name: 'Fish Pakoda', category: 'Non-Veg Starters', price: 250, isVeg: false },
  { id: 'nvstart-7', name: 'Grill Fish (6 Pcs)', category: 'Non-Veg Starters', price: 320, isVeg: false },
  { id: 'nvstart-8', name: 'Chilli Fish Dry (6 Pcs)', category: 'Non-Veg Starters', price: 270, isVeg: false },
  { id: 'nvstart-9', name: 'Fish Finger (6 Pcs)', category: 'Non-Veg Starters', price: 320, isVeg: false, tag: 'Must Try' },
  { id: 'nvstart-10', name: 'Curry Leaves With Pepper Fish (6 Pcs)', category: 'Non-Veg Starters', price: 280, isVeg: false },

  // --- TANDOOR & BREADS ---
  { id: 'tandoor-1', name: 'Chicken Tikka Kabab', category: 'Tandoor & Breads', price: 250, isVeg: false, tag: 'Smoky' },
  { id: 'tandoor-2', name: 'Chicken Reshmi Kabab', category: 'Tandoor & Breads', price: 250, isVeg: false },
  { id: 'tandoor-3', name: 'Pahari Kabab', category: 'Tandoor & Breads', price: 260, isVeg: false },
  { id: 'tandoor-4', name: 'Chicken Tikka Hariyali', category: 'Tandoor & Breads', price: 260, isVeg: false },
  { id: 'tandoor-5', name: 'Tandoor Chicken (Half)', category: 'Tandoor & Breads', price: 270, isVeg: false },
  { id: 'tandoor-6', name: 'Tandoor Chicken (Full)', category: 'Tandoor & Breads', price: 450, isVeg: false, tag: 'Family Size' },
  { id: 'tandoor-7', name: 'Fish Seekh Kabab', category: 'Tandoor & Breads', price: 260, isVeg: false },
  { id: 'bread-1', name: 'Tandoori Roti', category: 'Tandoor & Breads', price: 20, isVeg: true },
  { id: 'bread-2', name: 'Plain Naan', category: 'Tandoor & Breads', price: 30, isVeg: true },
  { id: 'bread-3', name: 'Butter Naan', category: 'Tandoor & Breads', price: 50, isVeg: true },
  { id: 'bread-4', name: 'Garlic Naan', category: 'Tandoor & Breads', price: 60, isVeg: true },
  { id: 'bread-5', name: 'Masala Kulcha', category: 'Tandoor & Breads', price: 50, isVeg: true },

  // --- INDIAN MAIN COURSE - VEG ---
  { id: 'mainv-1', name: 'Dal Fry (Yellow)', category: 'Indian Main Course (Veg)', price: 110, isVeg: true },
  { id: 'mainv-2', name: 'Dal Tadka (Black)', category: 'Indian Main Course (Veg)', price: 140, isVeg: true },
  { id: 'mainv-3', name: 'Dal Makhani', category: 'Indian Main Course (Veg)', price: 160, isVeg: true },
  { id: 'mainv-4', name: 'Egg Tadka', category: 'Indian Main Course (Veg)', price: 170, isVeg: false },
  { id: 'mainv-5', name: 'Chana Masala', category: 'Indian Main Course (Veg)', price: 170, isVeg: true },
  { id: 'mainv-6', name: 'Green Peas Masala', category: 'Indian Main Course (Veg)', price: 200, isVeg: true },
  { id: 'mainv-7', name: 'Paneer Mushroom Taj', category: 'Indian Main Course (Veg)', price: 260, isVeg: true },
  { id: 'mainv-8', name: 'Mix Veg', category: 'Indian Main Course (Veg)', price: 180, isVeg: true },
  { id: 'mainv-9', name: 'Aloo Gobi Masala', category: 'Indian Main Course (Veg)', price: 180, isVeg: true },
  { id: 'mainv-10', name: 'Veg Kolapuri', category: 'Indian Main Course (Veg)', price: 200, isVeg: true },
  { id: 'mainv-11', name: 'Kadai Paneer', category: 'Indian Main Course (Veg)', price: 240, isVeg: true },
  { id: 'mainv-12', name: 'Paneer Butter Masala', category: 'Indian Main Course (Veg)', price: 250, isVeg: true, tag: 'Bestseller' },
  { id: 'mainv-13', name: 'Paneer Kaju Curry', category: 'Indian Main Course (Veg)', price: 270, isVeg: true },
  { id: 'mainv-14', name: 'Sahi Paneer', category: 'Indian Main Course (Veg)', price: 280, isVeg: true },
  { id: 'mainv-15', name: 'Paneer Tikka Butter Masala', category: 'Indian Main Course (Veg)', price: 290, isVeg: true },
  { id: 'mainv-16', name: 'Aloo Posto (Bengali Special)', category: 'Indian Main Course (Veg)', price: 200, isVeg: true, tag: 'Bengali Classic' },
  { id: 'mainv-17', name: 'Aloo Jhuri Bhaja', category: 'Indian Main Course (Veg)', price: 100, isVeg: true },
  { id: 'mainv-18', name: 'Benarasi Aloo Dum', category: 'Indian Main Course (Veg)', price: 210, isVeg: true },
  { id: 'mainv-19', name: 'Malai Kofta', category: 'Indian Main Course (Veg)', price: 220, isVeg: true },
  { id: 'mainv-20', name: 'Chatni', category: 'Indian Main Course (Veg)', price: 60, isVeg: true },

  // --- INDIAN MAIN COURSE - NON-VEG ---
  { id: 'mainnv-1', name: 'Chicken Curry', category: 'Indian Main Course (Non-Veg)', price: 220, isVeg: false },
  { id: 'mainnv-2', name: 'Chicken Kosha', category: 'Indian Main Course (Non-Veg)', price: 240, isVeg: false, tag: 'Traditional' },
  { id: 'mainnv-3', name: 'Chicken Butter Masala', category: 'Indian Main Course (Non-Veg)', price: 270, isVeg: false },
  { id: 'mainnv-4', name: 'Kadai Chicken', category: 'Indian Main Course (Non-Veg)', price: 260, isVeg: false },
  { id: 'mainnv-5', name: 'Chicken Tikka Masala', category: 'Indian Main Course (Non-Veg)', price: 290, isVeg: false },
  { id: 'mainnv-6', name: 'Mutton Kosha', category: 'Indian Main Course (Non-Veg)', price: 350, isVeg: false, tag: 'Special' },
  { id: 'mainnv-7', name: 'Fish Curry (Katla)', category: 'Indian Main Course (Non-Veg)', price: 150, isVeg: false },
  { id: 'mainnv-8', name: 'Fish Mustard (Sorshe Jhal)', category: 'Indian Main Course (Non-Veg)', price: 180, isVeg: false, tag: 'Bengali Favorite' },
  { id: 'mainnv-9', name: 'Egg Curry', category: 'Indian Main Course (Non-Veg)', price: 120, isVeg: false },

  // --- DESSERTS & BEVERAGES ---
  { id: 'bev-1', name: 'Mineral Water', category: 'Desserts & Beverages', price: 20, isVeg: true },
  { id: 'bev-2', name: 'Cold Drink', category: 'Desserts & Beverages', price: 30, isVeg: true },
  { id: 'bev-3', name: 'Masala Cold Drink', category: 'Desserts & Beverages', price: 50, isVeg: true },
  { id: 'bev-4', name: 'Fresh Lemon Soda', category: 'Desserts & Beverages', price: 60, isVeg: true },
  { id: 'bev-5', name: 'Milk Shake', category: 'Desserts & Beverages', price: 120, isVeg: true },
  { id: 'bev-6', name: 'Cold Coffee', category: 'Desserts & Beverages', price: 110, isVeg: true },
  { id: 'bev-7', name: 'Cold Coffee With Ice Cream', category: 'Desserts & Beverages', price: 160, isVeg: true, tag: 'Featured' },
  { id: 'bev-8', name: 'Sweet Lassi', category: 'Desserts & Beverages', price: 100, isVeg: true },
  { id: 'bev-9', name: 'Chocolate / Vanilla / Butterscotch Ice Cream', category: 'Desserts & Beverages', price: 80, isVeg: true },
  { id: 'bev-10', name: 'Virgin Mojito', category: 'Desserts & Beverages', price: 160, isVeg: true },
  { id: 'bev-11', name: 'Blue Lagoon', category: 'Desserts & Beverages', price: 160, isVeg: true, tag: 'Menu Highlight' },
  { id: 'bev-12', name: 'Hungry Eyes Special Ice Cream', category: 'Desserts & Beverages', price: 200, isVeg: true, tag: 'House Special' },
  { id: 'bev-13', name: 'Sunset Mocktail', category: 'Desserts & Beverages', price: 150, isVeg: true },
  { id: 'bev-14', name: 'Mango Rembal', category: 'Desserts & Beverages', price: 160, isVeg: true },
];
