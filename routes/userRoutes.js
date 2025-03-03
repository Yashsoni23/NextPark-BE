import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser); // Create User
router.get("/", getAllUsers); // Get All Users
router.get("/:id", getUserById); // Get Single User
router.put("/:id", updateUser); // Update User
router.delete("/:id", deleteUser); // Delete User

export default router;
