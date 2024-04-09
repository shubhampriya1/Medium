import User from "../modals/user.modal.js";

//identifier and password

export async function login(req, res) {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).send("please fill your all detsils");
    }
    const email1 = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });
    console.log(email1);
    res.status(200).send("succesfully you had login");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}

export async function register(req, res) {
  try {
    const { name, email, username, password } = req.body;

    if (!name || !email || !username || !password) {
      return res.status(400).send("Please fill all your details");
    }

    const useremail = await User.find({
      email: email,
    });

    if (useremail.length != 0) {
      return res.status(400).send("Email already exists");
    }

    const user = await User.find({
      username: username,
    });
    if (user.length != 0) {
      return res.status(400).send("Username already exists");
    }

    const newuser = new User({
      name: name,
      email: email,
      username: username,
      password: password,
    });
    //yaha per

    await newuser.save();

    return res.status(200).send("succesfully created your account");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}
