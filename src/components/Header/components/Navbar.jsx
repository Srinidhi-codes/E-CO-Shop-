import React, { useState } from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Link } from 'react-router-dom';
import { pagesList } from '../../../constants/headerConstant';
import Dropdown from './Dropdown';
import { ClickAwayListener } from '@mui/material';


const Navbar = () => {
    const [dropDown, setDropDown] = useState(false)
    return (
        <>
            <div className='flex gap-x-[25rem] justify-start items-center border py-3 px-[5rem]'>
                <div className='flex text-nowrap font-semibold gap-x-2 text-white bg-primary xl:p-5 lg:p-2 rounded-lg'>
                    <span><GridViewIcon /></span>
                    <span>All Categories</span>
                    <span><KeyboardArrowDownOutlinedIcon /></span>
                </div>
                <div className='flex text-nowrap gap-x-[3rem] font-semibold'>
                    <Link className='flex gap-x-2 items-center hover:text-primary duration-200' to={'/'}>Deals<LocalFireDepartmentIcon className='text-orange-500 animate-pulse' /></Link>
                    <Link className='flex gap-x-2 items-center hover:text-primary duration-200' to={'/'}>Home<KeyboardArrowDownOutlinedIcon /></Link>
                    <Link className='flex gap-x-2 items-center hover:text-primary duration-200' to={'/about'}>About</Link>
                    <Link className='flex gap-x-2 items-center hover:text-primary duration-200' to={'/'}>Shop<KeyboardArrowDownOutlinedIcon /></Link>
                    <Link className='flex gap-x-2 items-center hover:text-primary duration-200' to={'/'}>Vendors<KeyboardArrowDownOutlinedIcon /></Link>
                    <Link className='flex gap-x-2 items-center hover:text-primary duration-200' to={'/'}>Mega Menu<KeyboardArrowDownOutlinedIcon /></Link>
                    <Link className='flex gap-x-2 items-center hover:text-primary duration-200' to={'/'}>Blog<KeyboardArrowDownOutlinedIcon /></Link>
                    <ClickAwayListener onClickAway={() => setDropDown(false)}>
                        <div className='flex relative gap-x-2 items-center'>
                            <span onClick={() => setDropDown(!dropDown)} className='flex relative gap-x-2 hover:text-primary duration-200 items-center'>Pages<KeyboardArrowDownOutlinedIcon />
                            </span>
                            {dropDown && <Dropdown data={pagesList} />}
                        </div>
                    </ClickAwayListener>
                    <Link className='flex gap-x-2 items-center hover:text-primary duration-200' to={'/'}>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar