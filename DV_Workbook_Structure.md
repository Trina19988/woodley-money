# Domestic Violence Interactive Workbook Structure
**Estimated Time:** 30-45 minutes  
**Price Point:** $35  
**Brand:** Fonda J. Royster / RESA Solutions LLC

---

## SECTION 1: Welcome & Role Selection (3 min)
**Goal:** Orient user + select role for personalization

### Screen 1.1: Welcome
- Hero with Fonda's branding
- Headline: *"Supporting Survivors Through Systems"*
- Subhead: *"A 30-minute guide tailored to YOUR role"*
- CTA: *"Start the Workbook"*

### Screen 1.2: Role Selector
- Question: *"Which role describes you best?"*
- 4 Role Cards (selectable):
  1. **Healthcare Provider** (doctors, nurses, mental health)
  2. **Law Enforcement** (police, detectives)
  3. **Social Worker** (caseworkers, advocates)
  4. **Faith Leader** (clergy, faith community organizers)
- Each role card has an icon + brief description
- Selection auto-saves and personalizes content going forward

---

## SECTION 2: Understanding Domestic Violence (10 min)
**Goal:** Educate on the cycle, barriers, trauma response (role-agnostic)

### Screen 2.1: The Cycle of Abuse
- Interactive expandable cards for each stage:
  - **Tension Building**
  - **Incident**
  - **Reconciliation**
  - **Calm**
- Each card expands to show: description, warning signs, victim response
- Visual diagram showing the cycle
- Reflection prompt: *"Which stage do you see most in your work?"* (open text save)

### Screen 2.2: Why They Don't Leave
- 8 Real Barriers (from Fonda's guide):
  - Financial dependence
  - Fear of escalated violence
  - Love and loyalty
  - Children and custody concerns
  - Social/family pressure
  - Isolation
  - Immigration status
  - Housing insecurity
- Interactive: Each barrier has a toggle/expand
  - Expand shows: "Why this matters" + "What professionals miss"
- **Key Message Box:** *"Understanding barriers = more compassionate response"*

### Screen 2.3: Trauma Response in Survivors
- Info cards on:
  - Hypervigilance
  - Freeze response
  - Emotional dysregulation
  - Trust issues
  - Shame and self-blame
- Reflection: *"How might trauma responses show up in conversations you have?"* (open text)

---

## SECTION 3: Role-Based Scenarios & Assessment (12 min)
**Goal:** Apply knowledge through realistic scenarios with feedback

### Screen 3.1-3.3: Three Role-Specific Scenarios
Each scenario follows this structure:

**Scenario Setup (Story)**
- Realistic case: *"A 34-year-old woman comes to your [clinic/precinct/office/church] with..."*
- Details: Her situation, behaviors, what you notice
- Photo placeholder (warmly diverse, real-looking)

**Multiple Choice Questions (3-4 per scenario)**
Example for Healthcare Provider:
- *"What's your first instinct?"*
  - A) Ask directly about abuse ❌ (Feedback: Too confrontational if she's not ready)
  - B) Screen using a validated tool ✅ (Feedback: Yes—HARK or HITS tool normalizes asking)
  - C) Call her partner to get context ❌ (Feedback: Dangerous—privacy & safety risk)
  - D) Tell her to leave ❌ (Feedback: Undermines her agency; she knows her risk best)

**Open-Text Reflection Question** (after multiple choice)
- *"What would you actually say to her in this moment? Write it here."*
- No "right answer"—just document their thinking
- Saves to their workbook

**Role-Specific Guidance After Each Scenario**
- A text block showing: *"As a [role], you're uniquely positioned to..."*
- 1-2 key action steps
- A script or phrase they could use

---

## SECTION 4: Your Role's Toolkit (10 min)
**Goal:** Provide practical, actionable resources specific to their role

