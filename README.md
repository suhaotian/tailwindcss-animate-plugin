# Tailwindcss plugin for animate.css

An elegant [animate.css](https://animate.style) plugin for tailwindcss.

## Install

```zsh
npm i tailwindcss-animate-plugin
```

## Usage(3 steps)

1. Add plugin in `tailwind.config.ts`

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

2. Copy `class` in [animate.css](https://animate.style), replace `__` with `--`.

For example: `animate__bounce`, change `animate__bounce` to `animate--bounce`.

3. Add below content to your global css file:

```css
:root {
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}

@media print, (prefers-reduced-motion: reduce) {
  .animate--animated {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    animation-iteration-count: 1 !important;
  }

  .animate--animated[class*="Out"] {
    opacity: 0;
  }
}
```
