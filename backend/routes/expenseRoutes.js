const express = require("express");
const Expense = require("../models/Expense");
const checkAlerts = require("../utils/alertLogic");

const router = express.Router();

// ADD EXPENSE
router.post("/add", async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.json(expense);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET EXPENSES
router.get("/:userId", async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.params.userId });

    const result = checkAlerts(expenses);

    res.json({
      expenses,
      ...result,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;