import { defineConfig } from 'vite';

// GitHub Pages hosts project repositories at /repository-name/.
// Locally and on hosts like Vercel the app is served at /.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' && repositoryName
    ? `/${repositoryName}/`
    : '/',
});
