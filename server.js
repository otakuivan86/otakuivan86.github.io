const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, 'data');
const CONTACT_FILE = path.join(DATA_DIR, 'contact-submissions.json');

function ensureDataStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(CONTACT_FILE)) {
    fs.writeFileSync(CONTACT_FILE, JSON.stringify([], null, 2));
  }
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function validateText(value, minLength, maxLength) {
  return typeof value === 'string'
    && value.trim().length >= minLength
    && value.trim().length <= maxLength;
}

function validateEmail(value) {
  return typeof value === 'string'
    && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    && value.trim().length <= 160;
}

function readContactSubmissions() {
  try {
    const raw = fs.readFileSync(CONTACT_FILE, 'utf8');
    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) {
      return parsed;
    }

    if (parsed && typeof parsed === 'object') {
      return [parsed];
    }

    return [];
  } catch (error) {
    return [];
  }
}

function writeContactSubmissions(items) {
  fs.writeFileSync(CONTACT_FILE, JSON.stringify(items, null, 2));
}

ensureDataStore();

app.use(express.json({ limit: '256kb' }));
app.use(express.urlencoded({ extended: false, limit: '256kb' }));

app.use((req, res, next) => {
  const blockedFiles = new Set([
    '/server.js',
    '/package.json',
    '/package-lock.json',
  ]);

  if (blockedFiles.has(req.path) || req.path === '/data' || req.path.startsWith('/data/')) {
    return res.sendStatus(403);
  }

  return next();
});

app.post('/api/contact', (req, res) => {
  const name = typeof req.body?.name === 'string' ? req.body.name : '';
  const company = typeof req.body?.company === 'string' ? req.body.company : '';
  const email = typeof req.body?.email === 'string' ? req.body.email : '';
  const phone = typeof req.body?.phone === 'string' ? req.body.phone : '';
  const message = typeof req.body?.message === 'string' ? req.body.message : '';

  if (!validateText(name, 1, 120)) {
    return res.status(400).json({ error: 'Invalid name' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (typeof company !== 'string' || company.length > 160) {
    return res.status(400).json({ error: 'Invalid company' });
  }

  if (typeof phone !== 'string' || phone.length > 80) {
    return res.status(400).json({ error: 'Invalid phone' });
  }

  if (!validateText(message, 100, 5000)) {
    return res.status(400).json({ error: 'Invalid message' });
  }

  try {
    const submissions = readContactSubmissions();
    const submission = {
      id: uid(),
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    submissions.push(submission);
    writeContactSubmissions(submissions);

    return res.json({ ok: true, id: submission.id });
  } catch (error) {
    console.error('[contact] write error:', error.message);
    return res.status(500).json({ error: 'Failed to save contact request' });
  }
});

app.use('/api', (_req, res) => {
  return res.status(404).json({ error: 'Not found' });
});

app.use(express.static(ROOT_DIR, { index: 'index.html' }));

app.listen(PORT, () => {
  console.log('');
  console.log('  RAWAS & AEROSOLVE site server running');
  console.log(`  Site:    http://localhost:${PORT}`);
  console.log(`  Contact: http://localhost:${PORT}/api/contact`);
  console.log('');
});
