FROM node:alpine as build
WORKDIR /app

RUN yarn global add gatsby-cli && gatsby telemetry --disable
COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn", "run", "build"]


FROM nginx 
COPY --from=build /app/public /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80