/* ===================================================================
   PORTFOLIO SCRIPTS - AYUSH GUPTA (ROLL NO: 202510101240165)
   Full Stack Architecture: Frontend Interactivity & Backend Simulation
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initNavbar();
  initSkillBars();
  initProjectFilters();
  initBackendSimulator();
  initContactForm();
});

/* ==========================================
   1. THEME SWITCHER (Dark / Light)
   ========================================== */
function initTheme() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const savedTheme = localStorage.getItem('ayush_portfolio_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('ayush_portfolio_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;
      themeBtn.setAttribute('title', 'Switch to Dark Mode');
    } else {
      themeIcon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;
      themeBtn.setAttribute('title', 'Switch to Light Mode');
    }
  }
}

/* ==========================================
   2. DYNAMIC TYPING EFFECT
   ========================================== */
function initTypingEffect() {
  const typingElement = document.getElementById('typingRole');
  if (!typingElement) return;

  const roles = [
    'Full Stack Developer',
    'Frontend Specialist (HTML5 / CSS3 / JS)',
    'Backend Architect (Node.js / Express / APIs)',
    'Student Roll No: 202510101240165'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 40;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingDelay = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 500; // Pause before next word
    }

    setTimeout(type, typingDelay);
  }

  type();
}

/* ==========================================
   3. NAVBAR & SMOOTH SCROLLING
   ========================================== */
