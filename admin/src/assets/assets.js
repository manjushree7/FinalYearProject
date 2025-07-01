import logo from './logo.png';
import add_icon from './add_icon.png';
import order_icon from './order_icon.png';
import profile_image from './profile_image.png';
import upload_area from './upload_area.png';
import parcel_icon from './parcel_icon.png';

import menu_1 from './menu_1.png';
import menu_2 from './menu_2.png';
import menu_3 from './menu_3.png';
import menu_4 from './menu_4.png';
import menu_5 from './menu_5.png';
import menu_6 from './menu_6.png';
import menu_7 from './menu_7.png';
import menu_8 from './menu_8.png';


import stall1 from './stall1.jpg';
import stall2 from './stall2.jpg';
import stall3 from './stall3.jpg';
import stall4 from './stall4.jpg';
import stall5 from './stall5.jpg';
import stall6 from './stall6.jpg';
import stall7 from './stall7.jpg';


import eventImage from './Organic Food Festival.jpg';
import eventImage1 from './Farmers Market.jpg';
import eventImage2 from './Healthy Eating Workshop.jpg';
import eventImage3 from './Local Chefs Showcase.jpg';
import eventImage4 from './Zero Waste Challenge.jpg';
import eventImage5 from './Central Region.jpg';


export const assets = {
    logo,
    add_icon,
    order_icon,
    profile_image,
    upload_area,
    parcel_icon,
};

export const menu_list = [
    {
        menu_name: 'Salad',
        menu_image: menu_1,
    },
    {
        menu_name: 'Rolls',
        menu_image: menu_2,
    },
    {
        menu_name: 'Deserts',
        menu_image: menu_3,
    },
    {
        menu_name: 'Sandwich',
        menu_image: menu_4,
    },
    {
        menu_name: 'Cake',
        menu_image: menu_5,
    },
    {
        menu_name: 'Pure Veg',
        menu_image: menu_6,
    },
    {
        menu_name: 'Pasta',
        menu_image: menu_7,
    },
    {
        menu_name: 'Noodles',
        menu_image: menu_8,
    },
];

export const stall_list = [
    {
        id: 1,
        stall_name: 'Green Leaf Bakery',
        stall_image: stall1,  // Use the imported image here
        location: '123 Bakery Street, City Center',
        operating_hours: '8:00 AM - 6:00 PM',
        google_map_link: 'https://goo.gl/maps/example1',
        food_list: ['Bread', 'Pastries', 'Cakes', 'Cookies'],
    },
    {
        id: 2,
        stall_name: 'The Fresh Market',
        stall_image: stall2,  // Use the imported image here
        location: '45 Farmers Road, Suburb',
        operating_hours: '9:00 AM - 5:00 PM',
        google_map_link: 'https://goo.gl/maps/example2',
        food_list: ['Fruits', 'Vegetables', 'Organic Juice'],
    },
    {
        id: 3,
        stall_name: 'Roots and Greens',
        stall_image: stall3,  // Use the imported image here
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

export const eventsData = [
  {
    id: 1,
    title: "Organic Food Festival",
    description: "Join us for a day full of fresh produce, live cooking shows, and family fun.",
    image: eventImage,
    location: "Lalitpur",
    time: "morning",
    stallIds: [1, 2, 3, 5],
  },
  {
    id: 2,
    title: "Farmers Market",
    description: "Meet local farmers, taste free samples, and support sustainable farming.",
    image: eventImage1,
    location: "Lalitpur",
    time: "afternoon",
    stallIds: [1, 3, 5, 6],
  },
  {
    id: 3,
    title: "Healthy Eating Workshop",
    description: "Discover how to cook easy, healthy meals using locally sourced ingredients.",
    image: eventImage2,
    location: "Lalitpur",
    time: "evening",
    stallIds: [1, 3, 5, 6],
  },
  {
    id: 4,
    title: "Local Chefs Showcase",
    description: "Watch local chefs create delicious dishes using farm-fresh ingredients.",
    image: eventImage3,
    location: "Bhaktapur",
    time: "afternoon",
    stallIds: [1, 3, 5, 7],
  },
  {
    id: 5,
    title: "Zero Waste Challenge",
    description: "Learn how to reduce food waste and adopt sustainable habits at home.",
    image: eventImage4,
    location: "Bhaktapur",
    time: "morning",
    stallIds: [1, 2, 3, 4, 5],
  },
  {
    id: 6,
    title: "Central Region",
    description: "Interactive sessions teaching children the importance of healthy eating.",
    image: eventImage5,
    location: "Kathmandu",
    time: "evening",
    stallIds: [1, 2, 3, 4, 5],
  }
];

export const url = 'http://localhost:4000';
