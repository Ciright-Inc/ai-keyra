# ai.keyra.ie — Keyra AOTI Platform

Autonomous Operational Trust Infrastructure (AOTI) — the official strategic, architectural, operational trust, and governance domain for Keyra.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3050](http://localhost:3050).

## Build

```bash
npm run build
npm start
```

## Railway (Keyra-Projects)

Shared Postgres (`${{ Postgres.DATABASE_URL }}`), GitHub: [Ciright-Inc/ai-keyra](https://github.com/Ciright-Inc/ai-keyra).

```bash
railway login
chmod +x scripts/railway-deploy.sh
./scripts/railway-deploy.sh
```

Custom domain: `ai.keyra.ie` (`railway domain ai.keyra.ie` after deploy).