### Screen 4.1: Your Role's Competent Response Framework
(From Fonda's DV guide: "Six Principles of Competent, Compassionate Response")

Each principle gets:
- Clear explanation
- Why it matters
- "Say This / Not This" example relevant to their role

**Six Principles:**
1. Believe and Validate
2. Center Her Agency
3. Assess Safety
4. Provide Resources
5. Document Carefully (role-specific)
6. Follow Up (role-specific)

### Screen 4.2: Role-Specific Checklist
**For Healthcare Provider:**
- [ ] Screen all patients in private (using validated tool)
- [ ] Document injuries & statements accurately
- [ ] Provide DV resources before she leaves
- [ ] Know your state's reporting laws
- [ ] Connect to local DV services

**For Law Enforcement:**
- [ ] Never tell her to drop charges
- [ ] Interview safely (alone, private)
- [ ] Understand trauma responses aren't "unreliable"
- [ ] Take photos of injuries/scene
- [ ] Provide written resources

**For Social Worker:**
- [ ] Ask about safety before case planning
- [ ] Understand custody implications
- [ ] Don't force leaving—work at her pace
- [ ] Know community resources by heart
- [ ] Build trust over time

**For Faith Leader:**
- [ ] Don't default to "stay and pray"
- [ ] Know when to refer (DV is bigger than counseling)
- [ ] Provide sanctuary if needed
- [ ] Support her spiritual journey, not your theology
- [ ] Connect to professional help

### Screen 4.3: Scripts You Can Use
3-4 ready-made phrases for their role:

*For Healthcare Provider:*
- *"I ask all my patients about safety at home. In the last year, has your partner pushed, hit, or hurt you?"*

*For Law Enforcement:*
- *"You're not in trouble. I'm here to help keep you safe. Can you tell me what happened?"*

*For Social Worker:*
- *"Your safety is my priority. Let's talk about what you need right now, even if it's just information."*

*For Faith Leader:*
- *"You deserve safety and dignity. Let me connect you with professional advocates who can help."*

### Screen 4.4: Safety Planning 101
- Downloadable safety plan template (embedded PDF they can fill during workbook)
- Key elements:
  - Danger assessment (7 high-risk indicators—including strangulation = 700% risk increase)
  - Safe places to go
  - Important documents/numbers
  - Safety strategies
- Interactive: They fill in their own version
- Saves to their download

---

## SECTION 5: Your Action Plan (5 min)
**Goal:** Personal commitment based on their learning

### Screen 5.1: What Will You Do Differently?
- Role-specific prompt: *"As a [role], what's one thing you'll change in how you respond to DV survivors?"*
- Text input (open-ended reflection)
- Saves to their workbook

### Screen 5.2: Resource Bookmark
- One-page reference sheet they can print
- Quick links to:
  - National DV Hotline: 1-800-799-7233
  - Local [State] resources
  - Training opportunities
  - Fonda's contact for speaking/training
- Branded with colors & logo

---

## SECTION 6: Download Your Workbook (2 min)
**Goal:** Generate filled PDF they can save/print/share

### Screen 6.1: Review & Download
- Summary of what they answered
- Option to review sections before download
- **Button:** "Download My Workbook as PDF"
- Includes:
  - Their name (optional field)
  - Role selected
  - All their answers (multiple choice + open text)
  - Toolkits and checklists relevant to their role
  - Scripts and resources
  - Safety plan they filled out
  - Branding/footer with Fonda's info

---

## DATA STRUCTURE (What Gets Saved in Cloud)

```json
{
  "sessionId": "dv_abc123xyz789",
  "workbookType": "domestic_violence",
  "userRole": "healthcare_provider",
  "createdAt": "2026-06-09T14:22:00Z",
  "lastUpdated": "2026-06-09T14:47:30Z",
  "status": "in_progress", // or "completed"
  "responses": {
    "section2": {
      "cycleReflection": "In my clinic, I see mostly the incident and reconciliation phases...",
      "barrierReflection": "I had never considered how financial dependence..."
    },
    "section3": {
      "scenario1": {
        "q1_answer": "B",
        "q1_feedback_seen": true,
        "q2_answer": "A",
        "q3_reflection": "I would say 'I'm noticing some things that worry me about your safety...'"
      },
      "scenario2": {
        ...
      }
    },
    "section5": {
      "actionPlan": "I'm going to implement the HARK screening tool..."
    }
  }
}
```

---

## TECH APPROACH

**Frontend:**
- React app (interactive, fast, responsive)
- Branded with Fonda's colors, fonts, logo
- Auto-saves every answer to Firebase as user types/clicks
- Works perfectly on mobile, tablet, desktop

**Backend & Data:**
- Firebase Realtime Database
- Each unique session ID gets its own document
- Auto-save on every change (no "save" button needed)
- Can close and return anytime with same URL

**PDF Export:**
- html2pdf or jsPDF library
- Generates branded PDF with their answers
- Includes logo, colors, all content

**Hosting:**
- Vercel (free tier available)
- Fast, reliable, easy deployments

---

## TIMELINE

- **Wireframes & Approval:** 30 min ← **YOU ARE HERE**
- **Build Frontend:** 2-3 hours
- **Set up Firebase & Backend:** 1 hour
- **PDF Export & Testing:** 1 hour
- **Deploy to Vercel:** 30 min
- **Total:** ~5-6 hours start to finish

---

## NEXT STEPS

1. ✅ Confirm this structure feels right
2. Confirm the 4 roles are correct (or adjust)
3. Adjust any scenario details or questions
4. Start building the interactive interface
5. Wire up Firebase for cloud saving
6. Test end-to-end
7. Deploy live

**Ready to proceed?**
