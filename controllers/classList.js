const { errorHandler } = require("../helpers/dbHandlerError")
const { ClassList, ListProduct } = require("../models/classList ")

exports.classListById = (req, res, next, id) => {
  ClassList.findById(id)
    .populate("products.product", "name price")
    .exec((err, classList) => {
      if (err || !classList) {
        return res.status(400).json({ error: errorHandler(error) })
      }
      req.classList = classList
      next()
    })
}

exports.create = (req, res) => {
  req.body.classList.user = req.profile
  const classList = new ClassList(req.body.classList)
  classList.save((error, data) => {
    if (error) {
      return res.status(400).json({ error: errorHandler(error) })
    }
    res.json(data)
  })
}

exports.listClassLists = (req, res) => {
  ClassList.find()
    .populate("products", "className, schoolName")
    .sort("-created")
    .exec((error, classLists) => {
      if (error) {
        return res.status(400).json({ error: errorHandler(error) })
      }
      res.json(classLists)
    })
}
