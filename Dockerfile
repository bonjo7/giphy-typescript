FROM node:13.12.0-alpine

LABEL maintainer="Bernard Thompson bernardthompson83@gmail.com"

WORKDIR /usr/src/app
ADD package.json ./ 
RUN npm install
COPY . ./
RUN npm run build 
EXPOSE 8080

CMD ["npm", "start"]