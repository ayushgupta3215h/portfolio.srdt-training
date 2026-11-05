/**
 * ===================================================================
 * BACKEND SERVER - AYUSH GUPTA (ROLL NO: 202510101240165)
 * Technology: Node.js & Express RESTful API Server
 * ===================================================================
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'messages_database.json');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Helper: Read messages from JSON database file
function readDatabase() {
  if (!fs.existsSync(DB_FILE)) {
    const initialData = [
      {
        id: 'MSG-101',
        name: 'Technical Evaluator',
        email: 'evaluator@srdt.edu',
        subject: 'Full Stack Project Evaluation',
        message: 'Project demonstrates frontend and backend proficiency.',
        timestamp: new Date().toISOString(),
        status: '200 OK'
      }
    ];
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
    return initialData;
  }
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Helper: Save messages to JSON database file
function saveDatabase(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// ==========================================
// REST API ENDPOINTS
// ==========================================

// 1. Health check & Developer Info
app.get('/api/developer', (req, res) => {
  res.status(200).json({
    status: 'success',
    developer: {
      name: 'Ayush Gupta',
      rollNo: '202510101240165',
      email: 'ayush@gmail.com',
      linkedIn: 'https://linkedin.com/in/ayushgupta3215h',
      github: 'https://github.com/ayushgupta3215h',
      specialization: 'Full Stack Web Development (Frontend & Backend)'
    }
  });
});

// 2. GET /api/messages - Retrieve all messages
app.get('/api/messages', (req, res) => {
  const messages = readDatabase();
  res.status(200).json({
    success: true,
    count: messages.length,
    data: messages
  });
});

// 3. POST /api/contact - Handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide name, email, and message.'
    });
  }

  const messages = readDatabase();
  const newMessage = {
    id: `MSG-${Math.floor(100 + Math.random() * 900)}`,
    name: name.trim(),
    email: email.trim(),
    subject: subject ? subject.trim() : 'General Inquiry',
    message: message.trim(),
    timestamp: new Date().toISOString(),
    status: '200 OK'
  };

  messages.unshift(newMessage);
  saveDatabase(messages);

  console.log(`[POST /api/contact] New contact record stored for: ${newMessage.name} (${newMessage.email})`);

  res.status(201).json({
    success: true,
    message: 'Message processed and stored successfully!',
    record: newMessage
  });
});

// 4. Fallback: Serve index.html for all page requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log('====================================================');
  console.log(`  Ayush Gupta Portfolio Server Running!`);
  console.log(`  Roll No: 202510101240165`);
  console.log(`  Local URL: http://localhost:${PORT}`);
  console.log(`  REST API : http://localhost:${PORT}/api/developer`);
  console.log('====================================================');
});

