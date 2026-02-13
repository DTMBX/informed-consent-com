# Respectful Maternity & Newborn Care Platform

A comprehensive educational platform that delivers balanced, evidence-based, non-coercive information about maternal and newborn care decisions, promoting informed consent through transparent disclosure of benefits, risks, alternatives, and uncertainties while maintaining strict medical accuracy, neutrality, and source transparency.

**Experience Qualities**:
1. **Trustworthy** - Every claim is cited, every statistic sourced, and every update logged with transparent review dates
2. **Empowering** - Parents feel informed and capable of asking meaningful questions without pressure or judgment
3. **Calming** - Design and tone reduce anxiety while promoting thoughtful decision-making

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This application requires sophisticated information architecture, role-based access control, content versioning with audit trails, multi-view comparison interfaces, data export workflows, offline-first architecture, and careful content curation. It serves multiple user types (parents, clinicians, reviewers, admins) with distinct permissions and workflows.

## Essential Features

### Homepage & Welcome
- **Functionality**: Entry point that welcomes users, explains the platform's purpose, and provides quick navigation to main sections (Procedure Library, Reflection Notes, Birth Plan). Shows progress indicators for saved procedures, reflection notes, and birth plan creation status.
- **Purpose**: Orients new users to the platform's mission and provides returning users with a dashboard-style overview of their engagement
- **Trigger**: First view after completing onboarding; accessible via home icon in navigation
- **Progression**: Read welcome message → Review platform principles → Navigate to desired section via feature cards → Access quick start guide or disclaimer
- **Success criteria**: Clear value proposition visible above fold; feature cards display status badges (e.g., "3 saved," "Notes saved," "Plan created"); smooth transitions to any main section; responsive design with gradient background and card-based layout

