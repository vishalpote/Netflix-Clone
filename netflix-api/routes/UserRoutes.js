import {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
 
} from "../controllers/UserController.js";

import express from "express";

const router=express.Router();

router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedMovies);
// router.post("/signup", signup);
// router.post("/login", login);

export default router;
