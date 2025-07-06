# Vionex Landing Page

A modern, responsive landing page for Vionex.tech - an AI-powered digital transformation company. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Smooth scrolling navigation, contact form, and hover effects
- **AI-Focused Content**: Showcases AI services, automation, and digital transformation
- **Contact Integration**: Formspree integration for contact form functionality
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React icons
- **Build Tool**: Vite
- **Routing**: Wouter (lightweight router)
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Contact Form**: Formspree integration

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vionex
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
vionex/
├── src/
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and configurations
│   ├── pages/            # Page components
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── index.html            # HTML template
└── package.json          # Dependencies and scripts
```

## 🎨 Key Components

- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Eye-catching hero with call-to-action buttons
- **About Section**: Company overview with key features
- **Services Section**: Grid layout showcasing AI services
- **Why Choose Us**: Feature highlights with statistics
- **Contact Form**: Interactive contact form with validation
- **Footer**: Company information and branding

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Features

### Navigation
- Smooth scrolling between sections
- Mobile-responsive hamburger menu
- Fixed header with backdrop blur

### Contact Form
- Form validation with error handling
- Email format validation
- Success/error toast notifications
- Formspree integration for email delivery

### Animations
- Hover effects on cards and buttons
- Smooth transitions and transforms
- Loading animations and micro-interactions

## 🔧 Configuration

### Environment Variables
The contact form uses Formspree. Update the form endpoint in `src/pages/home.tsx`:
```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  // ... form configuration
});
```

### Styling
- Tailwind CSS configuration in `tailwind.config.js`
- Custom color scheme and typography
- Component variants using `class-variance-authority`

## 📄 License

This project is private and proprietary to Vionex.tech.

## 🤝 Contributing

This is a private project. For any issues or questions, please contact the development team.

---

Built with ❤️ by the Vionex team 