# Domestic Violence Workbook - Setup & Deployment Guide

## Project Overview
Complete interactive React-based workbook with:
- Cloud-based progress saving (Firebase)
- Role-based personalization (4 roles)
- Real-world scenarios with multiple-choice feedback
- Professional toolkit and action planning
- PDF export capability
- Mobile-responsive design with Fonda's branding

---

## Quick Start (Local Development)

### Prerequisites
- Node.js (v16+) and npm
- Firebase account (free tier is sufficient)

### Step 1: Clone/Setup Project
```bash
cd dv-workbook
npm install
```

### Step 2: Configure Firebase
1. Create a Firebase project at https://firebase.google.com
2. Enable Realtime Database (choose "Start in test mode")
3. Create a `.env.local` file in the project root:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_DATABASE_URL=your_database_url
```

(Get these values from Firebase Console → Project Settings → Your Apps)

### Step 3: Run Locally
```bash
npm start
```
Open http://localhost:3000 in your browser

---

## Deployment to Vercel (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel --env-file .env.local
```

### Step 4: Configure Environment Variables in Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your project
3. Settings → Environment Variables
4. Add each Firebase variable from your `.env.local`

### Step 5: Redeploy
```bash
vercel --prod
```

Your workbook is now live at a Vercel URL (e.g., `dv-workbook.vercel.app`)

---

## Integration with Stripe + CRM Email

### Workflow:
1. **Customer purchases** → Stripe generates purchase record
2. **Stripe webhook** → Triggers your CRM/email system
3. **Email sent** → Includes unique workbook link with `?session=UNIQUE_ID`
4. **User clicks link** → Opens workbook with unique session ID
5. **Progress saves** → Auto-saves to Firebase under that session ID
6. **User can return** → Same URL = same session = same progress

### Generate Unique URLs
Each Stripe purchase should generate a URL like:
```
https://dv-workbook.vercel.app/?session=unique_session_id
```

The session ID can be:
- Generated in Stripe webhook
- Stored in your CRM
- Sent to user in email

Example: `dv-royster-001-2026-06-09-abc123def456`

---

## Data Structure (What Gets Saved)

All responses are saved to Firebase under:
```
sessions/{sessionId}/
  ├── userRole: "healthcare" | "law_enforcement" | "social_worker" | "faith_leader"
  ├── currentSection: "section2" | "section3" | "section4" | "section5"
  ├── lastUpdated: "2026-06-09T14:22:00Z"
  └── section2: { cycle_reflection, tension_response, ... }
  └── section3: { q1: {...}, q2: {...}, reflection: "..." }
  └── section4: { checkedItems: [0, 2, 4], ... }
  └── section5: { actionPlan: "...", keyTakeaway: "..." }
```

Users can **access from any device** using the same session URL.

---

## Security Notes

### Firebase Rules (Test Mode)
While you're developing, test mode allows anyone to read/write. For production, update your Firebase rules:

**Realtime Database Rules:**
```json
{
  "rules": {
    "sessions": {
      "$sessionId": {
        ".read": "auth != null || query.limitToFirst(1).val() != null",
        ".write": "$sessionId == auth.uid || !root.child('sessions').child($sessionId).exists()"
      }
    }
  }
}
```

OR (simpler, session-based):
```json
{
  "rules": {
    "sessions": {
      ".read": true,
      ".write": true
    }
  }
}
```

### HTTPS
Vercel automatically provides HTTPS. Always use HTTPS in production.

---

## Customization

### Add Your Logo
Replace the "RESA" text in components with actual logo image:
```jsx
<img src="/logo.png" alt="RESA Solutions" className="nav-logo" />
```

### Update Scenarios
Edit the role-specific scenarios in:
- `src/components/sections/Section3Scenarios.js`

### Modify Scripts/Toolkit
Edit in:
- `src/components/sections/Section4Toolkit.js`

### Change Colors
Update CSS variables in `src/App.css`:
```css
--fuchsia: #fd2b60;
--orange: #fe6410;
--strawberry: #f6538c;
--cyan: #1e9ab4;
```

---

## Testing Checklist

### Before Going Live:
- [ ] Test all 4 role paths (complete entire workbook for each)
- [ ] Verify Firebase saving works (refresh page, data persists)
- [ ] Test PDF download functionality
- [ ] Check mobile responsiveness (use browser devtools)
- [ ] Verify unique session URLs work correctly
- [ ] Test from different devices/browsers

### Sample Test URL:
```
https://dv-workbook.vercel.app/?session=test-session-12345
```

---

## Stripe Integration Example

When a customer purchases, your Stripe webhook should:

```javascript
// Example webhook handler (Node.js/Express)
app.post('/webhook/stripe', async (req, res) => {
  const event = req.body;

  if (event.type === 'payment_intent.succeeded') {
    const sessionId = `dv_${Date.now()}_${generateRandomString()}`;
    const workbookUrl = `https://dv-workbook.vercel.app/?session=${sessionId}`;

    // Save to your CRM
    const customer = event.data.object.customer;
    const email = event.data.object.billing_details.email;

    // Send email with link
    sendEmail({
      to: email,
      subject: 'Your DV Workbook is Ready',
      template: 'dv-workbook-welcome',
      data: { workbookUrl }
    });

    // Save sessionId in database for reference
    await saveWorkbookSession(sessionId, email, customer);
  }

  res.status(200).json({ received: true });
});
```

---

## Monitoring & Analytics

### Track Completion:
Check Firebase Realtime Database to see:
- How many unique sessions accessed
- Which role is most common
- How many sessions reached which section
- Average time spent per section

### Setup Analytics (Optional):
Add Google Analytics or Mixpanel by installing their SDK:
```bash
npm install react-ga4
```

---

## Support & Troubleshooting

### Issue: Session not saving
- Check Firebase is configured correctly
- Check browser console for errors
- Verify Firebase rules allow write access

### Issue: Styles not loading
- Clear browser cache
- Run `npm install` again
- Check all CSS files are imported

### Issue: Firebase credentials not working
- Verify `.env.local` has correct values
- Restart `npm start` after updating env file
- Check Firebase project is active

---

## Next Steps

1. **Deploy to Vercel** (follow steps above)
2. **Generate test URLs** and verify they work
3. **Integrate with Stripe** webhook
4. **Set up email template** with workbook link
5. **Test end-to-end** with real purchase
6. **Monitor Firebase** for user data
7. **Collect feedback** from initial users
8. **Iterate** based on usage patterns

---

## Future Enhancements

- [ ] Add PDF export (currently text only)
- [ ] Create admin dashboard to view all sessions
- [ ] Add completion certificates
- [ ] Email completion summary to user
- [ ] Integration with email marketing platform
- [ ] Analytics dashboard
- [ ] Build similar workbooks for other topics

---

## Contact

For questions or customization:
- Email: bookings@fondaroyster.com
- Website: fondajroyster.com

---

**Version:** 1.0  
**Last Updated:** June 9, 2026  
**Built for:** Fonda J. Royster, RESA Solutions LLC
