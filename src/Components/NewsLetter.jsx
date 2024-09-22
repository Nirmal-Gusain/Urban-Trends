import React from 'react'

function NewsLetter() {
  return (
    <div className='h-80 text-center bg-gradient-to-b   from-white to-cyan-800'>
        <h1 className='text-5xl pt-16 pb-5'>Get Exclusive Offers On Your Email</h1>
        <h1 className='text-2xl pb-14'>Subscribe to our Newsletter and stay updated </h1>
        <div className='flex items-center justify-center'>
            <input type="text" placeholder='Your Email Here'className='py-3 ml-[35px] px-5 w-96 rounded-full outline-none' />
            <button className='bg-black text-white py-3 rounded-full px-7 relative right-9'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter