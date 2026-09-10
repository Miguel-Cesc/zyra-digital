#!/usr/bin/env bash
# Turn a source clip into a demo tile the site can load quickly.
#
#   scripts/encode-demo.sh <input> <name> [poster-seconds]
#
# Writes public/demos/<name>.mp4 and public/demos/<name>.webp (the poster).
# Output is 4:5 to match the tiles at 544x680 (H.264 needs even dimensions),
# 6 seconds, no audio, with faststart so it begins playing before it has
# finished downloading. Bitrate is capped at 700k so busy footage like spray
# or smoke cannot balloon: a tile lands between roughly 70 and 550 KB.
# Set `src` and `poster` in DEMOS to switch it on.
set -euo pipefail

in="${1:?usage: encode-demo.sh <input> <name>}"
name="${2:?usage: encode-demo.sh <input> <name>}"
poster_at="${3:-1}"   # later for clips that open dark, e.g. a bulb switching on
out="$(dirname "$0")/../public/demos"
mkdir -p "$out"

# Centre-crop to 4:5 whatever the source shape, then scale to tile size.
vf="crop='min(iw,ih*4/5)':'min(ih,iw*5/4)',scale=544:680:flags=lanczos,fps=24"

ffmpeg -y -loglevel error -i "$in" -t 6 -an -vf "$vf" \
  -c:v libx264 -preset slow -crf 28 -maxrate 700k -bufsize 1400k -pix_fmt yuv420p -movflags +faststart \
  "$out/$name.mp4"

# Poster from a moment in, so the tile is never blank while the video loads.
ffmpeg -y -loglevel error -ss "$poster_at" -i "$out/$name.mp4" -frames:v 1 "$out/$name.png"
cwebp -quiet -q 72 "$out/$name.png" -o "$out/$name.webp"
rm "$out/$name.png"

ls -lh "$out/$name.mp4" "$out/$name.webp" | awk '{print $5, $9}'
