---
name: Istiqlal Osaka Spirit
colors:
  surface: '#fdf9e9'
  surface-dim: '#dedacb'
  surface-bright: '#fdf9e9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f4e4'
  surface-container: '#f2eede'
  surface-container-high: '#ece8d9'
  surface-container-highest: '#e6e3d3'
  on-surface: '#1c1c13'
  on-surface-variant: '#3e4a41'
  inverse-surface: '#323126'
  inverse-on-surface: '#f5f1e1'
  outline: '#6e7a70'
  outline-variant: '#bdcabe'
  surface-tint: '#006d40'
  primary: '#006b3f'
  on-primary: '#ffffff'
  primary-container: '#008751'
  on-primary-container: '#fdfff9'
  inverse-primary: '#70db9d'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#006962'
  on-tertiary: '#ffffff'
  tertiary-container: '#00847b'
  on-tertiary-container: '#fbfffd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#8df8b7'
  primary-fixed-dim: '#70db9d'
  on-primary-fixed: '#002110'
  on-primary-fixed-variant: '#00522f'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#87f5e9'
  tertiary-fixed-dim: '#6ad8cd'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#00504a'
  background: '#fdf9e9'
  on-background: '#1c1c13'
  surface-variant: '#e6e3d3'
  text-deep: '#1F2937'
  background-alt: '#FFFFFF'
  accent-warm: '#FF7043'
  success-green: '#4CAF50'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  kanji-accent:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base-unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The brand personality is **warm, inclusive, transparent, and modern**, bridging the cultural gap between Islamic traditions and Japanese minimalism. The design system facilitates a sense of community for the Indonesian diaspora and locals in Osaka, prioritizing clarity and spiritual warmth.

The design style is **Modern / Corporate** with **Tactile Japanese accents**. It utilizes high-quality whitespace and clean line-work inspired by Osaka city maps, balanced with organic rounded elements. To honor its location, the system integrates "Wabi-sabi" principles—simplicity and inner peace—through soft textures and "Seigaiha" (wave) patterns that symbolize surges of good fortune and power.

Key visual attributes include:
- **Trilingual Harmony:** Balanced visual weight between Indonesian, English, and Japanese characters.
- **Modern Spirituality:** Traditional motifs rendered with modern, thin-line aesthetics.
- **Transparency:** Clear data visualization for donation progress and community initiatives.

## Colors

The palette is anchored in **Emerald Green (#008751)**, providing a strong Islamic identity that feels vibrant and living rather than historical. This is complemented by **Warm Orange (#F59E0B)**, which mimics the golden hour sun and evokes a welcoming, hospitable atmosphere.

**Neutral tones** move away from sterile grays toward **Soft Creams (#FFFBEB)** to create a parchment-like warmth, paired with **Deep Charcoal (#1F2937)** for high-contrast, accessible typography. 

The secondary teal (#29A399) and accent orange (#FF7043) from the reference data are used sparingly for interactive states and decorative motifs to add depth to the primary brand colors.

## Typography

This design system uses a dual-font strategy to ensure legibility across three languages. **Montserrat** provides a bold, geometric authority for headings, while **Inter** offers a systematic, highly legible foundation for body copy and UI labels.

For Japanese text:
- **Kanji/Kana** should inherit the same weight characteristics as the Latin counterparts. 
- Use **Vertical Orientation** for specific Japanese accents like '大阪' (Osaka) in hero sections or sidebars to emphasize the Japanese context.
- Ensure line heights for Japanese body text are slightly increased (1.6 to 1.8) compared to English to prevent character crowding.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum container width of 1280px. A strict 8px spacing scale ensures rhythmic consistency across all components.

- **Desktop (12 columns):** 24px gutters, 40px side margins.
- **Tablet (8 columns):** 24px gutters, 24px side margins.
- **Mobile (4 columns):** 16px gutters, 16px side margins.

Content is organized using a **card-based rhythm**, where logical groups are separated by generous whitespace (32px to 64px) to reflect the "Ma" (negative space) concept in Japanese design.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layering** and **Ambient Shadows**. Surfaces should feel like they are floating gently above the soft cream background.

- **Surface Levels:** The primary background is #FFFBEB. Cards and containers use #FFFFFF to "lift" content.
- **Shadows:** Shadows are highly diffused and tinted with the primary green (e.g., `rgba(0, 135, 81, 0.08)`) rather than pure black. This prevents the "dirty" look on cream backgrounds.
- **Patterns:** Subtle 'Asanoha' (hemp leaf) or 'Seigaiha' (waves) patterns should be used as low-contrast watermarks (2-3% opacity) within containers or sections to add cultural texture without hindering readability.

## Shapes

The design system utilizes **Rounded (Level 2)** shapes, but specifically pushes container corners to **2xl (1.5rem/24px)** for a friendly, approachable aesthetic.

- **Standard UI Elements:** (Buttons, Inputs) use 0.5rem (8px).
- **Cards & Content Containers:** Use 1.5rem (24px) to create a soft, welcoming frame.
- **Decorative Elements:** Circular motifs (symbolizing the sun/unity) are used for icons and progress rings.

## Components

### Buttons
- **Primary:** Filled Emerald Green with white text. 8px corner radius.
- **Secondary:** Outlined Emerald Green or Solid Warm Orange for "Donate/Action" buttons.
- **Text:** 14px Semi-bold Inter, all caps with 0.05em tracking for a modern feel.

### Cards
- White background (#FFFFFF) with a 24px corner radius.
- Subtle 1px border in a slightly darker cream or a soft shadow for depth.
- Often feature a "Seigaiha" pattern header or footer for cultural flair.

### Donation Progress Bars
- **Track:** Soft Cream-Orange (#FEF3C7).
- **Indicator:** Solid Warm Orange (#F59E0B) gradient to Emerald Green.
- Includes clear numerical labels for "Current" vs "Target" amounts to maintain brand transparency.

### Input Fields & Controls
- **Inputs:** White background with a 1px soft-charcoal border. Focus state uses a 2px Emerald Green glow.
- **Checkboxes/Radios:** Circular shapes (even for checkboxes) to maintain the "friendly/soft" theme.

### Navigation
- Top navigation with a "sticky" frosted glass effect (backdrop-filter: blur) to maintain visibility over high-quality photography of the mosque and community.
- Language switcher prominently displays "ID | EN | JP".