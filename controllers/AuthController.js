const { User } = require('../models')
const middleware = require('../middleware')

//  Register
const Register = async (req, res) => {
  try {
    const { email, password, fullName, phone, cprFront, cprBack } = req.body
    let passwordDigest = await middleware.hashPassword(password)

    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).send('A user with that email has already been registered!')
    }

    const user = await User.create({
      email,
      fullName,
      phone,
      cprFront,
      cprBack,
      passwordDigest
    })

    res.status(200).send(user)
  } catch (error) {
    console.log(error)
    res.status(500).send('Registration error')
  }
}

//  Login
const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).send({ status: 'Error', msg: 'User not found' })
    }

    let matched = await middleware.comparePassword(password, user.passwordDigest)
    if (matched) {
      let payload = { id: user.id, email: user.email }
      let token = middleware.createToken(payload)
      return res.status(200).send({ user: payload, token })
    }

    res.status(401).send({ status: 'Error', msg: 'Invalid credentials' })
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: 'Error', msg: 'Login error' })
  }
}

//  Update password
const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    let user = await User.findById(req.params.user_id)

    let matched = await middleware.comparePassword(oldPassword, user.passwordDigest)
    if (!matched) {
      return res.status(401).send({ status: 'Error', msg: 'Old password incorrect' })
    }

    let passwordDigest = await middleware.hashPassword(newPassword)
    await User.findByIdAndUpdate(req.params.user_id, { passwordDigest })

    return res.status(200).send({ status: 'Password updated successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: 'Error', msg: 'Password update failed' })
  }
}

//  Check session
const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.status(200).send(payload)
}

//  Get full user
const GetUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id).select('-passwordDigest')
    if (!user) return res.status(404).send('User not found')
    res.status(200).send(user)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error fetching user')
  }
}

// Update user info
const UpdateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.user_id, req.body, {
      new: true
    }).select('-passwordDigest')
    res.status(200).send(updatedUser)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error updating user')
  }
}

//  Delete user
const DeleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.user_id)
    res.status(200).send({ status: 'User deleted successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).send('Error deleting user')
  }
}

module.exports = {
  Register,
  Login,
  UpdatePassword,
  CheckSession,
  GetUserById,
  UpdateUser,
  DeleteUser
}
