# 🔒 AttendEX | By NullYex

![Version](https://img.shields.io/badge/version-2.0.0-success) ![Security](https://img.shields.io/badge/security-AES--256-blue) ![Status](https://img.shields.io/badge/system-ONLINE-green)

**AttendEX** is a lightweight, serverless, and cryptographically secure attendance management system designed for rapid student tracking. It runs entirely in the browser but features "Zero-Knowledge" architecture—the database is encrypted, and the decryption key lives only in the user's mind.

### ⚡ Features

* **Serverless Architecture:** Runs entirely on GitHub Pages (Client-Side).
* **AES-256 Encryption:** Student databases are stored as encrypted ciphertexts
* **Excel Export:** One-click export to `.xlsx` or `.txt` formats for official records
* **More?:** Find yourself (best wishes/good luck...)
---

### 🚀 Usage Guide

This system is protected by a **Security Lock**. 

1.  **Launch:** Open the web application.
2.  **Authenticate:** You will be prompted for a **Decryption Key**.
    * *Correct Key:* The system decrypts the database and loads the interface.
    * *Incorrect/Missing Key:* The system triggers **LOCKDOWN MODE**.
3.  **Take Attendance:** Click student rows to toggle status (Present/Absent).
4.  **Export:** Use the "Data Export" card to download the final report.

---

### 🛠️ For Developers (Forking)

If you wish to use AttendEX for your own class, you must generate your own encrypted database.

**1. Prepare your Data:**
Create a JSON object following this structure and put inside `humans-xD.json` (replacing the existing content):
```json
[
  { "name": "Small Banana", "rollNo": "1", "enrollmentNo": "ID/001" },
  { "name": "Big Brinjal", "rollNo": "2", "enrollmentNo": "ID/002" }
]
```

**2. Encrypt your Data:**
Open the browser console (F12) on the AttendEX page and run the built-in encryption tool:

```java
generateEncryptedString(humans, "your_password")
```

**3. Deploy:**
Copy the resulting ciphertext string, paste it into `humans-xD.json` (replacing the existing content), and push to your repository.

---

### ⚠️ Security Notice

* **Data Privacy:** This application uses **Client-Side Encryption**. This server (GitHub)/you can only see encrypted text.
* **Proprietary Software:** Created and maintained by **Team NullYex**.