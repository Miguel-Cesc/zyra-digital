#!/usr/bin/env bash
# Turn a source clip into a demo tile the site can load quickly.
#
#   scripts/encode-demo.sh <input> <name>
#
# Writes public/demos/<name>.mp4 and public/demos/<name>.webp (the poster).
# Output is 4:5 to match the tiles, 544x680 (4:5, both even as H.264 requires), 6 seconds, no audio, H.264 with
# faststart so it begins playing before it has finished downloading. A tile
# lands around 300 to 700 KB. Set `src` and `poster` in DEMOS to switch it on.
set -euo pipefail

in="${1:?usage: encode-demo.sh <input> <name>}"
name="${2:?usage: encode-demo.sh <input> <name>}"
out="$(dirname "$0")/../public/demos"
mkdir -p "$out"

# Centre-crop to 4:5 whatever the source shape, then scale to tile size.
vf="crop='min(iw,ih*4/5)':'min(ih,iw*5/4)',scale=544:680:flags=lanczos,fps=24"

ffmpeg -y -loglevel error -i "$in" -t 6 -an -vf "$vf" \
  -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -movflags +faststart \
  "$out/$name.mp4"

# Poster from one second in, so the tile is never blank while the video loads.
ffmpeg -y -loglevel error -ss 1 -i "$out/$name.mp4" -frames:v 1 "$out/$name.png"
cwebp -quiet -q 72 "$out/$name.png" -o "$out/$name.webp"
rm "$out/$name.png"

ls -lh "$out/$name.mp4" "$out/$name.webp" | awk '{print $5, $9}'
