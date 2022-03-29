FROM nginx

COPY ./nginx.conf /root/src/nginx.conf
COPY ./dist /root/src/dist
WORKDIR /root/src/
CMD ["nginx", "-c", "/root/src/nginx.conf", "-g", "daemon off;"]
# EXPOSE 30229
EXPOSE 8050
