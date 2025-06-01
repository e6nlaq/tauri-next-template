# Tauri + Next.js + TypeScript + shadcn/ui Template

A modern desktop application template built with Tauri, Next.js, TypeScript, and shadcn/ui. This template provides a solid foundation for building cross-platform desktop applications with a modern web development stack.

## Features

- 🌐 Next.js 14 with App Router
- 🛠️ TypeScript for type safety
- 🎨 shadcn/ui for beautiful components
- 📦 Tauri for cross-platform desktop capabilities
- 🚀 Hot reloading for both frontend and backend
- 🔐 Strict TypeScript configuration
- 📝 ESLint and Biome for code quality
- 📦 Bun as package manager (optional)

## Prerequisites

- Node.js (v18 or higher)
- Rust (required for Tauri)
- Bun (recommended) or npm/yarn

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/e6nlaq/tauri-next-template.git
```

2. Install dependencies:

```bash
bun install # or npm install
```

3. Build the Tauri application:

```bash
bun run tauri dev # or npm run tauri dev
```

## Project Structure

```
tauri-next-template/
├── src/                 # Next.js application source
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   └── styles/         # Global styles
├── src-tauri/          # Tauri application source
│   ├── src/            # Rust source code
│   └── tauri.conf.json # Tauri configuration
└── public/             # Static assets
```

## Development

- Frontend: `bun dev` or `npm run dev`
- Backend: `bun run tauri dev` or `npm run tauri dev`

## Building for Production

```bash
bun run build # or npm run build
bun run tauri build # or npm run tauri build
```
