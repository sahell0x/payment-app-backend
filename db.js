const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;

(async function () {
  try {
    await mongoose.connect(dbUrl);
  } catch {
    console.log("failed to connect with db");
  }
})();

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("disconnected", () => {
  console.error("MongoDB disconnected! Trying to reconnect...");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB reconnected");
});

const userSchema = mongoose.Schema({
  userName: { type: String, required: true, trim: true, unique: true },
  passWord: { type: String, minLength: 3, maxLength: 30, required: true },
  firstName: { type: String, trim: true, required: true, maxLength: 50 },
  lastName: { type: String, trim: true, required: true, maxLength: 50 },
});

const User = mongoose.model("User", userSchema);


module.exports = { User };
