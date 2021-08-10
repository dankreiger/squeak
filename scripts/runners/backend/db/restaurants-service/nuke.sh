
#!/usr/bin/env bash
echo "┏━━━ 💣 Destroying all restaurants (test only action) ━━━━━━━━"

curl -X POST 'http://localhost:3333/api/restaurants/nuke' \
--header 'Content-Type: application/json'
