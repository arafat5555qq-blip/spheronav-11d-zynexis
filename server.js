// SpheroNav 11D Zynexis - Core Server & Security Manager
const express = require('express');
const app = express();
app.use(express.json());

// Founder & Super Admin Email
const SUPER_ADMIN = "arafatislam159357@gmail.com";

// Sub-Admins & Testing Team (10 Designated Accounts)
const SUB_ADMINS = [
  "mohamadarafatislam67890@gmail.com",
  "arafat5555qq@gmail.com",
  "mdarafat5555qq@gmail.com",
  "arafatislam678954@gmail.com",
  "babuislam313233@gmail.com",
  "mdarafatislam99999qq@gmail.com",
  "mdarafatislam998855@gmail.com",
  "mdhamim4599@gmail.com",
  "rujina12945@gmail.com",
  "arafatislam273717@gmail.com"
];

// Health Check & Status API
app.get('/api/status', (req, res) => {
  res.json({
    platform: "SpheroNav 11D Zynexis",
    status: "ONLINE",
    security: "Shield-Agent Active",
    founder: SUPER_ADMIN,
    totalAdmins: SUB_ADMINS.length + 1
  });
});

module.exports = app;
