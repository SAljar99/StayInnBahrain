const router = require("express").Router()
const controller = require("../controllers/AuthController")
const middleware = require("../middleware")
const upload = require("../middleware/upload")

// Register a new user
router.post(
  "/register",
  upload.fields([
    { name: "cprFront", maxCount: 1 },
    { name: "cprBack", maxCount: 1 },
  ]),
  controller.Register
)

//  Login with email and password
router.post("/login", controller.Login)

//  Update password (requires valid token)
router.put(
  "/update/:user_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)

//  Check if token/session is still valid
router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

//  Get full user profile (optional, useful for dashboards)
router.get(
  "/:user_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserById
)

//  Update user profile info (not password)
router.put(
  "/edit",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUser
)

//  Delete a user account
router.delete(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUser
)

module.exports = router
