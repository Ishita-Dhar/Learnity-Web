import React from 'react'
import Announcements from '../Student/Announcements'
import Events from '../Student/Events'
import FacultyPortal from './FacultyPortal'
import Sidebar from '../Components/Sidebar'

const FacultyDashboard = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
        <aside className='w-1/5 shrink-0'>
          <Sidebar/>
        </aside>
        <main className='min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8'>
          <FacultyPortal/>
          {/* <Announcements/> */}
          {/* <Events/> */}
        </main>
    </div>
  )
}

export default FacultyDashboard