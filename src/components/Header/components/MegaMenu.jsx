import React from 'react'
import { Link } from 'react-router-dom'


const MegaMenu = (props) => {
    const { data, className } = props
    console.log(data)
    return (
        <>
            <div className={`${className} h-auto shadow-card bg-white rounded-lg p-3 z-50`}>
                {data?.map((category) => (
                    <div key={category._id} className='w-full p-2'>
                        <div className='font-bold text-primary text-[1.8rem] pb-2'>{category.title}</div>
                        <div key={category.name} className='flex flex-col gap-y-5 hover:text-black'>
                            <Link to={category.route}>{category.name}</Link>
                        </div>
                        <div className='flex flex-col items-start text-[1.2rem] text-black/50 gap-y-3 font-semibold'>
                            {category?.list?.map((subcategory) => (
                                <div key={subcategory.name} className='hover:text-black'>
                                    <Link to={subcategory.route}>{subcategory.name}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className='w-full flex justify-center items-center'>
                    <img className='w-full rounded-lg' src={data[2]?.megaMenu} alt="" />
                </div>
            </div>
        </>
    )
}


export default MegaMenu