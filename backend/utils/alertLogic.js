function checkAlerts(expenses) {
  let total = 0;
  let alerts = [];

  expenses.forEach((exp) => {
    total += exp.amount;

    // Alert 1: High single expense
    if (exp.amount > 5000) {
      alerts.push("⚠ High expense detected: " + exp.title);
    }
  });

  // Alert 2: Total spending
  if (total > 20000) {
    alerts.push("⚠ Monthly budget exceeded!");
  }

  return {
    totalSpent: total,
    alerts,
  };
}

module.exports = checkAlerts;