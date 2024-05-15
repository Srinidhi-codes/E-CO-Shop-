import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PinDropIcon from '@mui/icons-material/PinDrop';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';

export const accountList = [
    { _id: '001', name: 'My Account', route: '/', imgsrc: <PermIdentityIcon /> },
    { _id: '002', name: 'Order Tracking', route: '/', imgsrc: <PinDropIcon /> },
    { _id: '003', name: 'My Wishlist', route: '/', imgsrc: <FavoriteBorderIcon /> },
    { _id: '004', name: 'Settings', route: '/', imgsrc: <TuneIcon /> },
    { _id: '005', name: 'Sign out', route: '/', imgsrc: <LogoutIcon /> },
]

export const pagesList = [
    { _id: '001', name: 'About Us', route: '/' },
    { _id: '002', name: 'Contact', route: '/' },
    { _id: '003', name: 'My Account', route: '/' },
    { _id: '004', name: 'Settings', route: '/' },
]
export const allCategories = [
    'All Categories',
    'Milk and Dairy',
    'Wines and Alcohol',
    'Clothing and Beauty',
    'Pet foods and Toy',
    'Fast Food',
    'Banking Material',
    'Vegetables',
    'Fresh Seafood',
    'Noodles and Rice',
    'Ice Cream'
]