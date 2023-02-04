import User from "../models/User";

export const login = async (req, res) => {
  const user = await User.findOne({ Email: req.body.email });

  if (user.Password == req.body.password) {
    res.json(user);
  } else {
    res.status(400).send("Invalid credentials");
  }
};

export const signUp = async (req, res) => {
  try {
    const data = new User(req.body);
    const savingData = await data.save();
    res.status(200).json(savingData);
  } catch (e) {
    res.status(400).send(error.message);
  }
};
