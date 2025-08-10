# Modern Pricing Cards Component

A modern, responsive pricing cards component built with React, TypeScript, and modern CSS best practices. This project demonstrates how to refactor legacy HTML/CSS into reusable, maintainable React components.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with progressive enhancement
- **TypeScript**: Full type safety with comprehensive interfaces
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Performance**: Memoized components, optimized re-renders
- **Variants**: Multiple card styles (default, featured, minimal)
- **Error Handling**: Graceful fallbacks for missing data
- **Modern CSS**: CSS custom properties, flexbox, grid, and modern features

## 🐛 Layout Bugs Fixed

The original HTML code had several critical layout and accessibility issues:

### 1. **Missing Closing Tag**
```html
<!-- Before (Broken) -->
<h2 class="title">Basic Plan<h2>

<!-- After (Fixed) -->
<h2 class="title">Basic Plan</h2>
```

### 2. **CSS Typo**
```css
/* Before (Broken) */
box-shdow: 0 0 10px #ccc;

/* After (Fixed) */
box-shadow: 0 0 10px #ccc;
```

### 3. **Fixed Width Issues**
```css
/* Before (Not Responsive) */
.pricing {
  width: 300px; /* Fixed width causes mobile issues */
}

/* After (Responsive) */
.card {
  max-width: 100%; /* Responsive width */
  min-width: 280px; /* Minimum width for readability */
}
```

### 4. **Missing Responsive Design**
- **Before**: No media queries, fixed layouts
- **After**: Mobile-first responsive design with breakpoints at 640px, 768px, 1024px

### 5. **Accessibility Issues**
- **Before**: No semantic structure, missing ARIA labels
- **After**: Proper `<article>`, `<header>`, `<section>`, `<footer>` tags with ARIA support

### 6. **No Error Handling**
- **Before**: Components would break with missing data
- **After**: Graceful fallbacks and console warnings

## 🏗️ Component Architecture

### Card Component (`src/components/Card/`)

The core reusable card component with the following features:

```tsx
interface CardProps {
  title: string;           // Required: Card title
  price: string;           // Required: Price display
  features: string[];      // Required: Feature list
  buttonText?: string;     // Optional: Button text (default: "Start Trial")
  onButtonClick?: () => void; // Optional: Click handler
  className?: string;      // Optional: Additional CSS classes
  variant?: 'default' | 'featured' | 'minimal'; // Optional: Visual variant
  disabled?: boolean;      // Optional: Disabled state
}
```

**Usage Example:**
```tsx
<Card
  title="Basic Plan"
  price="$9.99/month"
  features={["1 GB Storage", "Basic Support", "All Core Features"]}
  onButtonClick={() => console.log('Plan selected')}
  variant="featured"
/>
```

### PricingSection Component (`src/components/PricingSection/`)

A container component that displays multiple pricing cards in a responsive grid:

```tsx
interface PricingSectionProps {
  plans: PricingPlan[];           // Required: Array of pricing plans
  sectionTitle?: string;          // Optional: Section heading
  sectionSubtitle?: string;       // Optional: Section description
  onPlanSelect?: (planId: string) => void; // Optional: Selection callback
}
```

**Usage Example:**
```tsx
<PricingSection
  plans={pricingPlans}
  sectionTitle="Choose Your Plan"
  sectionSubtitle="Select the perfect plan for your needs"
  onPlanSelect={(planId) => handlePlanSelection(planId)}
/>
```

## 🎨 Styling Features

### CSS Custom Properties
- **Theming**: Easy color and spacing customization
- **Consistency**: Unified design tokens across components
- **Maintainability**: Centralized style management

### Responsive Breakpoints
- **Mobile First**: Base styles for mobile devices
- **640px+**: Small tablets and large phones
- **768px+**: Tablets and small laptops
- **1024px+**: Desktop and large screens

### Accessibility Features
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user motion preferences
- **Focus Management**: Clear focus indicators
- **Touch Targets**: Minimum 44px touch targets

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development
```bash
# Run linting
npm run lint
```

## 📱 Responsive Behavior

The components automatically adapt to different screen sizes:

- **Mobile (< 640px)**: Single column, compact spacing
- **Tablet (640px - 1024px)**: Responsive grid, medium spacing
- **Desktop (> 1024px)**: Multi-column grid, generous spacing

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of `<article>`, `<section>`, `<header>`, `<footer>`
- **ARIA Labels**: Descriptive labels for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Clear focus indicators
- **Screen Reader Support**: Proper heading hierarchy and landmarks

## 🔧 Customization

### Theme Colors
Modify CSS custom properties in `src/components/Card/Card.css`:

```css
:root {
  --card-bg: #ffffff;
  --button-primary: #3b82f6;
  --text-primary: #1f2937;
  /* ... more variables */
}
```

### Adding New Variants
1. Add variant to `CardProps.variant` type
2. Add CSS styles for the new variant
3. Update component logic if needed

## 📊 Performance Optimizations

- **Memoization**: Features list is memoized to prevent unnecessary re-renders
- **Event Handlers**: Callbacks are wrapped in `useCallback` for stability
- **CSS Optimization**: Efficient selectors and minimal repaints
- **Bundle Size**: Tree-shaking friendly exports

## 🧪 Testing Considerations

The components are designed with testing in mind:

- **Props Validation**: Clear interfaces for easy testing
- **Error Boundaries**: Graceful error handling
- **Accessibility**: Screen reader and keyboard testing ready
- **Responsive**: Cross-device testing scenarios

## 🌟 Best Practices Implemented

1. **Mobile-First Design**: Start with mobile and enhance for larger screens
2. **TypeScript**: Full type safety and IntelliSense support
3. **Component Composition**: Reusable, composable components
4. **CSS Architecture**: BEM methodology with CSS custom properties
5. **Performance**: Optimized re-renders and efficient styling
6. **Accessibility**: WCAG 2.1 AA compliance considerations
7. **Error Handling**: Graceful degradation and user feedback
8. **Documentation**: Comprehensive JSDoc comments

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please ensure all changes maintain the established patterns for:
- TypeScript interfaces
- CSS architecture
- Accessibility standards
- Responsive design principles 