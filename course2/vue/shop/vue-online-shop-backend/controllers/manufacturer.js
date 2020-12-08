// 模块化控制器
const Model = require('../model')
const {Manufacturer} = Model
const manufactureController = {
  create(req, res) {
    const requestBody = req.body
    const newManufacturer = new Manufacturer(requestBody)
    newManufacturer.save((err, saved) => {
      if(err) {
        console.log(err);
        return
      }
      // console.log(saved);
      Manufacturer
        .findOne({_id: newManufacturer._id})
        .exec((err, manufacturer) => res.json(manufacturer))
    })
  },
  all(req, res) {
    Manufacturer
      .find({})
      .exec((err, manufactures) => res.json(manufactures))
  },
  byId(req, res) {
    const idParams = req.params.id
    Manufacturer
      .findOne({_id: idParams})
      .exec((err, manufactures) => res.json(manufactures))
  },
  remove(req, res) {
    const idParams = req.params.id
    Manufacturer
      .findOne({_id: idParams})
      .remove((err, manufactures) => res.json(idParams))
  },
  update(req, res) {
    const idParams = req.params.id
    let manufacturer = req.body;
    Manufacturer.update({
      _id: idParams
    }, {
      ...manufacturer
    }, (err, updated) => {
      res.json(updated)
    })
  }
}
module.exports = manufactureController