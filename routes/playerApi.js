const { Router } = require("express");
var mongoose = require("mongoose");
const router = Router();

const Player = require("../models/Player");

router.post("/create", (req, res) => {
  try {
    const { firstName, lastName, birthday } = req.body;

    let newPlayer = new Player({
      firstName,
      lastName
    });

    newPlayer.save().then(result => {
      res.json({
        success: true,
        msg: "Successful create player",
        id: result._id,
        firstName: result.firstName,
        lastName: result.lastName
      });
    });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong", error: e });
  }
});

router.post("/getAll", async function(req, res) {
  try {
    console.log("All players");
  } catch (e) {
    res.status(500).json({ message: "Something went wrong", error: e });
  }
});

module.exports = router;
