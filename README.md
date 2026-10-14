# CV Website

A research notebook website built with Next.js, TypeScript, and Tailwind CSS. The design uses system monospace typography, green highlights, a persistent desktop sidebar, and text-led archives.

## Features

- **Homepage**: Current research and recent activities, research interests, and expandable background notes
- **CV Page**: Online education, experience, fellowships, awards, and academic service
- **Publications**: Dated academic publications and commentary with source links
- **Projects**: Text-led archive with descriptions, subject areas, and project links
- **Contact**: Contact information and social media links
- **Responsive Design**: Mobile-first, fully responsive layout

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
- `content/cv/cv.json`: CV/resume content
- `src/app/globals.css` and `tailwind.config.ts`: Notebook layout, typography, and colour palette
- `src/components/Navigation.tsx`: Sidebar navigation, contact, and social links
- `src/app/layout.tsx`: Site metadata

### Content

- **Publications**: Edit `content/publications/publications.json`
- **Projects**: Edit `content/projects/projects.json`
- **Talks**: Edit `content/talks/talks.json`
- **CV**: Edit `content/cv/cv.json`
- **Homepage updates**: Edit `src/app/page.tsx`

## Development

### Environment Setup

1. Copy `.env.example` to `.env.local` and update the values:
   ```env
   NEXT_PUBLIC_SUBSTACK_FEED_URL=https://yourpublication.substack.com/feed
   NEXT_PUBLIC_SITE_URL=https://example.com
   NEXT_PUBLIC_SITE_NAME=Your Name
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
- Test the sidebar, page navigation, and mobile layout before deploying

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Sign up at [vercel.com](https://vercel.com) and import your repository
3. Add environment variables `NEXT_PUBLIC_SUBSTACK_FEED_URL`, `NEXT_PUBLIC_SITE_URL`, and `NEXT_PUBLIC_SITE_NAME` in the Vercel dashboard
4. Deploy - Vercel auto-detects Next.js and handles everything
5. Add your apex domain and `www` in the Vercel Domains settings
6. Update your DNS records at your registrar to the values shown by Vercel
7. Every push to `main` branch automatically deploys

### Other Platforms

- **Netlify**: Similar to Vercel, connect repository and add environment variables
- **Static Export**: Update `next.config.js` with `output: 'export'` for static hosting

### Environment Variables in Production

Make sure to add these variables in your hosting platform's environment variables settings:

- `NEXT_PUBLIC_SUBSTACK_FEED_URL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`

## License

This project is open source and available under the MIT License.

