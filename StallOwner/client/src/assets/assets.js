import basket_icon from './basket_icon.png';
import logo from './logo.png';
import header_img from './header_img.png';
import search_icon from './search_icon.png';
import menu_1 from './menu_1.png';
import menu_2 from './menu_2.png';
import menu_3 from './menu_3.png';
import menu_4 from './menu_4.png';
import menu_5 from './menu_5.png';
import menu_6 from './menu_6.png';
import menu_7 from './menu_7.png';
import menu_8 from './menu_8.png';

import food_2 from './food_2.png';
import food_4 from './food_4.png';
import food_5 from './food_5.png';
import food_8 from './food_8.png';
import food_17 from './food_17.png';
import food_18 from './food_18.png';
import food_21 from './food_21.png';
import food_25 from './food_25.png';
import food_26 from './food_26.png';
import food_27 from './food_27.png';
import food_29 from './food_29.png';
import food_30 from './food_30.png';

import add_icon_white from './add_icon_white.png';
import add_icon_green from './add_icon_green.png';
import remove_icon_red from './remove_icon_red.png';
import app_store from './app_store.png';
import play_store from './play_store.png';
import linkedin_icon from './linkedin_icon.png';
import facebook_icon from './facebook_icon.png';
import twitter_icon from './twitter_icon.png';
import cross_icon from './cross_icon.png';
import selector_icon from './selector_icon.png';
import rating_starts from './rating_starts.png';
import profile_icon from './profile_icon.png';
import bag_icon from './bag_icon.png';
import logout_icon from './logout_icon.png';
import parcel_icon from './parcel_icon.png';

import stall1 from './stall1.jpg';
import stall2 from './stall2.jpg';
import stall3 from './stall3.jpg';
import stall4 from './stall4.jpg';
import stall5 from './stall5.jpg';
import stall6 from './stall6.jpg';
import stall7 from './stall7.jpg';

// Renamed files with underscores (replace spaces in actual filenames)
import eventImage from './Organic_Food_Festival.jpg';
import eventImage1 from './Farmers_Market.jpg';
import eventImage2 from './Healthy_Eating_Workshop.jpg';
import eventImage3 from './Local_Chefs_Showcase.jpg';
import eventImage4 from './Zero_Waste_Challenge.jpg';
import eventImage5 from './Central_Region.jpg';

export const eventsData = [
  {
    id: 1,
    title: "Organic Food Festival",
    description: "Join us for a day full of fresh produce, live cooking shows, and family fun.",
    image: eventImage,
    location: "Lalitpur",
    time: "morning",
    stallIds: [1, 2, 3, 5],
    maxSeats: 15,
    seatsLeft: 10,
  },
  {
    id: 2,
    title: "Farmers Market",
    description: "Meet local farmers, taste free samples, and support sustainable farming.",
    image: eventImage1,
    location: "Lalitpur",
    time: "afternoon",
    stallIds: [1, 3, 5, 6],
    maxSeats: 10,
    seatsLeft: 2,
  },
  {
    id: 3,
    title: "Healthy Eating Workshop",
    description: "Discover how to cook easy, healthy meals using locally sourced ingredients.",
    image: eventImage2,
    location: "Lalitpur",
    time: "evening",
    stallIds: [1, 3, 5, 6],
    maxSeats: 10,
    seatsLeft: 0,
  },
  {
    id: 4,
    title: "Local Chefs Showcase",
    description: "Watch local chefs create delicious dishes using farm-fresh ingredients.",
    image: eventImage3,
    location: "Bhaktapur",
    time: "afternoon",
    stallIds: [1, 3, 5, 7],
    maxSeats: 10,
    seatsLeft: 7,
  },
  {
    id: 5,
    title: "Zero Waste Challenge",
    description: "Learn how to reduce food waste and adopt sustainable habits at home.",
    image: eventImage4,
    location: "Bhaktapur",
    time: "morning",
    stallIds: [1, 2, 3, 4, 5],
    maxSeats: 10,
    seatsLeft: 2,
  },
  {
    id: 6,
    title: "Central Region",
    description: "Interactive sessions teaching children the importance of healthy eating.",
    image: eventImage5,
    location: "Kathmandu",
    time: "evening",
    stallIds: [1, 2, 3, 4, 5],
    maxSeats: 15,
    seatsLeft: 10,
  }
];

