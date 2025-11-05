// mod_today/index.js

// This module exports a function that returns the current day of the week
exports.dayOfWeek = function () {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const today = new Date();
  return days[today.getDay()];
};
