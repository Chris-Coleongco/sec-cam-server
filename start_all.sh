#!/bin/bash

/usr/local/nginx/sbin/nginx

ffmpeg -f v4l2 -i /dev/video0 -c:v libx264 -preset fast -f flv rtmp://localhost/live/livestream

cd /home/soy/ntsh/sec-cam/tests/auth
