#!/usr/bin/env bash
echo "┏━━━ 🟢 Starting restaurants-service docker containers ━━━━━━━━━━━━━━━━━━━"
yarn nx run backend-restaurants-service:db-up
