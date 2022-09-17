FROM node:14.17-alpine

WORKDIR /usr/app

COPY package.json ./

RUN yarn install

RUN yarn prisma generate

COPY  . .

EXPOSE 3000

CMD ["yarn", "start:dev"]