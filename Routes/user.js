const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({})
      .select("-password")
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//get one user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id })
      .select("-password")
    if (!user) return res.status(404).send("User does not exits");
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//create a user
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) return res.status(409).send("User already exits");

    const user = new User({ ...req.body });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    user.save((error, savedUser) => {
      if (error) return res.status(400).send(error);
      return res.status(200).send(savedUser);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//update a user
router.patch("/:id", async (req, res) => {
  try {
    const checkUser = await User.findOne({ _id: req.params.id });
    if (!checkUser) return res.status(404).send("User does not exits");

    await User.updateOne({ _id: req.params.id }, req.body);
    return res.status(200).send("User updated");
  } catch (error) {
    return res.status(500).send(error);
  }
});

//update Password
router.patch("/updatePassword/:id", async (req, res, next) => {
  try {
    const oldPass = req.body.oldPassword;
    const newPass = req.body.password;

    const found_user = await User.findOne({ _id: req.body.id });
    if (!found_user) return res.status(404).send("No user found");

    const isMatch = await bcrypt.compare(oldPass, found_user.password);

    if (!isMatch) return res.status(401).send("Old Password is incorrect");

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      enPass = await bcrypt.hash(newPass, salt);
      found_user.password = enPass;
    }

    found_user.save((err, _) => {
      if (err) {
        return res.status(400).send(err);
      }

      return res.status(200).send("Password Update Success");
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(404).send("User does not exits");

    await user.remove((error, _) => {
      if (error) return res.status(400).send(error);
      return res.status(200).send("User deleted");
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
