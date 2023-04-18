import React, { useState } from 'react'
import simpleImage from '../images/ILLUST~1.SVG'
import speedyImage from '../images/ILLUST~2.SVG'
import easyImage from '../images/ILLUST~3.SVG'

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState('simple')
  return (
    <div>
      <div className='container relative mx-auto my-6 mb-32 mt-12 px-6'>
        <div className='hidden lg:block w-[100vw] h-80 absolute rounded-r-full top-60 bg-softBlue right-[60%]'></div>
        {/* tabs */}
        <div className='flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:flex-row md:space-x-10 cursor-pointer'>
          {tabs.map((x, index) => {
            return (
              <div
                className='flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3'
                key={index}
                onClick={() => setActiveTab(x.tab)}
              >
                <div
                  className={`py-5 ${
                    activeTab === x.tab && 'border-b-4 border-softRed'
                  } `}
                >
                  {x.text}
                </div>
              </div>
            )
          })}
        </div>
        {/* panels */}
        <div className='flex flex-col py-5 md:flex-row md:space-x-7'>
          <div className='flex justify-center md:w-1/2'>
            <img
              src={panels[activeTab].image}
              alt=''
              className='relative z-10'
            />
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
            <h3 className='mt-20 text-3xl font-semibold text-center md:mt-0 md:text-left'>
              {panels[activeTab].heading}
            </h3>
            <p className='max-w-md text-center text-grayishBlue md:text-teft'>
              {panels[activeTab].text}
            </p>
            <div className='mx-auto md:mx-0'>
              <a
                href='#'
                className='px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg bg-softBlue md:inline-block hover:border-softBlue hover:border-2'
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const tabs = [
  { tab: 'simple', text: 'Simple Bookmaking' },
  { tab: 'speedy', text: 'Speedy searching' },
  { tab: 'easy', text: 'Easy sharing' },
]

const panels = {
  simple: {
    image: simpleImage,
    heading: 'Bookmaking in one click',
    text: 'Organize your bookmarks however you like. Our simple drag and drop interface gives you complete control over how you manage yout favorite sites.',
  },
  speedy: {
    image: speedyImage,
    heading: 'Intelligent search',
    text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  easy: {
    image: easyImage,
    heading: 'Share your bookmarks',
    text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
}
export default FeatureTabs
