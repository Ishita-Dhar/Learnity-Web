import React from 'react'
import Sidebar from '../Components/Sidebar'
import Overview from './Overview'
import Announcements from './Announcements'
import Events from './Events'

const StudentDashboard = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
        <aside className='w-1/5 shrink-0'>
          <Sidebar/>
        </aside>
        <main className='w-4/5 overflow-y-scroll py-10 px-6'>
          {/* <Overview/> */}
          {/* <Announcements/> */}
          <Events/>
        </main>
    </div>
  )
}

export default StudentDashboard