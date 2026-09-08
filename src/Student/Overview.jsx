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

    const Schedule = [
        {
            time: <span>9:00 AM</span>,
            title: "Data Structures ",
            location: "Room 310",
            StaffAllotment: " Dr. Smith",

        },
        {
            time: "11:00 AM",
            title: "Operating Systems",
            location: "Lab 3",
            StaffAllotment: " Dr. Trumph",

        },
        {
            time: "2:00 PM",
            title: "Database Systems",
            location: "Room 211",
            StaffAllotment: " Dr. Johnson",

        },
    ]

    return (
        <div className="flex min-h-screen flex-col gap-5 bg-gray-50 px-4 py-6 text-gray-800 sm:px-6 lg:px-8">

            {/*  HEADER  */}

            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                {/* Heading */}

                <div>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Good Morning, Ishita!
                    </h1>

                    <span className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-600 sm:text-base lg:text-lg">
                        <LuGraduationCap />
                        B.Tech Computer Science
                        <GoDotFill />
                        Semester 4, Spring 2023
                    </span>
                </div>

                {/* Header Actions */}

                <div className="flex items-center justify-between gap-3 sm:justify-start xl:pb-2">

                    <h3 className="flex items-center gap-2 rounded-2xl border border-green-400 bg-green-100 px-3 py-1 text-sm font-medium text-green-700 sm:text-base">
                        <SiTicktick />
                        Registered
                    </h3>

                    <button className="relative rounded-full border border-gray-300 p-3 transition-all duration-300 hover:cursor-pointer hover:bg-gray-200">
                        <FaRegBell size={20} />

                        <div className="absolute right-2.5 top-2.5 rounded-full bg-red-700 p-1" />
                    </button>

                </div>
            </div>


            {/* TOP SECTION */}

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">

                {/* NEXT EVENT */}

                <div className="group flex w-full flex-col justify-center rounded-2xl border border-gray-300 bg-white shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl">

                    {/* Card Header */}

                    <div className="flex items-center justify-between gap-3 border-b border-gray-300 px-4 py-4">

                        <TbTimelineEventExclamation
                            size={28}
                            className="shrink-0 text-green-800"
                        />

                        <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl">
                            Next Event
                        </h1>

                        <button className="shrink-0 text-xs font-medium text-green-700 hover:cursor-pointer hover:underline sm:text-sm">
                            View All
                        </button>

                    </div>

                    {/* Event Content */}

                    <div className="flex flex-col items-center gap-2 px-4 py-5">

                        <div className="rounded-xl border border-gray-300 bg-green-200 px-5 py-2 text-center text-green-900 transition-all duration-200 group-hover:scale-105">

                            <h3 className="text-xs uppercase sm:text-sm">
                                NOV
                            </h3>

                            <h1 className="text-3xl font-semibold">
                                14
                            </h1>

                        </div>

                        <h2 className="text-center text-lg font-medium sm:text-xl">
                            Data Structures Midterm
                        </h2>

                        <span className="flex flex-wrap items-center justify-center gap-1 px-2 py-2 text-center text-xs text-gray-500 sm:text-sm">
                            <FaRegClock />
                            10:10 AM - 12:00 PM
                            <GoDotFill />
                            Room 302
                        </span>

                        <button className="mt-1 w-full max-w-xs rounded-lg border border-gray-300 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                            Set Reminder
                        </button>

                    </div>

                </div>


                {/*  RIGHT SECTION  */}

                <div className="flex flex-col gap-5 xl:col-span-2">

                    {/* FOLDERS */}

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">

                        {folders.map((elem, index) => (

                            <div
                                key={index}
                                className="
                                    group
                                    relative
                                    flex
                                    min-w-0
                                    min-h-[120px]
                                    cursor-pointer
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-gray-300
                                    bg-white
                                    px-2
                                    py-4
                                    shadow-green-800/10
                                    transition-all
                                    duration-200
                                    hover:border-gray-400
                                    hover:shadow-xl
                                    hover:scale-[1.02]
                                    sm:min-h-[130px]
                                "
                            >

                                {elem.beta}

                                <i
                                    className={`
                                        rounded-full
                                        p-3
                                        text-xl
                                        transition-all
                                        duration-200
                                        group-hover:scale-105
                                        ${elem.bgcolor}
                                        ${elem.textcolor}
                                        ${elem.hoverbg}
                                    `}
                                >
                                    {elem.logo}
                                </i>

                                <span
                                    className={`text-center text-xs font-medium sm:text-sm ${elem.textcolor}`}
                                >
                                    {elem.Label}
                                </span>

                            </div>

                        ))}

                    </div>


                    {/*  AI STUDY ASSISTANT  */}

                    <div className="group relative flex flex-col gap-4 rounded-2xl border border-gray-300 bg-white p-4 shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl sm:flex-row sm:items-center sm:p-5">

                        <Beta />

                        <i className="flex w-fit shrink-0 items-center justify-center rounded-full bg-red-100 p-3 text-red-900 transition-all duration-200 group-hover:scale-105">
                            <LuSparkles size={28} />
                        </i>

                        <div className="min-w-0 flex-1">

                            <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl">
                                AI Study Assistant Ready
                            </h1>

                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Based on your recent activity, I've generated a
                                practice quiz for Operating Systems.
                            </p>

                        </div>

                        <button className="w-full shrink-0 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-red-200 hover:text-red-900 sm:w-auto">
                            Start Quiz
                        </button>

                    </div>

                </div>

            </div>


            {/*  BOTTOM SECTION  */}

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">

                {/*  RECENT ACTIVITY  */}

                <div className="group w-full rounded-2xl border border-gray-300 bg-white shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl xl:col-span-2">

                    {/* Header */}

                    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-5">

                        <h1 className="text-xl font-semibold sm:text-2xl">
                            Recent Activity
                        </h1>

                        <button className="rounded-full p-2 text-lg text-gray-600 transition hover:bg-gray-200 sm:text-xl">
                            <IoFilterSharp />
                        </button>

                    </div>


                    {/* Activity List */}

                    <div className="relative px-3 py-4 sm:px-5">

                        <div className="absolute bottom-4 left-5 top-5 w-0.5 bg-stone-300 sm:left-7" />

                        <div className="space-y-5 sm:space-y-6">

                            {ACTIVITIES.map((item, i) => (

                                <div
                                    key={i}
                                    className="relative pl-7 sm:pl-9"
                                >

                                    {/* Timeline Dot */}

                                    <span
                                        className={`
                                            absolute
                                            left-0
                                            top-1.5
                                            h-2.5
                                            w-2.5
                                            rounded-full
                                            border-2
                                            border-stone-50
                                            ${item.dot}
                                        `}
                                    />

                                    {/* Activity Heading */}

                                    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">

                                        <span
                                            className={`text-xs font-medium sm:text-sm ${item.text}`}
                                        >
                                            {item.type}
                                        </span>

                                        <span className="text-xs text-stone-400 sm:text-sm">
                                            {item.time}
                                        </span>

                                    </div>


                                    {/* Activity Card */}

                                    <div className="rounded-xl border border-stone-200 bg-white px-3.5 py-3 sm:px-4">

                                        {item.body ? (

                                            <>
                                                <p className="mb-1 text-sm font-medium text-stone-900 sm:text-[15px]">
                                                    {item.title}
                                                </p>

                                                <p className="text-sm leading-relaxed text-stone-500">
                                                    {item.body}
                                                </p>
                                            </>

                                        ) : (

                                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                                                <div className="flex min-w-0 items-center gap-3">

                                                    {item.type === "New Material Added" && (

                                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-50 sm:h-[34px] ">

                                                            <MdPictureAsPdf className="h-4 w-4 text-emerald-700" />

                                                        </div>

                                                    )}

                                                    <div className="min-w-0">

                                                        <p className="truncate text-sm font-medium text-stone-900 sm:text-[15px]">
                                                            {item.title}
                                                        </p>

                                                        <p className="truncate text-xs text-stone-400 sm:text-sm">
                                                            {item.course}
                                                        </p>

                                                    </div>

                                                </div>


                                                {item.badge && (

                                                    <span className="self-start whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 sm:self-auto sm:px-3 sm:text-sm">
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


                {/*  SCHEDULE  */}

                <div className="group hidden rounded-2xl border border-gray-300 bg-white shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl xl:flex xl:flex-col">

                    <div className="border-b border-gray-200 px-5 py-3 flex items-center justify-between">

                        <h1 className="text-2xl font-semibold">
                            Today's Schedule
                        </h1>
                        <button className='text-sm font-medium text-green-700 hover:text-green-800 hover:underline'>
                            Full Calender
                        </button>

                    </div>

                    <div className=''>
                        {
                        Schedule.map((item, idx) => (
                            <div className="flex border px-2 py-1  gap-2 ">
                                <div>
                                    {item.time}
                                </div>
                                <div className='p-1'>

                                </div>
                                <div>
                                    <h1 className='font-semibold'>{item.title}</h1>
                                    <h3 className='flex items-center text-sm text-gray-400'>{item.location}<GoDotFill />{item.StaffAllotment}</h3>
                                </div>
                            </div>
                        ))
                    }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Overview