### Procedure Library
- **Functionality**: Searchable, filterable catalog of 50+ maternal and newborn procedures, interventions, and therapies including:
  - **Birth Practices**: Breastfeeding (maternal and infant outcomes), immediate skin-to-skin contact (minimum 1 hour), rooming-in, physiologic birth practices, birth positions (upright, side-lying, hands-and-knees, squatting), water birth (water immersion for labor and delivery with evidence-based benefits and ACOG guidance), mother-baby connection for optimal neural development (responsive caregiving, attachment practices, early bonding experiences that shape infant brain architecture)
  - **Delivery Methods**: 
    - **Enhanced Cesarean Content**: Comprehensive coverage of cesarean delivery including emergent vs elective indications, absolute and relative risks compared to vaginal birth, detailed recovery implications (6-8 weeks vs 2-4 weeks), surgical risks with frequencies (infection 5-10%, hemorrhage 1-6%, blood clots 0.1-1%), future pregnancy risks (placenta previa, accreta), respiratory impacts on newborns, and implications for breastfeeding initiation
    - **VBAC Discussion**: Detailed Vaginal Birth After Cesarean content including candidacy criteria, 60-80% success rates, uterine rupture risk (0.5-1%), comparison of successful VBAC outcomes vs repeat cesarean, contraindications (classical incision, multiple previous cesareans, previous rupture), and facility requirements for safe VBAC
    - **Visual Outcome Comparisons**: Interactive comparison charts showing cesarean vs VBAC outcomes across maternal health (uterine rupture, infection, blood transfusion, recovery time), neonatal outcomes (respiratory distress, NICU admission, birth injury, breastfeeding success), and long-term considerations (placenta accreta, hysterectomy risk, adhesions) with frequency data and severity indicators
  - **Labor Interventions**:
    - **Induction of Labor**: Comprehensive coverage including medical vs elective indications, methods (prostaglandins, oxytocin, Foley catheter, membrane stripping), benefits (ARRIVE trial data showing 3% cesarean reduction at 39 weeks for first-time mothers), risks (failed induction 15-25%, hyperstimulation, longer labor), alternatives (expectant management with risks by gestational age), contraindications, and Bishop score considerations
  - **Pain Management & Regional Anesthesia**:
    - **Epidural Analgesia**: Complete evidence-based review of epidural for labor pain including effectiveness (80-100% pain reduction), placement procedure, benefits (rest during long labor, stress reduction), risks with frequencies (hypotension 20-30%, fever 15-25%, prolonged second stage, instrumental delivery rates with modern low-dose techniques), does NOT increase cesarean rate (high-quality evidence), rare complications (post-dural puncture headache 1-2%, severe neurological events <1 in 10,000)
    - **Spinal Anesthesia**: Single-dose spinal for cesarean delivery, rapid onset, complete pain relief, duration and limitations
    - **Combined Spinal-Epidural**: Hybrid technique offering rapid relief with continuous dosing capability ("walking epidural")
    - **Alternative Pain Management**: Structured comparison of IV opioids, non-pharmacological methods (movement, hydrotherapy, breathing, doula support) with effectiveness ratings and evidence quality
  - **Labor Support & Care Models**: 
    - **Continuous Labor Support**: Evidence for doula care, reduction in cesarean rates, improved satisfaction
    - **Midwife-Led Continuity Care Models**: Comprehensive comparison of midwife-led vs physician-led care showing reduced cesarean rates (24% vs 32%), lower instrumental delivery rates, increased spontaneous vaginal birth, higher breastfeeding rates, similar/improved maternal and perinatal outcomes for low-risk women, with structured evidence comparisons across settings (hospital, birth center, home birth)
    - **Birth Setting Comparisons**: Hospital-based care, birth center outcomes (6% cesarean rate), planned home birth with certified midwives (with transfer rates and safety data), collaborative care models
  - **Newborn Vaccines**: Hepatitis B (birth dose), RSV immunization, DTaP, MMR, Rotavirus, Pneumococcal, Influenza, Varicella, Hepatitis A, Meningococcal (ACWY and B), HPV - each with comprehensive benefits, known risks with frequency data sourced from clinical trials and post-marketing surveillance (including VAERS adverse event reporting data clearly distinguished from confirmed causal risks), contraindications, and citations to CDC/FDA/ACIP guidance, WHO recommendations, and peer-reviewed safety studies. **International Vaccine Schedule Comparisons**: Side-by-side comparison of US CDC childhood vaccine schedule (approximately 26-29 doses by age 6, including multiple-antigen combination vaccines) versus European schedules (which vary by country: UK ~23 doses, Germany ~24 doses, France ~23 doses, Nordic countries typically 13-16 doses with more selective recommendations). Comparison explains differences in public health philosophy, disease prevalence, healthcare system structure, and risk-benefit calculations that lead to varying international recommendations. Clearly states that both approaches are evidence-based within their respective contexts and neither schedule is inherently "better" - differences reflect local epidemiology, healthcare access patterns, and cultural values around medical intervention
  - **Maternal Vaccines**: Tdap during pregnancy, Flu shot during pregnancy
  - **Newborn Procedures**: Vitamin K, hearing screen, eye prophylaxis, glucose screening, circumcision, jaundice phototherapy
  - **Labor Interventions**: GBS antibiotics, delayed cord clamping, water birth
  - **Postpartum Therapies**: Herbal remedies with safety cautions (strength of evidence clearly labeled), probiotics (maternal and infant gut health evidence), vitamin D supplementation (maternal and infant guidance)
  - **Complementary Therapies**: Acupuncture, hypnobirthing, massage, aromatherapy (evidence-based with clear labels on evidence quality)
- **Purpose**: Provides comprehensive, balanced education on all major maternal and newborn care decisions with standardized Benefits/Risks/Alternatives/Evidence Level presentation and source transparency
- **Trigger**: User selects stage (prenatal/labor/postpartum), searches by name, or filters by urgency/category/intervention type/evidence level
- **Progression**: Browse categories → View procedure cards with summary → Click to full detail → Save for offline
- **Success criteria**: All procedures display Benefits/Risks/Alternatives with absolute risk numbers when available; plain-language summaries; last-reviewed dates; full citations; vaccine pages include comprehensive adverse reaction data with frequency from both clinical trials and post-marketing surveillance systems (VAERS, Vaccine Safety Datalink) with clear distinction between reported adverse events (correlation) and confirmed causal relationships (causation); international vaccine schedule comparison module shows side-by-side US vs European schedules with neutral explanation of differences in public health approach; postpartum therapy pages clearly label strength of evidence and safety considerations; cesarean content explains indications without blanket discouragement, emphasizes safety-first context; induction content presents both medical indications and elective options with ARRIVE trial evidence; pain management pages compare all modalities with effectiveness data

