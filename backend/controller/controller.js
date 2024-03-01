import User from '../modal/userModal.js'

const userDetails = async (req, res, next) => {
  try {
    const user = await new User(req.body)
    const savedUser = await user.save()
    res.status(200).json(savedUser)
  } catch (error) {
    next(error)
  }
}

const getData = async (req, res) => {
  try {
    const user = await User.find()
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
}

export { userDetails, getData }
