#!/usr/bin/env bash
echo "┏━━━ 📦 Building Production ━━━━━━━━━━━━━━━━━━━"
rimraf dist && nx run-many --target=build --all --parallel --prod
