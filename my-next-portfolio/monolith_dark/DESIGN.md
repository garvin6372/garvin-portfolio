---
name: Monolith Dark
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#0f0f0f'
  on-primary-container: '#7d7b7b'
  inverse-primary: '#5f5e5e'
  secondary: '#ffb3ad'
  on-secondary: '#680009'
  secondary-container: '#b60119'
  on-secondary-container: '#ffc2bd'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#0f0f0f'
  on-tertiary-container: '#7d7b7b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930012'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1280px
---

## Brand & Style
The design system embodies a "Monolith Dark" aesthetic: a high-precision, technical atmosphere designed for power users and developers. It prioritizes focus through deep obsidian surfaces and high-impact functional accents.

The style is a blend of **Minimalism** and **Geist-inspired technicality**. It utilizes heavy whitespace between functional blocks to reduce cognitive load, while employing surgical precision in its detailing. The UI should feel like a high-end terminal—authoritative, silent, and instantly responsive. The emotional response is one of controlled power and absolute clarity.

## Colors
The palette is rooted in a deep-space grayscale to maintain a "Monolith" presence. 

- **Primary Surface**: A near-black (#0F0F0F) that acts as the foundation.
- **High-Impact Accent**: #FF4444 is used sparingly but aggressively for primary actions, critical alerts, and active states. It replaces previous cyan tones to provide a "warning/critical" technical urgency.
- **Secondary Surfaces**: Tonal variations of charcoal (#1A1A1A) define container hierarchy without relying on shadows.
- **Foregrounds**: Off-white for readability, with muted grays for metadata and non-essential labels.

## Typography
Typography is the primary driver of the technical aesthetic. **Geist** provides a clean, geometric sans-serif foundation for high legibility in dense interfaces. **JetBrains Mono** is utilized for labels, data points, and code snippets to reinforce the developer-centric nature of the design system.

Tight letter spacing is applied to headlines to maintain the "monolithic" density. Line heights are generous in the body text to prevent fatigue during long reading sessions, while labels remain compact and uppercase for structural clarity.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). The rhythm is based on a strict 4px base unit.

- **Desktop**: Content is centered within a 1280px max-width container. Gutters are fixed at 16px to maintain a high information density typical of technical dashboards.
- **Mobile**: Margins are set to 16px with fluid columns that collapse vertically.
- **Vertical Rhythm**: Spacing between sections should always be a multiple of 8px (e.g., 24px, 32px, 64px) to ensure mathematical consistency across the UI.

## Elevation & Depth
Depth is achieved through **Tonal Layers** rather than traditional shadows. Surfaces closer to the user are lighter in value (e.g., transitioning from #0F0F0F to #1A1A1A).

To emphasize the technical nature:
- **Borders**: Use low-contrast 1px strokes (#222222) to define areas.
- **Interaction Glow**: High-impact elements (like active inputs) may use a subtle, 4px blur outer glow using the secondary accent (#FF4444 at 20% opacity) to simulate a powered-on LED state.
- **Backdrop**: Modals and overlays use a heavy background blur (20px) to maintain focus on the active task while keeping the "monolith" context visible.

## Shapes
The shape language is "Soft-Technical." Elements use a **0.25rem (4px)** base radius. This provides just enough softness to feel modern while retaining the precision of sharp-edged professional tools. Large containers or cards use **0.5rem (8px)**, while utility components like tags and checkboxes remain at the base 4px.

## Components
- **Buttons**: Primary buttons are solid #FF4444 with white text. Secondary buttons use a 1px #222222 border with a #FF4444 text hover state.
- **Input Fields**: Dark backgrounds (#0A0A0A) with a 1px border. On focus, the border transitions to #FF4444 with a subtle red outer glow.
- **Chips/Tags**: Use JetBrains Mono for the label. Backgrounds are #1A1A1A with no border; "Active" tags use a #FF4444 left-border accent (2px).
- **Cards**: Flat surfaces with 1px #222222 borders. No shadows. Header areas of cards are separated by a subtle horizontal rule.
- **Lists**: Interactive list items utilize a #1A1A1A background on hover, with a #FF4444 vertical "indicator bar" appearing on the far left of the active item.
- **Progress Bars**: Background is #222222; the fill is #FF4444.