import AboutUs from '../Components/AboutUs/AboutUs';
import Contactus from '../Components/ContactUs/Contactus';
import Give from '../Components/Give/Give';
import Home from '../Components/Home/Home';


export const TOTAL_SCREENS = [
  {
    screen_name: 'Home',
    component: Home,
    path: ''
  },
  {
    screen_name: 'About Us',
    component: AboutUs,
    path: 'about-us'
  },
  {
    screen_name: 'Give',
    component: Give,
    path: 'give/new'
  },
  {
    screen_name: 'Contact Us',
    component: Contactus,
    path: 'contact-us/new'
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
