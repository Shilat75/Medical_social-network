const User = require('../models/user');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) throw new Error('Invalid email or password');

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(401).json({ success: false, error: err.message });
  }
};
