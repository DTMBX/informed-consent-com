# Informed Consent Companion

A cross-platform educational tool that delivers balanced, evidence-based, non-coercive information about newborn and maternal medical procedures, helping families understand benefits, risks, uncertainties, and reasonable alternatives before making decisions.

**Experience Qualities**:
1. **Trustworthy** - Every claim is cited, every statistic sourced, and every update logged with transparent review dates
2. **Empowering** - Parents feel informed and capable of asking meaningful questions without pressure or judgment
3. **Calming** - Design and tone reduce anxiety while promoting thoughtful decision-making

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This application requires sophisticated information architecture, role-based access control, content versioning with audit trails, multi-view comparison interfaces, data export workflows, offline-first architecture, and careful content curation. It serves multiple user types (parents, clinicians, reviewers, admins) with distinct permissions and workflows.

## Essential Features

### Procedure Library
- **Functionality**: Searchable, filterable catalog of 10+ common newborn and maternal procedures (vaccinations, vitamin K, hearing screen, C-section care, etc.) with standardized fact sheets
- **Purpose**: Provides centralized, balanced education on medical interventions offered during pregnancy, birth, and postpartum
- **Trigger**: User selects stage (prenatal/labor/postpartum), searches by name, or filters by urgency/category
- **Progression**: Browse categories → View procedure cards with summary → Click to full detail → Save for offline
- **Success criteria**: All procedures display concise summaries, last-reviewed dates, urgency level, and citation count; filtering returns relevant results in <500ms

### Procedure Detail Pages
- **Functionality**: Four-quadrant layout showing Benefits, Risks (with frequency/severity), Alternatives, and "What if we wait?" sections; includes absolute risk numbers, visual risk charts, evidence citations, and contraindications
- **Purpose**: Enables comprehension through clear, structured information that separates established evidence from uncertainties
- **Trigger**: User clicks procedure from library or search results
- **Progression**: Read overview → Toggle between quadrants → Expand risk frequencies → View citations → Add to notes
- **Success criteria**: Each section displays plain-language summaries with at least 2 peer-reviewed citations; risk frequencies shown as "X in 1,000" format; urgency indicator visible; alternatives clearly labeled with equivalence status

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

### Evidence Citations & Sources
- **Functionality**: Every claim linked to reputable guideline or peer-reviewed source; full bibliography with links, publication dates, and evidence levels (Systematic Review / RCT / Expert Consensus / etc.)
- **Purpose**: Maintains trustworthiness and allows verification of all content
- **Trigger**: User clicks citation number or "View All Sources" link
- **Progression**: Click citation → See source card with title, authors, date, link → Filter sources by type → Report concern
- **Success criteria**: All benefits/risks linked to at least one source; sources display evidence level; external links open correctly; "Report a concern" triggers reviewer notification

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

**Mobile**:
- Procedure library: Single column cards, full-width touch targets, sticky filter bar at top
- Procedure detail: Vertical stack (no side-by-side quadrants), expandable sections, sticky action bar at bottom
- Comparison: Horizontal scroll with snap points for each option column
- Reflection notes: Floating "Save" button, simplified timer UI
- Navigation: Bottom tab bar for main sections (Library, Reflection, Settings)
- Typography: Maintain 16px body for readability, reduce heading sizes by 20%, increase line-height to 1.7 for body
