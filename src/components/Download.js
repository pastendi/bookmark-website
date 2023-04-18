import React from 'react'
import chrome from '../images/LOGO-C~1.SVG'
import firefox from '../images/LOGO-F~1.SVG'
import opera from '../images/LOGO-O~1.SVG'
const Download = () => {
  return (
    <div id='download' className='container mx-auto px-6'>
      <h2 className='mb-6 text-3xl font-semibold text-center md:text-4xl'>
        Download the extension
      </h2>
      <p className='max-auto text-center text-xl text-grayishBlue'>
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favorite you'd like us to prioritize.
      </p>
      <div className='py-20'>
        <div className='relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row'>
          {/* items */}
          {browsers.map((browser, index) => {
            return (
              <div
                className='flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3'
                key={index}
              >
                <div
                  className={`flex justify-center ${
                    browser.name === 'firefox' && 'md:mt-8'
                  }
                ${browser.name === 'opera' && 'md:mt-16'}`}
                >
                  <img src={browser.image} alt='' />
                </div>
                <h5 className='pt-6 text-xl font-bold'>
                  {' '}
                  Add to {browser.name}
                </h5>
                <p className='text-gray-400'>{browser.version}</p>
                {/* dots */}
                <div className='dots px-6 pt-6 capitalize'>
                  <a
                    href='#'
                    className='block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue border-softBlue hover:text-softBlue hover:bg-white '
                  >
                    Add & Install Extension
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const browsers = [
  {
    name: 'chrome',
    image: chrome,
    version: 'Minimum version 62',
  },
  {
    name: 'firefox',
    image: firefox,
    version: 'Minimum version 52',
  },
  {
    name: 'opera',
    image: opera,
    version: 'Minimum version 49',
  },
]

export default Download
