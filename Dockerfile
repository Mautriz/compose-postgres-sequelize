FROM node:12-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn && yarn add global nodemon && yarn cache clean

COPY . .

CMD ["yarn", "start"]