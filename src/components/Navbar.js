import React, { useState } from 'react'
import navLinks from '../utils/navLinks'
import blackLogo from '../images/LOGO-B~1.SVG'
import whiteLogo from '../images/LOGO-B~2.SVG'
const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false)
  return (
    <div className='container relative mx-auto p-6'>
      {/* flex container for nav items */}
      <div className='flex items-center justify-between space-x-20 my-6'>
        {/* logo */}
        <div className='z-30'>
          <img src={menuClicked ? whiteLogo : blackLogo} alt='logo' />
        </div>
        {/* menu items */}
        <div className='hidden items-center space-x-10 uppercase text-grayishBlue md:flex'>
          {navLinks.map((item, index) => {
            return (
              <a
                key={index}
                href={`#${item.link}`}
                className='tracking-widest hover:text-softRed'
              >
                {item.link}
              </a>
            )
          })}
          <a
            href='#'
            className='px-8 py-2 text-white bg-softRed border-2 border-softRed rounded lg shadow-md hover:text-softRed hover:bg-white'
          >
            Login
          </a>
        </div>
        {/* hamburger icon */}
        <button
          type='button'
          className='z-30 block md:hidden focus:outline-none hamburger'
          onClick={() => setMenuClicked(!menuClicked)}
        >
          <span
            className={`${
              menuClicked ? 'cross hamburger-top' : 'hamburger-top'
            }`}
          ></span>
          <span
            className={`${menuClicked ? 'hidden' : 'hamburger-middle'}`}
          ></span>
          <span
            className={` ${
              menuClicked ? 'cross hamburger-bottom' : 'hamburger-bottom'
            }`}
          ></span>
        </button>
      </div>
      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-20 ${
          menuClicked ? 'flex' : 'hidden'
        } flex-col items-center self-end w-full h-full  min-h-screen px-6 py-1 pt-24  divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
      >
        {navLinks.map((item, index) => {
          return (
            <a
              key={index}
              href={`#${item.link}`}
              className='block tracking-widest uppercase w-full py-3 text-center text-white  hover:text-softRed'
            >
              {item.link}
            </a>
          )
        })}
        <a
          href='#'
          className='block tracking-widest uppercase w-full py-3 text-center text-white  hover:text-softRed'
        >
          Login
        </a>
      </div>
    </div>
  )
}

export default Navbar
