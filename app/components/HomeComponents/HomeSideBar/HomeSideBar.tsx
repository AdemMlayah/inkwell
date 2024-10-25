import React from 'react'
import TopTopics from './TopTopics'
import TopBlogs from './TopBlogs'
import TopWriters from './TopWriters'

function HomeSideBar() {
  return (
    <div className='w-full mx-4 flex flex-col gap-6 '>
      <TopTopics/>
    
     <TopBlogs/>
     <TopWriters/>
    </div>
  )
}

export default HomeSideBar