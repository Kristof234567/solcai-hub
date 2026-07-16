#!/usr/bin/env bash
# Mirror Lovable-hosted assets (/__l5e/...) into public/ so Cloudflare serves
# them statically instead of 404ing. Runs at build time on Cloudflare Pages.
set -euo pipefail
BASE="${ASSET_BASE_URL:-https://solcai.lovable.app}"
count=0
for f in src/assets/*.asset.json; do
  url="$(node -p "require('./$f').url")"
  dest="public${url}"
  mkdir -p "$(dirname "$dest")"
  curl -fsSL --retry 4 --retry-delay 2 -o "$dest" "${BASE}${url}"
  count=$((count+1))
  echo "  mirrored ${url}"
done
echo "Mirrored ${count} assets from ${BASE}"
