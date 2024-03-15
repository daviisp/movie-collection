const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", (err) => {
    console.error(err);
  });
  db.once("open", () => {
    console.log("📦 Connected to database");
  });
}

module.exports = connectToDatabase;
