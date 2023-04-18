import React from 'react'
import whiteLogo from '../images/LOGO-B~2.SVG'
import facebook from '../images/ICON-F~1.SVG'
import twitter from '../images/ICON-T~1.SVG'

const Footer = () => {
  return (
    <div className='bg-veryDarkBlue'>
      <div className='container flex flex-col items-center justify-between mx-auto space-y-8 px-6 py-8 md:flex-row md:space-y-0'>
        <div>
          <img src={whiteLogo} alt='' />
        </div>
        <div className='  text-white'>
          <p>All right reserverd &copy; 2023</p>
        </div>
        <div className='text-white flex space-x-8 justify-center'>
          <img src={facebook} alt='' />
          <img src={twitter} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Footer
