
# Pak Ghiza Design System

## Brand Colors

### Primary Colors
- **Amber Gold:** `#F59E0B` (Primary brand color)
- **Golden Yellow:** `#EAB308` (Secondary brand color)
- **Deep Amber:** `#D97706` (Accent color)

### Secondary Colors
- **Forest Green:** `#16A34A` (Logo text color)
- **Dark Green:** `#15803D` (Darker green variant)
- **Emerald:** `#10B981` (Success states)

### Neutral Colors
- **Gray 900:** `#111827` (Primary text)
- **Gray 700:** `#374151` (Secondary text)
- **Gray 600:** `#4B5563` (Tertiary text)
- **Gray 400:** `#9CA3AF` (Placeholder text)
- **Gray 100:** `#F3F4F6` (Light backgrounds)
- **Gray 50:** `#F9FAFB` (Lightest backgrounds)

### Background Gradients
- **Primary Gradient:** `from-amber-50 to-white`
- **Secondary Gradient:** `from-amber-50 to-yellow-50`
- **Hero Gradient:** `from-amber-100/30 via-yellow-50/50 to-orange-100/30`

## Typography

### Font Families
- **Primary:** System fonts (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`)
- **Headings:** Bold weights (700, 800, 900)
- **Body Text:** Regular and medium weights (400, 500)

### Font Scales
- **Hero Title:** `text-6xl` (60px) - Main landing page title
- **Section Titles:** `text-4xl md:text-5xl` (36-48px) - Section headings
- **Card Titles:** `text-xl` (20px) - Product and card titles
- **Body Text:** `text-lg` (18px) - Main content
- **Small Text:** `text-sm` (14px) - Captions and meta information

## Layout System

### Container Widths
- **Main Container:** `container mx-auto px-4` (responsive with padding)
- **Content Width:** `max-w-6xl mx-auto` (1152px max width)
- **Text Content:** `max-w-4xl mx-auto` (896px max width)
- **Form Content:** `max-w-3xl mx-auto` (768px max width)

### Spacing Scale
- **Section Spacing:** `py-20` (80px vertical)
- **Element Spacing:** `space-y-8` (32px between elements)
- **Component Padding:** `p-8` (32px internal padding)
- **Card Padding:** `p-6` (24px internal padding)

### Grid Systems
- **Product Grid:** `grid md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Feature Grid:** `grid md:grid-cols-3 gap-8`
- **Form Grid:** `grid md:grid-cols-2 gap-6`

## Component Styles

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: linear-gradient(to right, #f59e0b, #eab308);
  color: white;
  padding: 12px 32px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 300ms;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* Secondary Button */
.btn-secondary {
  border: 2px solid #f59e0b;
  color: #d97706;
  background: transparent;
  padding: 12px 32px;
  border-radius: 12px;
  font-weight: 600;
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 300ms;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 25px 25px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-8px);
}
```

### Navigation
```css
.nav-link {
  font-weight: 500;
  transition: all 300ms;
  position: relative;
}

.nav-link:hover {
  color: #d97706;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #f59e0b, #eab308);
  transition: width 300ms;
}

.nav-link:hover::after {
  width: 100%;
}
```

## Animation Guidelines

### Transition Timing
- **Fast:** `150ms` - Small interactions (hover states)
- **Medium:** `300ms` - Standard transitions (buttons, cards)
- **Slow:** `500ms` - Large movements (modals, sections)

### Animation Types
- **Fade In:** `animate-fade-in` - Content appearance
- **Scale In:** `animate-scale-in` - Modal and popup appearance
- **Float:** `animate-float` - Gentle floating motion
- **Pulse:** `animate-pulse` - Loading states and emphasis
- **Bounce:** `animate-bounce` - Call-to-action elements

### Scroll Animations
- **Intersection Observer:** Trigger animations on scroll
- **Stagger Effects:** Sequential element animations
- **Parallax:** Background element movement

## Responsive Design

### Breakpoints
- **Mobile:** `< 768px` - Single column layouts
- **Tablet:** `768px - 1024px` - Two column layouts
- **Desktop:** `> 1024px` - Three+ column layouts

### Mobile-First Approach
- Start with mobile designs
- Progressive enhancement for larger screens
- Touch-friendly interface elements
- Optimized font sizes and spacing

## Accessibility Standards

### Color Contrast
- **Text on Light:** Minimum 4.5:1 contrast ratio
- **Text on Dark:** Ensure readability with sufficient contrast
- **Interactive Elements:** Clear focus indicators

### Navigation
- **Keyboard Navigation:** All interactive elements accessible
- **Screen Readers:** Proper ARIA labels and semantic HTML
- **Focus Management:** Logical tab order

### Content Structure
- **Headings:** Proper hierarchy (H1 > H2 > H3)
- **Alt Text:** Descriptive image alternatives
- **Form Labels:** Clear and associated with inputs