### Procedure Detail Pages
- **Functionality**: Four-quadrant layout showing Benefits, Risks (with frequency/severity), Alternatives, and "What if we wait?" sections; includes absolute risk numbers, visual risk charts, evidence citations, and contraindications. For complex decision comparisons (e.g., Cesarean vs VBAC), includes dedicated visual outcome comparison charts with interactive bar graphs showing side-by-side outcome data across multiple categories (maternal, neonatal, long-term) with severity indicators and contextual explanations.
- **Purpose**: Enables comprehension through clear, structured information that separates established evidence from uncertainties. Visual comparison charts make complex outcome data accessible and facilitate informed decision-making between equally valid options.
- **Trigger**: User clicks procedure from library or search results; visual comparison charts automatically display for designated comparison procedures
- **Progression**: Read overview → Toggle between quadrants → View visual outcome comparisons (when applicable) → Expand risk frequencies → View citations → Add to notes
- **Success criteria**: Each section displays plain-language summaries with at least 2 peer-reviewed citations; risk frequencies shown as "X in 1,000" format; urgency indicator visible; alternatives clearly labeled with equivalence status; visual comparison charts use color-coded bars to show relative magnitudes, display both absolute values and units, include severity badges (high/medium/low risk), provide contextual descriptions for each metric, and include disclaimers about individual variation

### Side-by-Side Comparison
- **Functionality**: Compare primary procedure against alternatives and watchful waiting (when appropriate) with aligned Benefits/Risks/Evidence columns
- **Purpose**: Supports voluntary, informed decision-making by presenting reasonable options without bias
- **Trigger**: User clicks "Compare Options" from procedure detail or selects multiple procedures
- **Progression**: Select procedure → Add alternative(s) → View side-by-side table → Adjust filters (severity, frequency) → Export comparison
- **Success criteria**: Up to 3 options compared simultaneously; evidence levels visible; non-equivalent alternatives clearly marked; comparison printable as PDF

### Reflection & Notes
- **Functionality**: Private note-taking space with reflection timer (15–60 min for non-urgent items), question checklist, and capacity prompts for postpartum users
- **Purpose**: Encourages voluntariness by providing time and space to process information without pressure
- **Trigger**: User clicks "Add to Notes" or "Start Reflection" from any procedure page
- **Progression**: Add questions → Set timer (optional) → Write reflections → Tag procedures → Export decision summary
- **Success criteria**: Notes persist offline; timer displays countdown; capacity prompts appear for postpartum stage users; "Request more time" script available

### Decision Summary Export
- **Functionality**: Generate PDF or text summary including procedures reviewed, questions asked, sources viewed, reflection notes, and voluntariness statement
- **Purpose**: Provides documentation for family discussions and clinician conversations
- **Trigger**: User clicks "Export Decision Summary" from Reflection page or Settings
- **Progression**: Select procedures to include → Review questions/notes → Choose format (PDF/text) → Download or share link
- **Success criteria**: Export includes all cited sources, timestamps, disclaimer text, and "I made this decision voluntarily" statement; generates in <3 seconds

### Birth Plan Generator
- **Functionality**: Comprehensive birth plan creation tool that references reviewed procedures and documents preferences for labor, delivery, newborn care, and postpartum. Includes template options (natural, medicated, cesarean) for quick start and secure sharing via unique links. Automatically creates version history with each significant change. Includes full management interface for shared links with revocation capability.
- **Purpose**: Creates a professional, evidence-based birth plan that healthcare providers can review and that documents informed decisions. Enables collaboration with partners and support persons through secure sharing with commenting functionality. Maintains historical record of changes over time.
- **Trigger**: User clicks "Create Birth Plan" from Settings or Reflection page
- **Progression**: Select template → Complete basic info → Set labor preferences → Set delivery preferences → Document procedure decisions → Set postpartum preferences → Preview → Export/Print/Share → Manage versions and comments
- **Success criteria**: Birth plan includes all procedure decisions with evidence references, generates printable formatted document, includes disclaimer and signature sections, allows for detailed notes and preferences across all birth stages. Share links are valid for 90 days, can be revoked at any time, track view counts, and support partner comments. Version history captures each change with timestamps and change notes.

