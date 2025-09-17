
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.getElementById('modeToggle');
toggle?.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('light');
  localStorage.setItem('prefersLight', document.documentElement.classList.contains('light') ? '1' : '0');
});
if (localStorage.getItem('prefersLight')==='1') document.documentElement.classList.add('light');

// Light theme tweak
const style = document.createElement('style');
style.textContent = `
  .light body, .light :root { background: #f8fafc; color:#0b1220}
  .light .site-header{background:rgba(248,250,252,.7); border-bottom-color:#e2e8f0}
  .light .card{background:#fff;border-color:#e2e8f0}
  .light .btn{color:#0b1220;border-color:#e2e8f0}
  .light .badges li{background:#eef2ff;color:#1f2937;border-color:#c7d2fe}
  .light .tags li{background:#eff6ff;border-color:#bfdbfe;color:#1e3a8a}
  .light .timeline{border-left-color:#e2e8f0}
`;
document.head.appendChild(style);
