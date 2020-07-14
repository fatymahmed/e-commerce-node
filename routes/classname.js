const express = require("express")
const router = express.Router()

const {
  create,
  classnameById,
  update,
  remove,
  list,
  read,
} = require("../controllers/classsname")

const { requireSignin, isAdmin, isAuth } = require("../controllers/auth")
const { userById } = require("../controllers/user")

router.get("/classname/:classnameId", read)
router.post("/classname/create/:userId", requireSignin, isAuth, isAdmin, create)
router.put(
  "/classname/:classnameId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
)
router.delete(
  "/classname/:classnameId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
)
router.get("/classname", list)

router.param("classnameId", classnameById)
router.param("userId", userById)

module.exports = router
