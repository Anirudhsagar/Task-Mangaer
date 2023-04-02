const express = require('express');
const {
  getCategories,
  createCategory
} = require('../controllers/categoryController');

const routerS = express.Router();

routerS.get('/', getCategories);
routerS.post('/create', createCategory);

module.exports = {routerS};