import React from "react";
import {
    MdSearch,
    MdFilterList,
    MdArrowForward,
    MdAutoAwesome,
    MdKeyboardArrowRight,
} from "react-icons/md";

const announcements = [
    {
        type: "normal",
        tag: "B.TECH/B.PHARM",
        tagStyle: "blue",
        date: "SEP 23, 2026",
        title: "Spring 2026 Course Registration Opens Next Week",
        description:
            "Advising holds will be lifted by Friday. Ensure you have met with your academic advisor before...",
    },
    {
        type: "normal",
        tag: "LIBRARY SERVICES",
        date: "OCT 26, 2026",
        title: "Extended Hours for Midterms",
        description:
            "The main campus library will remain open 9AM-5PM starting this weekend through the end of the...",
    },
    {
        type: "ai",
        tag: "AI Digest Summary",
        date: "OCT 25, 2026",
        title: "Weekly Departmental Seminar Digest",
        description:
            "Three seminars this week align with your registered coursework in WEB DEVELOPMENT. Notable speak...",
    },
    {
        type: "normal",
        tag: "STUDENT COUNCIL",
        date: "OCT 20, 2026",
        title: "Career Fair Vendor List Updated",
        description:
            "Over 50 new tech companies have been added to the roster for the upcoming Fall Career Fair. Review...",
    },
];

const Announcements = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 text-gray-800 sm:px-6 lg:px-8">

            {/* Header */}
            <header className="mb-8 flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">

                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-gray-800 sm:text-3xl">
                        Notifications
                    </h1>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                        Stay updated with the latest university news and department
                        notices.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex w-full flex-col gap-2 sm:flex-row xl:w-auto">

                    {/* Search */}
                    <div className="flex h-11 w-full items-center gap-2 rounded-xl border border-gray-200 hover:bg-gray-100 px-3 sm:w-64">
                        <MdSearch className="text-xl text-gray-400 font-semibold" />

                        <input
                            type="search"
                            placeholder="Search announcements..."
                            className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                        />
                    </div>

                    {/* Department */}
                    <select className="h-11 rounded-xl border border-gray-200 hover:bg-gray-100 px-3 text-sm text-gray-600 outline-none focus:border-green-300 sm:w-44">
                        <option>All Departments</option>
                        <option>Computer Science</option>
                        <option>University Administration</option>
                        <option>Library Services</option>
                        <option>BCA</option>
                        <option>Other</option>
                    </select>

                    {/* Priority */}
                    <select className="h-11 rounded-xl border border-gray-200 hover:bg-gray-100 px-3 text-sm text-gray-600 outline-none focus:border-green-300 sm:w-40">
                        <option>All Priorities</option>
                        <option>Important</option>
                        <option>Normal</option>
                    </select>

                    {/* Filter */}
                    <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-500 transition ">
                        <MdFilterList className="text-xl" />
                    </button>

                </div>
            </header>

            {/* Announcement Grid */}
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                {/* Featured Announcement */}
                <article className="group flex flex-col justify-center rounded-2xl border border-gray-300 bg-white p-5 shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl md:col-span-2 sm:p-6">

                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">

                        <div className="flex flex-wrap gap-2">

                            <span className="rounded-full bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700">
                                Important!
                            </span>

                            <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                                University Administration
                            </span>

                        </div>

                        <span className="text-xs text-gray-400">
                            SEP 24, 2026 • 09:00 AM
                        </span>

                    </div>

                    <h2 className="max-w-3xl text-xl font-semibold leading-8 text-gray-800 sm:text-2xl">
                        Campus Closure Due to Extreme Weather Conditions
                    </h2>

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base">
                        Due to the impending severe storm forecasted by the National
                        Weather Service, all in-person classes and non-essential campus
                        operations will be suspended starting tomorrow, SEPTEMBER...
                    </p>

                    <button className="mt-6 flex min-h-11 items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 text-sm font-semibold text-green-700 transition hover:border-green-200 hover:bg-green-50">
                        Read Full Details
                        <MdArrowForward />
                    </button>

                </article>

                {/* Other Announcements */}
                {announcements.map((item, index) => (
                    <article
                        key={index}
                        className={`group flex w-full flex-col justify-center rounded-2xl border border-gray-300 p-5 shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl sm:p-6 ${item.type === "ai"
                                ? "bg-yellow-50/40"
                                : "bg-white"
                            }`}
                    >

                        {/* Card Header */}
                        <div className="mb-5 flex items-start justify-between gap-3">

                            <span
                                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${item.type === "ai"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : item.tagStyle === "blue"
                                        ? "bg-green-50 text-green-700"
                                        : "bg-gray-100 text-gray-600"
                                    }`}
                            >
                                {item.type === "ai" && (
                                    <MdAutoAwesome className="mr-1 inline-block text-sm" />
                                )}

                                {item.tag}
                            </span>

                            {item.type === "ai" && (
                                <MdAutoAwesome className="text-lg text-yellow-600" />
                            )}

                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold leading-7 text-gray-800">
                            {item.title}
                        </h3>

                        {/* Date */}
                        <p className="mt-3 text-xs text-gray-400">
                            {item.date}
                        </p>

                        {/* Description */}
                        <p className="mt-4 text-sm leading-6 text-gray-500">
                            {item.description}
                        </p>

                        {/* Read More */}
                        <button className="mt-5 flex items-center gap-1 text-sm font-semibold text-green-700 transition hover:text-green-800 group">
                            {item.type === "ai" ? "View Details" : "Read More"}
                            <MdKeyboardArrowRight className="text-lg group-hover:translate-x-1 " />
                        </button>

                    </article>
                ))}

            </section>

            {/* Load More */}
            <div className="flex justify-center py-7">
                <button className="w-full max-w-xs rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-200">
                    Load More Announcements
                </button>
            </div>

        </div>
    );
};

export default Announcements;

