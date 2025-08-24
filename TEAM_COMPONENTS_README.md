# Interactive Team Section - Component Documentation

## Overview

The interactive team section provides a modern, expandable card interface for displaying team member information. Each team member is displayed as a card that can be clicked to reveal detailed information including biography, skills, stats, and social links.

## ✅ Features Implemented

- ✅ **Expandable team member cards** with smooth animations
- ✅ **Individual expand/collapse state** - multiple cards can be open simultaneously
- ✅ **Auto-scroll functionality** - automatically scrolls to expanded content
- ✅ **Responsive design** - works on mobile, tablet, and desktop
- ✅ **Smooth animations** using Framer Motion
- ✅ **Accessible design** with proper ARIA labels and keyboard navigation
- ✅ **Modern hover effects** with glassmorphism and subtle gradients
- ✅ **Social media links** with proper external link handling
- ✅ **Collapse All button** when multiple cards are open
- ✅ **TypeScript support** with full type safety

## Component Architecture

```
src/components/team/
├── TeamSection.tsx     # Main container component
├── TeamCard.tsx        # Individual team member card
├── ExpandedPanel.tsx   # Detailed info panel that slides down
└── index.ts           # Export barrel file
```

## Component Usage

### TeamSection (Main Component)

```tsx
import { TeamSection } from '@/components/team'

function About() {
  return (
    <div className="container">
      <TeamSection />
    </div>
  )
}
```

**Props:** None - the component automatically fetches team data from `@/data/team`

**Features:**
- Manages expand/collapse state for all team members
- Renders grid of team cards with staggered animations
- Provides "Collapse All" button when multiple cards are expanded
- Fully self-contained with no external state dependencies

### TeamCard Component

```tsx
import TeamCard from '@/components/team/TeamCard'

<TeamCard 
  member={teamMember}
  isExpanded={boolean}
  onToggle={() => void}
/>
```

**Props:**
- `member: TeamMember` - Team member data object
- `isExpanded: boolean` - Whether the card is currently expanded
- `onToggle: () => void` - Callback when expand/collapse button is clicked

**Features:**
- Profile image with hover effects
- Member name, title, and short bio
- Rotating arrow icon (0° → 180° on expand)
- Auto-scroll to card when expanded
- Glassmorphism design with hover states
- Progress indicator at bottom when expanded

### ExpandedPanel Component

```tsx
import ExpandedPanel from '@/components/team/ExpandedPanel'

<ExpandedPanel 
  member={teamMember}
  isVisible={boolean}
/>
```

**Props:**
- `member: TeamMember` - Team member data object  
- `isVisible: boolean` - Controls visibility and animations

**Features:**
- Larger profile image
- Full biography text
- Skills with hover effects
- Statistics with emojis
- Fun facts list
- Social media links with brand colors
- Slide-down/fade animation
- Auto-scroll when panel opens

## Data Structure

The components expect team member data in the following format:

```typescript
interface TeamMember {
  id: string;              // Unique identifier
  name: string;            // Display name
  title: string;           // Job title/tagline
  role: string;            // Detailed role description
  bio: string;             // Short biography
  fullBio: string;         // Extended biography for expanded panel
  avatar: string;          // Path to profile image
  skills: string[];        // Array of skill names
  funFacts: string[];      // Array of fun facts
  stats: {                 // Statistics to display
    label: string;
    value: string;
    emoji: string;
  }[];
  socials: {              // Social media links
    label: string;        // Display name
    href: string;         // Link URL
    icon: LucideIcon;     // Icon component from lucide-react
    color: string;        // Hex color for hover effects
  }[];
}
```

## Adding New Team Members

1. **Update team data** in `/src/data/team.ts`:

```typescript
export const teamMembers: Record<string, TeamMember> = {
  // ... existing members
  newMember: {
    id: 'newMember',
    name: 'NEW MEMBER',
    title: 'The Creative Mind',
    role: 'UI/UX Designer',
    bio: 'Creates beautiful user experiences.',
    fullBio: 'Extended biography here...',
    avatar: '/images/newmember.png',
    skills: ['Figma', 'Sketch', 'Adobe XD'],
    funFacts: ['Loves coffee', 'Night owl'],
    stats: [
      { label: 'Designs', value: '50+', emoji: '🎨' }
    ],
    socials: [
      {
        label: 'Portfolio',
        href: 'https://portfolio.com',
        icon: Globe,
        color: '#A10000'
      }
    ]
  }
}
```

2. **Add profile image** to `/public/images/newmember.png`

3. The new member will automatically appear in the team section!

## Styling Customization

The components use Tailwind CSS classes and can be customized by:

1. **Modifying color schemes** - Update red-based colors (red-500, red-400, etc.)
2. **Adjusting animations** - Modify Framer Motion variants
3. **Changing glassmorphism effects** - Update backdrop-blur and opacity values
4. **Responsive breakpoints** - Adjust grid layouts and text sizes

## Accessibility Features

- ✅ **Keyboard navigation** - All interactive elements are focusable
- ✅ **Screen reader support** - Proper ARIA labels and semantic HTML
- ✅ **Focus indicators** - Visible focus rings on interactive elements
- ✅ **Reduced motion** - Respects user's motion preferences
- ✅ **Color contrast** - WCAG compliant color combinations
- ✅ **Alternative text** - Images have descriptive alt attributes

## Performance Optimizations

- ✅ **Lazy loading** - Next.js Image component with automatic optimization
- ✅ **Hardware acceleration** - CSS transforms use GPU acceleration  
- ✅ **Efficient re-renders** - State managed at component level
- ✅ **Bundle optimization** - Tree-shakable imports
- ✅ **Animation performance** - Uses transform and opacity for smooth 60fps

## Browser Support

- ✅ **Modern browsers** - Chrome, Firefox, Safari, Edge
- ✅ **Mobile responsive** - iOS Safari, Chrome Mobile
- ✅ **Graceful degradation** - Works without JavaScript
- ✅ **Progressive enhancement** - Animations enhance but don't break core functionality

## Future Enhancements

Potential improvements that could be added:

- [ ] **Search/filter functionality** - Filter team members by skills or role
- [ ] **Modal view** - Alternative full-screen detail view
- [ ] **Drag-to-reorder** - Allow customizing team member order
- [ ] **Team member availability** - Show online/offline status
- [ ] **Integration with CMS** - Dynamic team member management
- [ ] **Analytics tracking** - Track which team members get most views

## Troubleshooting

### Common Issues:

**Cards don't expand:**
- Check that team data is properly imported
- Ensure member IDs are unique strings
- Verify onClick handlers are connected

**Images not loading:**
- Confirm image paths in `/public/images/`
- Check that avatar paths in team data are correct
- Ensure Next.js Image component has proper src

**Animations not working:**
- Verify Framer Motion is installed
- Check for reduced motion preferences
- Ensure components are wrapped in MotionConfig

**TypeScript errors:**
- Ensure all team member objects match TeamMember interface
- Check that Lucide React icons are properly imported
- Verify proper typing for social links

---

## Component Integration

The team section is fully integrated into the About page (`/src/app/About/page.tsx`) and can be easily moved to other pages if needed. The design matches the existing ONYXDEV brand with dark theme, red accents, and glassmorphism effects.

For questions or support, refer to the component source code in `/src/components/team/`.
