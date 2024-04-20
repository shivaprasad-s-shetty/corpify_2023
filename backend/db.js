const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://shivaprasadshetty112:Shivu2002@corpify1.vlykxke.mongodb.net/corpify",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err));
