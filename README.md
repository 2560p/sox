# Sox - Premium Sock Subscriptions

A Next.js website for Sox, a premium sock subscription service based in the Netherlands.

## Features

- 🧦 **Subscription Plans**: Choose from 5, 10, or 18 pairs of socks
- 🎨 **Color Options**: Select between white or black socks
- 📅 **Flexible Delivery**: Monthly, every 2 months, or every 6 months with discounts
- 💰 **Transparent Pricing**: Clear pricing with discounts for longer subscription periods
- 🇳🇱 **Made in Netherlands**: Premium quality, locally sourced
- 📱 **Responsive Design**: Works on all devices

## Getting Started

### Prerequisites

- Node.js 18+ or Bun 1.0+
- npm or Bun package manager

### Installation

```bash
# Install dependencies
npm install
# or with Bun (when available)
# bun install
```

### Development

```bash
# Run the development server
npm run dev
# or with Bun
# bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
# Create production build
npm run build
# or with Bun
# bun run build
```

### Production

```bash
# Start production server
npm start
# or with Bun
# bun start
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Node.js / Bun (configurable)

## Project Structure

```
sox/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── SubscriptionPlans.tsx  # Plans selector
│   ├── HowItWorks.tsx     # Process explanation
│   └── Footer.tsx         # Site footer
├── public/                # Static assets
└── package.json           # Dependencies

```

## Subscription Plans

### Pricing Tiers
- **Starter**: 5 pairs - €15/delivery
- **Popular**: 10 pairs - €25/delivery
- **Family**: 18 pairs - €40/delivery

### Delivery Frequencies
- **Monthly**: Standard pricing
- **Every 2 Months**: Save 5%
- **Every 6 Months**: Save 15%

## Note on Bun

This project is designed to work with Bun as the runtime. However, due to environment limitations during development, npm was used for package management. The project is fully compatible with Bun and can be run using Bun commands when available in your environment.

## Future Enhancements

- Payment integration (Stripe/Mollie)
- User authentication and account management
- Subscription management dashboard
- Order tracking
- Email notifications
- Admin panel