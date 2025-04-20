const Module = require("../../models/Module");
const User = require("../../models/User");
const Notification = require("../../models/Notifications");

const createModule = async (req, res) => {
  try {
    const { userId, title, public } = req.body

    // error handling for user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const userNotifications = await Notification.findOne({ userId: userId });
    console.log("user notifications", userNotifications)

    // create new module
    const module = new Module({
      userId: userId,
      title: title,
      decks: [],
      tests: [],
      public: public
    });

    // save the module
    await module.save();


    userNotifications?.notifications.push("New lesson group created!");
    await userNotifications.save();
    console.log("Updated user notifications", userNotifications)
    
    res.status(201).json({ mesage: "module has been created "});
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.mesage });
  }
}

module.exports = createModule;