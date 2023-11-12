const addDays = require("date-fns/addDays");

function addXdays(days) {
  const newDate = addDays(new Date(2020, 07, 22), days);
  const msg = `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
  return msg;
}

module.exports = addXdays;
