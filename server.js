// SpheroNav 11D Zynexis - Ultimate 11D Multiverse Engine with Secure Auth & bKash Popup Gateway
const express = require('express');
const app = express();
app.use(express.json());

const BKASH_NUMBER = "01758889800";
const SUPER_ADMIN = "arafatislam159357@gmail.com";

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="bn">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SpheroNav 11D Zynexis - Master Engine</title>
        <style>
            :root {
                --bg-deep: #030309;
                --primary-glow: #6c5ce7;
                --secondary-glow: #00d2ff;
                --bkash-pink: #e2136e;
                --card-bg: rgba(15, 15, 35, 0.75);
            }
            body {
                background: var(--bg-deep);
                color: #ffffff;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 0;
                padding: 0;
                overflow-x: hidden;
            }
            /* Cosmic Background Animation */
            body::before {
                content: '';
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: radial-gradient(circle at 50% 50%, rgba(108, 92, 231, 0.15), transparent 70%);
                z-index: -1;
                animation: pulseGlow 8s infinite alternate;
            }
            @keyframes pulseGlow {
                0% { transform: scale(1); opacity: 0.8; }
                100% { transform: scale(1.2); opacity: 1; }
            }

            /* Header & Sidebar Menu */
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 25px;
                background: rgba(10, 10, 25, 0.9);
                border-bottom: 1px solid rgba(108, 92, 231, 0.3);
                backdrop-filter: blur(10px);
                position: sticky;
                top: 0;
                z-index: 100;
            }
            .menu-left {
                display: flex;
                align-items: center;
                gap: 15px;
            }
            .hamburger, .gear-icon {
                font-size: 24px;
                cursor: pointer;
                color: var(--secondary-glow);
                transition: 0.3s;
            }
            .hamburger:hover, .gear-icon:hover {
                color: #fff;
                transform: rotate(90deg);
            }
            .logo {
                font-size: 20px;
                font-weight: bold;
                background: linear-gradient(45deg, var(--secondary-glow), var(--primary-glow));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            /* Main Dashboard */
            .main-container {
                max-width: 900px;
                margin: 30px auto;
                padding: 20px;
            }
            .card {
                background: var(--card-bg);
                border: 1px solid rgba(108, 92, 231, 0.4);
                box-shadow: 0 0 25px rgba(108, 92, 231, 0.2);
                border-radius: 16px;
                padding: 25px;
                margin-bottom: 25px;
                backdrop-filter: blur(12px);
            }
            h2 { color: var(--secondary-glow); margin-top: 0; }

            /* Auth Section */
            .auth-box {
                text-align: center;
                padding: 30px;
            }
            .auth-btn {
                background: linear-gradient(45deg, #4285F4, #34A853);
                color: white;
                border: none;
                padding: 12px 25px;
                font-size: 16px;
                font-weight: bold;
                border-radius: 8px;
                cursor: pointer;
                margin: 10px;
                box-shadow: 0 4px 15px rgba(66, 133, 244, 0.4);
                transition: 0.3s;
            }
            .auth-btn:hover { transform: scale(1.05); }

            /* Credit Popup Modal */
            .modal {
                display: none;
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.85);
                z-index: 1000;
                justify-content: center;
                align-items: center;
                backdrop-filter: blur(8px);
            }
            .modal-content {
                background: #0d0d22;
                border: 2px solid var(--bkash-pink);
                box-shadow: 0 0 40px rgba(226, 19, 110, 0.4);
                padding: 30px;
                border-radius: 20px;
                max-width: 420px;
                width: 90%;
                text-align: center;
                position: relative;
            }
            .close-btn {
                position: absolute;
                top: 15px; right: 20px;
                font-size: 22px;
                cursor: pointer;
                color: #aaa;
            }
            .package-card {
                background: rgba(226, 19, 110, 0.1);
                border: 1px solid var(--bkash-pink);
                padding: 15px;
                border-radius: 10px;
                margin: 15px 0;
                text-align: left;
            }
            .bkash-pay-btn {
                background: var(--bkash-pink);
                color: white;
                border: none;
                padding: 14px;
                font-size: 16px;
                font-weight: bold;
                border-radius: 8px;
                cursor: pointer;
                width: 100%;
                box-shadow: 0 4px 20px rgba(226, 19, 110, 0.5);
                transition: 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
            .bkash-pay-btn:hover { background: #c20f5c; transform: scale(1.02); }
            input {
                width: 100%;
                padding: 12px;
                margin: 10px 0;
                border-radius: 8px;
                border: 1px solid #444;
                background: #111;
                color: #fff;
                box-sizing: border-box;
            }
        </style>
    </head>
    <body>

        <!-- Top Navigation Bar -->
        <header>
            <div class="menu-left">
                <span class="hamburger" onclick="toggleMenu()">☰</span>
                <span class="logo">SpheroNav 11D Zynexis</span>
            </div>
            <div>
                <span class="gear-icon" onclick="openSettings()">⚙️</span>
            </div>
        </header>

        <!-- Main Content -->
        <div class="main-container">
            <!-- Login / Security Shield Card -->
            <div class="card auth-box" id="authSection">
                <h2>🔒 Secure 11D Multiverse Access</h2>
                <p style="color: #aaa;">প্রবেশ করতে আপনার Google বা Secure 4G ID দিয়ে লগইন করুন।</p>
                <button class="auth-btn" onclick="simulateLogin('Google')">🔵 Google / Gmail দিয়ে লগইন</button>
                <button class="auth-btn" style="background: linear-gradient(45deg, #ff9900, #ff3300);" onclick="simulateLogin('4G-ID')">🛡️ Secure 4G ID দিয়ে লগইন</button>
            </div>

            <!-- Workspace & Credit Status (Hidden until login) -->
            <div class="card" id="dashboardSection" style="display: none;">
                <h2>⚡ 11D Quantum Workspace</h2>
                <p>Status: <span style="color: #00b894; font-weight: bold;">Online & Secured</span></p>
                <p>আপনার বর্তমান ক্রেডিট: <span id="userCredits" style="color: var(--secondary-glow); font-weight: bold;">0</span></p>
                <button class="bkash-pay-btn" style="background: #6c5ce7; margin-top: 15px;" onclick="showCreditPopup()">🚀 ক্রেডিট শেষ? ইনস্ট্যান্ট টপ-আপ করুন</button>
            </div>
        </div>

        <!-- bKash Popup Modal (Triggered when credit is low) -->
        <div class="modal" id="bkashModal">
            <div class="modal-content">
                <span class="close-btn" onclick="closeCreditPopup()">&times;</span>
                <h2 style="color: var(--bkash-pink);">💳 বিকাশ ইনস্ট্যান্ট ক্রেডিট গেটওয়ে</h2>
                <p style="font-size: 13px; color: #ccc;">অফিশিয়াল মার্চেন্ট বিকাশ নম্বর: <b style="color: #fff;">${BKASH_NUMBER}</b></p>
                
                <div class="package-card">
                    <b style="color: #fff;">প্রিমিয়াম প্যাকেজ: ৫০০ ক্রেডিট</b>
                    <p style="margin: 5px 0; font-size: 14px; color: #00d2ff;">মূল্য: ১০০ টাকা <del style="color: #ff4d4d;">১৫০ টাকা</del> (৩০% ছাড়!)</p>
                </div>

                <input type="text" id="payerNumber" placeholder="আপনার বিকাশ নম্বর (যেমন: 017xxxxxxxx)">
                <input type="text" id="trxId" placeholder="TrxID (যেমন: 9H7K...ফিডব্যাক এসএমএস থেকে)">

                <a href="bkash://app" style="text-decoration: none;">
                    <button class="bkash-pay-btn" onclick="confirmBkashPayment()">
                        <span>বিকাশ অ্যাপে পেমেন্ট কনফার্ম করুন</span>
                    </button>
                </a>
            </div>
        </div>

        <script>
            function toggleMenu() {
                alert("মেনুবার: এখান থেকে আপনার প্রজেক্টের ফাইল, প্রজেক্ট হিস্ট্রি এবং সাব-অ্যাডমিন প্যানেল দেখতে পাবেন।");
            }
            function openSettings() {
                alert("সেটিংস গিয়ার: সিস্টেম সিকিউরিটি, এআই মডেল কনফিগারেশন এবং পার্সোনাল প্রিফারেন্স ম্যানেজ করুন।");
            }
            function simulateLogin(type) {
                document.getElementById('authSection').style.display = 'none';
                document.getElementById('dashboardSection').style.display = 'block';
                document.getElementById('userCredits').innerText = '15 (লো ক্রেডিট!)';
                // Automatically show popup if low credit
                setTimeout(showCreditPopup, 1000);
            }
            function showCreditPopup() {
                document.getElementById('bkashModal').style.display = 'flex';
            }
            function closeCreditPopup() {
                document.getElementById('bkashModal').style.display = 'none';
            }
            function confirmBkashPayment() {
                const number = document.getElementById('payerNumber').value;
                const trx = document.getElementById('trxId').value;
                if(!number || !trx) {
                    alert('দয়া করে আপনার বিকাশ নম্বর এবং TrxID দিন!');
                    return;
                }
                alert('পেমেন্ট রিকোয়েস্ট সফলভাবে পাঠানো হয়েছে! অ্যাডমিন যাচাই করে আপনার একাউন্টে ক্রেডিট যুক্ত করে দেবেন।');
                closeCreditPopup();
            }
        </script>
    </body>
    </html>
  `);
});

module.exports = app;
