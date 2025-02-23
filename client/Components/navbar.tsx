import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-[#1A0B2E] relative flex justify-around items-center p-4 '>
            <div className='flex gap-4'>
                <img src={'../Images/logo2.png'} alt="logo" className='w-10 h-10' />
            </div>

            {/* Hamburger Button */}
            <button 
                className='hidden max-md:block text-white '
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Desktop Menu */}
            <ul className='max-md:hidden flex gap-17'>
                <li className='hover:text-blue-500 text-white hover:cursor-pointer hover:underline'>Home</li>
                <li className='hover:text-blue-500 text-white hover:cursor-pointer hover:underline'>About</li>
                <li className='hover:text-blue-500 text-white hover:cursor-pointer hover:underline'>Contact</li>
                <li className='hover:text-blue-500 text-white hover:cursor-pointer hover:underline'>Login</li>
            </ul>

            {/* Mobile Menu */}
            <ul className={`absolute top-full left-0 right-0 bg-gray-300 md:hidden 
                ${isOpen ? 'block' : 'hidden'} 
                mt-2 p-4 rounded-xl shadow-lg border border-gray-700
                w-[200px] left-auto mr-3`}
            >
                <li className='hover:text-blue-500 font-bold text-xl hover:cursor-pointer hover:underline py-2'>Home</li>
                <li className='hover:text-blue-500 font-bold text-xl hover:cursor-pointer hover:underline py-2'>About</li>
                <li className='hover:text-blue-500 font-bold text-xl hover:cursor-pointer hover:underline py-2'>Contact</li>
                <li className='hover:text-blue-500 font-bold text-xl hover:cursor-pointer hover:underline py-2'>Login</li>
            </ul>
        </div>
    )
}

export default Navbar;
