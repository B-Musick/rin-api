import express, { Express, NextFunction, Request, Response } from "express";

const router = express.Router();

const data = {plants:[]}
data.plants = require('../../../data/plants.json');

router.route('/')
  .get((req: Request, res: Response) => {
    res.json(data.plants)
  })
  .post((req: Request, res: Response) => {
    res.json({
      "genus":req.body.genus
    })
  })
  .put((req: Request, res: Response) => {
    res.json({
      "genus":req.body.genus
    })
  })
  .delete((req: Request, res: Response) => {
    res.json({
      "id":req.body.id
    })
  });

router.route('/:id')
  .get((req: Request, res: Response)=>{
    res.json({
      "id": req.params.id
    })
  });

module.exports = router;