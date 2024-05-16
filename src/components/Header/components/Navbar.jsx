import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import GridViewIcon from '@mui/icons-material/GridView'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import Dropdown from './Dropdown' // Ensure you have the Dropdown component properly imported
import { megaMenuList, pagesList } from '../../../constants/headerConstant'
import MegaMenu from './MegaMenu'

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null)

    const handleDropdownToggle = (dropdown) => {
        setActiveDropdown(prev => (prev === dropdown ? null : dropdown))
    }

    const handleClickAway = () => {
        setActiveDropdown(null)
    }

    return (
        <>
            <div className='flex flex-wrap gap-x-[35rem] justify-start items-center border py-3 px-[5rem]'>
                <div className='flex text-nowrap font-semibold gap-x-2 text-white bg-primary xl:p-5 lg:p-2 rounded-lg'>
                    <span><GridViewIcon /></span>
                    <span>All Categories</span>
                    <span><KeyboardArrowDownOutlinedIcon /></span>
                </div>
                <div className='flex text-nowrap gap-x-[3rem] cursor-pointer'>
                    <Link className='flex gap-x-2 items-center font-semibold hover:text-primary duration-200' to={'/'}>Deals<LocalFireDepartmentIcon className='text-orange-500 animate-pulse' /></Link>
                    <Link className='hover:text-primary font-semibold duration-200' to={'/'}>Home</Link>
                    <Link className='flex gap-x-2 items-center hover:text-primary font-semibold duration-200' to={'/about'}>About</Link>
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div className='flex gap-x-[3rem] items-center'>
                            <div onClick={() => handleDropdownToggle('megaMenu')} className='flex relative gap-x-2 items-center 
                            '>
                                <div className='hover:text-primary font-semibold duration-200'>
                                    Mega Menu<KeyboardArrowDownOutlinedIcon />
                                </div>
                                {activeDropdown === 'megaMenu' && <MegaMenu className='flex absolute top-[3rem] left-[-550px] w-[1400px]' data={megaMenuList} />}
                            </div>
                            <div onClick={() => handleDropdownToggle('blog')} className='flex relative gap-x-2 items-center '>
                                <div className='hover:text-primary font-semibold duration-200'>
                                    Blog<KeyboardArrowDownOutlinedIcon />
                                </div>
                                {activeDropdown === 'blog' && <Dropdown className='absolute top-[3rem] -left-5 w-[140px]' data={pagesList} />}
                            </div>
                            <div onClick={() => handleDropdownToggle('pages')} className='flex relative gap-x-2 items-center'>
                                <div className='hover:text-primary font-semibold duration-200'>
                                    Pages<KeyboardArrowDownOutlinedIcon />
                                </div>
                                {activeDropdown === 'pages' && <MegaMenu className='absolute top-[3rem] -left-5 w-[140px]' data={pagesList} />}
                            </div>
                        </div>
                    </ClickAwayListener>
                    <Link className='flex gap-x-2 items-center font-semibold hover:text-primary duration-200' to={'/'}>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
