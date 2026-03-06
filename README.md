# Pulse Dashboard

Real-time analytics dashboard — built autonomously by Dark Factory v4

## Tech Stack

- **React 18** — UI framework
- **TypeScript** — strict mode
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Recharts** — data visualization
- **Lucide React** — icons
- **Zod** — schema validation

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Base URL for the analytics API |

## Project Structure

```
src/
├── components/
│   ├── conversion-rate-chart.tsx
│   ├── header.tsx
│   ├── overview-card.tsx
│   ├── sidebar.tsx
│   ├── top-projects-table.tsx
│   └── traffic-chart.tsx
├── utils/
│   └── format-number.ts
├── app.tsx
├── index.css
├── main.tsx
├── mock-data.ts
└── types.ts
```

## Design System

- **Background**: `#0B1220`
- **Primary**: `#60A5FA`
- **Secondary**: `#A78BFA`
- **Accent**: `#22C55E`
- **Destructive**: `#F87171`
- **Border**: `#1F2937`
- **Font**: Inter
