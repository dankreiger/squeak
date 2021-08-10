#!/usr/bin/env bash
echo "┏━━━ 🟡 Exiting restaurants-service docker containers ━━━━━━━━━━━━━━━━━━━"
yarn nx run backend-restaurants-service:db-down
