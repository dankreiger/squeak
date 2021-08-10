#!/usr/bin/env bash
echo "┏━━━ 🎯 E2E Testing ━━━━━━━━━━━━━━━━━━━"
nx run-many --target=e2e --all --parallel

