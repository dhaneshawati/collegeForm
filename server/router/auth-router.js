const express = require("express");
const router = express.Router();
const { home, register, getData } = require("../controllers/auth-controller");

router.get("/", home);
router.post("/studentData", getData); // POST is more secure than GET for getting data
router.post("/registration", register);
module.exports = router;
