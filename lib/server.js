'use strict';

// Esoteric Resources
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

// Internal Resources

// Application-wide Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req,res,next) => {
  res.send('Homepage');
})

// Error Handling

module.exports = {
  server: app,
  start: (port, mongodb_uri) => {
    app.listen(port, () => {
      console.log('Server up and running on port', port);
    });
    let options = {

    }

    mongoose.connect(mongodb_uri, options);
  }
}
