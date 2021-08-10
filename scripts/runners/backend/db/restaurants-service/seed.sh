#!/usr/bin/env bash
echo "┏━━━ Seed DB ━━━━━━━━━━━━━━━━━━━"
URL=http://localhost:3333/api/restaurants/seed

curl --location     \
--request POST $URL \
--header 'Content-Type: application/json'
