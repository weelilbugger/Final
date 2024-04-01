const express = require('express');
const app = express();
 
const houseRoute = express.Router();
let House = require('../model/House');
 
// Get all Houses
houseRoute.route('/').get((req, res) => {
    House.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get houses: ${error}`);
  })
})

// Add a house
houseRoute.route('/add-house').post((req, res) => {
  House.create(req.body).then(() => {
  console.log('House added successfully.');
  res.status(200);
  })
  .catch((error) => {
  console.error(`Could not save house: ${error}`);
  })
  })

  // Delete a house
houseRoute.route('/delete-house/:id').delete((req, res) => {
  console.log(`Preparing to delete: ${req.params.id}`);
  House.findByIdAndDelete(req.params.id).then(() => {
  console.log('House deleted successfully.');
  res.status(200);
  })
  .catch((error) => {
  console.error(`Could not delete house: ${error}`);
  })
  })

  // Update a house
houseRoute.route('/update-house/:id').put((req, res) => {
  console.log(`Preparing to update house with ID: ${req.params.id}`);
  House.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedHouse => {
      console.log('House updated successfully.');
      res.status(200).json(updatedHouse);
    })
    .catch(error => {
      console.error(`Could not update house: ${error}`);
      res.status(500).json({ error: 'Could not update house' });
    });
});
module.exports = houseRoute;