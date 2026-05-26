#!/usr/bin/env bash
# Deploy ai-keyra to Railway (Keyra-Projects, shared Postgres, GitHub repo).
# Prerequisite: railway login  &&  git push origin main
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

PROJECT_ID="161cc1ec-95ff-49d6-a0be-75c3769be820"
ENV_ID="fbd61323-77ec-4c1b-ba20-6a5c505496f7"
SERVICE_NAME="ai-keyra"
GITHUB_REPO="Ciright-Inc/ai-keyra"

echo "→ Checking Railway auth…"
railway whoami

echo "→ Linking ${SERVICE_NAME} in Keyra-Projects (production)…"
if ! railway link --project "$PROJECT_ID" --environment "$ENV_ID" --service "$SERVICE_NAME" 2>/dev/null; then
  echo "→ Service not found; creating ${SERVICE_NAME}…"
  railway link --project "$PROJECT_ID" --environment "$ENV_ID"
  railway add --service "$SERVICE_NAME"
  railway service "$SERVICE_NAME"
fi

railway status

echo "→ Connect GitHub repo (skip if already connected in Railway UI)…"
railway add --repo "$GITHUB_REPO" --service "$SERVICE_NAME" 2>/dev/null || true

echo "→ Setting variables (shared Keyra Postgres — do NOT add a new Postgres plugin)…"
railway variable set 'DATABASE_URL=${{ Postgres.DATABASE_URL }}'
railway variable set 'NODE_ENV=production'
railway variable set 'NEXT_PUBLIC_SITE_URL=https://ai.keyra.ie'
railway variable set 'NEXT_PUBLIC_KEYRA_MARKETING_ORIGIN=https://keyra.ie'
railway variable set 'NEXT_PUBLIC_KEYRA_SITE_URL=https://keyra.ie'
railway variable set 'NEXT_PUBLIC_KEYRA_FOOTER_SITE_APP_ID=ai-aoti'
railway variable set 'NEXT_PUBLIC_GET_STARTED_URL=https://get-started.keyra.ie'
railway variable set 'NEXT_PUBLIC_SIMSECURE_URL=https://app.keyra.ie'
railway variable set 'NEXT_PUBLIC_DEVELOPER_URL=https://developer.keyra.ie'
railway variable set 'NEXT_PUBLIC_MY_ACCOUNT_URL=https://myaccount.keyra.ie'
railway variable set 'NEXT_PUBLIC_SETTINGS_URL=https://setting.keyra.ie'
railway variable set 'NEXT_PUBLIC_AFFILIATES_URL=https://affiliate.keyra.ie'
railway variable set 'NEXT_PUBLIC_PRESS_URL=https://press.keyra.ie'
railway variable set 'NEXT_PUBLIC_GOVERNMENTS_URL=https://governments.keyra.ie'
railway variable set 'NEXT_PUBLIC_PARTNERS_URL=https://partners.keyra.ie'

echo "→ Deploying from ${ROOT}…"
railway up --ci -m "Deploy ai-keyra (ai.keyra.ie)"

echo "→ Done. Add custom domain:"
echo "  railway domain ai.keyra.ie"
echo "→ Logs:"
railway logs --tail 40
