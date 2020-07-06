const School = require("../models/school")
const { errorHandler } = require("../helpers/dbHandlerError")
const school = require("../models/school")

exports.schoolById = (req, res, next, id) => {
  School.findById(id).exec((err, school) => {
    if (err || !school) {
      return res.status(400).json({
        error: "School does not exist",
      })
    }
    req.school = school
    next()
  })
}

exports.read = (req, res) => {
  return res.json(req.school)
}

exports.create = (req, res) => {
  const school = new School(req.body)
  school.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    res.json({ data })
  })
}

exports.update = (req, res) => {
  const school = req.school
  school.name = req.body.name
  school.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    res.json({ data })
  })
}

exports.remove = (req, res) => {
  const school = req.school
  school.name = req.body.name
  school.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    res.json({
      message: "School deleted",
    })
  })
}

exports.list = (req, res) => {
  School.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    res.json(data)
  })
}
