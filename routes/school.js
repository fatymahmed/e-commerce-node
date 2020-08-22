const express = require("express")
const router = express.Router()

const {
  create,
  read,
  schoolById,
  remove,
  update,
  list,
} = require("../controllers/school")

const { requireSignin, isAdmin, isAuth } = require("../controllers/auth")
const { userById } = require("../controllers/user")

router.get("/school/:schoolId", read)
router.post("/school/create/:userId", requireSignin, isAuth, isAdmin, create)
router.put("/school/:schoolId/:userId", requireSignin, isAuth, isAdmin, update)
router.delete(
  "/school/:schoolId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
)
router.get("/schools", list)

router.param("schoolId", schoolById)
router.param("userId", userById)

module.exports = router
