import React from "react";
import {
    MdAccessTime,
    MdLocationOn,
    MdArrowForward,
    MdEvent,
    MdFilterList,
    MdCheckCircle,
} from "react-icons/md";

const events = [
    {
        type: "recommend",
        title: "Advanced Data Structures Study Group",
        description:
            "Based on your current enrollment in CS-301, this student-led group focuses on preparing for the upcoming midterm exam.",
        date: "Oct 24, 6:00 PM",
        location: "Online Library",
    },
    {
        type: "workshop",
        registered: true,
        title: "Thesis Writing Retreat: Structuring Your Argument",
        description:
            "A focused 3-hour session providing quiet writing time interspersed with guided writing activities.",
        date: "Tomorrow, 9:00 AM",
        location: "Lab 4",
        button: "Manage Booking",
    },
    {
        type: "networking",
        title: "Alumni Mixer: Tech Industry Panel",
        description:
            "Connect with recent graduates working at top technology firms. Bring your questions and expand your network.",
        date: "Friday, 5:30 PM",
        location: "Student Union Room",
        button: "View Details",
    },
    {
        type: "club",
        title: "Debate Society: Preliminary Rounds Prep",
        description:
            "Strategy session and mock debates focusing on this semester's primary topics.",
        date: "Next Mon, 7:00 PM",
        location: "Room 304, Humanities",
        button: "View Details",
    },
];

const Events = () => {
    return (
        <div className="min-h-screen px-4 py-6 text-gray-800 sm:px-6 lg:px-8">

            {/* Header */}
            <header className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-gray-800 sm:text-3xl">
                        Campus Events
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                        Discover academic workshops, seminars, and student gatherings.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2">

                    <button className="flex h-10 items-center gap-2 rounded-full bg-gray-700 px-5 text-sm font-medium text-white transition hover:bg-gray-800">
                        <MdEvent />
                        Add Event
                    </button>

                    <button className="flex h-10 items-center gap-2 rounded-full bg-green-700 px-5 text-sm font-medium text-white transition hover:bg-green-800">
                        <MdEvent />
                        Upcoming
                    </button>

                    <button className="flex h-10 items-center gap-2 rounded-full border border-gray-200 bg-white px-5 text-sm font-medium text-gray-600 transition hover:bg-gray-100">
                        <MdCheckCircle />
                        Registered
                    </button>

                    <button className="flex h-10 items-center gap-2 rounded-full border border-gray-200 bg-white px-5 text-sm font-medium text-gray-600 transition hover:bg-gray-100">
                        <MdFilterList />
                        Event Type
                    </button>

                </div>
            </header>

            {/* Events Grid */}
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                {/* Featured Event */}
                <article className="group overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl md:col-span-2">

                    <div className="flex flex-col lg:flex-row">

                        {/* Image */}
                        <div className="h-64 w-full shrink-0 lg:h-auto lg:w-72">
                            <img
                                src="https://images.unsplash.com/photo-1768448808550-3148cce53a19?q=80&w=686&auto=format&fit=crop"
                                alt="Campus seminar"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col p-5 sm:p-6">

                            <span className="mb-4 w-fit rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                                ● Featured Seminar
                            </span>

                            <p className="mb-2 text-xs font-semibold tracking-wide text-green-700">
                                COMPUTER SCIENCE DEPT
                            </p>

                            <div className="flex items-center gap-1 text-sm text-gray-400">
                                <MdAccessTime />
                                Today, 2:00 PM
                            </div>

                            <h2 className="mt-3 text-xl font-semibold leading-8 text-gray-800 sm:text-2xl">
                                The Future of Generative AI in Academic Research
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                                eveniet, nobis possimus consequatur accusamus assumenda
                                officia pariatur repudiandae at? Consequuntur.
                            </p>

                            {/* Location + Register */}
                            <div className="mt-auto flex flex-col gap-4 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                    <MdLocationOn className="text-green-600" />
                                    Diploma Seminar Hall
                                </div>

                                <button className="rounded-xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800">
                                    Register Now
                                    <MdArrowForward className="ml-2 inline-block" />
                                </button>

                            </div>

                        </div>
                    </div>

                </article>

                {/* Recommended Event */}
                <article className="rounded-2xl border border-yellow-100 bg-yellow-50 p-5 shadow-sm">

                    <span className="text-sm font-semibold text-yellow-700">
                        ✦ Recommended for You!
                    </span>

                    <h2 className="mt-5 text-xl font-semibold leading-7 text-gray-800">
                        Advanced Data Structures Study Group
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                        Based on your current enrollment in CS-301, this student-led group
                        focuses on preparing for the upcoming midterm exam.
                    </p>

                    <div className="mt-6 space-y-2 text-sm text-gray-600">
                        <p>
                            <span className="font-semibold text-gray-700">Date:</span>{" "}
                            Oct 24, 6:00 PM
                        </p>

                        <p className="flex items-center gap-1">
                            <MdLocationOn />
                            Online Library
                        </p>
                    </div>

                    <button className="mt-6 flex w-full items-center justify-center gap-1 rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
                        View Details
                        <MdArrowForward />
                    </button>

                </article>

                {/* Small Event Cards */}
                {events.slice(1).map((event, index) => (
                    <article
                        key={index}
                        className="group flex w-full flex-col justify-center rounded-2xl border border-gray-300 bg-white p-5 shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl sm:p-6"
                    >

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">

                            <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                                {event.type === "workshop"
                                    ? "Workshop"
                                    : event.type === "networking"
                                        ? "Networking"
                                        : "Club Meeting"}
                            </span>

                            {event.registered && (
                                <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                                    <MdCheckCircle />
                                    Registered
                                </span>
                            )}

                        </div>

                        {/* Title */}
                        <h2 className="mt-5 text-xl font-semibold leading-7 text-gray-800">
                            {event.title}
                        </h2>

                        {/* Description */}
                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            {event.description}
                        </p>

                        {/* Event Info */}
                        <div className="mt-5 space-y-2 text-sm text-gray-500">

                            <p className="flex items-center gap-2">
                                <MdAccessTime className="text-gray-400" />
                                {event.date}
                            </p>

                            <p className="flex items-center gap-2">
                                <MdLocationOn className="text-gray-400" />
                                {event.location}
                            </p>

                        </div>

                        {/* Button */}
                        <button className="mt-6 w-full rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-200">
                            {event.button || "View Details"}
                            <MdArrowForward className="ml-1 inline-block" />
                        </button>

                    </article>
                ))}

            </section>
        </div>
    );
};

export default Events;
