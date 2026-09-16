import React from "react";
import {
  MdMenuBook,
  MdFolder,
  MdCampaign,
  MdUploadFile,
  MdNotifications,
  MdEvent,
  MdDescription,
  MdCircle,
  MdMoreVert,
  MdLightbulb,
  MdAccessTime,
  MdLocationOn,
  MdArrowForward,
  MdCheckCircle,
} from "react-icons/md";
import Beta from "../Components/Beta";

const FacultyDashboard = () => {
  const overviewCards = [
    {
      icon: <MdMenuBook size={23} />,
      title: "My Subjects",
      value: "4 Classes",
      status: "Active",
      bg:"bg-green-100",
      color:"text-green-800"
    },
    {
      icon: <MdFolder size={23} />,
      title: "Recent Materials",
      value: "12 Uploads",
      subtitle: "+3 this week",
      bg:"bg-red-100",
      color:"text-red-800"

    },
    {
      icon: <MdCampaign size={23} />,
      title: "Recent Announcements",
      value: "5 Drafts",
      status: "notification",
      action: "Review drafts",
      bg:"bg-red-100",
      color:"text-red-900"
    },
  ];

  return (
    <div className=" bg-gray-50 px-4 py-6 text-gray-800 sm:px-6 lg:px-8">

      {/* Header */}
      <header className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-800 sm:text-3xl lg:text-4xl">
            Welcome back, Dr. Dibyendu Mukherjee
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
            Here is a summary of your academic activities today.
          </p>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>All Semester 2026</span>

          <div className="flex p-1 items-center justify-center rounded-full bg-green-100 ">
            <img className="h-10 w-10 rounded-full object-cover border border-green-700 " src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
      </header>

      {/* Overview Cards */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

        {overviewCards.map((card, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-gray-300 bg-white p-5 shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl"
          >
            {/* Top */}
            <div className="flex items-center justify-between">

              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.bg} ${card.color}`}>
                {card.icon}
              </div>

              {card.status === "Active" && (
                <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                  Active
                </span>
              )}

              {card.status === "notification" && (
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              )}

            </div>

            {/* Content */}
            <p className="mt-8 text-sm font-medium text-gray-500">
              {card.title}
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-gray-800">
              {card.value}
            </h2>

            {card.subtitle && (
              <small className="mt-2 block text-sm text-gray-400">
                {card.subtitle}
              </small>
            )}

            {card.action && (
              <button className="mt-2 flex items-center gap-1 text-sm font-medium text-green-700 transition hover:text-green-800">
                {card.action}
                <MdArrowForward size={17} />
              </button>
            )}
          </div>
        ))}

      </section>

      {/* Quick Actions */}
      <section className="my-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button className="flex items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-800">
          <MdUploadFile size={20} />
          Upload Material
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-200">
          <MdNotifications size={20} />
          Create Announcement
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-200">
          <MdEvent size={20} />
          Create Event
        </button>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-[2fr_1fr]">

        {/* Recent Activity */}
        <div className="group rounded-2xl border border-gray-300 bg-white p-5 shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl sm:p-6">

          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="flex items-center gap-2 text-base font-semibold text-gray-700">
              <MdCircle className="text-green-700" size={13} />
              Recent Activity
            </h3>

            <button className="text-gray-400 transition hover:text-gray-600">
              <MdMoreVert size={21} />
            </button>
          </div>

          {/* Activity 1 */}
          <div className="mt-6 flex gap-3 sm:gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-green-600  text-green-700">
              <MdDescription size={18} />
            </div>

            <div className="w-full rounded-xl border border-gray-100 bg-gray-50/50 p-4 hover:bg-green-100/50 transition-all">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <b className="text-sm font-semibold text-gray-700">
                  Uploaded Syllabus - OEC-CS 701B
                </b>

                <span className="text-xs text-gray-400">
                  2 hours ago
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                You uploaded{" "}
                <b className="font-medium text-gray-600">
                  OEC-CS 701B_ALL-Syllabus-2026.pdf
                </b>{" "}
                to Introduction to Multimedia System.
              </p>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="mt-5 flex gap-3 sm:gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-yellow-600  text-yellow-700">
              <MdCampaign size={18} />
            </div>

            <div className="w-full rounded-xl border border-gray-100 bg-gray-50/50 p-4 hover:bg-yellow-100/50 transition-all">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <b className="text-sm font-semibold text-gray-700">
                  Published Announcement
                </b>

                <span className="text-xs text-gray-400">
                  Yesterday
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                "Reminder: Midterm Project proposals are due next Friday."
                sent to Advanced Algorithms.
              </p>
            </div>
          </div>

          {/* Activity 3 */}
          <div className="mt-5 flex gap-3 sm:gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-green-600  text-green-700">
              <MdCheckCircle size={18} />
            </div>

            <div className="w-full rounded-xl border border-gray-100 bg-gray-50/50 p-4 hover:bg-green-100/50 transition-all">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <b className="text-sm font-semibold text-gray-700">
                  AI Quiz Generation Completed
                </b>

                <span className="text-xs text-gray-400">
                  2 days ago
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                The AI assistant finished generating 15 multiple-choice
                questions based on Lecture 4 materials for Data Structures.
              </p>

              <button className="mt-3 flex items-center gap-1 text-sm font-medium text-green-700 transition hover:text-green-800">
                Review Questions
                <MdArrowForward size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-5">

          {/* Upcoming Meetings */}
          <div className="group rounded-2xl border border-gray-300 bg-white p-5 shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl sm:p-6">
            <h3 className="flex items-center gap-2 text-base font-semibold text-gray-700">
              <MdEvent className="text-green-700" size={20} />
              Upcoming Meetings
            </h3>

            {/* Meeting 1 */}
            <div className="mt-5 flex gap-4 border-t border-gray-100 pt-4">
              <div className="min-w-14">
                <small className="block text-xs font-medium text-gray-400">
                  TODAY
                </small>

                <b className="mt-1 block text-green-700">
                  10:00
                </b>
              </div>

              <div>
                <strong className="text-sm font-semibold text-gray-700">
                  Teachers' Day Meeting
                </strong>

                <p className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                  <MdLocationOn size={15} />
                  Room 310, Smart Classroom
                </p>
              </div>
            </div>

            {/* Meeting 2 */}
            <div className="mt-4 flex gap-4 border-t border-gray-100 pt-4">
              <div className="min-w-14">
                <small className="block text-xs font-medium text-gray-400">
                  TODAY
                </small>

                <b className="mt-1 block text-green-700">
                  14:00
                </b>
              </div>

              <div>
                <strong className="text-sm font-semibold text-gray-700">
                  Cultural Events Meeting
                </strong>

                <p className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                  <MdLocationOn size={15} />
                  Same Location
                </p>
              </div>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-1 text-sm font-medium text-green-700 transition hover:text-green-800">
              View Schedule
              <MdArrowForward size={17} />
            </button>
          </div>

          {/* Insights */}
          <div className="group rounded-2xl border border-gray-300 bg-white p-5 shadow-green-800/10 transition-all duration-200 hover:border-gray-400 hover:shadow-xl sm:p-6 relative"> 
          <Beta/>
            <h3 className="flex items-center gap-2 text-base font-semibold text-gray-700">
              <MdLightbulb className="text-yellow-600" size={20} />
              Insights
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Student engagement in{" "}
              <b className="font-medium text-gray-600">
                "Multimedia"
              </b>{" "}
              discussion forum is down{" "}
              <b className="font-medium text-gray-700">
                15%
              </b>{" "}
              this week.
            </p>

            <button className="mt-4 flex items-center gap-1 text-sm font-medium text-green-700 transition hover:text-green-800">
              Draft engagement prompt
              <MdArrowForward size={17} />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FacultyDashboard;