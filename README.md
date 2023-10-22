# Tailwindcss plugin for animate.css

An elegant animate.css plugin for tailwindcss.

## Usage

1. Install

```zsh
npm i tailwindcss-animate-plugin
```

2. Add plugin in `tailwind.config.ts`

```ts
import animatePlugin from "tailwindcss-animate-plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [animatePlugin()],
};

export default config;
```

3. Copy `class` in [animate.css](https://animate.style), replace `__` with `--`.

For example: `animate__bounce`, change `animate__bounce` to `animate--bounce`.
