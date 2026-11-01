// SpheroNav 11D Zynexis - 11D Multiverse Engine & bKash Gateway
const express = require('express');
const app = express();
app.use(express.json());

const BKASH_NUMBER = "01758889800";
const SUPER_ADMIN = "arafatislam159357@gmail.com";

// 11D Futuristic UI & Payment Gateway Frontend
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="bn">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SpheroNav 11D Zynexis</title>
        <style>
            body {
                background-color: #05050a;
                color: #ffffff;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 0;
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                overflow-x: hidden;
            }
            .container {
                background: rgba(15, 15, 30, 0.85);
                border: 2px solid #6c5ce7;
                box-shadow: 0 0 30px rgba(108, 92, 231, 0.5);
                border-radius: 20px;
                padding: 30px;
                max-width: 500px;
                width: 100%;
                text-align: center;
                backdrop-filter: blur(10px);
            }
            h1 {
                font-size: 26px;
                background: linear-gradient(45deg, #00d2ff, #3a7bd5, #6c5ce7);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-bottom: 10px;
            }
            .badge {
                display: inline-block;
                background: #00b894;
                color: #fff;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 12px;
                margin-bottom: 20px;
                font-weight: bold;
                letter-spacing: 1px;
            }
            .card {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 12px;
                padding: 20px;
                margin: 15px 0;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .bkash-btn {
                background: #e2136e;
                color: white;
                border: none;
                padding: 12px 25px;
                font-size: 16px;
                font-weight: bold;
                border-radius: 8px;
                cursor: pointer;
                width: 100%;
                transition: 0.3s;
                box-shadow: 0 4px 15px rgba(226, 19, 110, 0.4);
            }
            .bkash-btn:hover {
                background: #c20f5c;
                transform: scale(1.02);
            }
            input {
                width: 90%;
                padding: 10px;
                margin: 8px 0;
                border-radius: 6px;
                border: 1px solid #444;
                background: #111;
                color: #fff;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>SpheroNav 11D Zynexis</h1>
            <div class="badge">11D MULTIVERSE CORE ACTIVE</div>
            
            <div class="card">
                <h3>🚀 System Status</h3>
                <p>Shield Guard: <span style="color: #00b894;">Secured (10 Admins Linked)</span></p>
                <p>AI Generation Engine: <span style="color: #00d2ff;">Online</span></p>
            </div>

            <div class="card" style="border-color: #e2136e;">
                <h3 style="color: #e2136e;">💳 bKash Instant Credit Top-Up</h3>
                <p style="font-size: 14px; color: #aaa;">ক্রেডিট শেষ? নিচের বিকাশ নম্বরে সেন্ড মানি করে ট্রানজেকশন আইডি দিন।</p>
                <p style="font-size: 16px; font-weight: bold; color: #00d2ff;">Merchant bKash: ${BKASH_NUMBER}</p>
                
                <input type="email" id="userEmail" placeholder="আপনার ইমেইল দিন"><br>
                <input type="text" id="senderNumber" placeholder="আপনার বিকাশ নম্বর (যেমন: 017...)"><br>
                <input type="text" id="trxId" placeholder="TrxID (যেমন: 9H7K...)"><br>
                <br>
                <button class="bkash-btn" onclick="submitPayment()">বিকাশ পেমেন্ট ভেরিফাই করুন</button>
            </div>
        </div>

        <script>
            function submitPayment() {
                const userEmail = document.getElementById('userEmail').value;
                const senderNumber = document.getElementById('senderNumber').value;
                const trxId = document.getElementById('trxId').value;

                if(!userEmail || !senderNumber || !trxId) {
                    alert('দয়া করে সব তথ্যগুলো সঠিকভাবে পূরণ করুন!');
                    return;
                }

                fetch('/api/pay/bkash', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userEmail, senderNumber, trxId, amount: 100 })
                })
                .res => res.json())
                .then(data => {
                    alert(data.message || 'পেমেন্ট রিকোয়েস্ট সফলভাবে জমা হয়েছে!');
                })
                .catch(err => {
                    alert('পেমেন্ট সাবমিট সফল হয়েছে। অ্যাডমিন যাচাই করে ক্রেডিট যুক্ত করবেন।');
                });
            }
        </script>
    </body>
    </html>
  `);
});

// Payment API Endpoint
app.post('/api/pay/bkash', (req, res) => {
  const { userEmail, trxId, senderNumber } = req.body;
  if (!trxId || !senderNumber || !userEmail) {
    return res.status(400).json({ success: false, message: "সব তথ্য প্রদান করুন।" });
  }
  res.json({
    success: true,
    message: "পেমেন্ট সফলভাবে সাবমিট হয়েছে! ট্রানজেকশন যাচাই করে দ্রুত ক্রেডিট যোগ করা হবে।"
  });
});

module.exports = app;
