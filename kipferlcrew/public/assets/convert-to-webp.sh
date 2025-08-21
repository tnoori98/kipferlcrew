#!/bin/bash
QUALITY=90

for pic in ./*.png; do

   [ -e "$pic" ] || continue # -e checks if file exists

   OUTPUT="${pic%.png}.webp"
   echo "$pic created as .webp"

   if [ -f "$OUTPUT" ]; then # -f to prevent from writing in a directory
       echo "$OUTPUT is already a WebP"
       continue
   fi

   cwebp "$pic" -q $QUALITY -o "$OUTPUT"
   echo "$pic converted to $OUTPUT"
done

echo "Success"