### Birth Plan Sharing & Collaboration
- **Functionality**: Generate secure, unique links to share completed birth plans with partners, doulas, family members, or support persons. Recipients can view, download, print, and add comments or questions. Owner can manage all shared links, revoke access, and respond to comments from a unified interface.
- **Purpose**: Facilitates collaboration and ensures support persons are informed about birth preferences and evidence-based decisions. Enables two-way communication through questions and comments while maintaining owner control over access.
- **Trigger**: User clicks "Share with Partner or Support Person" from birth plan preview, or "Manage Shared Links" from Settings
- **Progression**: Enter recipient name (optional) → Add personal message (optional) → Generate link → Copy link or share via email → Recipient views plan and adds comments → Owner reviews comments and responds → Owner can revoke link access at any time
- **Success criteria**: Links expire after 90 days or can be manually revoked, display creation date and expiry warning, show personal message if provided, allow recipient to download/print birth plan and add comments/questions, track view counts and last viewed timestamps, require no authentication, support multiple simultaneous share links with individual management, distinguish between questions needing response and general comments, allow owner to mark questions as resolved

### Birth Plan Version History
- **Functionality**: Automatic version tracking for all birth plan changes with timestamps, change notes, and ability to view, compare, download, or restore any previous version. Creates new version on export, share, or significant edits.
- **Purpose**: Provides audit trail of decision evolution, allows recovery from unwanted changes, enables comparison of preferences over time
- **Trigger**: Automatic on save/export, or user clicks "View Version History" from birth plan preview or Settings
- **Progression**: View chronological list of versions → Select version to preview → Compare changes → Download historical version → Restore previous version (creates new version with restored content)
- **Success criteria**: Each version includes full birth plan document, creation timestamp, creator name, change notes, and link to previous version; versions displayed in reverse chronological order with "current" badge; restore function creates new version rather than destructive revert; versions persist even after share link expiration

### Shared Link Management Dashboard
- **Functionality**: Centralized interface showing all birth plan share links with status (active/revoked/expired), view counts, last viewed timestamps, and bulk management actions. Includes comment overview showing unread questions and total comments per link.
- **Purpose**: Gives owner full control and visibility into who has access to birth plan and how they're engaging with it
- **Trigger**: User clicks "Manage Shared Links" from birth plan preview or Settings
- **Progression**: View all links grouped by status → See view metrics per link → Revoke active links → Delete old/revoked links → Navigate to comments for specific link
- **Success criteria**: Links grouped into Active/Revoked/Expired sections, display recipient name, creation date, expiry date, view count, last viewed date, and comment count; one-click revoke with confirmation dialog; permanent delete for revoked/expired links with warning about deleting associated comments; filter/search by recipient name

### Partner Comments & Questions
- **Functionality**: Recipients of shared birth plans can leave comments and mark them as questions requiring response. Owner receives notification of new comments, can respond directly, and mark questions as resolved. Comments are threaded by share link.
- **Purpose**: Enables asynchronous discussion of birth plan preferences between parents and support persons, captures questions for healthcare provider discussions
- **Trigger**: Recipient views shared birth plan and clicks Comments tab; Owner clicks "View Comments" from Settings or shared link management
- **Progression**: Recipient adds name (optional email) → Writes comment → Marks as question if needed → Owner views all comments → Owner responds → Owner marks questions as resolved
- **Success criteria**: Comments display commenter name, timestamp, and question badge; questions grouped separately from general comments; resolved questions remain visible but dimmed; owner can view all comments across all share links in unified interface; comment counts display on share link cards; supports basic formatting (line breaks)

### Evidence Citations & Sources
- **Functionality**: Every claim linked to reputable guideline or peer-reviewed source; full bibliography with links, publication dates, and evidence levels (Systematic Review / RCT / Expert Consensus / etc.)
- **Purpose**: Maintains trustworthiness and allows verification of all content
- **Trigger**: User clicks citation number or "View All Sources" link
- **Progression**: Click citation → See source card with title, authors, date, link → Filter sources by type → Report concern
- **Success criteria**: All benefits/risks linked to at least one source; sources display evidence level; external links open correctly; "Report a concern" triggers reviewer notification

