Phase 1: Responsive Reflow & Horizontal Overflow Fix

Objective

Audit and fix the horizontal scrolling (overflow-x) and responsive snapping issues in the Hero section of the Mirex landing page. The layout breaks on mobile viewports (e.g., iPhone 12 Pro) and tablet viewports, causing UI elements to bleed past the right edge of the screen or fail to stack properly.

Technical Requirements & Constraints

Framework: Next.js (App Router)

Styling: Vanilla CSS Modules ONLY. DO NOT USE TAILWIND CSS.

Standard: Clean, premium SaaS aesthetic.

Execution Steps

1. Global Reset Audit (app/globals.css)

Ensure the universal box-sizing and overflow resets are strictly enforced to prevent padding from expanding container widths:

Enforce box-sizing: border-box on *, *::before, *::after.

Ensure html and body have overflow-x: hidden, width: 100%, margin: 0, and padding: 0.

2. Container & Typography Reflow (Hero CSS Module)

Container Widths: Audit the Hero wrapper. Replace any instances of width: 100vw with width: 100%. Ensure the main wrapper has symmetrical horizontal padding (e.g., padding: 0 1.5rem or padding: 0 5%) so content is contained gracefully within the viewport.

Typography: Ensure h1 and p tags use responsive units (e.g., rem or clamp()). Ensure long lines of text are not forcing the container wider than the screen (word-wrap: break-word).

3. Button Group Reflow

The Action Buttons ("Start Copying Trades" and "Explore Traders") must behave fluidly based on the breakpoint.

Mobile (< 768px): The flex container must use flex-direction: column with a consistent gap (e.g., gap: 1rem). Both buttons should stretch to width: 100%.

Tablet/Desktop (>= 768px): The flex container should switch to flex-direction: row. The buttons should use width: auto or a sensible max-width to sit neatly side-by-side.

Ensure the primary button retains the exact #10B981 green accent and the secondary button retains its premium transparent styling with subtle borders.

4. Dashboard/Mockup Asset Constraint

The bottom dashboard UI asset (whether an image or a component) is likely breaking the layout.

Ensure its container has width: 100% and max-width: 100%.

If it's an image, it must have max-width: 100%, height: auto, and object-fit: contain or cover depending on the design intent.

Ensure it does not have a fixed pixel width (e.g., width: 800px) without a max-width fallback.

Expected Output

Review the CSS modules associated with the Hero component and Global CSS. Apply these specific fixes. Provide the updated .module.css and .jsx/.tsx files.