import React from 'react'
import {GiChickenOven} from 'react-icons/gi';
import bannerbg1 from '../assets/images/mountain.jpg';
import {FiHeadphones} from "react-icons/fi";
import {AiOutlineHome} from "react-icons/ai";
import darklogo from "../assets/images/logo2.png";
import {FaRegEnvelope} from "react-icons/fa";
import breadcrumbimg from "../assets/images/mountain.jpg"; //1920*838


const sectiondata = {
    headermenu: [
    ],
    herobanners: {
        banner1: {
            title: 'What do you want to eat ? ',
            titleHighlight: [
                {
                    active: true,
                    text: 'Sushi'
                },
                {
                    active: false,
                    text: 'Ramen'
                },
                {
                    active: false,
                    text: 'Boba Tea'
                },
                {
                    active: false,
                    text: 'Beef Noodle'
                },
                {
                    active: false,
                    text: 'Hamburger'
                },
            ],
            content: 'Discover the best Restaurant to stay, eat & Grab food nearest to you.',
            bgimage: bannerbg1,
        },
    },
    categories: {
        featuredcategories: {
            connector: ' ',
            title: ' ',
            items: [
                // {
                //     path: "#",
                //     title: "Pick by Filter",
                //     icon: <GiChickenOven />,
                //     value: "filter"
                // },
                {
                    path: "#",
                    title: "Pick from My List",
                    icon: <GiChickenOven />,
                    value: "list"
                },
                {
                    path: "#",
                    title: "Pick with Friends",
                    icon: <GiChickenOven />,
                    value: "friend"
                }
            ]
        },
    },
    dashboard: {
        breadcrumbimg: breadcrumbimg,
    },
    mostvisitedplaces: {
        sectitle: 'What is Nearby You',
        seccontent: 'Is there already one restaurant nearby we recommend that you like?',
    },
    footerdata: {
        footerlogo: darklogo,
        footerdesc: 'This is a web application that will pick a restaurant for users based on their requirements such as location, prices, food type, the number of reviews and the ratings.',
        footerquicklinks: {
            title: 'Quick Links',
            links: [
                {
                    path: '/sign-up',
                    text: 'sign up'
                },
                {
                    path: '/login',
                    text: 'log in'
                },
                {
                    path: '/add-listing/new',
                    text: 'add listing'
                }
            ]
        },
        footercontact: {
            title: 'Contact With Us',
            lists: [
                {
                    icon: <AiOutlineHome />,
                    text: 'Irvine, CA 92697'
                },
                {
                    icon: <FiHeadphones />,
                    text: '(949) 617-4457'
                },
                {
                    icon: <FaRegEnvelope />,
                    text: 'p1ckyyou2021@gmail.com'
                }
            ]
        },
        copyright: {
            menus: [
                {
                    path: '#',
                    title: 'Terms & Conditions'
                },
                {
                    path: '#',
                    title: 'Privacy Policy'
                },
                {
                    path: '#',
                    title: 'Help Center'
                }
            ]
        }
    }

}
export default sectiondata