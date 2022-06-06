FROM node:16-alpine AS development

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

RUN ls ./node_modules/@nestjs

COPY . .

RUN rm .env

RUN npm run build

CMD ["node", "dist/main"]