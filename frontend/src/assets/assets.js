import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

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

export const stall_list = [
  {
    id: 1,
    stall_name: 'Green Leaf Bakery',
    stall_image: stall1,
    location: '123 Bakery Street, City Center',
    operating_hours: '8:00 AM - 6:00 PM',
    google_map_link: 'https://goo.gl/maps/example1',
    menu_items: ["17", "18", "21"] // Cup Cake, Vegan Cake, Garlic Mushroom
  },
  {
    id: 2,
    stall_name: 'The Fresh Market',
    stall_image: stall2,
    location: '45 Farmers Road, Suburb',
    operating_hours: '9:00 AM - 5:00 PM',
    google_map_link: 'https://goo.gl/maps/example2',
    menu_items: ["2", "4"] // Veg Salad, Chicken Salad
  },
  {
    id: 3,
    stall_name: 'Roots and Greens',
    stall_image: stall3,
    location: 'Green Hill Street',
    operating_hours: '8:00 AM - 4:00 PM',
    google_map_link: 'https://goo.gl/maps/example3',
    menu_items: ["5", "8", "26"] // Lasagna Rolls, Veg Rolls, Tomato Pasta
  },
  {
    id: 4,
    stall_name: 'Sunrise Dairy',
    stall_image: stall4,
    location: 'Dairy Lane',
    operating_hours: '7:00 AM - 3:00 PM',
    google_map_link: 'https://goo.gl/maps/example4',
    menu_items: ["29", "30"] // Butter Noodles, Veg Noodles
  },
  {
    id: 5,
    stall_name: 'Baker’s Delight',
    stall_image: stall5,
    location: 'Pastry Point',
    operating_hours: '10:00 AM - 6:00 PM',
    google_map_link: 'https://goo.gl/maps/example5',
    menu_items: ["27", "25"] // Creamy Pasta, Cheese Pasta
  },
  {
    id: 6,
    stall_name: 'Golden Harvest',
    stall_image: stall6,
    location: 'Harvest Road',
    operating_hours: '9:00 AM - 5:00 PM',
    google_map_link: 'https://goo.gl/maps/example6',
    menu_items: ["26", "21", "2"] // Tomato Pasta, Garlic Mushroom, Veg Salad
  },
  {
    id: 7,
    stall_name: 'Golden Stall',
    stall_image: stall7,
    location: 'Bazaar Street',
    operating_hours: '11:00 AM - 7:00 PM',
    google_map_link: 'https://goo.gl/maps/example7',
    menu_items: ["8", "4", "5"] // Veg Rolls, Chicken Salad, Lasagna Rolls
  }
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
}

export const menu_list = [
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Deserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    }]

export const food_list = [

    {
        _id: "2",
        name: "Veg salad",
        image: food_2,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad",
        available: true
    }, {
        _id: "4",
        name: "Chicken Salad",
        image: food_4,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad",
        available: false
    }, {
        _id: "5",
        name: "Lasagna Rolls",
        image: food_5,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls",
        available: false
    }, {
        _id: "8",
        name: "Veg Rolls",
        image: food_8,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls",
        available: true
    }, {
        _id: "17",
        name: "Cup Cake",
        image: food_17,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        available: true
    }, {
        _id: "18",
        name: "Vegan Cake",
        image: food_18,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        available: false
    },  {
        _id: "21",
        name: "Garlic Mushroom ",
        image: food_21,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        available: true
    },
    {
        _id: "25",
        name: "Cheese Pasta",
        image: food_25,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        available: true
    },
    {
        _id: "26",
        name: "Tomato Pasta",
        image: food_26,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        available: true
    }, {
        _id: "27",
        name: "Creamy Pasta",
        image: food_27,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        available: true
    }, {
        _id: "29",
        name: "Buttter Noodles",
        image: food_29,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        available: true
    }, {
        _id: "30",
        name: "Veg Noodles",
        image: food_30,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        available: true
    }
]


export const reviews = [
    {
      stallId: 1,  
      reviews: [
        { id: 1, name: 'Alice', rating: 5, comment: 'Amazing food and service!' },
        { id: 2, name: 'Bob', rating: 4, comment: 'Good food but a bit slow service.' },
      ],
    },
    {
      stallId: 2,
      reviews: [
        { id: 1, name: 'Charlie', rating: 5, comment: 'Great variety and fresh ingredients!' },
        { id: 2, name: 'Daisy', rating: 3, comment: 'Decent food but not much seating space.' },
      ],
    },
  ];