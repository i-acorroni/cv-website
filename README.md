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

### Environment Setup

1. Create `.env.local` file with your Substack RSS feed URL:
   ```env
   NEXT_PUBLIC_SUBSTACK_FEED_URL=https://yourpublication.substack.com/feed
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Test the build locally:
   ```bash
   npm run build
   npm start
   ```

### Development Tips

- The site uses TypeScript - check for type errors with `npm run build`
- Substack posts are fetched from RSS feed at build time
- Images from Substack are automatically optimized by Next.js
- Test responsive design and dark mode before deploying

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Sign up at [vercel.com](https://vercel.com) and import your repository
3. Add environment variable `NEXT_PUBLIC_SUBSTACK_FEED_URL` in Vercel dashboard
4. Deploy - Vercel auto-detects Next.js and handles everything
5. Every push to `main` branch automatically deploys

### Other Platforms

- **Netlify**: Similar to Vercel, connect repository and add environment variables
- **Static Export**: Update `next.config.js` with `output: 'export'` for static hosting

### Environment Variables in Production

Make sure to add `NEXT_PUBLIC_SUBSTACK_FEED_URL` in your hosting platform's environment variables settings.

## License

This project is open source and available under the MIT License.


