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
import Beta from '../Components/Beta';
import { LuSparkles } from "react-icons/lu";
import { IoFilterSharp } from "react-icons/io5";
import { MdPictureAsPdf } from "react-icons/md";

const Overview = () => {

    const folders = [
        {
            Label: 'My Subjects',
            logo: <FaBook />,
            bgcolor: "bg-green-200",
            hoverbg: 'group-hover:bg-green-300',
            textcolor: "text-green-900"
        },
        {
            Label: 'Materials',
            logo: <FaRegFolderOpen />,
            bgcolor: "bg-green-200",
            hoverbg: 'group-hover:bg-green-300',
            textcolor: "text-green-900"
        },
        {
            Label: 'Notice',
            logo: <FaBullhorn />,
            bgcolor: 'bg-red-200',
            hoverbg: 'group-hover:bg-red-300',
            textcolor: 'text-red-900'
        },
        {
            Label: 'Clubs & Events',
            logo: <FaPeopleGroup />,
            bgcolor: 'bg-red-200',
            hoverbg: 'group-hover:bg-red-300',
            textcolor: 'text-red-900',
            beta: <Beta />
        },
    ]

    const ACTIVITIES = [
  {
    type: "New Material Added",
    dot: "bg-emerald-700",
    text: "text-emerald-700",
    time: "2 hours ago",
    title: "Lecture 04: Memory Management.pdf",
    course: "Operating Systems (CS301)",
  },
  {
    type: "Assignment Graded",
    dot: "bg-emerald-700",
    text: "text-emerald-700",
    time: "Yesterday",
    title: "Lab Report 2",
    course: "Database Systems (CS305)",
    badge: "A- (92/100)",
  },
  {
    type: "Announcement",
    dot: "bg-red-800",
    text: "text-red-800",
    time: "Oct 28",
    title: "Hackathon Registration Open",
    body: "The annual university hackathon is now open for registration. Form teams of 4 and submit your proposals by Nov 12.",
  },
]

const Schedule=[
    {
        time:'',
        title:'',
        venue:'',
        professor:''
    },
    {
        time:'',
        title:'',
        venue:'',
        professor:''
    },
    {
        time:'',
        title:'',
        venue:'',
        professor:''
    },
]



    return (
        <div className='flex flex-col gap-3 '>
            <div className='flex justify-between'>
                {/* heading */}
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




                <div className='w-2/3 flex flex-col gap-4'>

                    {/* folders */}

                    <div className=' flex items-start gap-4'>
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
                cursor-pointer group relative'>
                                    {elem.beta}
                                    <i className={`transition-all duration-200 p-3 ${elem.bgcolor} ${elem.textcolor} ${elem.hoverbg} text-2xl rounded-full group-hover:scale-105`}>{elem.logo} </i>
                                    <span className={`font-medium ${elem.textcolor} text-sm`}>{elem.Label}</span>

                                </div>

                            ))
                        }

                    </div>


                    {/* AI Quiz */}

                    <div className='h-full border border-red-200 rounded-xl p-4 flex items-center gap-3 relative'>
                        <Beta />
                        <i className='bg-red-100 p-3 rounded-full flex justify-center items-center text-red-900'><LuSparkles size={30} /></i>
                        <div className=''>
                            <h1 className='text-2xl font-semibold'>AI Study Assistant Ready</h1>
                            <p className='text-sm text-gray-600 '>Based on your recent activity, I've generated a practice quiz for Operating Systems.</p>
                        </div>
                        <button className='border border-gray-300 hover:border-red-200 rounded-lg py-1.5 px-3.5 text-sm cursor-pointer hover:text-red-900'>Start Quiz</button>
                    </div>
                </div>
            </div>

            <div>

                <div className='border border-gray-300 w-1/2  rounded-2xl flex flex-col justify-center hover:shadow-xl shadow-green-800/10 transition-all duration-200 group hover:border-gray-400'>
                    {/* recent activity */}
                    <div className='border-b border-gray-200 flex justify-between items-center px-4 py-3'>
                        <h1 className='text-2xl font-semibold'>Recent Activity</h1>
                        <button className='text-xl text-gray-600 hover:bg-gray-200 p-2 rounded-full'><IoFilterSharp />
                        </button>
                    </div>
                    <div className="relative px-3 py-2">
                        <div className="absolute top-1.5 bottom-1.5 left-4 w-0.5 bg-stone-300" />
                        <div className="space-y-5 sm:space-y-6">
                            {ACTIVITIES.map((item, i) => (
                                <div key={i} className="relative pl-6 sm:pl-7">
                                    <span
                                        className={`absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-stone-50 ${item.dot}`}
                                    />
                                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-2">
                                        <span className={`text-xs sm:text-sm font-medium ${item.text}`}>
                                            {item.type}
                                        </span>
                                        <span className="text-xs sm:text-sm text-stone-400">
                                            {item.time}
                                        </span>
                                    </div>

                                    <div className="rounded-xl bg-white border border-stone-200 px-3.5 py-3 sm:px-4">
                                        {item.body ? (
                                            <>
                                                <p className="text-sm sm:text-[15px] font-medium text-stone-900 mb-1">
                                                    {item.title}
                                                </p>
                                                <p className="text-sm text-stone-500 leading-relaxed">
                                                    {item.body}
                                                </p>
                                            </>
                                        ) : (
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                                                <div className="flex items-center gap-3 min-w-0">
                                                    {item.type === "New Material Added" && (
                                                        <div className="flex items-center justify-center w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-md bg-emerald-50 shrink-0">
                                                            <MdPictureAsPdf className="w-4 h-4 text-emerald-700" />
                                                        </div>
                                                    )}
                                                    <div className="min-w-0">
                                                        <p className="text-sm sm:text-[15px] font-medium text-stone-900 truncate">
                                                            {item.title}
                                                        </p>
                                                        <p className="text-xs sm:text-sm text-stone-400 truncate">
                                                            {item.course}
                                                        </p>
                                                    </div>
                                                </div>
                                                {item.badge && (
                                                    <span className="self-start sm:self-auto text-xs sm:text-sm font-medium rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 sm:px-3 whitespace-nowrap">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    {/* Schedule */}
                </div>
            </div>

        </div>
    )
}

export default Overview