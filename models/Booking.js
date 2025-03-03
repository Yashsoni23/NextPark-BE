import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    parkingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parking",
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    vehicleType: {
      type: String,
      required: true,
      enum: ["Four Wheeler", "Two Wheeler"],
    },
    location: { type: String, required: true },
    slot: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    transactionId: { type: String, required: true },
    sessionId: { type: String, required: true },
    status: {
      type: String,
      enum: ["active", "expired", "cancelled"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