export const stall_list = [
  {
    id: 1,
    stall_name: 'Green Leaf Bakery',
    stall_image: stall1,
    location: '123 Bakery Street, City Center',
    operating_hours: '8:00 AM - 6:00 PM',
    google_map_link: 'https://goo.gl/maps/example1',
    food_list: ['Bread', 'Pastries', 'Cakes', 'Cookies'],
  },
  {
    id: 2,
    stall_name: 'The Fresh Market',
    stall_image: stall2,
    location: '45 Farmers Road, Suburb',
    operating_hours: '9:00 AM - 5:00 PM',
    google_map_link: 'https://goo.gl/maps/example2',
    food_list: ['Fruits', 'Vegetables', 'Organic Juice'],
  },
  {
    id: 3,
    stall_name: 'Roots and Greens',
    stall_image: stall3,
    location: '123 Bakery Street, City Center',
    operating_hours: '8:00 AM - 6:00 PM',
    google_map_link: 'https://goo.gl/maps/example1',
    food_list: ['Bread', 'Pastries', 'Cakes', 'Cookies'],
  },
  {
    id: 4,
    stall_name: 'Sunrise Dairy',
    stall_image: stall4,
    location: '45 Farmers Road, Suburb',
    operating_hours: '9:00 AM - 5:00 PM',
    google_map_link: 'https://goo.gl/maps/example2',
    food_list: ['Fruits', 'Vegetables', 'Organic Juice'],
  },
  {
    id: 5,
    stall_name: 'Baker’s Delight',
    stall_image: stall5,
    location: '123 Bakery Street, City Center',
    operating_hours: '8:00 AM - 6:00 PM',
    google_map_link: 'https://goo.gl/maps/example1',
    food_list: ['Bread', 'Pastries', 'Cakes', 'Cookies'],
  },
  {
    id: 6,
    stall_name: 'Golden Harvest',
    stall_image: stall6,
    location: '45 Farmers Road, Suburb',
    operating_hours: '9:00 AM - 5:00 PM',
    google_map_link: 'https://goo.gl/maps/example2',
    food_list: ['Fruits', 'Vegetables', 'Organic Juice'],
  },
  {
    id: 7,
    stall_name: 'Golden Stall',
    stall_image: stall7,
    location: '45 Farmers Road, Suburb',
    operating_hours: '9:00 AM - 5:00 PM',
    google_map_link: 'https://goo.gl/maps/example2',
    food_list: ['Fruits', 'Vegetables', 'Organic Juice'],
  },
];

export const assets = {
  logo,
  basket_icon,
  header_img,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon
};

export const menu_list = [
  { menu_name: "Salad", menu_image: menu_1 },
  { menu_name: "Rolls", menu_image: menu_2 },
  { menu_name: "Deserts", menu_image: menu_3 },
  { menu_name: "Sandwich", menu_image: menu_4 },
  { menu_name: "Cake", menu_image: menu_5 },
  { menu_name: "Pure Veg", menu_image: menu_6 },
  { menu_name: "Pasta", menu_image: menu_7 },
  { menu_name: "Noodles", menu_image: menu_8 },
];

export const food_list = [
  {
    _id: "2",
    name: "Veg salad",
    image: food_2,
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
    available: true,
  },
  {
    _id: "4",
    name: "Chicken Salad",
    image: food_4,
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
    available: false,
  },
  {
    _id: "5",
    name: "Lasagna Rolls",
    image: food_5,
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
    available: true,
  },
  {
    _id: "8",
    name: "Raspberry Cheesecake",
    image: food_8,
    price: 32,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
    available: true,
  },
  {
    _id: "17",
    name: "Veg Sandwich",
    image: food_17,
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
    available: true,
  },
  {
    _id: "18",
    name: "Chicken Sandwich",
    image: food_18,
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
    available: true,
  },
  {
    _id: "21",
    name: "Vanilla Cake",
    image: food_21,
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
    available: true,
  },
  {
    _id: "25",
    name: "Farmhouse Pasta",
    image: food_25,
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
    available: true,
  },
  {
    _id: "26",
    name: "Veg Noodles",
    image: food_26,
    price: 14,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
    available: true,
  },
  {
    _id: "27",
    name: "Chicken Noodles",
    image: food_27,
    price: 32,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
    available: true,
  },
  {
    _id: "29",
    name: "Veg Meal",
    image: food_29,
    price: 18,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Main Course",
    available: true,
  },
  {
    _id: "30",
    name: "Chicken Meal",
    image: food_30,
    price: 24,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Main Course",
    available: true,
  },
];

export const reviews = [
  {
    stallId: 1,
    name: "Hari Prasad",
    rating: 4.8,
    review: "Fresh and tasty food! Highly recommend Green Leaf Bakery.",
  },
  {
    stallId: 2,
    name: "Maya Shrestha",
    rating: 4.6,
    review: "Great variety and excellent customer service.",
  },
  {
    stallId: 1,
    name: "Sita Rai",
    rating: 4.9,
    review: "Love the organic options and the zero waste initiatives.",
  },
  {
    stallId: 3,
    name: "Ram Thapa",
    rating: 4.7,
    review: "Always fresh produce and friendly staff.",
  },
  {
    stallId: 1,
    name: "Anita Gurung",
    rating: 4.5,
    review: "Good quality food with reasonable prices.",
  },
];

