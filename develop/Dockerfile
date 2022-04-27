FROM nginx
COPY ./nginx.conf /root/src/nginx.conf
COPY ./dist /root/src/dist
WORKDIR /root/src/
COPY run.sh /root/src/
# 运行脚本替换nginx api地址
CMD ["/bin/bash", "run.sh"]
EXPOSE 80
