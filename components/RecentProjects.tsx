import { projects } from 'data'
import React from 'react'

const RecentProjects = () => {
  return (
    <>
      <div className='py-20 max-w-7xl mx-auto px-4'>
        <h1 className='heading text-center mb-8'>
          A small selection of {''} 
          <span className='text-purple'>recent projects</span>
        </h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {projects.map(({id, title, des, img, iconLists, link}) => (
            <div 
              key={id} 
              className='flex flex-col items-center justify-center p-6 min-h-[200px] 
                        bg-[#161a31]/10 rounded-2xl backdrop-blur-sm
                        hover:bg-[#161a31]/20 transition-all duration-300'
            >
              <h3 className='text-xl md:text-2xl font-semibold text-white mb-4'>
                {title}
              </h3>
              <p className='text-gray-300 text-center'>
                {des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RecentProjects