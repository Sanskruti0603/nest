const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./config/database");
const userRoute = require("./module/routes/userRoute");
const atmRoute = require("./module/routes/atmRoute");
const fixDepositRoute = require("./module/routes/fixDepositRoute");
const accountRoute = require("./module/routes/accountRoute");
const adminRoute = require("./module/routes/adminRoute");
const loanRoute = require("./module/routes/loanRoute");

const PORT = process.env.PORT || 6001;

app.use(express.json());

const corsOptions = {
  origin: ["http://localhost:4173", "https://nestcash.vercel.app", "https://nest-two-green.vercel.app",
    "https://nest-i9y3.vercel.app"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// ✅ Preflight handling
// app.options("/*", cors(corsOptions));
app.use("/api/user", userRoute);
app.use("/api/atm", atmRoute);
app.use("/api/fd", fixDepositRoute);
app.use("/api/account", accountRoute);
app.use("/api/admin", adminRoute);
app.use("/api/loan", loanRoute);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
