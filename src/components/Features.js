import React from 'react'
import FeatureTabs from './FeatureTabs'

const Features = () => {
  return (
    <div id='features'>
      <div className='container mx-auto mt-16 px-6'>
        <h2 className='mb-6 text-4xl font-semibold text-center'>Features</h2>
        <p className='max-w-md mx-auto text-center text-grayishBlue'>
          Our aim is to make it quick and easy for you to access your favorite
          websites. your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <FeatureTabs />
    </div>
  )
}

export default Features
