import Booking from "../models/Booking.js";
import Parking from "../models/Parking.js";

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { parkingId } = req.body;

    // Check if the parking exists
    const parking = await Parking.findById(parkingId);
    if (!parking)
      return res.status(404).json({ message: "Parking location not found" });

    // Check if parking is full
    if (parking.filledSlots >= parking.capacity) {
      return res.status(400).json({ message: "Parking is full" });
    }

    // Create a new booking
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();

    // Update filled slots in parking
    parking.filledSlots += 1;
    await parking.save();

    res
      .status(201)
      .json({ message: "Booking created successfully", data: savedBooking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate(
      "parkingId",
      "name location"
    );
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

// Get booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate(
      "parkingId",
      "name location"
    );
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error fetching booking", error });
  }
};

// Get user bookings by userId
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId }).populate(
      "parkingId",
      "name location"
    );
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user bookings", error });
  }
};

// Get bookings by parking ID
export const getBookingsByParkingId = async (req, res) => {
  try {
    const bookings = await Booking.find({
      parkingId: req.params.parkingId,
    }).populate("userId", "name email");

    if (!bookings || bookings.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found for this parking location" });
    }

    res.status(200).json(bookings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: error.message });
  }
};

// Cancel a booking (update status and decrease filledSlots)
export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    // Update booking status
    booking.status = "cancelled";
    await booking.save();

    // Decrease the filled slots in parking
    const parking = await Parking.findById(booking.parkingId);
    if (parking && parking.filledSlots > 0) {
      parking.filledSlots -= 1;
      await parking.save();
    }

    res
      .status(200)
      .json({ message: "Booking cancelled successfully", data: booking });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling booking", error });
  }
};

// Get booked slots for a specific parking station
export const getBookedSlotsListByParking = async (req, res) => {
  try {
    const { parkingId } = req.params;

    // Find all bookings for the given station
    const bookedSlots = await Booking.find({
      parkingStationId: parkingId,
    }).select("slot");

    // Extract only slot numbers
    const slotList = bookedSlots.map((booking) => booking.slot);

    res.status(200).json({ bookedSlots: slotList });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching booked slots", error: err.message });
  }
};
