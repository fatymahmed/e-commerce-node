const express = require("express")
const router = express.Router()

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth")

const { userById, addClassListToUserHistory } = require("../controllers/user")
const {
  create,
  listClassLists,
  classListById,
} = require("../controllers/classList")

router.post("/classList/create/:userId", requireSignin, isAuth, isAdmin, create)

router.get("/classList/list/:userId", requireSignin, isAuth, listClassLists)

router.param("userId", userById)
router.param("classListId", classListById)

module.exports = router
