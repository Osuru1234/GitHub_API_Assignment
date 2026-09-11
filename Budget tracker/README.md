 ## SpendWise Dashboard Shell

The project was extended to create the SpendWise Dashboard Shell using modern CSS layout techniques.

### Dashboard Features

- Sidebar navigation menu
- Dashboard header
- Financial summary cards
- Six spending category cards
- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

### CSS Grid

CSS Grid is used for the overall dashboard layout and category card layout.

### Flexbox

Flexbox is used for:

- Sidebar navigation items
- Header content
- Financial summary cards
- Category card content

### CSS Custom Properties

The project uses CSS variables in `:root` for:

- Brand color
- Accent color
- Background color
- Surface color
- Primary text
- Secondary text
- Border color

### Responsive Design

A media query changes the dashboard to a single-column layout below 768px.

The responsive layout was tested using the browser DevTools Device Toolbar.

### Card Micro-interactions

Dashboard cards include hover and keyboard focus effects using:

- `transform`
- `box-shadow`
- `transition`

The transition duration is 0.2 seconds (200ms).

### Dark Theme

A dark theme was added using:

```css
@media (prefers-color-scheme: dark)