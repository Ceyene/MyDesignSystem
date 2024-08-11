# My Design System

A small design system with JS using Storybook.

[![Built with Storybook library](https://img.shields.io/badge/built%20with-storybook-pink.svg)](https://storybook.js.org/)

## Quickstart

To get started:

```bash
npx storybook init --type html
npm run storybook
```

## Scripts

- `storybook` runs design system, reloading on file changes
- `build-storybook` runs your app after it has been built using the build command
- `test` runs your test suite with Web Test Runner

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
