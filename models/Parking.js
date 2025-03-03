import mongoose from "mongoose";
const ParkingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lat: { type: Number, required: true, unique: true },
    lng: { type: Number, required: true, unique: true },
    capacity: { type: Number, required: true },
    filledSlots: { type: Number, default: 0 },
    openingTime: { type: String, required: true },
    closingTime: { type: String, required: true },
    pricePerHour: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Parking", ParkingSchema);
