---
name: Hospitality PMS
colors:
  surface: '#f5faff'
  surface-dim: '#cddce7'
  surface-bright: '#f5faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e9f5ff'
  surface-container: '#e1f0fb'
  surface-container-high: '#dbeaf5'
  surface-container-highest: '#d6e5ef'
  on-surface: '#0f1d25'
  on-surface-variant: '#404752'
  inverse-surface: '#24323a'
  inverse-on-surface: '#e4f3fe'
  outline: '#707883'
  outline-variant: '#bfc7d4'
  surface-tint: '#0061a4'
  primary: '#0061a4'
  on-primary: '#ffffff'
  primary-container: '#2196f3'
  on-primary-container: '#002c4f'
  inverse-primary: '#9ecaff'
  secondary: '#21638d'
  on-secondary: '#ffffff'
  secondary-container: '#95cfff'
  on-secondary-container: '#105982'
  tertiary: '#2b5bb5'
  on-tertiary: '#ffffff'
  tertiary-container: '#658fed'
  on-tertiary-container: '#002763'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#9ecaff'
  on-primary-fixed: '#001d36'
  on-primary-fixed-variant: '#00497d'
  secondary-fixed: '#cbe6ff'
  secondary-fixed-dim: '#93cdfc'
  on-secondary-fixed: '#001e30'
  on-secondary-fixed-variant: '#004b71'
  tertiary-fixed: '#d9e2ff'
  tertiary-fixed-dim: '#b0c6ff'
  on-tertiary-fixed: '#001945'
  on-tertiary-fixed-variant: '#00429c'
  background: '#f5faff'
  on-background: '#0f1d25'
  surface-variant: '#d6e5ef'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-columns: '12'
  gutter: 1.5rem
  margin-desktop: 2rem
  margin-mobile: 1rem
  unit-xs: 0.25rem
  unit-sm: 0.5rem
  unit-md: 1rem
  unit-lg: 1.5rem
  unit-xl: 2rem
  unit-xxl: 3rem
---

## Brand & Style

This design system establishes a professional, authoritative, and frictionless environment for hotel property management. The brand personality is grounded, reliable, and deeply intuitive, tailored for front-desk staff, housekeeping coordinators, and general managers who require absolute clarity under pressure. 

We embrace a **Corporate / Modern** design style, merging structural utility with refined whitespace and high-legibility data density. The emotional response is one of absolute calm and operational confidence—minimizing cognitive load during peak check-in hours and complex multi-property audits.

## Colors

The color system is anchored in a spectrum of trustworthy blues designed to reduce eye strain during extended administrative shifts. 

- **Primary Blue (`#2196F3`)**: Drives key interactive states, active navigation items, primary calls-to-action, and critical status indicators.
- **Accent Light Blue (`#90CAF9`)**: Used for secondary highlights, hovered states, subtle badge backgrounds, and interactive data groupings.
- **Deep Dark Blue (`#0D47A1`)**: Commands structural hierarchy in typography, primary headers, sidebar foundations, and high-contrast analytical data points.
- **Neutral Background Tint (`#E3F2FD`)**: Serves as the foundational canvas, establishing an airy, light-filled workspace that feels unified and calm.
- **System Surfaces**: Pure white (`#FFFFFF`) surfaces float atop the neutral background tint to organize complex property grids, reservation cards, and tabular data.

## Typography

Typography is systematic, neutral, and ruthlessly functional. **Inter** is deployed across all roles to ensure maximum legibility for dense financial figures, room numbers, and guest manifests across high-resolution desktop monitors and mobile tablets alike.

- **Scale & Hierarchy**: Headlines use tighter letter spacing and semi-bold weights to establish clear navigational anchors. Body and label sizes prioritize scanning efficiency for rapid front-desk execution.
- **Mobile Adjustments**: For viewports under 768px, `headline-xl` gracefully steps down to 26px to prevent awkward wrapping in mobile property management views.

## Layout & Spacing

The layout relies on a **Fluid grid** model structured around a 12-column foundation optimized for dashboard data visualization, room matrix grids, and split-screen reservation workflows.

- **Rhythm**: Spacing is built on a strict 4px/8px baseline rhythm (using `0.25rem` multipliers). This predictable cadence ensures structural alignment between form inputs, metric cards, and dense reservation tables.
- **Breakpoints**: 
  - *Mobile (< 768px)*: Single-column reflow with stacked cards and simplified bottom-sheet navigation.
  - *Tablet (768px - 1024px)*: Collapsible sidebar navigation with a flexible 2-column dashboard layout.
  - *Desktop (> 1024px)*: Full 12-column grid system with persistent multi-panel views (e.g., property map alongside active guest folios).

## Elevation & Depth

Visual hierarchy is communicated through a hybrid system of **Tonal layers** and **Low-contrast outlines**, avoiding heavy drop shadows in favor of a clean, flat-yet-layered architectural feel.

- **Surfaces**: Base elements rest on the `#E3F2FD` background tint. Interactive containers, cards, and dropdown panels utilize pure white (`#FFFFFF`) surfaces to rise above the canvas.
- **Borders**: Structural boundaries are defined by subtle, low-opacity blue-tinted borders (`rgba(33, 150, 243, 0.15)`), keeping the interface crisp and uncluttered.
- **Active Elevation**: Floating action buttons (FABs) and active modal dialogues employ soft, diffused ambient shadows tinted with the primary blue hue to signify interactivity without visual heaviness.

## Shapes

The shape language is purposefully **Soft**, balancing approachability with professional precision. 

- **Border Radius**: Base UI elements (buttons, inputs, small badges) feature a `0.25rem` radius. Containers, cards, and modal windows scale up to `0.5rem` (`rounded-lg`) or `0.75rem` (`rounded-xl`) to soften large rectangular data blocks and maintain a welcoming, modern aesthetic.

## Components

Components are engineered for speed, high data-density, and error-prevention during high-stress hotel operations.

- **Buttons**: Primary buttons utilize the primary blue (`#2196F3`) with white text and soft rounded corners (`0.25rem`), shifting to deep dark blue (`#0D47A1`) on active press. Secondary and ghost variants rely on transparent backgrounds with primary blue borders or text.
- **Chips & Badges**: Pill-shaped status indicators use tonal variations of the color palette (e.g., light blue background with dark blue text) to denote room statuses: *Occupied*, *Vacant*, *Cleaning*, or *Maintenance*.
- **Input Fields**: Form controls feature clean white backgrounds, low-contrast outlines, and floating labels for optimal data entry speed during guest check-ins. Focus states engage a vibrant primary blue ring.
- **Cards**: Property and reservation cards utilize white surfaces with subtle blue-tinted outlines and generous internal padding, organizing guest details, stay dates, and financial summaries clearly.
- **Checkboxes & Radio Buttons**: Designed with crisp square and circular geometry, utilizing primary blue fills for selected states to ensure unambiguous operational choices.
- **Data Visualizations**: Dashboard analytics feature clean line charts, occupancy gauges, and revenue bars rendered in primary blue and deep dark blue gradients over light neutral backgrounds, ensuring quick comprehension of key hotel metrics (ADR, RevPAR, Occupancy Rate).