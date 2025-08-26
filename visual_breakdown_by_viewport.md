# Visual Layout Breakdown: 764px → 469px

## Expected Behavior at Each Viewport Width

### 764px - Baseline (Tablet Breakpoint)
**Status**: ⚠️ First signs of issues

**Layout Behavior:**
- **Samurai Image**: 85% width (649px) - fits but fills most of screen
- **Creative Coders**: 220px + 32px margin = 252px (33% of viewport)
- **Terminal Text**: ~480px available width - should display correctly
- **Main Text**: ~488px available - adequate space
- **Tagline**: Right-aligned at 2rem - potential close proximity to creative coders

**Issues Expected:**
- Layout feels slightly cramped but functional
- Creative coders box becomes visually prominent
- Samurai image dominates center

---

### 714px - First Compression
**Status**: ⚠️ Mild cramping

**Layout Behavior:**  
- **Samurai Image**: 85% width (607px) - still large but more manageable
- **Creative Coders**: 252px now 35.3% of viewport - more prominent
- **Terminal Text**: ~430px available - still readable but tighter
- **Main Text**: ~438px available - noticeable compression

**Issues Expected:**
- Elements feel closer together
- Reading experience starts to degrade
- Creative coders box more visually intrusive

---

### 664px - Moderate Issues Begin
**Status**: 🚨 Problems starting

**Layout Behavior:**
- **Samurai Image**: 85% width (564px) - reasonable size
- **Creative Coders**: 252px = 38% of viewport - **visually dominating**
- **Terminal Text**: ~380px available - **borderline cramped**
- **Main Text**: ~388px available - **compressed reading experience**
- **Tagline/Creative Coders**: Potential visual collision area

**Issues Expected:**
- **FIRST MAJOR ISSUE**: Layout balance breaks down
- Creative coders box dominates right side
- Text elements compete for limited space
- User experience degrades noticeably

---

### 614px - Serious Problems
**Status**: 🚨 Significant issues

**Layout Behavior:**
- **Samurai Image**: 85% width (522px) - appropriate but context cramped  
- **Creative Coders**: 252px = 41% of viewport - **severely dominant**
- **Terminal Text**: ~330px available - **definitely cramped**
- **Main Text**: ~338px available - **poor reading experience**

**Issues Expected:**
- **Layout hierarchy completely broken**
- Creative coders box overwhelms the interface
- Terminal text may start showing awkward line breaks
- Main heading may appear squeezed

---

### 564px - Critical Breakdown
**Status**: 🔥 Critical issues

**Layout Behavior:**
- **Samurai Image**: 85% width (479px) - still visible but overwhelmed by UI
- **Creative Coders**: 252px = 44.7% of viewport - **taking nearly half screen**
- **Terminal Text**: ~280px available - **OVERFLOW RISK HIGH**
- **Main Text**: ~288px available - **severely constrained**

**Issues Expected:**
- **CRITICAL**: Horizontal scrolling may begin
- Terminal text lines "> Loading **Projects**..." (~200px) barely fit
- Creative coders box completely dominates interface
- Reading becomes difficult
- Layout appears broken to users

---

### 514px - Severe Breakdown  
**Status**: 🔥 Severe layout failure

**Layout Behavior:**
- **Samurai Image**: 85% width (437px) - squeezed but still present
- **Creative Coders**: 252px = 49% of viewport - **HALF THE SCREEN**
- **Terminal Text**: ~230px available - **DEFINITE OVERFLOW**
- **Main Text**: ~238px available - **barely functional**

**Issues Expected:**
- **DEFINITE horizontal scrolling**
- Terminal text will overflow: lines are ~180-200px, available space ~230px
- Creative coders box blocks half the interface
- Main text extremely cramped
- User experience severely degraded

---

### 469px - Complete Failure
**Status**: 💥 Layout completely broken

**Layout Behavior:**
- **Samurai Image**: 85% width (399px) - small but UI elements overwhelm
- **Creative Coders**: 252px = 53.7% of viewport - **MORE THAN HALF SCREEN**
- **Terminal Text**: ~185px available - **SEVERE OVERFLOW**
- **Main Text**: ~193px available - **COMPLETELY BROKEN**
- **Tagline**: Potentially overlapping or off-screen

**Issues Expected:**
- **COMPLETE LAYOUT BREAKDOWN**
- Horizontal scrolling definitely present
- Terminal text severely overflowing (needs ~200px, has ~185px)
- Creative coders box dominates more than half the screen
- Main text unreadable (193px for centered content)
- Multiple UI elements competing for tiny spaces
- Website appears completely broken

---

## Summary of CSS Selectors Causing Each Issue

### Horizontal Overflow Causes:
1. **`.creativeCoders`** - Fixed 220px width + 32px margin
2. **`.terminalText p`** - `white-space: nowrap` with no max-width
3. **`.samuraiImageContainer`** - 85% width without bounds checking

### Visual Hierarchy Breakdown:
1. **`.creativeCoders`** - Dominates interface with fixed positioning
2. **`.mainText`** - Insufficient space allocation due to other fixed elements
3. **`.taglineContainer`** - Right positioning conflicts

### Content Readability Issues:
1. **`.terminalText`** - No responsive text handling
2. **`.mainText h1, .mainText p`** - No space-aware sizing
3. **Overall container spacing** - No intermediate breakpoint handling

## Required Screenshots/Annotations:

For DevTools testing, focus on these exact measurements at each viewport:

1. **Creative coders box width** + right margin total
2. **Terminal text available space** vs actual content width  
3. **Horizontal scroll appearance** (usually around 514px)
4. **Element overlap** between tagline and creative coders
5. **Samurai image cropping/overflow** behavior
6. **Main text compression** and readability

---

*This breakdown provides exact expectations for manual testing in Chrome/Edge DevTools, identifying specific UI elements and their failure points at each viewport width.*
