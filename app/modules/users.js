const jwt = require("jsonwebtoken");

const User = require('../database/models/User').default

module.exports.test = (req, res) => {
  res.send({success: true, message: "Bien"})
}

module.exports.signUp = async (req, res) => {
  try {
    // Getting the Request Body
    const { username, email, password } = req.body;
    // Creating a new User Object
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });

    // Saving the User Object in Mongodb
    const savedUser = await newUser.save();

    // Create a token
    const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_KEY, {
      expiresIn: 86400//process.env.EXPIRES_TIME, // 24 hours
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports.signIn = async (req, res) => {
  try {
    // Request body email can be an email or username
    let userFound = await User.findOne({ email: req.body.email })

    if (!userFound) return res.status(400).json({ message: "User Not Found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: userFound._id }, process.env.SECRET_KEY, {
      expiresIn: 86400//process.env.EXPIRES_TIME, // 24 hours
    });

    res.status(200).json({ user: userFound, token });
  } catch (error) {
    console.log(error);
  }
};