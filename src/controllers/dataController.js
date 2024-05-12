// backend/src/controllers/dataController.js

const fs = require('fs');
const path = require('path');

const databaseFile = path.join(__dirname, '../database/database.json');

// Get data from the database
const getData = (req, res) => {
  fs.readFile(databaseFile, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    }
  });
};

// Add new data to the database
const addData = (req, res) => {
  const newData = req.body;
  fs.readFile(databaseFile, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      const jsonData = JSON.parse(data);
      jsonData.push(newData);
      fs.writeFile(databaseFile, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.status(201).send('Data added successfully');
        }
      });
    }
  });
};

module.exports = {
  getData,
  addData
};
