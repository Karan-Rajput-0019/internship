// Core interactions: sidebar toggle, button actions, simple focus management
document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const closeSidebar = document.getElementById('closeSidebar');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const contactBtn = document.getElementById('contactBtn');
  const contactUs = document.getElementById('contactUs');
  const packagesBtn = document.getElementById('packagesBtn');
  const getQuote = document.getElementById('getQuote');

  function openSidebar() {
    sidebar.classList.add('active');
    sidebar.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    // trap focus to sidebar first interactive element
    const first = sidebar.querySelector('button, a');
    if (first) first.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeSide() {
    sidebar.classList.remove('active');
    sidebar.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openSidebar);
  closeSidebar.addEventListener('click', closeSide);

  sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSide);
  });

  // Simple button wiring - these can open modals or navigate to forms
  packagesBtn.addEventListener('click', function () {
    // navigate to packages section or open packages modal
    window.location.hash = '#services';
    packagesBtn.classList.add('pulse');
    setTimeout(()=>packagesBtn.classList.remove('pulse'), 600);
  });

  contactBtn.addEventListener('click', () => {
    window.location.hash = '#contact';
    contactBtn.classList.add('pulse');
    setTimeout(()=>contactBtn.classList.remove('pulse'), 600);
  });

  if (contactUs) {
    contactUs.addEventListener('click', () => {
      window.location.hash = '#contact';
      closeSide();
    });
  }

  if (getQuote) {
    getQuote.addEventListener('click', () => {
      window.location.hash = '#pricing';
      getQuote.classList.add('pulse');
      setTimeout(()=>getQuote.classList.remove('pulse'), 600);
    });
  }

  // keyboard handling: close sidebar on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
      closeSide();
    }
  });

  // small visual pulse animation (added via JS class)
  const style = document.createElement('style');
  style.innerHTML = `
    .pulse { animation: pulse-btn 0.6s ease-in-out; }
    @keyframes pulse-btn {
      0% { transform: scale(1); box-shadow: 0 6px 18px rgba(233,30,99,0.12); }
      50% { transform: scale(1.06); box-shadow: 0 12px 28px rgba(233,30,99,0.18); }
      100% { transform: scale(1); box-shadow: 0 6px 18px rgba(233,30,99,0.12); }
    }
  `;
  document.head.appendChild(style);
});