# Technical CSS Selector Analysis: 764px → 469px

## Critical CSS Selectors with Exact Issues

### 1. `.samuraiImageContainer` - MAJOR OVERFLOW RISK

**Current CSS:**
```css
/* Desktop/Default */
.samuraiImageContainer {
  position: absolute;
  width: 80%;         /* 611.2px at 764px viewport */
  height: 80vh;       /* Viewport dependent */
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
}

/* Tablet (max-width: 1023px, min-width: 769px) */
@media (max-width: 1023px) and (min-width: 769px) {
  .samuraiImageContainer {
    width: 85%;       /* 649.4px at 764px */
    height: 75vh;
  }
}
```

**Pixel Analysis:**
- **764px viewport**: 85% = 649.4px width
- **714px viewport**: 85% = 606.9px width  
- **664px viewport**: 85% = 564.4px width
- **614px viewport**: 85% = 521.9px width
- **564px viewport**: 85% = 479.4px width
- **514px viewport**: 85% = 436.9px width
- **469px viewport**: 85% = 398.65px width

**Issue**: The image container remains at 85% width throughout the range, but the absolute positioning with `translateX(-50%)` can cause edge overflow when combined with the image's actual dimensions.

### 2. `.creativeCoders` - DEFINITE HORIZONTAL OVERFLOW

**Current CSS:**
```css
.creativeCoders {
  position: fixed;
  width: 240px;       /* Fixed width - PROBLEM */
  right: 2rem;        /* 32px at default font size */
  bottom: 0rem;
}

/* Tablet adjustment (max-width: 1023px, min-width: 769px) */
@media (max-width: 1023px) and (min-width: 769px) {
  .creativeCoders {
    width: 220px;     /* Still fixed - PROBLEM */
    padding: 1rem 1.5rem;
  }
}
```

**Critical Issue Analysis:**
- **Total right-side occupation**: 220px (width) + 32px (right margin) = **252px**
- **Viewport impact**:
  - 764px: 252px / 764px = **33% of viewport width**
  - 714px: 252px / 714px = **35.3% of viewport width**  
  - 664px: 252px / 664px = **38% of viewport width**
  - 614px: 252px / 614px = **41% of viewport width**
  - 564px: 252px / 564px = **44.7% of viewport width**
  - 514px: 252px / 514px = **49% of viewport width**
  - 469px: 252px / 469px = **53.7% of viewport width**

**CRITICAL**: At 469px, the creative coders box occupies more than half the viewport width!

### 3. `.terminalText` - PROGRESSIVE SPACE REDUCTION

**Current CSS:**
```css
.terminalText {
  position: fixed;
  left: 2rem;         /* 32px */
  bottom: 1rem;
  max-width: undefined; /* No max-width set at this breakpoint */
}

.terminalText p {
  white-space: nowrap;  /* FORCES horizontal overflow */
  display: block;
}
```

**Space Calculation:**
- **Available width for terminal text**:
  - 764px: 764 - 32 (left) - 252 (creative coders) = **480px available**
  - 714px: 714 - 32 - 252 = **430px available** 
  - 664px: 664 - 32 - 252 = **380px available**
  - 614px: 614 - 32 - 252 = **330px available**
  - 564px: 564 - 32 - 252 = **280px available** (CRITICAL)
  - 514px: 514 - 32 - 252 = **230px available** (SEVERE)
  - 469px: 469 - 32 - 252 = **185px available** (BROKEN)

**Content Analysis:**
- Terminal text lines like "> Loading **Projects**..." are approximately 180-200px wide
- At 564px and below, text will definitely overflow horizontally

### 4. `.taglineContainer` - OVERLAP POTENTIAL

**From Tagline.module.css:**
```css
.taglineContainer {
  position: absolute;
  right: 2rem;        /* Same as creative coders - COLLISION RISK */
  top: 1rem;
}

/* Only changes at 768px */
@media (max-width: 768px) {
  .taglineContainer {
    right: 1rem;
  }
}
```

**Issue**: Both tagline and creative coders use `right: 2rem` positioning, creating potential for overlap or visual collision.

### 5. `.mainText` - INSUFFICIENT CONTENT SPACE

**Current CSS:**
```css
.mainText {
  margin-top: 8rem;
  margin-left: 2rem;   /* 32px */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Tablet (max-width: 1023px, min-width: 769px) */
@media (max-width: 1023px) and (min-width: 769px) {
  .mainText {
    margin-top: 6rem;
    margin-left: 1.5rem; /* 24px */
  }
}
```

**Content Space Analysis:**
- **Available width for main content**:
  - 764px: 764 - 24 (left margin) - 252 (creative coders) = **488px**
  - 664px: 664 - 24 - 252 = **388px** 
  - 564px: 564 - 24 - 252 = **288px** (TOO NARROW)
  - 469px: 469 - 24 - 252 = **193px** (COMPLETELY BROKEN)

## Exact Breakpoint Where Issues Occur

### First Signs of Cramping: **~650px**
- Creative coders box becomes visually prominent (38%+ of width)
- Terminal text space reduces to ~380px

### Definite Problems Start: **~580px** 
- Creative coders box occupies 43%+ of viewport
- Terminal text space drops to ~280px (borderline for content)

### Severe Layout Breakdown: **~520px**
- Creative coders box takes nearly 50% of viewport
- Terminal text space drops to ~230px (definite overflow)
- Main content space severely constrained

### Complete Failure: **~480px-469px**
- Layout completely breaks down
- Multiple elements competing for space
- Horizontal scrolling inevitable

## CSS Selectors Requiring Immediate Attention

**Priority 1 (Causes Horizontal Overflow):**
1. `.creativeCoders` - width and right positioning
2. `.terminalText p` - white-space: nowrap
3. `.samuraiImageContainer` - width percentage

**Priority 2 (Causes Visual Conflicts):**
1. `.taglineContainer` - right positioning overlap
2. `.mainText` - insufficient space allocation
3. `.eleganceText` - bottom positioning conflicts

**Priority 3 (Optimization):**
1. `.logo` - positioning refinements
2. Container padding/margins throughout

---

*This analysis provides exact pixel calculations and identifies the specific viewport widths where each element begins to cause layout problems.*
