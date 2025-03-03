import express from "express";
import {
  createBooking,
  getAllBookings,
  getBookingById,
  getUserBookings,
  cancelBooking,
  getBookingsByParkingId,
  getBookedSlotsListByParking,
} from "../controllers/bookingController.js";

const router = express.Router();

// Create a booking
router.post("/", createBooking);

// Get all bookings
router.get("/", getAllBookings);

// Get a booking by ID
router.get("/:id", getBookingById);

// Get bookings by user ID
router.get("/user/:userId", getUserBookings);

// Cancel a booking
router.put("/cancel/:id", cancelBooking);

// Get bookings by parking ID
router.get("/parking/:parkingId", getBookingsByParkingId);
router.get("/booked-slots/:parkingId", getBookedSlotsListByParking);

export default router;
