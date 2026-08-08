# Netflix Clone

A front-end clone of the Netflix landing page, built with plain HTML and CSS. Recreates the signature dark UI — hero banner, trending carousel, feature highlights, and an FAQ accordion.

## Features

- **Hero section** — full-width banner with sign-in nav, logo, and an email signup prompt ("Unlimited movies, TV shows, and more")
- **Trending Now slider** — numbered movie cards (1–10) in a horizontally scrollable row
- **"More reasons to join" section** — four feature cards covering multi-device streaming, offline downloads, cross-device viewing, and kids' profiles
- **FAQ accordion** — expandable question cards with animated toggle
- **Responsive layout** — adapts across breakpoints using CSS media queries
- **Custom branding** — original "T" logo (red gradient SVG)

## Tech Stack

- HTML5
- CSS3 (Flexbox, absolute positioning, media queries, transitions)
- Vanilla JavaScript (FAQ accordion toggle)

## Project Structure

```
Netflix-clone/
├── assets/          # Logo, movie thumbnails, feature icons
├── index.html       # Page markup
└── style.css         # Styling
```

## Getting Started

No build step required — it's a static site.

1. Clone the repo
   ```bash
   git clone https://github.com/tahseencode/Netflix-clone.git
   ```
2. Open `index.html` in your browser

Or serve it locally:
```bash
cd Netflix-clone
npx serve .
```

## Roadmap

- [ ] Wire up the trending slider to a movies API (e.g., TMDB)
- [ ] Add more FAQ entries
- [ ] Sign-in/sign-up flow

## Author

Built by [Tahseen](https://github.com/tahseencode)
