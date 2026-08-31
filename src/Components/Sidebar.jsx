import React from 'react';

import { NavLink } from 'react-router-dom';

import { MdDashboard } from 'react-icons/md';
import { FaBook } from 'react-icons/fa';
import { FaBullhorn } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineFileUpload } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';
import { BsQuestionCircle } from "react-icons/bs";

const Sidebar = () => {

    const sidelist = [
        {
            icon: <MdDashboard />,
            label: 'Dashboard',
            path: '/dashboard'
        },
        {
            icon: <FaBook />,
            label: 'Subjects',
            path: '/subjects'
        },
        {
            icon: <FaBullhorn />,
            label: 'Announcements',
            path: '/announcements'
        },
        {
            icon: <MdEvent />,
            label: 'Events',
            path: '/events'
        },
        {
            icon: <IoMdSettings />,
            label: 'Settings',
            path: '/settings'
        }
    ];

    return (
        <div className="flex flex-col justify-between h-screen  p-4 border-r bg-green-50/40 border-gray-300">

            {/* Top Section */}
            <div>

                {/* Logo */}
                <div className="flex items-center gap-4 mb-10">

                    <img
                        src=""
                        alt="Learnity"
                        className="h-15 w-15 bg-green-300 rounded-full object-cover"
                    />

                    <div className="flex flex-col">
                        <h1 className="text-green-700 text-2xl font-bold">
                            Learnity
                        </h1>

                        <span className="text-sm font-light">
                            Student Portal
                        </span>
                    </div>

                </div>


                {/* Sidebar Navigation */}

                <ul className="space-y-2">

                    {sidelist.map((elem) => (

                        <li key={elem.label}>

                            <NavLink
                                to={elem.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-4
                                    rounded-lg
                                    py-2 px-3
                                    border-l-4
                                    transition
                                    cursor-pointer
                                    ${isActive
                                        ? 'bg-green-100 text-green-700 border-green-700'
                                        : 'text-gray-700 border-transparent hover:bg-gray-200 '
                                    }`
                                }
                            >

                                <span className="text-2xl">
                                    {elem.icon}
                                </span>

                                <span className="font-medium">
                                    {elem.label}
                                </span>

                            </NavLink>

                        </li>

                    ))}

                </ul>




            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-300 pt-4 space-y-3">
                {/* Upload Material */}
                <button
                    className="
                        flex justify-center items-center gap-2
                        w-full
                        py-3 px-3
                        rounded-lg
                        text-green-50
                        bg-green-700
                        hover:bg-green-800
                        transition
                        cursor-pointer
                    "
                >
                    <MdOutlineFileUpload className="text-2xl" />

                    <span className="font-medium">
                        Upload Material
                    </span>
                </button>




                {/* Logout */}
                <button
                    className="
                        flex items-center gap-3
                        w-full
                        py-2 px-3
                        rounded-lg
                        text-gray-700
                        hover:bg-gray-200
                        transition
                        cursor-pointer
                    "
                >
                    <BsQuestionCircle className="text-2xl" />

                    <span className="font-medium">
                        Help Center
                    </span>
                </button>
                <button
                    className="
                        flex items-center gap-3
                        w-full
                        py-2 px-3
                        rounded-lg
                        text-gray-700
                        hover:bg-red-50
                        hover:text-red-600
                        transition
                        cursor-pointer
                    "
                >
                    <MdLogout className="text-2xl" />

                    <span className="font-medium">
                        Logout
                    </span>
                </button>

            </div>

        </div>
    );
};

export default Sidebar;