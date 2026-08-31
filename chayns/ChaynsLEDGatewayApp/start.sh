#!/bin/sh
set -e

IMAGE_NAME="chayns-led-gateway"
CONTAINER_NAME="chayns-led-gateway"

cd "$(dirname "$0")"

docker build -t "$IMAGE_NAME" .

docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true

docker run -d \
  --name "$CONTAINER_NAME" \
  -p 2000:2000 -p 2443:2443 \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  --restart unless-stopped \
  "$IMAGE_NAME"
