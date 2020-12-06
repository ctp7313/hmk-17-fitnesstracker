const router = require("express").Router();
const Workout = require("../models/index.js");

// getLastWorkout
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

// getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

// createWorkout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

// addExercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body }})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