### Enhanced Vaccine Informed Consent
- **Functionality**: Comprehensive vaccine information sections that display complete transparency data for full informed consent including: (1) Complete ingredient lists from FDA package inserts with amounts, purposes, and safety profiles; (2) VAERS (Vaccine Adverse Event Reporting System) data showing all reported adverse events by category (total reports, serious events, deaths, disabilities, hospitalizations, ER visits) with clear disclaimer that reports indicate temporal correlation, not proven causation; (3) VICP (Vaccine Injury Compensation Program) data showing total compensated cases, dollar amounts awarded, and most common compensated injuries; (4) International schedule comparisons showing side-by-side vaccine schedules from US, UK, Sweden, Denmark, Japan, Iceland and other countries with dose counts and policy rationales; (5) Alternative schedule approaches including delayed starts, selective vaccination, and decline options with evidence-based discussion of each approach
- **Purpose**: Provides complete informed consent transparency about vaccine ingredients, reported adverse events, legal compensation history, and international variations in public health approaches. Empowers parents to make truly informed decisions by disclosing all available data while clearly distinguishing between correlation and causation, between reported events and confirmed risks, and between different evidence levels. Respects parental autonomy by presenting alternative approaches without coercion.
- **Trigger**: User views any vaccination procedure detail page; vaccine-specific data displays in expandable accordion sections
- **Progression**: View vaccine procedure → Scroll to vaccine information section → Expand ingredient list to see all components with safety profiles → Expand VAERS data to see reported events with context about passive reporting → Expand VICP data to see compensation history → Expand international comparison to see varying schedules → Expand alternative schedules to see delayed, selective, or decline options → All sections link to official sources (FDA, CDC, HRSA, VAERS database)
- **Success criteria**: Every vaccination procedure includes complete ingredient list from FDA package insert with amounts and purposes; VAERS data section displays prominently with clear educational disclaimer explaining passive reporting and distinction between temporal correlation and proven causation; VICP section shows historical compensation data with injury categories; international comparison shows at least 5-6 countries with different approaches and neutral explanation of rationale differences; alternative schedule section presents delayed, selective, and decline options with honest discussion of risks/benefits of each approach; all data sources linked to official government databases; last-updated dates visible; medical disclaimers about causation vs correlation clearly stated; tone remains educational and neutral without advocacy in either direction

### Multilingual Support
- **Functionality**: Interface and content available in multiple languages with professional medical translation
- **Purpose**: Ensures equitable access for non-English-speaking families
- **Trigger**: User selects language from Settings or onboarding
- **Progression**: Select language → All UI and content translates → Citations remain in original language with translation note
- **Success criteria**: At least English + Spanish for MVP; language persists across sessions; medical terms consistently translated

### Clinical Reviewer Console
- **Functionality**: Admin interface for Clinical Reviewers and Admins to approve content updates, view audit trails, manage citations, set review schedules, and handle reported concerns
- **Purpose**: Maintains content accuracy and safety through versioned, reviewed updates
- **Trigger**: Reviewer/Admin logs in with elevated permissions
- **Progression**: View pending updates → Review proposed changes with citations → Approve/reject with notes → Schedule next review → Publish
- **Success criteria**: All content changes logged with reviewer name, timestamp, and rationale; version history displays previous values; pending changes visible only to reviewers until approved

### Glossary & Educational Resources
- **Functionality**: Plain-language definitions of medical terms, short neutral explainer videos, visual risk charts tutorial
- **Purpose**: Improves comprehension for users unfamiliar with medical terminology
- **Trigger**: User clicks underlined term or "Glossary" from main menu
- **Progression**: Search or browse terms → Read definition → View related procedures → Watch explainer video
- **Success criteria**: 50+ key terms defined; videos <3 min each; definitions cite sources where needed

### Onboarding & Stage Selection
- **Functionality**: Brief intro to app purpose, consent principles explanation, stage selection (prenatal/labor/postpartum), disclaimers, and capacity acknowledgment for postpartum users
- **Purpose**: Sets expectations and tailors content to user's current decision context
- **Trigger**: First launch or stage change
- **Progression**: Welcome screen → "This is not medical advice" → Select stage → (If postpartum) Capacity acknowledgment → Proceed to library
- **Success criteria**: Disclaimer clearly visible; stage selection filters relevant procedures; postpartum users see "Request more time" and "Bring partner in" options

## Edge Case Handling

- **Empty search results**: Show "No procedures found. Try different keywords or browse categories" with category links
- **Missing citation data**: Display "Citation pending review" with reviewer notification; content flagged for update
- **Offline access**: Saved procedures cached with "Last synced" timestamp; edits queued for sync; "You're offline" banner visible
- **Conflicting evidence**: Present range of findings with dates and evidence levels; state "Evidence is mixed" explicitly
- **No reasonable alternatives**: State "No medically equivalent alternative is available at this time" with citations
- **Urgent vs elective confusion**: Prominent urgency badge (Emergency / Urgent / Routine / Elective); "What if we wait?" section explains time sensitivity
- **Postpartum capacity concerns**: Periodic prompts to take breaks, involve partner, or delay non-urgent decisions; "Are you feeling able to focus?" checkpoints
- **Data export failure**: Retry mechanism with offline fallback; allow email export as backup
- **Outdated content**: Display "Review overdue" warning; notify reviewers; flag for priority update
- **Role permission errors**: Clear "You don't have permission" messages with contact info for access requests

