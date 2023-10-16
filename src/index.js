import app from "./app";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DbConnection)
  .then(() => {
    console.log("Database Connection Successeed");
  })
  .catch((err) => console.log("You are not connected to database"));
const PORT = process.env.PORT || 4300;

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port:http://localhost:${PORT}`);
});
