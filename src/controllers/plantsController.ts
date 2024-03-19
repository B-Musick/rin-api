import { Request, Response } from "express";

const data = {plants:[]}
data.plants = require('../../data/plants.json');

const index = (req: Request, res: Response) => {
    res.json(data.plants)
}

const show = (req: Request, res: Response) => {
    res.json({
        "id": req.params.id
      })
}

const create = (req: Request, res: Response) => {
    res.json({
        "genus":req.body.genus
      })
}

const update = (req: Request, res: Response) => {
    res.json({
        "genus":req.body.genus
      })
}

const destroy = (req: Request, res: Response) => {
    res.json({
        "id":req.body.id
      })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}