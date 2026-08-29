import React from 'react'
import { LuGraduationCap } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { SiTicktick } from "react-icons/si";
import { FaRegBell } from "react-icons/fa";
import { TbTimelineEventExclamation } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa6";

const Overview = () => {




    return (
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-5xl font-bold'>Good Morning, Ishita!</h1>
                    <span className='flex gap-2 items-center text-lg text-gray-600 py-2'><LuGraduationCap /> B.Tech Computer Science <GoDotFill /> Semester 4, Spring 2023</span>
                </div>
                <div className='flex items-end justify-center gap-4 pb-4'>
                    <h3 className='flex items-center gap-2 bg-green-100 border border-green-400 text-green-700 py-1 px-3 rounded-2xl'><SiTicktick /> Registered</h3>
                    <i className='relative border border-gray-300 rounded-full p-3'><FaRegBell size={22} /><div className='bg-red-700 p-1 rounded-full absolute top-3 right-3'></div></i>
                </div>
            </div>
            <div>
                {/* next event preview */}
                <div className='border w-1/3 py-5 px-2 rounded-2xl'>
                    <div className='flex justify-between px-2 items-center'>
                        <TbTimelineEventExclamation size={25}/>
                        <h1 className='text-xl'>Next Event</h1>
                        <button>View All</button>
                    </div>
                    <div>
                        <div>
                            <h3 className='uppercase'>NOV</h3>
                            <h1 className='text-3xl font-semibold'>14</h1>
                        </div>
                        <h2>Data Structures Midterm</h2>
                        <span><FaRegClock /> 10:10 AM - 12:00 PM <GoDotFill /> Room 302</span>
                        <button>Set Reminder</button>
                    </div>
                </div>
                <div>
                    <div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Overview