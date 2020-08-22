const Classname = require("../models/classname")
const { errorHandler } = require("../helpers/dbHandlerError")

exports.classnameById = (req, res, next, id) => {
  Classname.findById(id).exec((err, classname) => {
    if (err || !classname) {
      return res.status(400).json({
        error: "classname does not exist",
      })
    }
    req.classname = classname
    next()
  })
}

exports.read = (req, res) => {
  return res.json(req.classname)
}

exports.create = (req, res) => {
  const classname = new Classname(req.body)
  classname.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    res.json({ data })
  })
}

exports.update = (req, res) => {
  const classname = req.classname
  classname.name = req.body.name
  classname.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    res.json({ data })
  })
}

exports.remove = (req, res) => {
  const classname = req.classname
  classname.name = req.body.name
  classname.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    res.json({
      message: "classname deleted",
    })
  })
}

exports.list = (req, res) => {
  Classname.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    res.json(data)
  })
}
