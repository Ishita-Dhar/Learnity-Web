import React from 'react'
import Sidebar from '../Components/Sidebar'
import Overview from './Overview'

const StudentDashboard = () => {
  return (
    <div className='flex'>
        <aside className='w-1/5'>
          <Sidebar/>
        </aside>
        <main className='w-4/5 py-10 px-6'>
          <Overview/>
        </main>
    </div>
  )
}

export default StudentDashboard