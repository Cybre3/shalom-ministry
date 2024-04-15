import AboutUs from '../Components/AboutUs/AboutUs';
import Home from '../Components/Home/Home';


export const TOTAL_SCREENS = [
  {
    screen_name: 'Home',
    component: Home,
    path: '',
    icon: <div className='fa fa-home text-center'>  <p className='flex text-xs'>Home</p> </div>
  },
  {
    screen_name: 'Meet the Ambassaadors',
    component: AboutUs,
    path: 'about-us',
    icon: <div className='fa fa-users text-center'> <p className='flex text-xs'>About Us</p> </div>
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
