# Woodley Money — Financial Tracker PWA

A beautiful, mobile-first Progressive Web App for tracking personal and business finances.

## Features

✨ **Personal & Business tabs** — Keep finances separate  
📊 **Dashboard** — Overview with charts and category breakdown  
💸 **Expense tracking** — Full transaction history with search  
📥 **CSV import** — Import bank statements with flexible column mapping  
🎯 **Savings goals** — Track progress with contributions  
📈 **Income pipeline** — Business clients with status tracking (Pending/Invoiced/Received)  
📅 **Month/year views** — See expected income for any future period  
💾 **Auto-save** — Everything stored in localStorage  
📱 **Works offline** — Service worker caches all assets  
🎨 **Dark mode** — Pastel colors, DM Sans font  
🔐 **Privacy first** — All data stays on your device  

## Deploy to Vercel

### Option 1: Push to GitHub & Connect to Vercel (Recommended)

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name: `woodley-money`
   - Click "Create repository"

2. **Add remote and push:**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/woodley-money.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Go to https://vercel.com/import
   - Select your GitHub repository
   - Click "Deploy"
   - That's it! 🚀

### Option 2: Deploy Directly to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## Local Development

```bash
python3 -m http.server 8000
# or
node server.js
```

Visit http://localhost:8000

## Files

- **index.html** — Complete app (single file)
- **manifest.json** — PWA metadata
- **sw.js** — Service worker for offline
- **vercel.json** — Deployment config
- **icon-192.png** & **icon-512.png** — App icons

## How to Use

1. **Onboarding:** Enter your name, starting balances, savings goals
2. **Add transactions:** Click + button, fill in expense/income
3. **View by month:** Change month/year in Dashboard and Pipeline
4. **Import CSV:** Menu → Import CSV → Select bank file
5. **Backup:** Menu → Download backup (saves as JSON)

## Data Privacy

✓ All data stays on your device (localStorage)  
✓ No server, no tracking, no ads  
✓ Works completely offline  
✓ Download backups anytime  

## License

MIT
