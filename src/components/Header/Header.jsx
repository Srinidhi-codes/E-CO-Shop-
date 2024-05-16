import React, { useMemo, useState } from 'react'
import Logo from '../../assets/logo.svg'
import './header.css'
import SearchIcon from '@mui/icons-material/Search'
import SelectDrop from '../selectDrop/Select'
import { Close, LocationOnOutlined } from '@mui/icons-material'
import { accountList, allCategories } from "../../constants/headerConstant"
import Account from '../../assets/icon-user.svg'
import Compare from '../../assets/icon-compare.svg'
import Wishlist from '../../assets/icon-heart.svg'
import Cart from '../../assets/icon-cart.svg'
import { ClickAwayListener } from '@mui/material'
import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown'


const Header = () => {
    const [search, setSearch] = useState('')
    const [countryList, setCountryList] = useState([]);
    const [accountDropDown, setAccountDropDown] = useState(false)

    useMemo(() => {
        const getCountryList = async () => {
            try {
                const res = await fetch('https://countriesnow.space/api/v0.1/countries/');
                const result = await res.json();
                setCountryList(result.data.map((item) => item.country));
            } catch (error) {
                console.log(error);
            }
        };

        getCountryList();
    }, []);

    return (
        <>
            <header className='py-10'>
                <div className='flex flex-wrap items-center justify-between px-[4rem]'>
                    <div className=''>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center gap-x-5 w-[45rem] h-[50px] rounded-lg border border-primary py-[10px] px-[15px] cursor-pointer'>
                            <SelectDrop placeholder={'All Categories'} data={allCategories} />
                            <div className='inputField pl-5 relative w-[80%]'>
                                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search here...' className='w-full h-[30px] border-none outline-none text-[18px]' />
                                {!search ? <SearchIcon className='absolute top-[4px] right-[15px] opacity-70 text-[30px] ' />
                                    : <Close onClick={() => setSearch("")} className='absolute top-[4px] right-[15px] opacity-70 text-[30px] hover:text-red-700' />}
                            </div>
                        </div>
                    </div>
                    <div className='flex h-[3rem] cursor-pointer items-center pl-5 gap-x-3 rounded-lg shadow-card'>
                        <LocationOnOutlined className='text-primary' />
                        <SelectDrop placeholder={'Your Location'} data={countryList} />
                    </div>
                    <div className='flex items-center gap-x-[2.5rem]'>
                        <div className='relative flex items-end gap-x-2 cursor-pointer'>
                            <img src={Compare} alt={'compare'} />
                            <span className='absolute top-[-13px] left-[19px] bg-primary rounded-full text-sm px-2 py-0 text-white'>3</span>
                            Compare
                        </div>
                        <div className='relative flex items-end gap-x-2 cursor-pointer'>
                            <img src={Wishlist} alt={'compare'} />
                            <span className='absolute top-[-13px] left-[19px] bg-primary rounded-full text-sm px-2 py-0 text-white'>3</span>
                            Wishlist
                        </div>
                        <div className='relative flex items-end gap-x-2 cursor-pointer'>
                            <img src={Cart} alt={'compare'} />
                            <span className='absolute top-[-13px] left-[19px] bg-primary rounded-full text-sm px-2 py-0 text-white'>3</span>
                            Cart
                        </div>
                        <ClickAwayListener onClickAway={() => setAccountDropDown(false)}>
                            <div onClick={() => setAccountDropDown(!accountDropDown)} className='relative flex items-end gap-x-2 cursor-pointer'>
                                <img src={Account} alt={'account'} />
                                Account
                                {accountDropDown && <Dropdown className='absolute top-[3rem] -left-5 w-[160px]' data={accountList} />}
                            </div>
                        </ClickAwayListener>
                    </div>
                </div>
            </header >
            <Navbar />
        </>
    )
}

export default Header