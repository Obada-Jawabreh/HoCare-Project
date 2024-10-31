require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const db = require("./config/dbConfig");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const userRoute = require("./routes/userRoute");
const RequestRoute = require("./routes/RequestRoute");
const providerRoute = require("./routes/providerRoute");
const providerManageRoute = require("./routes/providerManageRoute");
const checkoutRoute = require("./routes/checkoutRoute");
const contactRoute = require("./routes/contactRoute");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/users", userRoute);
app.use("/api/request", RequestRoute);
app.use("/api/provider", providerRoute);
app.use("/api/providermange", providerManageRoute);
app.use("/api/checkout", checkoutRoute);
app.use("/api/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
