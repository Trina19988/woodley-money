// Wraps the original Finance Tracker file verbatim in PWA scaffolding.
// The original markup/CSS/JS is copied byte-for-byte so the desktop layout is identical.
const fs = require('fs');
const path = require('path');

const SOURCE = 'C:/Users/woodl/Downloads/Finance Tracker 2026.html';
const OUT = path.join(__dirname, 'index.html');

const original = fs.readFileSync(SOURCE, 'utf8');

const head = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<meta name="apple-mobile-web-app-title" content="Woodley Money"/>
<meta name="theme-color" content="#0f0f14"/>
<link rel="manifest" href="manifest.json"/>
<link rel="apple-touch-icon" href="icon-192.png"/>
<title>Woodley Money</title>
</head>
<body>
`;

// Additive only: leaves the desktop layout untouched, adapts below 820px for phones.
const mobileCss = `
<style>
@media (max-width: 820px) {
  body{font-size:15px;}
  .header{flex-wrap:wrap;height:auto;padding:10px 14px;padding-top:calc(10px + env(safe-area-inset-top));gap:10px;}
  .logo{font-size:17px;}
  .nav-tabs{order:3;width:100%;justify-content:center;}
  .header-right{gap:5px;flex-wrap:wrap;justify-content:flex-end;}
  .header-right .btn{padding:6px 10px;font-size:12px;}
  .save-indicator{display:none;}
  .main{flex-direction:column;min-height:auto;}
  .sidebar{width:100%;flex-direction:row;align-items:center;overflow-x:auto;gap:6px;padding:8px 10px;border-right:none;border-bottom:1px solid var(--border);}
  .sidebar-label{display:none;}
  #sidebar-cats{display:flex;gap:6px;align-items:center;flex-shrink:0;}
  .sidebar-item{white-space:nowrap;flex-shrink:0;padding:7px 11px;align-self:center;}
  .sidebar-amount{margin-left:6px;}
  .sidebar > div[style*="margin-top:auto"]{display:flex;gap:6px;margin-top:0!important;padding-top:0!important;align-items:center;flex-shrink:0;}
  .content{padding:14px;padding-bottom:calc(30px + env(safe-area-inset-bottom));}
  .summary-grid{grid-template-columns:1fr 1fr;}
  .two-col,.three-col{grid-template-columns:1fr;}
  .expense-row{grid-template-columns:1fr auto;row-gap:4px;padding:11px 12px;}
  .expense-row .expense-cat{justify-self:start;}
  .pipeline-row{grid-template-columns:1fr auto;row-gap:6px;}
  .modal-overlay{position:fixed;padding:14px;align-items:flex-start;overflow-y:auto;}
  .modal,.modal-wide{width:100%;max-width:100%;padding:18px;}
  .month-bar{gap:6px;}
  .month-select,.year-select{font-size:13px;}
  .form-input,.form-select{font-size:16px;}
}
</style>
`;

const tail = `
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  });
}
</script>
</body>
</html>
`;

fs.writeFileSync(OUT, head + original + mobileCss + tail, 'utf8');

console.log('Built index.html');
console.log('  source bytes:', original.length);
console.log('  output bytes:', fs.statSync(OUT).size);
