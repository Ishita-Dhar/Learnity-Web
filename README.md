Here’s a **7th-semester-focused README**—it only includes the scope you currently plan to build, without adding future features like AI, alumni, chat, etc.

# 🎓 Learnity

> **A centralized web-based academic information and resource management system designed for a single college.**

Learnity aims to bring important academic resources and college information into one organized platform for **Students, Faculty, and Administrators**.

---

## Project Overview

In many colleges, important information and academic resources are often shared across multiple platforms such as messaging groups, cloud storage, notice boards, and other channels.

Learnity aims to address this problem by providing a centralized platform where users can access and manage:

*  Academic Resources
*  Announcements
*  College Events
*  Event Registrations

The system provides role-based access for **Students, Faculty, and Administrators**.

---

##  7th Semester Objective

The goal for the 7th semester is to develop a **functional Minimum Viable Product (MVP)** of Learnity for the Grand Viva.

The MVP will focus on the core features required to demonstrate the system's purpose and functionality.

---

#  Planned Features

##  Authentication

* User login
* Role-based access
* Logout
* Protected routes

### User Roles

*  Student
*  Faculty
*  Administrator

---

##  Student Module

Students will be able to:

* View their dashboard
* View subjects
* Access subject-related academic resources
* View announcements
* Browse college events
* View event details
* Register for events
* View their event registrations
* Manage their basic profile

---

##  Faculty Module

Faculty members will be able to:

* Access the faculty dashboard
* View assigned subjects
* Upload and manage academic materials
* Create and manage announcements
* Create and manage events

---

##  Admin Module

Administrators will be able to:

* Access the admin dashboard
* Manage users
* Manage departments and subjects
* Manage academic and college-related content
* Manage announcements and events

---

#  Planned System Structure

```text
Learnity
│
├── Public
│   ├── Landing Page
│   └── Login
│
├── Student
│   ├── Dashboard
│   ├── Subjects
│   ├── Study Materials
│   ├── Announcements
│   ├── Events
│   ├── Event Registration
│   └── Profile
│
├── Faculty
│   ├── Dashboard
│   ├── Subjects
│   ├── Materials Management
│   ├── Announcements Management
│   └── Events Management
│
└── Admin
    ├── Dashboard
    ├── User Management
    ├── Department & Subject Management
    └── Content Management
```

---

#  Planned Technology Stack

### Frontend

* React
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Other Tools

* Git
* GitHub
* Postman / Thunder Client

---

#  Core Data Models

The initial system will include the following main entities:

* User
* Department
* Subject
* Material
* Announcement
* Event
* Registration

---

#  Project Workflow

```text
Research
   ↓
Requirements
   ↓
System Design
   ↓
UI/UX Design
   ↓
Development
   ↓
Testing
   ↓
Evaluation
```

Each major feature will be developed using the following approach:

```text
Database
   ↓
Backend API
   ↓
Frontend
   ↓
Integration
   ↓
Testing
```

---

#  Research Component

Learnity is also being developed alongside a research study.

The research will focus on understanding:

* How students currently access academic resources
* Problems caused by scattered information sources
* Difficulties in accessing announcements and college information
* Features students consider important in a centralized platform
* User feedback and evaluation of the Learnity MVP

The findings will be used to guide the development and evaluation of the system.

---

# 👥 Contributors

* **Ishita Dhar**
* **Sneha Pan**
* **Rohit Kumar Biswas**
* **Sandip Pal**

---

#  Current Development Goal

> **To build a functional and research-backed MVP of Learnity during the 7th semester.**

The focus will remain on the core features of the platform rather than expanding the project with unnecessary features.

---

##  Project Status

**Status:** Planning and Development Phase

**Current Goal:** 7th Semester MVP
