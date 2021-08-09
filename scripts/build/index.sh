#!/usr/bin/env bash
echo "┏━━━ 📦 Building with cache ━━━━━━━━━━━━━━━━━━━"
nx run-many --target=build --all --parallel
