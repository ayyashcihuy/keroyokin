'use strict';
const fs = require("fs")

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync("./data_dev/studentsData_test.json", "utf-8"))
    // console.log(data);
    data = data.map(e => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
      return e
    })
    return queryInterface.bulkInsert("Students", data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Students", null, {})
  }
};