## Design Direction

The design should evoke **trust, clarity, and calm reassurance**. Parents are navigating a vulnerable, high-stakes period—the interface must feel professional yet approachable, serious without being clinical or cold. Visual design should communicate evidence-based reliability (think medical journal meets thoughtful digital product) while remaining warm and human. Use generous whitespace to reduce cognitive load, clear typographic hierarchy to guide comprehension, and subtle color cues to differentiate evidence types without alarm.

## Color Selection

A **professional medical palette with warm human touches**: deep trustworthy blues paired with soft neutrals and organic earth tones to balance clinical authority with empathy.

- **Primary Color**: Deep Professional Blue `oklch(0.45 0.15 250)` - Conveys trust, medical credibility, and calm authority; used for primary actions and headers
- **Secondary Colors**: 
  - Warm Neutral `oklch(0.92 0.01 80)` - Soft background that reduces eye strain and feels approachable
  - Muted Sage `oklch(0.75 0.06 150)` - Gentle accent for evidence-based content sections
- **Accent Color**: Warm Coral `oklch(0.70 0.14 30)` - Attention for important actions (export, save, question prompts) without alarm
- **Supporting UI Colors**:
  - Evidence Green `oklch(0.65 0.12 160)` - For established evidence and positive outcomes
  - Caution Amber `oklch(0.75 0.12 70)` - For areas of uncertainty or mixed evidence
  - Risk Red `oklch(0.60 0.18 25)` - For risks and contraindications (used sparingly, with frequency context)
- **Foreground/Background Pairings**:
  - Primary Blue: White text `oklch(1 0 0)` - Ratio 8.2:1 ✓
  - Background Neutral: Dark Slate `oklch(0.25 0.02 250)` - Ratio 12.1:1 ✓
  - Evidence Green: White text `oklch(1 0 0)` - Ratio 5.8:1 ✓
  - Accent Coral: White text `oklch(1 0 0)` - Ratio 4.9:1 ✓
  - Caution Amber: Dark Slate `oklch(0.25 0.02 250)` - Ratio 9.8:1 ✓

## Font Selection

Typography should convey **medical precision, readability, and approachability**—clear enough for fatigued postpartum parents to scan, authoritative enough to signal evidence-based content.

- **Primary Font**: Source Serif 4 (serif for body text and procedure content) - Readable, warm, slightly editorial feel that balances authority with approachability
- **Secondary Font**: Inter (sans-serif for UI, labels, navigation) - Clean, neutral, highly legible for interface elements

**Typographic Hierarchy**:
- **H1 (Page Titles)**: Inter SemiBold / 32px / tight letter-spacing (-0.02em) / line-height 1.2
- **H2 (Section Headers)**: Inter SemiBold / 24px / normal spacing / line-height 1.3
- **H3 (Subsections)**: Inter Medium / 18px / normal spacing / line-height 1.4
- **Body (Content)**: Source Serif 4 Regular / 16px / normal spacing / line-height 1.6
- **Small (Citations, Metadata)**: Inter Regular / 14px / normal spacing / line-height 1.5
- **Labels (Form, UI)**: Inter Medium / 14px / wide spacing (0.01em) / line-height 1.4
- **Data (Risk Frequencies)**: Inter SemiBold / 16px / tabular-nums / line-height 1.5

## Animations

Animations should be **subtle, purposeful, and never delay access to critical information**. Use micro-interactions to provide feedback and guide attention, while maintaining fast, confident transitions for navigation.

- **Page transitions**: 250ms ease-out fade with slight vertical shift (8px) to indicate forward/back movement
- **Accordion expand/collapse**: 200ms ease for content reveal; focus shifts to newly visible content
- **Citation pop-ups**: 150ms scale + fade (0.95 → 1) with subtle shadow to feel like a floating card
- **Save/export confirmations**: 300ms gentle bounce on success icon + toast notification
- **Reflection timer**: Smooth progress ring animation; no sudden movements or pressure-inducing countdowns
- **Risk chart reveals**: 400ms staggered fade-in for bar chart segments to aid comprehension
- **Offline sync indicator**: Pulsing subtle glow (2s cycle) for sync status without distraction

