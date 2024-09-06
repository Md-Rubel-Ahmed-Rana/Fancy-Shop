FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 6005

CMD ["npm", "start"]