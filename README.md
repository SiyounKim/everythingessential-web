# Everything Essential Web

Static website for Everything Essential and Friddy.

## Local preview

Run a local static server from the repository root:

```bash
npm run dev
```

Then open <http://localhost:3000>.

## Deploying to Vercel

This repository is already configured for Vercel as a static site through `vercel.json`.

### Option 1: GitHub integration (recommended)

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import `SiyounKim/everythingessential-web`.
3. Use these project settings:
   - Framework Preset: **Other**
   - Build Command: leave empty
   - Output Directory: `.`
   - Install Command: leave the default or leave empty
4. Click **Deploy**.

After the first import, Vercel automatically creates preview deployments for pull requests and production deployments for pushes to the production branch configured in Vercel.

### Option 2: Vercel CLI

Install or run the Vercel CLI, then deploy from the repository root:

```bash
npx vercel@latest
```

When the preview deployment looks correct, promote the site to production:

```bash
npx vercel@latest --prod
```

If you already have the CLI installed globally, the package scripts are available:

```bash
npm run preview
npm run deploy
```

The CLI requires a Vercel account login or a valid `VERCEL_TOKEN` environment variable.
