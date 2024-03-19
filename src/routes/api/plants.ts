import express, { Request, Response } from "express";

const router = express.Router();
const { index, show, create, update, destroy } = require('../../controllers/plantsController.ts');

router.route('/')
  .get(index)
  .post(create)
  .put(update)
  .delete(destroy);

router.route('/:id')
  .get(show);

module.exports = router;