## Component Selection

**Components**: 
- **Accordion** (shadcn) - For Benefits/Risks/Alternatives sections; allows focused reading with expandable detail
- **Card** (shadcn) - Procedure library items, citation cards, evidence blocks; add subtle shadow on hover for depth
- **Tabs** (shadcn) - For Compare view, switching between different procedures or alternatives
- **Dialog** (shadcn) - Citation details, capacity prompts, "Request more time" scripts
- **Badge** (shadcn) - Urgency levels (Emergency/Urgent/Routine/Elective), evidence levels (Systematic Review/RCT/etc.)
- **Checkbox** (shadcn) - Question checklists, reflection prompts, export selections
- **Button** (shadcn) - Primary (Coral accent), Secondary (Blue), Outline (neutral) for hierarchy; generous touch targets (44px min)
- **Textarea** (shadcn) - Reflection notes with autosave indicator
- **Progress** (shadcn) - Reflection timer visual, content loading states
- **Alert** (shadcn) - Disclaimers, capacity prompts, offline warnings; use cautiously to avoid alarm
- **Select/Dropdown** (shadcn) - Language selection, stage filtering, sort options
- **Separator** (shadcn) - Visual breaks between sections for clarity

**Customizations**:
- Custom **Risk Frequency Chart** component using D3 - Horizontal bar charts with "X in 1,000" annotations
- Custom **Evidence Citation Inline Badge** - Superscript numbers that expand on click
- Custom **Comparison Table** - Three-column grid with sticky headers and aligned risk/benefit rows
- Custom **Reflection Timer Card** - Circular progress with pause/extend controls
- Custom **Decision Summary Preview** - Formatted document preview before export

**States**:
- Buttons: Default → Hover (slight scale 1.02 + shadow deepen) → Active (scale 0.98) → Disabled (50% opacity, cursor not-allowed)
- Inputs: Default border (muted) → Focus (blue ring, 2px) → Filled (subtle green tint) → Error (red border + helper text)
- Cards: Default (subtle shadow) → Hover (shadow + scale 1.01) → Active/Selected (blue border + background tint)
- Accordions: Collapsed (chevron down) → Expanded (chevron up, smooth height transition)

**Icon Selection** (Phosphor Icons):
- Procedures: `Syringe`, `Heartbeat`, `Baby`, `FirstAid`, `Ear`, `Eye`
- Actions: `Download`, `Share`, `Printer`, `BookmarkSimple`, `Timer`, `Question`
- Evidence: `Seal`, `BookOpen`, `MagnifyingGlass`, `CheckCircle`, `WarningCircle`
- Navigation: `CaretLeft`, `CaretRight`, `List`, `X`, `FunnelSimple`
- Status: `Clock`, `CheckCircle`, `WarningOctagon`, `Info`

**Spacing**:
- Container max-width: 1200px (procedure detail), 900px (library list), centered with px-4 sm:px-6 lg:px-8
- Section spacing: gap-8 (32px between major sections), gap-4 (16px within sections)
- Card padding: p-6 (24px all sides), p-4 for compact cards
- Button padding: px-6 py-3 for primary actions, px-4 py-2 for secondary
- Grid gap: gap-6 for procedure cards, gap-4 for compact lists

**Desktop Navigation**:
- Persistent left sidebar (64px collapsed / 256-288px expanded) with smooth 300ms transitions
- Collapsible sidebar toggle button positioned in header, persists state in local storage for user preference
- Collapsed state: Icon-only navigation with tooltips on hover (300ms delay) showing full label and description
- Expanded state: Full navigation labels with icons, descriptions, and notification badges
- Active route indicator: Vertical accent bar on left edge of active item + filled icon weight + tinted background
- Responsive content area adjusts margin-left smoothly with sidebar state changes
- Sidebar includes app branding in header, main navigation items, and footer with last-updated metadata

**Mobile**:
- Procedure library: Single column cards, full-width touch targets, sticky filter bar at top
- Procedure detail: Vertical stack (no side-by-side quadrants), expandable sections, sticky action bar at bottom
- Comparison: Horizontal scroll with snap points for each option column
- Reflection notes: Floating "Save" button, simplified timer UI
- Navigation: Bottom tab bar for main sections (Library, Reflection, Settings) - sidebar hidden on mobile
- Typography: Maintain 16px body for readability, reduce heading sizes by 20%, increase line-height to 1.7 for body
