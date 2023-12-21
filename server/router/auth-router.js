const express = require("express");
const router = express.Router();
const { home, register, getData } = require("../controllers/auth-controller");

router.get("/", home);
router.get("/studentData", getData);
router.route("/registration").post(register);
module.exports = router;
