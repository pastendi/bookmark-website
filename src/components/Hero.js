import React from 'react'
import heroImage from '../images/ILLUST~4.SVG'
const Hero = () => {
  return (
    <div id='hero'>
      <div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0'>
        {/* content */}
        <div className='flex flex-col space-y-10 lg:mt-16 lg:w-1/2'>
          <h1 className='text-3xl font-semibold text-center lg:text-6xl lg:text-left'>
            A simple bookmark manager
          </h1>
          <p className='max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0'>
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className='flex items-center justify-center w-full space-x-4 lg:justify-start'>
            <a
              href='#'
              className='p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:text-softBlue hover:bg-white'
            >
              Get it on Chrome
            </a>
            <a
              href=''
              className='p-4 text-sm font-semibold text-white bg-emerald-400 rounded shadow-md border-2 border-emerald-400 md:text-base hover:text-emerald-600 hover:bg-white'
            >
              Get it on Firefox
            </a>
          </div>
        </div>
        {/* image */}
        <div className='relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2'>
          <img
            src={heroImage}
            alt=''
            className='relative z-10 lg:top-24 xl:top-0 overflow-x-visible'
          />
          <div className='hidden lg:block w-[100vw] h-80 absolute rounded-l-full top-52 bg-softBlue left-[30%]'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
