server site link - https://e-commerce-website-vrfd.onrender.com

admin site link - https://e-commerce-website-swwj.vercel.app/

client site link - https://e-commerce-website-liy9.vercel.app/



# MERN Stack E-commerce Application

A full-stack e-commerce web application built with the MERN stack. The project includes a customer-facing storefront, an admin dashboard, and a RESTful backend API.

> **Project Status:** In Progress 🚧

## Overview

This project is being developed to provide a complete online shopping experience. Customers will be able to browse products, view product details, manage their shopping cart, and authenticate with their accounts. Administrators will be able to manage products and users through a dedicated dashboard.

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- React Router DOM
- Redux Toolkit
- Redux Persist
- Axios
- React Paginate
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Multer
- Cloudinary

### Tools
- Git & GitHub
- VS Code
- MongoDB Atlas
- Postman

## Project Architecture

The application is divided into three independent applications:

| Application | Description | Port |
|---|---|---|
| Client | Customer-facing storefront | 5173 |
| Admin | Admin dashboard | 5174 |
| Server | RESTful backend API | 8000 |

## Project Structure

```text
mern-ecommerce/
│
├── client/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── redux/
│       ├── services/
│       ├── hooks/
│       ├── utils/
│       ├── App.jsx
│       └── main.jsx
│
├── admin/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── services/
│       └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── .gitignore
└── README.md
```

## Key Features

### Customer Storefront
- Responsive user interface
- Product listing and product details
- Dynamic product routing
- Shopping cart management
- Quantity increase and decrease
- Persistent cart state
- User registration and login
- Product pagination

### Admin Dashboard
- Admin authentication and authorization
- Product management
- Product image uploads
- User management
- Product catalog management

### Backend API
- RESTful API architecture
- MongoDB database integration
- Mongoose data modeling
- JWT-based authentication
- Admin authorization middleware
- Cloudinary image storage
- Multer file upload handling

## API Endpoints

The following endpoints are part of the planned application API.

### User Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | User login |
| POST | `/api/user/admin` | Admin login |
| GET | `/api/user/users` | Get users (protected) |
| POST | `/api/user/remove` | Remove a user (protected) |
| PUT | `/api/user/put` | Update a user (protected) |

### Product Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/product/add` | Add a product (protected) |
| GET | `/api/product/list` | Get all products |
| POST | `/api/product/single` | Get a single product |
| POST | `/api/product/remove` | Remove a product (protected) |

## Installation & Setup

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas account
- Cloudinary account
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd mern-ecommerce
```

### 2. Install Dependencies

Install dependencies separately in each application:

```bash
cd server
npm install

cd ../client
npm install

cd ../admin
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Replace the placeholder values with your own credentials.

**Important:** Never upload your `.env` file or private API credentials to GitHub.

### 4. Run the Applications

Start each application in a separate terminal. Use the development scripts configured in each application's `package.json`.

```bash
# Backend
cd server
npm run dev
```

```bash
# Customer Frontend
cd client
npm run dev
```

```bash
# Admin Dashboard
cd admin
npm run dev
```

If your backend uses a different script, replace `npm run dev` with the appropriate command from its `package.json`.

## Screenshots

Screenshots will be added as the project development progresses.

<!-- Add screenshots here after completing the UI -->

## Future Improvements

- Wishlist functionality
- Product sorting and advanced filtering
- Order placement and order history
- User profile management
- Admin dashboard analytics
- Skeleton loading states
- Form validation
- Improved error handling
- Deployment and performance optimization

## Learning Objectives

Through this project, I aim to strengthen my practical knowledge of:

- Full-stack web development
- REST API development
- Database design and management
- Authentication and authorization
- State management with Redux Toolkit
- File uploads and cloud storage
- Frontend and backend integration

## Project Status

**Currently developing:** Core e-commerce functionality, frontend integration, backend APIs, and admin dashboard.

Live demo and screenshots will be added after deployment.

## Author

**Md Tarek**

- GitHub: https://github.com/mdTarek-web
- LinkedIn: https://linkedin.com/in/md-tarek

---

⭐ If you find this project interesting, feel free to explore the repository as development progresses.
