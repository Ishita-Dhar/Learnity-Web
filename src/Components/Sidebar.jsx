import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdLogout } from "react-icons/md";


const Sidebar = () => {
    const sidelist = [
        { icon: <MdDashboard />, label: "Dashboard" },
        { icon: <FaBook />, label: "Subjects" },
        { icon: <FaBullhorn />, label: "Announcements" },
        { icon: <MdEvent />, label: "Resources" },
        { icon: <IoMdSettings />, label: "Settings" }
    ]

    return (
        <div className='flex flex-col justify-between h-screen w-1/5 p-4 border-r border-gray-300'>
            <div className='border-b border-gray-300 pb-4'>
            <div className='flex items-center gap-4 mb-10'>
                <img src="#" alt="" className='h-15 w-15 bg-green-300 rounded-full object-center' />
                <div className='flex flex-col justify-start '>
                    <h1 className='text-green-700 text-2xl font-bold'>Learnity</h1>
                    <span className='text-sm font-light'>Student Portal</span>
                </div>
            </div>

                <ul>
                    {
                        sidelist.map((elem, idx) => {
                            return (
                                <li key={idx} className='flex items-center gap-4 active:bg-green-100 text-gray-700 active:text-green-700 rounded-lg py-2 px-3 border-l-4 border-transparent active:border-green-700 hover:bg-gray-100'>
                                    <span className='text-2xl'>{elem.icon}</span>
                                    <span className=' font-medium'>{elem.label}</span>
                                </li>
                            )
                        })
                    }
                </ul>

                <button className='flex items-center gap-2'>
                    <i>
                        <MdOutlineFileUpload />
                    </i>
                    <span>Upload Material</span>
                </button>

            </div>
            <div>
                <i><MdLogout /></i>
                <h2>Logout</h2>
            </div>
        </div>
    )
}

export default Sidebar