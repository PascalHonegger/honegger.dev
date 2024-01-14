# honegger.dev - Portfolio Website for Pascal Honegger

![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m785141314-a9e1dba4a525ea4580f3ce53)
![Chromium HSTS preload](https://img.shields.io/hsts/preload/honegger.dev)
[![honegger.dev build](https://github.com/PascalHonegger/honegger.dev/actions/workflows/honegger.yml/badge.svg)](https://github.com/PascalHonegger/honegger.dev/actions/workflows/honegger.yml)

My personal work-in-progress portfolio website.

## Developing

After first clone you'll need to run `pnpm install` (using [pnpm](https://pnpm.io/)).
You can then start a development server by running the following commands:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

## Building

You can easily create a static production version:

```bash
pnpm build
```

You can preview the production build with `pnpm preview` or simply serve the webapp using any webserver.
