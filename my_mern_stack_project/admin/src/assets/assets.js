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

export const url = 'http://localhost:4000';
