const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const expressValidator = require("express-validator")
const cors = require("cors")

require("dotenv").config()
// import routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")
const schoolRoutes = require("./routes/school")
const classnameRoutes = require("./routes/classname")
const classListRoutes = require("./routes/classList")

// app
const app = express()

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err))

// middlewares
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use(cors())

// routes middlewares
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)
app.use("/api", orderRoutes)
app.use("/api", schoolRoutes)
app.use("/api", classnameRoutes)
app.use("/api", classListRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log("Server is running on port " + port)
})
