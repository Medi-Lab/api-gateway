FROM node:alpine As development

WORKDIR /usr/share/api-gateway

COPY . .

RUN npm install

RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/share/api-gateway

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/share/api-gateway/dist ./dist

CMD ["node", "dist/main"]


