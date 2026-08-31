import React from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { SiTicktick } from "react-icons/si";
import { FaRegBell } from "react-icons/fa";
import { TbTimelineEventExclamation } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FaBullhorn } from 'react-icons/fa';
import { FaPeopleGroup } from "react-icons/fa6";

const Overview = () => {

    const folders = [
        {
            Label: 'My Subjects',
            logo: <FaBook />,
            bgcolor: "bg-green-200",
            textcolor: "text-green-900"
        },
        {
            Label: 'Materials',
            logo: <FaRegFolderOpen />,
            bgcolor: "bg-green-200",
            textcolor: "text-green-900"
        },
        {
            Label: 'Notice',
            logo: <FaBullhorn />,
            bgcolor: 'bg-red-200',
            textcolor: 'text-red-900'
        },
        {
            Label: 'Clubs & Events',
            logo: <FaPeopleGroup />,
            bgcolor: 'bg-red-200',
            textcolor: 'text-red-900'
        },
    ]



    return (
        <div className='flex flex-col gap-3 '>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-5xl font-bold'>Good Morning, Ishita!</h1>
                    <span className='flex gap-2 items-center text-lg text-gray-600 py-2'><LuGraduationCap /> B.Tech Computer Science <GoDotFill /> Semester 4, Spring 2023</span>
                </div>
                <div className='flex items-end justify-center gap-4 pb-4'>
                    <h3 className='flex items-center gap-2 bg-green-100 border border-green-400 text-green-700 py-1 px-3 rounded-2xl'><SiTicktick /> Registered</h3>
                    <i className='relative border border-gray-300 rounded-full p-3 hover:cursor-pointer hover:bg-gray-200 transition-all duration-300'><FaRegBell size={22} /><div className='bg-red-700 p-1 rounded-full absolute top-3 right-3'></div></i>
                </div>
            </div>
            <div className='flex gap-4'>
                {/* next event preview */}
                <div className='border border-gray-300 w-1/3  rounded-2xl flex flex-col justify-center hover:shadow-xl shadow-green-800/10 transition-all duration-200 group hover:border-gray-400'>
                    <div className='flex justify-between py-4 px-3 items-center border-b border-gray-300'>
                        <TbTimelineEventExclamation size={30} className='text-green-800' />
                        <h1 className='text-2xl font-semibold'>Next Event</h1>
                        <button className='text-sm font-medium text-green-700 hover:underline hover:cursor-pointer'>View All</button>
                    </div>
                    <div className='flex flex-col items-center gap-2 py-4'>
                        <div className='bg-green-200 py-1 px-4 rounded-xl border border-gray-300 group-hover:scale-103 transition-all duration-200 text-green-900'>
                            <h3 className='uppercase text-sm '>NOV</h3>
                            <h1 className='text-3xl font-semibold'>14</h1>
                        </div>
                        <h2 className='font-medium text-xl'>Data Structures Midterm</h2>
                        <span className='flex gap-1 items-center px-3 py-2 text-sm text-gray-500'><FaRegClock /> 10:10 AM - 12:00 PM <GoDotFill /> Room 302</span>
                        <button className=' border border-gray-300 w-4/5 py-1 rounded-lg font-medium text-gray-700 '>Set Reminder</button>
                    </div>
                </div>
                <div className='w-2/3 flex items-start gap-4'>
                    {
                        folders.map((elem) => (
                            <div className='w-[calc(50%-8px)]
                sm:w-[calc(50%-8px)]
                lg:w-1/4
                min-w-0
                h-[130px]
                border
                border-gray-300
                rounded-xl
                flex
                flex-col
                items-center
                justify-center
                gap-3
                hover:border-gray-400
                hover:shadow-xl 
                shadow-green-800/10
                hover:scale-[1.02]
                transition-all
                duration-200
                cursor-pointer group'>
                                <i className={`p-3 ${elem.bgcolor} ${elem.textcolor} text-2xl rounded-full group-hover:scale-102`}>{elem.logo} </i>
                                <span className={`font-medium ${elem.textcolor} text-sm`}>{elem.Label}</span>

                            </div>

                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Overview