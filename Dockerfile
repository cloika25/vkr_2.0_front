# build environment
FROM node:14-alpine as build
ENV PATH /app/node_modules/.bin:$PATH
RUN npm i -g npm
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm i 
COPY . .

RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx-default.conf.template /etc/nginx/conf.d/default.conf.template
COPY docker-entrypoint.sh /
RUN ["chmod", "+x", "/docker-entrypoint.sh"]
ENTRYPOINT ["/docker-entrypoint.sh"]
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
