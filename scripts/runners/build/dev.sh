#!/usr/bin/env bash
echo "┏━━━ 📦 Building Dev ━━━━━━━━━━━━━━━━━━━"
rimraf dist && nx run-many --target=build --all --parallel
