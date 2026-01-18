# WiseUp - Learning Management System

<div align="center">

![WiseUp Logo](https://img.shields.io/badge/WiseUp-LMS-blue?style=for-the-badge)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.8-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

**Empowering learners through expert-led, accessible education**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [API Documentation](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📖 Table of Contents

- [About WiseUp](#-about-wiseup)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [Usage Guide](#-usage-guide)
- [API Documentation](#-api-documentation)
- [Theme Customization](#-theme-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎓 About WiseUp

**WiseUp** is a modern, full-stack Learning Management System (LMS) designed to provide an exceptional online learning experience. Built with cutting-edge technologies, WiseUp offers a comprehensive platform for educators to create and manage courses, and for students to enroll, learn, and track their progress.

### Key Highlights

## 🌐 Live Demo

- **Frontend (Client):** [https://wise-up-client.vercel.app/](https://wise-up-client.vercel.app/)
- **Backend (Server):** [https://wise-up-server.vercel.app/](https://wise-up-server.vercel.app/)


- 🎨 **Modern Dark Theme UI** - Professional black background with elegant white text and blue accents
- 🔐 **Secure Authentication** - Powered by Clerk for robust user management
- 💳 **Payment Integration** - Seamless course purchases via Stripe
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎥 **Rich Media Support** - YouTube video integration and Quill rich text editor
- 📊 **Progress Tracking** - Real-time course completion monitoring
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds

---

## ✨ Features

### For Students

- **Course Discovery**
  - Browse comprehensive course catalog
  - Advanced search and filtering
  - Course ratings and reviews
  - Preview free lectures before enrolling

- **Learning Experience**
  - Interactive video player with YouTube integration
  - Progress tracking with visual indicators
  - Downloadable resources
  - Certificate of completion
  - Lifetime access to enrolled courses

- **User Dashboard**
  - View all enrolled courses
  - Track learning progress
  - Access course materials
  - Manage profile and preferences

### For Educators

- **Course Management**
  - Create and publish courses
  - Rich text editor for course descriptions
  - Upload course thumbnails and videos
  - Organize content into chapters and lectures
  - Set pricing and discounts

- **Student Analytics**
  - View enrolled students
  - Track course performance
  - Monitor student progress
  - Revenue tracking

- **Content Tools**
  - Quill WYSIWYG editor
  - Media upload via Cloudinary
  - Chapter and lecture organization
  - Preview mode for testing

### Platform Features

- **Authentication & Authorization**
  - Secure login/signup with Clerk
  - Role-based access control (Student/Educator)
  - Protected routes and API endpoints

- **Payment Processing**
  - Stripe integration for secure payments
  - Support for multiple currencies
  - Discount and promotional pricing
  - Payment history tracking

- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts for all screen sizes
  - Touch-friendly interfaces
  - Optimized media loading

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.0 | UI framework |
| **Vite** | 6.3.5 | Build tool and dev server |
| **Tailwind CSS** | 4.1.8 | Utility-first CSS framework |
| **React Router** | 7.6.2 | Client-side routing |
| **Axios** | 1.10.0 | HTTP client |
| **Clerk React** | 5.31.9 | Authentication |
| **React Toastify** | 11.0.5 | Toast notifications |
| **Quill** | 2.0.3 | Rich text editor |
| **React YouTube** | 10.1.0 | YouTube video player |
| **RC Progress** | 4.0.0 | Progress bars |
| **Humanize Duration** | 3.33.0 | Time formatting |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | - | Runtime environment |
| **Express** | 5.1.0 | Web framework |
| **MongoDB** | - | NoSQL database |
| **Mongoose** | 8.16.0 | MongoDB ODM |
| **Clerk Express** | 1.7.0 | Authentication middleware |
| **Stripe** | 18.2.1 | Payment processing |
| **Cloudinary** | 2.7.0 | Media storage |
| **Multer** | 2.0.1 | File upload handling |
| **CORS** | 2.8.5 | Cross-origin resource sharing |
| **Dotenv** | 16.5.0 | Environment variables |

### Development Tools

- **ESLint** - Code linting
- **Nodemon** - Auto-restart server
- **Git** - Version control

---

## 📁 Project Structure

```
WiseUp/
├── client/                    # Frontend React application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── assets/          # Images, icons, and media
│   │   ├── components/      # Reusable React components
│   │   │   ├── students/   # Student-facing components
│   │   │   └── educator/   # Educator-facing components
│   │   ├── context/        # React Context API
│   │   ├── pages/          # Page components
│   │   │   ├── studentPage/
│   │   │   └── educatorPage/
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles & theme
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── Server/                   # Backend Node.js application
│   ├── configs/             # Configuration files
│   │   ├── mongodb.js      # Database connection
│   │   └── cloudinary.js   # Cloudinary setup
│   ├── controllers/         # Route controllers
│   │   ├── userController.js
│   │   ├── courseController.js
│   │   └── educatorController.js
│   ├── middleware/          # Custom middleware
│   │   └── auth.js         # Authentication middleware
│   ├── models/              # Mongoose models
│   │   ├── userModel.js
│   │   ├── courseModel.js
│   │   └── progressModel.js
│   ├── routes/              # API routes
│   │   ├── userRoute.js
│   │   ├── courseRoute.js
│   │   └── educatorRoute.js
│   ├── server.js            # Server entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)

### Required Accounts

You'll need accounts for the following services:

1. **Clerk** - [Sign up](https://clerk.com/) for authentication
2. **Stripe** - [Sign up](https://stripe.com/) for payment processing
3. **Cloudinary** - [Sign up](https://cloudinary.com/) for media storage
4. **MongoDB Atlas** (optional) - [Sign up](https://www.mongodb.com/cloud/atlas) for cloud database

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/wiseup-lms.git
cd wiseup-lms
```

### 2. Install Dependencies

#### Install Client Dependencies

```bash
cd client
npm install
```

#### Install Server Dependencies

```bash
cd ../Server
npm install
```

---

## ⚙️ Configuration

### Client Configuration

1. Create a `.env` file in the `client` directory:

```env
# Clerk Configuration
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Backend API URL
VITE_BACKEND_URL=http://localhost:4000
```

### Server Configuration

1. Create a `.env` file in the `Server` directory:

```env
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017
# Or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net

# Clerk Configuration
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
CURRENCY=USD

# Server Configuration
PORT=4000
FRONTEND_URL=http://localhost:5173
```

### Getting API Keys

#### Clerk Setup
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application
3. Copy the **Publishable Key** for client `.env`
4. Go to Webhooks and create a webhook endpoint
5. Copy the **Webhook Secret** for server `.env`

#### Stripe Setup
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to Developers → API keys
3. Copy the **Secret Key** for server `.env`
4. Set up webhook endpoints for payment events

#### Cloudinary Setup
1. Go to [Cloudinary Console](https://console.cloudinary.com/)
2. Copy **Cloud Name**, **API Key**, and **API Secret**
3. Add them to server `.env`

---

## 🏃 Running the Application

### Development Mode

#### Start the Backend Server

```bash
cd Server
npm run server
```

The server will start on `http://localhost:4000`

#### Start the Frontend Development Server

```bash
cd client
npm run dev
```

The client will start on `http://localhost:5173`

### Production Mode

#### Build the Frontend

```bash
cd client
npm run build
```

#### Start the Production Server

```bash
cd Server
npm start
```

---

## 📖 Usage Guide

### For Students

1. **Sign Up / Login**
   - Click "Create Account" on the navbar
   - Sign up using Clerk authentication
   - Complete your profile

2. **Browse Courses**
   - Navigate to the course list
   - Use search to find specific courses
   - Click on a course to view details

3. **Enroll in a Course**
   - View course details and preview lectures
   - Click "Enroll Now"
   - Complete payment via Stripe
   - Access course immediately after purchase

4. **Learn**
   - Go to "My Enrollments"
   - Click on a course to start learning
   - Watch videos, complete lectures
   - Track your progress

### For Educators

1. **Become an Educator**
   - Login to your account
   - Click "Become Educator" in the navbar
   - Access the Educator Dashboard

2. **Create a Course**
   - Click "Add Course" in the dashboard
   - Fill in course details:
     - Title and description
     - Upload thumbnail
     - Set price and discount
   - Add chapters and lectures
   - Upload video content
   - Publish the course

3. **Manage Courses**
   - View all your courses in "My Courses"
   - Edit course content anytime
   - Monitor enrolled students
   - Track revenue

---

## 🔌 API Documentation

### Base URL

```
http://localhost:4000/api
```

### Authentication

All protected routes require a Bearer token from Clerk:

```
Authorization: Bearer <clerk_token>
```

### Endpoints

#### User Routes (`/api/user`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/enrolled-courses` | Get user's enrolled courses | ✅ |
| POST | `/purchase` | Purchase a course | ✅ |
| POST | `/get-course-progress` | Get progress for a course | ✅ |
| POST | `/update-progress` | Update lecture progress | ✅ |

#### Course Routes (`/api/course`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all published courses | ❌ |
| GET | `/:id` | Get course by ID | ❌ |
| POST | `/search` | Search courses | ❌ |

#### Educator Routes (`/api/educator`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/update-role` | Become an educator | ✅ |
| POST | `/add-course` | Create a new course | ✅ |
| GET | `/my-courses` | Get educator's courses | ✅ |
| PUT | `/edit-course/:id` | Update a course | ✅ |
| DELETE | `/delete-course/:id` | Delete a course | ✅ |
| GET | `/students-enrolled` | Get enrolled students | ✅ |

### Request Examples

#### Purchase a Course

```javascript
POST /api/user/purchase
Headers: {
  Authorization: Bearer <token>
}
Body: {
  courseId: "course_id_here"
}
```

#### Create a Course

```javascript
POST /api/educator/add-course
Headers: {
  Authorization: Bearer <token>
}
Body: {
  courseTitle: "Introduction to React",
  courseDescription: "<p>Learn React from scratch</p>",
  coursePrice: 49.99,
  discount: 20,
  courseThumbnail: "cloudinary_url",
  courseContent: [
    {
      chapterTitle: "Getting Started",
      chapterContent: [
        {
          lectureTitle: "Introduction",
          lectureUrl: "youtube_url",
          lectureDuration: 10,
          isPreviewFree: true
        }
      ]
    }
  ]
}
```

---

## 🎨 Theme Customization

WiseUp features a centralized theme system that makes it easy to customize colors throughout the application.

### Quick Theme Change

All theme colors are defined in `client/src/index.css`. Simply edit the CSS variables in the `@theme` section:

```css
@theme {
  /* Background Colors */
  --color-bg-primary: #000000;        /* Main background */
  --color-bg-secondary: #111827;      /* Secondary background */
  
  /* Text Colors */
  --color-text-primary: #ffffff;      /* Primary text */
  --color-text-secondary: #d1d5db;    /* Secondary text */
  
  /* Accent Colors */
  --color-accent-primary: #2563eb;    /* Buttons and links */
  --color-accent-hover: #1d4ed8;      /* Hover states */
}
```

For detailed customization instructions, see the [Theme Customization Guide](./theme-customization-guide.md).

---

## 🚢 Deployment

### Frontend Deployment (Vercel)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Configure environment variables
5. Deploy

### Backend Deployment (Railway/Render)

1. Push your code to GitHub
2. Go to [Railway](https://railway.app/) or [Render](https://render.com/)
3. Create a new project
4. Connect your repository
5. Add environment variables
6. Deploy

### Database (MongoDB Atlas)

1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Update `MONGO_URI` in server `.env`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Contact

**Author:** Sidhartha Vyas

- GitHub: [@SidharthaVyas](https://github.com/SidharthaVyas)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Clerk](https://clerk.com/) - Authentication
- [Stripe](https://stripe.com/) - Payment Processing
- [Cloudinary](https://cloudinary.com/) - Media Management
- [MongoDB](https://www.mongodb.com/) - Database
- [Vite](https://vitejs.dev/) - Build Tool

---

## 📊 Project Status

🟢 **Active Development** - This project is actively maintained and updated.

### Roadmap

- [ ] Mobile app (React Native)
- [ ] Live classes integration
- [ ] Discussion forums
- [ ] Assignments and quizzes
- [ ] Certificate generation
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Advanced analytics dashboard

---

<div align="center">

**Made with ❤️ by Sidhartha Vyas**

⭐ Star this repository if you find it helpful!

</div>
