const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema

const ListProductSchema = new mongoose.Schema(
  {
    product: { type: ObjectId, ref: "Product" },
    name: String,
    price: Number,
    count: Number,
  },
  { timestamps: true }
)

const ListProduct = mongoose.model("ListProduct", ListProductSchema)

const ClassListSchema = new mongoose.Schema(
  {
    products: [ListProductSchema],
    schoolName: { type: ObjectId, ref: "School" },
    className: { type: ObjectId, ref: "Class" },
  },
  { timestamps: true }
)

const ClassList = mongoose.model("ClassList", ClassListSchema)

module.exports = { ClassList, ListProduct }
