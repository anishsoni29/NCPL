# RoadBaze - Civil Road Construction Company Website

A production-quality frontend website for a civil road construction company built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── directors/         # Leadership page
│   ├── projects/          # Projects gallery
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page section components
│   └── ui/                # Reusable UI components
├── data/                  # Static data (directors, projects, services)
└── lib/                   # Utility functions
```

## 🎨 Features

- **6 Pages**: Home, About, Directors, Projects, Services, Contact
- **Responsive Design**: Mobile-first approach
- **Clean UI**: White theme with amber accents
- **Smooth Animations**: Counting stats, hover effects
- **SEO Optimized**: Proper metadata on all pages
- **Accessible**: Semantic HTML and ARIA labels

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Inter (Google Fonts)

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, featured projects, CTA |
| About | `/about` | Company story, vision/mission, timeline |
| Directors | `/directors` | Leadership team cards |
| Projects | `/projects` | Project portfolio gallery |
| Services | `/services` | Service offerings with details |
| Contact | `/contact` | Contact form, info, map placeholder |

## 🔧 Customization

### Data Files

Edit these files to update content:
- `src/data/directors.ts` - Leadership team
- `src/data/projects.ts` - Project portfolio  
- `src/data/services.ts` - Service offerings

### Adding Images

Replace placeholder images in `/public/images/`:
- Director photos: `director-1.jpg`, `director-2.jpg`, etc.
- Project images: `project-1.jpg`, `project-2.jpg`, etc.

## 📝 License

This project is for demonstration purposes.
