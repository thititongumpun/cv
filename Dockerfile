FROM node AS builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM nginx
EXPOSE 80
COPY default.conf /etc/nginx/conf.d
COPY --from=builder /app/public /usr/share/nginx/html