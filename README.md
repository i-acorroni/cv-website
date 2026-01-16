# CV Website

A modern, professional CV website built with Next.js, TypeScript, and Tailwind CSS. This website features a clean, minimal design perfect for showcasing your academic or professional profile, including CV, publications, blog posts, projects, and more.

## Features

- **Homepage**: Hero section with about section and recent Substack posts
- **CV Page**: Professional resume layout with education, experience, skills, and awards
- **Publications**: Display academic/research publications with filtering and links
- **Projects**: Portfolio showcase with project cards, tech stack, and links
- **Contact**: Contact information and social media links
- **Responsive Design**: Mobile-first, fully responsive layout
- **Dark Mode**: Automatic dark mode support based on system preferences

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Substack RSS feed integration, JSON for structured data
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cv-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
cv-website/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/        # React components
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript type definitions
├── content/              # Content files
│   ├── publications/     # Publications (JSON)
│   └── projects/         # Projects (JSON)
└── public/               # Static assets
```

## Customization

### Site Information

Update the following files to customize your site:

- `src/app/page.tsx`: Homepage content (includes about section)
- `src/app/cv/page.tsx`: CV/resume content
- `src/components/SocialLinks.tsx`: Social media links
- `src/app/layout.tsx`: Site metadata

### Content

- **Publications**: Edit `content/publications/publications.json`
- **Projects**: Edit `content/projects/projects.json`

## Development

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines and code style.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions.

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

