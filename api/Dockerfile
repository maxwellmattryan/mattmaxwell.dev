FROM node:12.18-alpine AS dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=dev

COPY . .

RUN npm install -g rimraf
RUN npm install glob
RUN npm run build

FROM node:12.18-alpine AS prod

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

COPY --from=dev /usr/src/app/dist ./dist

CMD ["npm", "run", "start:prod"]