import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = (props) => {
    const { data } = props
    return (
        <>
            <div className='absolute top-full -left-5 z-50 w-[160px] rounded-lg p-3 h-auto shadow-card bg-white'>
                {data.map((item) => <Link to={item.route} key={item._id} className='flex items-center gap-x-2 w-full py-2 hover:bg-primary/20'>
                    <span className='text-black/50'>{item.imgsrc}</span>{item.name}
                </Link>)}
            </div>
        </>
    )
}

export default Dropdown