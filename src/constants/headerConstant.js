import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PinDropIcon from '@mui/icons-material/PinDrop';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';
import megaMenu from '../assets/megaMenu.jpg'

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
export const megaMenuList = [
    {
        _id: '001',
        title: 'Fruits & Vegetables',
        list: [
            { name: 'Meat & Poultry', route: '/meat' },
            { name: 'Fresh Vegetables', route: '/fresh-vegetables' },
            { name: 'Herbs & Seasonings', route: '/herbs-seasonings' },
            { name: 'Cuts & Sprouts', route: '/cuts-sprouts' },
            { name: 'Exotic Fruits & Veggies', route: '/exotic-fruits-veggies' },
            { name: 'Packaged Product', route: '/packaged-product' }
        ]
    },
    {
        _id: '002',
        title: 'Breakfast & Dairy',
        list: [
            { name: 'Milk & Flavoured Milk', route: '/meat' },
            { name: 'Butter and Margarine', route: '/fresh-vegetables' },
            { name: 'Eggs', route: '/herbs-seasonings' },
            { name: 'Sour Cream', route: '/cuts-sprouts' },
            { name: 'Cheese', route: '/exotic-fruits-veggies' },
            { name: 'Bread', route: '/packaged-product' }
        ]
    },
    {
        _id: '003',
        title: 'Meat & Seafood',
        megaMenu: megaMenu,
        list: [
            { name: 'Milk & Flavoured Milk', route: '/meat' },
            { name: 'Butter and Margarine', route: '/fresh-vegetables' },
            { name: 'Eggs', route: '/herbs-seasonings' },
            { name: 'Sour Cream', route: '/cuts-sprouts' },
            { name: 'Cheese', route: '/exotic-fruits-veggies' },
            { name: 'Bread', route: '/packaged-product' }
        ]
    },
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