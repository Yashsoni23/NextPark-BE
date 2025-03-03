import Parking from "../models/Parking.js";

// @desc Get all parking locations
// @route GET /api/parkings
export const getAllParkingLocations = async (req, res) => {
  try {
    const parkings = await Parking.find();
    res.status(200).json(parkings);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// @desc Get a single parking location by ID
// @route GET /api/parkings/:id
export const getParkingById = async (req, res) => {
  try {
    const parking = await Parking.findById(req.params.id);
    if (!parking) return res.status(404).json({ message: "Parking not found" });
    res.status(200).json(parking);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// @desc Create a new parking location
// @route POST /api/parkings
export const createParking = async (req, res) => {
  try {
    const {
      name,
      lat,
      lng,
      capacity,
      filledSlots,
      openingTime,
      closingTime,
      pricePerHour,
    } = req.body;

    if (
      !name ||
      !lat ||
      !lng ||
      !capacity ||
      !openingTime ||
      !closingTime ||
      !pricePerHour
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
    }

    const newParking = new Parking({
      name,
      lat,
      lng,
      capacity,
      filledSlots: filledSlots || 0, // Default to 0 if not provided
      openingTime,
      closingTime,
      pricePerHour,
    });

    await newParking.save();
    res.status(201).json(newParking);
  } catch (error) {
    res.status(400).json({ message: "Invalid Data", error });
  }
};

// @desc Update an existing parking location
// @route PUT /api/parkings/:id
export const updateParking = async (req, res) => {
  try {
    const updatedParking = await Parking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedParking)
      return res.status(404).json({ message: "Parking not found" });

    res.status(200).json(updatedParking);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// @desc Delete a parking location
// @route DELETE /api/parkings/:id
export const deleteParking = async (req, res) => {
  try {
    const parking = await Parking.findByIdAndDelete(req.params.id);

    if (!parking) return res.status(404).json({ message: "Parking not found" });

    res.status(200).json({ message: "Parking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const deleteAllParkings = async (req, res) => {
  try {
    const result = await Parking.deleteMany({});
    res.status(200).json({
      message: "All parking locations deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting parking locations", error });
  }
};

export const createBulkParkings = async (req, res) => {
  try {
    const parkingData = req.body; // Expecting an array of parking objects

    if (!Array.isArray(parkingData) || parkingData.length === 0) {
      return res.status(400).json({ message: "Invalid parking data provided" });
    }

    const newParkings = await Parking.insertMany(parkingData, {
      ordered: false,
    });

    res.status(201).json({
      message: "Bulk parking locations created successfully",
      count: newParkings.length,
      data: newParkings,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating bulk parkings", error });
  }
};
