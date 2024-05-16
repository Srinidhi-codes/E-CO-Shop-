import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = (props) => {
    const { data, className } = props
    return (
        <>
            <div className={`${className} h-auto shadow-card bg-white rounded-lg p-3 z-50`}>
                {data.map((item) => <Link to={item.route} key={item._id} className='flex items-center gap-x-2 w-full py-2 hover:bg-primary/20'>
                    <span className='text-black/50 font-medium'>{item.imgsrc}</span>{item.name}
                </Link>)}
            </div>
        </>
    )
}

export default Dropdown