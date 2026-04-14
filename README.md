This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This repository is a root-level Next.js App Router project.

Use these settings in [Vercel](https://vercel.com/new):

- Root Directory: `.` (repository root)
- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave empty
- Node.js: `20.x` or newer

The homepage entry file is [src/app/page.tsx](./src/app/page.tsx), and the app-level fallback page is [src/app/not-found.tsx](./src/app/not-found.tsx).

If Vercel ever shows a 404 again, the fastest checks are:

1. Confirm the deployment was created successfully in the Vercel Deployments tab.
2. Confirm the project Root Directory is still `.`.
3. Confirm the Framework Preset is still `Next.js`.
4. Redeploy the latest commit after any Vercel setting change.
