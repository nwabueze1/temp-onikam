FROM node:18.16.0-alpine as spa

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD yarn dev