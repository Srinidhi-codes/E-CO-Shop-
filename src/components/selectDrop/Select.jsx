import React, { useState } from "react"
import './selectDrop.css'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { ClickAwayListener } from '@mui/material'

const SelectDrop = (props) => {
    const { data, placeholder } = props
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedItem, setSelectedItem] = useState(placeholder)
    const closeSelect = (index, item) => {
        setIsOpen(false)
        setSelectedIndex(index)
        setSelectedItem(item)
    }
    return (
        <>
            <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                <div className="relative">
                    <span className="selectDrop flex text-nowrap gap-2 min-w-[10rem]" onClick={() => setIsOpen(!isOpen)} >{selectedItem} <KeyboardArrowDownOutlinedIcon className="text-[1rem]" /></span>
                    {isOpen && <div className="w-[300px] h-auto rounded-xl bg-white absolute top-[160%] left-[-20px] z-50 p-[15px] shadow-card">
                        <div className="searchField">
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search here..." className="border capitalize border-primary p-2 border-opacity-40 rounded-[10px] outline-none w-full h-[40px]" />
                        </div>
                        <ul className="searchResult w-full m-0 py-[10px] max-h-[300px] overflow-y-scroll">
                            {data?.filter((item) => (item.toLowerCase()).includes(search)).map((item, index) => <li key={index} onClick={() => closeSelect(index, item)} className={`${selectedIndex === index ? 'bg-primary/30' : ''} list-none text-[18px] w-full p-[10px] hover:bg-primary hover:text-white`}>{item}</li>)}
                        </ul>
                    </div >}
                </div>
            </ClickAwayListener>
        </>
    )
}

export default SelectDrop