#!/bin/bash
sed -i "s|BACKEND_SERVER|$backend_server|" /root/src/nginx.conf
nginx -c /root/src/nginx.conf -g "daemon off;"