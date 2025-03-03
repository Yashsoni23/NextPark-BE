import express from "express";
import {
  getAllParkingLocations,
  getParkingById,
  createParking,
  updateParking,
  deleteParking,
  deleteAllParkings,
} from "../controllers/parkingController.js";
import { createBulkParkings } from "../controllers/parkingController.js";

const router = express.Router();

router.get("/", getAllParkingLocations);
router.get("/:id", getParkingById);
router.post("/", createParking);
router.put("/:id", updateParking);
router.delete("/:id", deleteParking);
router.delete("/delete-all", deleteAllParkings);
router.post("/bulk-create", createBulkParkings);

export default router;
