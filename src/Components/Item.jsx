import React from 'react'

const Item = (props) => {
  return (
    <div  className='hover:scale-105 duration-200 hover:border-black hover:border-t-[3px]'>
        <img className='w-72  rounded-sm' src={props.image} alt="" />
        <p className='text-base my-2 w-56'>{props.name}</p>
        <div className='flex gap-4 '>
            <div className='font-bold'>${props.new_price}</div>
            <div className='text-gray-700 line-through font-normal'>${props.old_price}</div>
        </div>
    </div>
  )
}

export default Item