function initNavbar() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Active section scroll spy
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-link[href*='${sectionId}']`)?.classList.add('active');
      } else {
        document.querySelector(`.nav-link[href*='${sectionId}']`)?.classList.remove('active');
      }
    });
  });
}

/* ==========================================
   4. SKILL BARS ANIMATION
   ========================================== */
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersectEvent || entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth;
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => observer.observe(bar));

  // Skills Tabs Switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  const colFrontend = document.getElementById('colFrontend');
  const colBackend = document.getElementById('colBackend');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-tab');
      if (target === 'all') {
        if (colFrontend) colFrontend.style.display = 'block';
        if (colBackend) colBackend.style.display = 'block';
      } else if (target === 'frontend') {
        if (colFrontend) colFrontend.style.display = 'block';
        if (colBackend) colBackend.style.display = 'none';
      } else if (target === 'backend') {
        if (colFrontend) colFrontend.style.display = 'none';
        if (colBackend) colBackend.style.display = 'block';
      }
    });
  });
}

/* ==========================================
   5. PROJECT FILTERING
   ========================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter || category === 'fullstack') {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ===================================================================
   6. INTERACTIVE BACKEND & DATABASE SIMULATION
   Demonstrating Frontend-to-Backend HTTP Request/Response & Storage
   =================================================================== */
const BACKEND_DB_KEY = 'ayush_portfolio_messages_db';

function getStoredMessages() {
  const raw = localStorage.getItem(BACKEND_DB_KEY);
  if (!raw) {
    // Initial sample seed records for demonstration
    const seed = [
      {
        id: 'MSG-101',
        name: 'Technical Evaluator',
        email: 'evaluator@srdt.edu',
        subject: 'Full Stack Project Evaluation',
        message: 'Excellent architecture showcasing both frontend UI and backend simulation.',
        timestamp: new Date(Date.now() - 3600000 * 2).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: '200 OK'
      },
      {
        id: 'MSG-102',
        name: 'Tech Recruiter',
        email: 'recruiter@techcorp.com',
        subject: 'Frontend/Backend Developer Role',
        message: 'Hi Ayush, impressed by your profile and clean code design.',
        timestamp: new Date(Date.now() - 3600000 * 5).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: '200 OK'
      }
    ];
    localStorage.setItem(BACKEND_DB_KEY, JSON.stringify(seed));
    return seed;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveMessages(messages) {
  localStorage.setItem(BACKEND_DB_KEY, JSON.stringify(messages));
}

function initBackendSimulator() {
  renderDatabaseTable();

  // Test Ping Button
  const testPingBtn = document.getElementById('testPingBtn');
  const clearDbBtn = document.getElementById('clearDbBtn');
  const exportDbBtn = document.getElementById('exportDbBtn');

  if (testPingBtn) {
    testPingBtn.addEventListener('click', () => {
      simulateBackendRequest({
        name: 'Guest Reviewer',
        email: 'reviewer@domain.org',
        subject: 'API Health Check',
        message: 'Simulated HTTP POST /api/contact probe packet.'
      });
    });
  }

  if (clearDbBtn) {
    clearDbBtn.addEventListener('click', () => {
      localStorage.removeItem(BACKEND_DB_KEY);
      renderDatabaseTable();
      appendTerminalLog('DATABASE', '[DB] Flushed message table records. Table is now empty.', 'log-info');
    });
  }

  if (exportDbBtn) {
    exportDbBtn.addEventListener('click', () => {
      const data = getStoredMessages();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ayush_messages_db_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      appendTerminalLog('EXPORT', `[API] Exported ${data.length} records to JSON file.`, 'log-success');
    });
  }
}

function appendTerminalLog(type, text, cssClass = 'log-info') {
  const terminal = document.getElementById('terminalOutput');
  if (!terminal) return;

  const time = new Date().toLocaleTimeString();
  const line = document.createElement('div');
  line.className = `log-line ${cssClass}`;
  line.innerHTML = `<span class="log-timestamp">[${time}]</span> <span class="log-method">[${type}]</span> ${text}`;
  
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}

function simulateBackendRequest(formData) {
  const terminal = document.getElementById('terminalOutput');
  if (!terminal) return;

  appendTerminalLog('HTTP REQ', `POST /api/contact -> Host: localhost:5000 Content-Type: application/json`, 'log-method');
  appendTerminalLog('PAYLOAD', JSON.stringify({ name: formData.name, email: formData.email, subject: formData.subject }), 'log-info');

  setTimeout(() => {
    appendTerminalLog('SERVER', `[EXPRESS] Routing matching /api/contact -> invoking contactController.create()`, 'log-info');
  }, 250);

  setTimeout(() => {
    appendTerminalLog('DB_STORE', `[DATABASE] MongoDB/JSON inserted document for "${formData.name}"`, 'log-success');
    
    // Write to LocalStorage DB
    const current = getStoredMessages();
    const newEntry = {
      id: `MSG-${Math.floor(100 + Math.random() * 900)}`,
      name: formData.name,
      email: formData.email,
      subject: formData.subject || 'Direct Inquiry',
      message: formData.message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: '200 OK'
    };
    current.unshift(newEntry);
    saveMessages(current);
    renderDatabaseTable();

    appendTerminalLog('HTTP RES', `HTTP 200 OK - { success: true, messageId: "${newEntry.id}", status: "saved" }`, 'log-success');
  }, 500);
}

function renderDatabaseTable() {
  const tableBody = document.getElementById('dbTableBody');
  const countBadge = document.getElementById('dbCount');
  if (!tableBody) return;

  const messages = getStoredMessages();
  if (countBadge) {
    countBadge.textContent = `${messages.length} Records in DB`;
  }

  if (messages.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" class="empty-state">No records found. Submit the contact form to see live backend insertion!</td></tr>`;
    return;
  }

  tableBody.innerHTML = messages.map(m => `
    <tr>
      <td style="font-family: var(--font-mono); color: var(--accent-emerald);">${escapeHtml(m.id)}</td>
      <td><strong>${escapeHtml(m.name)}</strong><br><small style="color:var(--text-muted);">${escapeHtml(m.email)}</small></td>
      <td>${escapeHtml(m.subject)}</td>
      <td><span style="font-family: var(--font-mono); font-size: 0.75rem; color: #34d399; background: rgba(16,185,129,0.1); padding: 2px 6px; border-radius: 4px;">${escapeHtml(m.status)}</span></td>
      <td style="font-family: var(--font-mono); font-size: 0.75rem;">${escapeHtml(m.timestamp)}</td>
    </tr>
  `).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ==========================================
   7. CONTACT FORM SUBMISSION
   ========================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const subject = document.getElementById('contactSubject')?.value.trim();
      const message = document.getElementById('contactMessage')?.value.trim();

      if (!name || !email || !message) {
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please fill out all required fields (Name, Email, Message).';
        }
        return;
      }

      // Trigger the backend simulation
      simulateBackendRequest({ name, email, subject, message });

      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.innerHTML = `<strong>Message Dispatched Successfully!</strong><br>Data processed by backend controller and committed to local database table below.`;
      }

      contactForm.reset();

      // Scroll smoothly down to the backend simulation console so user sees their data inserted!
      const backendSection = document.getElementById('backend');
      if (backendSection) {
        setTimeout(() => {
          backendSection.scrollIntoView({ behavior: 'smooth' });
        }, 600);
      }
    });
  }
}

