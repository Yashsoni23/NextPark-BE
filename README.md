# NextPark Backend

NextPark is a parking management system built using the MERN stack. This repository contains the backend services built with Node.js, Express.js, and MongoDB. It provides APIs for managing parking locations, user bookings, and users.

## 🌟 Features
- CRUD operations for parking locations 🏢
- CRUD operations for bookings 🚗
- CRUD operations for users 👥
- Stripe integration for secure payments 💳
- Hosted on Render 🚀

## 🚀 Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Google Maps API** - Location-based services
- **Google Cloud** - Hosting and services
- **Firebase** - Authentication (used in frontend)
- **Stripe** - Payment gateway
- **Postman** - API testing
- **GitHub** - Version control
- **Render** - Backend hosting
- **Vercel** - Frontend hosting

## 📁 Folder Structure
```
backend/
│-- controllers/      # Business logic for APIs
│-- models/           # Mongoose schemas
│-- routes/           # API routes
│-- config/           # Configuration files
│-- middleware/       # Middleware functions
│-- .gitignore        # Ignored files in version control
│-- index.js          # Entry point
│-- package.json      # Dependencies and scripts
```

## ⚡ API Endpoints

### 🏢 Parking APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | /api/parkings | Get all parking locations |
| GET | /api/parkings/:id | Get parking by ID |
| POST | /api/parkings | Create a parking location |
| PUT | /api/parkings/:id | Update a parking location |
| DELETE | /api/parkings/:id | Delete a parking location |
| DELETE | /api/parkings/delete-all | Delete all parking locations |
| POST | /api/parkings/bulk-create | Create multiple parking locations |

### 🚗 Booking APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | /api/bookings | Create a booking |
| GET | /api/bookings | Get all bookings |
| GET | /api/bookings/:id | Get a booking by ID |
| GET | /api/bookings/user/:userId | Get bookings by user ID |
| PUT | /api/bookings/cancel/:id | Cancel a booking |
| GET | /api/bookings/parking/:parkingId | Get bookings by parking ID |

### 👥 User APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | /api/users | Create a user |
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get user by ID |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |

## ⚙️ Setup and Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/nextpark-backend.git
   cd nextpark-backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create a `.env` file and configure your environment variables:**
   ```env
   MONGO_URI=your_mongo_db_connection_string
   STRIPE_SECRET_KEY=your_stripe_secret_key
   PORT=5000
   ```
4. **Run the server:**
   ```sh
   npm start
   ```
   The server will be running at `http://localhost:5000`

## 🚀 Deployment
The backend is hosted on **Render**:
🔗 **Backend URL:** [https://nextpark-be.onrender.com/](https://nextpark-be.onrender.com/)

## 🔗 Useful Links
- **Frontend:** [https://nextpark.vercel.app/](https://nextpark.vercel.app/)
- **Postman Collection:** [View API Collection](https://api.postman.com/collections/28593851-18aa9bd6-14b6-450f-80db-0c8de6f862c0?access_key=PMAT-01JNECPP9HDAVGRKCZFFCK65ZQ)

## 🛠️ Author & Credits
Developed with ❤️ by NextPark Team.

