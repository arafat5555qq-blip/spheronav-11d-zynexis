// SpheroNav 11D Zynexis - Master Backend Engine
const express = require('express');
const app = express();
app.use(express.json());

const BKASH_NUMBER = "01758889800";
const SUPER_ADMIN = "arafatislam159357@gmail.com";

// Home Route to confirm Server is Live
app.get('/', (req, res) => {
  res.send(`
    <div style="text-align: center; padding: 50px; font-family: Arial;">
      <h1 style="color: #6c5ce7;">SpheroNav 11D Zynexis Backend is Live! 🚀</h1>
      <p>Status: Active | Shield Guard: Enabled</p>
      <hr style="max-width: 400px;">
      <p><b>Payment Gateway Partner:</b> bKash (${BKASH_NUMBER})</p>
    </div>
  `);
});

// API Status Route
app.get('/api/status', (req, res) => {
  res.json({
    platform: "SpheroNav 11D Zynexis",
    status: "ONLINE",
    founder: SUPER_ADMIN,
    bkash: BKASH_NUMBER
  });
});

module.exports = app;
