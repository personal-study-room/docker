FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY index.js ./

ENTRYPOINT ["node", "index.js"]